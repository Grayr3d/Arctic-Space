import React, { useState } from 'react';
import { Mail, Phone, User } from 'lucide-react';

interface GetOfferFormProps {
  totalPrice: number;
}

export function GetOfferForm({ totalPrice }: GetOfferFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-8">
      <div className="bg-gray-50 p-8 rounded-lg">
        <h3 className="text-xl font-medium mb-6">Get Your Personalized Offer</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Any additional information or questions..."
            />
          </div>
        </form>
      </div>

      <div className="fixed bottom-0 right-0 w-1/3 bg-white">
        <div className="px-20 py-8">
          <button
            onClick={() => handleSubmit}
            className="w-full h-16 flex items-center justify-between px-8 bg-black text-white hover:bg-gray-900 transition-colors rounded shadow-lg"
          >
            <span className="text-base font-medium">Get offer</span>
            <span className="text-base font-medium">{totalPrice.toLocaleString()} €</span>
          </button>
        </div>
      </div>
    </div>
  );
}