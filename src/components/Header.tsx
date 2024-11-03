import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { products } from '../data/products';

export function Header() {
  const [isModelsOpen, setIsModelsOpen] = useState(false);

  return (
    <header className="py-6 px-6 bg-gray-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-wider">
          ARCTICSPACE
        </Link>
        <div className="flex items-center space-x-12">
          <nav className="flex items-center space-x-8">
            <Link to="/quality" className="text-[18px] hover:text-gray-600 transition-colors">Quality</Link>
            <Link to="/process" className="text-[18px] hover:text-gray-600 transition-colors">Process</Link>
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-[18px] hover:text-gray-600 transition-colors"
                onClick={() => setIsModelsOpen(!isModelsOpen)}
                onMouseEnter={() => setIsModelsOpen(true)}
              >
                <span>Models</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isModelsOpen && (
                <div 
                  className="absolute top-full left-1/2 mt-2 w-[960px] -translate-x-1/2 bg-white shadow-xl border border-gray-100 overflow-hidden z-50 rounded-xl"
                  onMouseLeave={() => setIsModelsOpen(false)}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-4 gap-6">
                      {products.map((product) => (
                        <Link
                          key={product.id}
                          to={`/products/${product.id}`}
                          className="block group"
                          onClick={() => setIsModelsOpen(false)}
                        >
                          <div className="aspect-[4/3] rounded-lg overflow-hidden mb-3 relative">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-base font-medium group-hover:text-gray-900 transition-colors">
                                {product.name}
                              </h3>
                              <span className="text-sm text-gray-500">{product.size}m²</span>
                            </div>
                            <div className="text-sm text-gray-600">
                              From {product.startingPrice.toLocaleString()}€
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <Link 
                        to="/models" 
                        className="block w-full py-3 text-center text-sm font-medium bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setIsModelsOpen(false)}
                      >
                        View All Models
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link to="/about" className="text-[18px] hover:text-gray-600 transition-colors">About</Link>
            <Link 
              to="/assistant"
              className="px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Ask Anything
            </Link>
          </nav>
          <div>
            <select className="text-base bg-transparent border-none focus:ring-0">
              <option>EN</option>
              <option>DE</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}