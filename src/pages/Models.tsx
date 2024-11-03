import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Newsletter } from '../components/Newsletter';
import { Grid2X2, Grid, Search, SlidersHorizontal, X, ArrowRight } from 'lucide-react';
import { products } from '../data/products';

export function Models() {
  const [isGrid, setIsGrid] = useState(false);
  const [activeSize, setActiveSize] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);

  const sizes = useMemo(() => 
    Array.from(new Set(products.map(p => p.size))).sort((a, b) => a - b),
    []
  );

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSize = !activeSize || product.size === activeSize;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = product.startingPrice >= priceRange[0] && product.startingPrice <= priceRange[1];
      return matchesSize && matchesSearch && matchesPrice;
    });
  }, [activeSize, searchQuery, priceRange]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[85vh] mt-8 mx-8 rounded-2xl overflow-hidden mb-24">
        <img 
          src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&q=80&w=2670"
          alt="Models Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/30 flex items-center">
          <div className="max-w-[1440px] mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-bold text-white mb-6">Our Models</h1>
              <p className="text-xl text-white/90">
                Discover our collection of thoughtfully designed prefabricated homes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-200 rounded-lg hover:border-gray-900 transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
            </button>
            <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setIsGrid(false)}
                className={`p-2 rounded-lg ${!isGrid ? 'bg-gray-900 text-white' : 'text-gray-500'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsGrid(true)}
                className={`p-2 rounded-lg ${isGrid ? 'bg-gray-900 text-white' : 'text-gray-500'}`}
              >
                <Grid2X2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-6 p-6 bg-gray-50 rounded-2xl space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-4">Size</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveSize(null)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeSize === null 
                        ? 'bg-gray-900 text-white' 
                        : 'bg-white border border-gray-200 hover:border-gray-900'
                    }`}
                  >
                    All
                  </button>
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setActiveSize(size)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        size === activeSize 
                          ? 'bg-gray-900 text-white' 
                          : 'bg-white border border-gray-200 hover:border-gray-900'
                      }`}
                    >
                      {size}m²
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-4">Price Range</h3>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    step="10000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="flex-1"
                  />
                  <span className="text-sm">to</span>
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    step="10000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1"
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>{priceRange[0].toLocaleString()}€</span>
                  <span>{priceRange[1].toLocaleString()}€</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className={`grid ${isGrid ? 'grid-cols-2' : 'grid-cols-1'} gap-16 mb-24`}>
          {filteredProducts.map((product) => (
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <h3 className="text-xl font-medium mb-2">No models found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query</p>
          </div>
        )}

        {/* Features Section */}
        <div className="py-24 mb-24">
          <div className="grid grid-cols-3 gap-12">
            {[
              {
                title: 'Sustainable Materials',
                description: 'Built with eco-friendly and durable materials for a better future',
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
                to={feature.link}
                className="p-8 bg-gray-50 rounded-2xl space-y-4 group transition-all hover:bg-gray-100"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">{feature.title}</h3>
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
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