import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="max-w-md">
          <h3 className="text-2xl font-medium mb-6">
            Get latest offers
          </h3>
          <div className="flex h-12">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 h-full bg-white/10 border-0 text-white placeholder-gray-400 rounded-l-lg focus:ring-2 focus:ring-white px-4"
            />
            <button className="h-full bg-white text-gray-900 px-6 rounded-r-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}