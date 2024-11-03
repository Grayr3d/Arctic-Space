import React, { useState } from 'react';
import { X, Download, Mail, Check } from 'lucide-react';

interface HouseSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HouseSpecsModal({ isOpen, onClose }: HouseSpecsModalProps) {
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // In a real app, this would generate and download a PDF
    console.log('Downloading specifications...');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the email
    console.log('Sending specifications to:', email);
    setEmailSent(true);
    setTimeout(() => {
      setEmailSent(false);
      setShowEmailInput(false);
      setEmail('');
    }, 2000);
  };

  const specs = [
    {
      title: "Size",
      items: [
        { label: "Total Area", value: "20m²" },
        { label: "Bedroom", value: "9.1m²" },
        { label: "Living Room", value: "15.1m²" },
        { label: "Bathroom", value: "3.5m²" },
        { label: "Entrance", value: "3.4m²" },
        { label: "Storage", value: "7.8m²" },
      ]
    },
    {
      title: "Technical Details",
      items: [
        { label: "Height", value: "3.2m" },
        { label: "Wall Thickness", value: "250mm" },
        { label: "Foundation Type", value: "Point Foundation" },
        { label: "Roof Type", value: "Flat Roof" },
        { label: "Roof Load", value: "2.0 kN/m²" },
      ]
    },
    {
      title: "Materials",
      items: [
        { label: "Frame", value: "CLT Wood" },
        { label: "Insulation", value: "Mineral Wool" },
        { label: "Windows", value: "Triple Glazed" },
        { label: "Exterior Finish", value: "Wood Cladding" },
        { label: "Interior Walls", value: "Gypsum Board" },
      ]
    },
    {
      title: "Energy & Systems",
      items: [
        { label: "Energy Class", value: "A+" },
        { label: "Heating System", value: "Heat Pump" },
        { label: "Ventilation", value: "MVHR System" },
        { label: "U-Value Walls", value: "0.13 W/m²K" },
        { label: "U-Value Windows", value: "0.8 W/m²K" },
      ]
    },
    {
      title: "Assembly",
      items: [
        { label: "Production Time", value: "6-8 weeks" },
        { label: "Installation Time", value: "2-3 days" },
        { label: "Transport Type", value: "Standard Truck" },
        { label: "Crane Required", value: "Yes" },
        { label: "Site Preparation", value: "1 week" },
      ]
    },
    {
      title: "Warranty",
      items: [
        { label: "Structure", value: "10 years" },
        { label: "Windows & Doors", value: "5 years" },
        { label: "Appliances", value: "2 years" },
        { label: "Workmanship", value: "5 years" },
        { label: "Weather Resistance", value: "10 years" },
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-5xl rounded-lg max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-medium">House Specifications</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="grid grid-cols-2 gap-8">
            {specs.map((section, index) => (
              <div key={index} className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">{section.title}</h3>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between text-sm">
                        <span className="text-gray-600">{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-gray-50 rounded-b-lg space-y-4 sticky bottom-0">
          <div className="flex space-x-4">
            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center space-x-2 bg-black text-white py-3 rounded hover:bg-gray-900 transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Download Specifications</span>
            </button>
            <button
              onClick={() => setShowEmailInput(true)}
              className="flex-1 flex items-center justify-center space-x-2 border border-black py-3 rounded hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Receive via Email</span>
            </button>
          </div>

          {showEmailInput && (
            <form onSubmit={handleEmailSubmit} className="flex space-x-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <button
                type="submit"
                disabled={emailSent}
                className="px-8 py-3 bg-black text-white rounded hover:bg-gray-900 transition-colors disabled:bg-green-600"
              >
                {emailSent ? (
                  <span className="flex items-center space-x-2">
                    <Check className="w-5 h-5" />
                    <span>Sent!</span>
                  </span>
                ) : (
                  'Send'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}