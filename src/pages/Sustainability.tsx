import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Newsletter } from '../components/Newsletter';

export function Sustainability() {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      title: 'EMF Protection',
      description: 'Your wellbeing is our priority. We incorporate specialized EMF shielding in bedroom walls using mineral-based paints and protective membranes, ensuring a natural and healthy sleep environment.',
    },
    {
      title: 'Eco-Friendly',
      description: 'Our homes feature natural, sustainable materials including wood fiber insulation, low-VOC paints, and recycled components, creating a healthy living environment while minimizing environmental impact.',
    },
    {
      title: 'Precision Engineering',
      description: 'Every component is manufactured with precision in our state-of-the-art facility, ensuring perfect fit and superior quality control throughout the production process.',
    },
  ];

  const stats = [
    { value: '10+', label: 'Years warranty on structural elements' },
    { value: '100%', label: 'Quality control throughout production' },
    { value: '99%', label: 'Customer satisfaction rate' },
    { value: '1000+', label: 'Houses delivered' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[85vh] mt-8 mx-8 rounded-2xl overflow-hidden">
        <div className="h-full relative group">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2187"
            alt="House walkthrough"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="max-w-[1440px] mx-auto px-6 w-full">
              <div className="max-w-2xl">
                <h1 className="text-6xl font-bold text-white mb-6">
                  House Walkthrough
                </h1>
                <p className="text-xl text-white/90">
                  Take a virtual tour of our finished houses and experience the quality firsthand
                </p>
              </div>
            </div>
          </div>
          
          {!isPlaying && (
            <button 
              onClick={() => setIsPlaying(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-xl"
            >
              <Play className="w-10 h-10 ml-1" />
            </button>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-4xl font-medium mb-16">Quality Features</h2>
          <div className="grid grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-2xl space-y-4">
                <h3 className="text-xl font-medium">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl">
                <div className="text-5xl font-bold mb-4 text-black">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Smart Design Section */}
      <div id="smart-design" className="py-24 scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 gap-24 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2190"
                alt="Smart Design"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-medium mb-8">Smart Design</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Our homes feature optimized living spaces with modern amenities and efficient layouts. 
                  Each design is carefully crafted to maximize comfort while minimizing wasted space.
                </p>
                <p>
                  From thoughtfully placed windows that maximize natural light to ergonomic kitchen layouts 
                  that enhance functionality, every aspect of our homes is designed with purpose.
                </p>
              </div>
              <div className="mt-12">
                <a href="/" className="inline-flex items-center text-lg font-medium hover:text-gray-600 transition-colors group">
                  Explore our smart home features
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}