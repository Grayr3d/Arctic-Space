import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Play } from 'lucide-react';
import { products } from '../data/products';
import { Newsletter } from '../components/Newsletter';
import { HouseSpecsModal } from '../components/HouseSpecsModal';

export function Product() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('pictures');
  const [activeImage, setActiveImage] = useState(0);
  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[85vh] mt-8 mx-8">
        <div className="h-full rounded-2xl overflow-hidden">
          <img
            src={product.images[activeImage]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Image Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3">
          {product.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeImage === index 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Media Controls */}
        <div className="absolute bottom-8 right-8 flex space-x-3">
          <button
            onClick={() => setActiveTab('pictures')}
            className={`px-6 py-3 text-sm font-medium rounded transition-all ${
              activeTab === 'pictures'
                ? 'bg-white text-black'
                : 'bg-black/30 text-white backdrop-blur-sm hover:bg-black/40'
            }`}
          >
            Pictures
          </button>
          <button
            onClick={() => setActiveTab('floorplan')}
            className={`px-6 py-3 text-sm font-medium rounded transition-all ${
              activeTab === 'floorplan'
                ? 'bg-white text-black'
                : 'bg-black/30 text-white backdrop-blur-sm hover:bg-black/40'
            }`}
          >
            Floorplan
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`px-6 py-3 text-sm font-medium rounded transition-all flex items-center space-x-2 ${
              activeTab === 'video'
                ? 'bg-white text-black'
                : 'bg-black/30 text-white backdrop-blur-sm hover:bg-black/40'
            }`}
          >
            <Play className="w-4 h-4" />
            <span>Video</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="py-16 border-b">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-5xl font-medium mb-4">{product.name}</h1>
              <p className="text-xl text-gray-600">
                Starting from <span className="text-black font-medium">{product.startingPrice.toLocaleString()} €</span>
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="px-12 py-4 bg-black text-white rounded hover:bg-gray-900 transition-colors">
                Buy Now
              </button>
              <Link
                to={`/configure/${product.id}`}
                className="px-12 py-4 border border-black rounded hover:bg-gray-50 transition-colors"
              >
                Build Your Own
              </Link>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="py-16 border-b">
          <button 
            onClick={() => setShowSpecsModal(true)}
            className="group flex items-center space-x-3 text-xl font-medium mb-12"
          >
            <span>House Specifications</span>
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="grid grid-cols-4 gap-x-8 gap-y-16">
            {[
              { label: 'Size', value: `${product.size}m²` },
              { label: 'Bedrooms', value: '2' },
              { label: 'Bathrooms', value: '1' },
              { label: 'Assembly Time', value: '6-8 weeks' },
            ].map((spec) => (
              <div key={spec.label}>
                <div className="text-sm text-gray-500 mb-2">{spec.label}</div>
                <div className="text-xl font-medium">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="py-16 mb-24">
          <h2 className="text-xl font-medium mb-12">Production Timeline</h2>
          <div className="grid grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: '10% Reservation',
                description: 'Receiving architecture drawings for building permit',
              },
              {
                step: '02',
                title: '40% Payment',
                description: 'Signing contract & start production',
              },
              {
                step: '03',
                title: '40% Payment',
                description: 'Confirming shipping ordering transport',
              },
              {
                step: '04',
                title: '10% Final payment',
                description: 'Releasing shipment',
              },
            ].map((item) => (
              <div key={item.step} className="group cursor-default">
                <div className="text-3xl font-medium mb-4 text-gray-400 group-hover:text-black transition-colors">
                  {item.step}
                </div>
                <div className="text-lg font-medium mb-2">{item.title}</div>
                <div className="text-gray-500">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* House Specifications Modal */}
      <HouseSpecsModal 
        isOpen={showSpecsModal} 
        onClose={() => setShowSpecsModal(false)} 
      />

      <Newsletter />
    </div>
  );
}