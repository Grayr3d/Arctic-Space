import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Newsletter } from '../components/Newsletter';
import { Grid2X2, Grid, ArrowRight } from 'lucide-react';

export function Home() {
  const [activeSize, setActiveSize] = useState(20);
  const [isGrid, setIsGrid] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[85vh] mt-8 mx-8 rounded-2xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2670"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/30 flex items-center">
          <div className="max-w-[1440px] mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-bold text-white mb-6">Modern Living Spaces</h1>
              <p className="text-xl text-white/90">
                Discover our collection of premium prefabricated homes designed for contemporary lifestyles
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6">
        {/* Filters */}
        <div className="flex items-center justify-end space-x-4 mb-16 mt-24">
          <div className="flex bg-gray-100 rounded-full p-1">
            {[20, 40, 60, 80, 120].map((size) => (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  size === activeSize 
                    ? 'bg-gray-900 text-white shadow-lg' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {size}m²
              </button>
            ))}
          </div>
          <div className="flex space-x-2 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setIsGrid(false)}
              className={`p-2 rounded-full ${!isGrid ? 'bg-gray-900 text-white' : 'text-gray-500'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsGrid(true)}
              className={`p-2 rounded-full ${isGrid ? 'bg-gray-900 text-white' : 'text-gray-500'}`}
            >
              <Grid2X2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid ${isGrid ? 'grid-cols-2' : 'grid-cols-1'} gap-16 mb-24`}>
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-6 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                  <span className="text-lg font-medium">
                    {product.startingPrice.toLocaleString()} €
                  </span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium">
                    View Details
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="py-24 mb-24">
          <div className="grid grid-cols-3 gap-12">
            {[
              {
                title: 'Premium Materials',
                description: 'Built with eco-friendly and durable materials for a better future and EMF protection for bedrooms',
                link: '/quality'
              },
              {
                title: 'Quick Assembly',
                description: 'Professional installation in just 6-8 weeks from order to completion',
                link: '/process'
              },
              {
                title: 'Smart Design',
                description: 'Optimized living spaces with modern amenities and efficient layouts',
                link: '/quality#smart-design'
              }
            ].map((feature, index) => (
              <Link
                key={index}
                to={feature.link || '#'}
                className={`p-8 bg-gray-50 rounded-2xl space-y-4 group transition-all hover:bg-gray-100 ${feature.link ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">{feature.title}</h3>
                  {feature.link && (
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  )}
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}