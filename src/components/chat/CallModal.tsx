import React from 'react';
import { X, Phone, PhoneCall } from 'lucide-react';

interface CallModalProps {
  onClose: () => void;
}

export function CallModal({ onClose }: CallModalProps) {
  const phoneNumber = "+1 (888) 123-4567";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Contact Sales Team</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-center p-8 bg-gray-50 rounded-xl">
            <div className="text-center">
              <PhoneCall className="w-8 h-8 mx-auto mb-3 text-gray-400" />
              <p className="text-2xl font-semibold mb-1">{phoneNumber}</p>
              <p className="text-gray-500">Available 24/7</p>
            </div>
          </div>
          <p className="text-gray-600 text-center">
            Our sales team is ready to help you design your perfect home.
          </p>
          <button 
            onClick={handleCall}
            className="w-full flex items-center justify-center space-x-2 bg-black text-white py-4 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}