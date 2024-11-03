import React, { useState } from 'react';
import { Mail, Phone, User, X, Check } from 'lucide-react';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalPrice: number;
}

interface Month {
  value: string;
  label: string;
}

export function OfferModal({ isOpen, onClose, totalPrice }: OfferModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    reserveSlot: false,
    preferredMonth: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({
      ...prev,
      [name]: val
    }));
  };

  // Get next 3 months for production slot selection
  const getNextMonths = (): Month[] => {
    const months = [];
    const currentDate = new Date();
    
    for (let i = 0; i < 3; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + i + 1, 1);
      months.push({
        value: date.toISOString().slice(0, 7),
        label: date.toLocaleString('default', { month: 'long', year: 'numeric' }),
      });
    }
    return months;
  };

  const months = getNextMonths();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-2xl rounded-lg">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-medium">Get Your Personalized Offer</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
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

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="reserveSlot"
                  name="reserveSlot"
                  checked={formData.reserveSlot}
                  onChange={handleChange}
                  className="w-4 h-4 text-black rounded border-gray-300 focus:ring-black"
                />
                <label htmlFor="reserveSlot" className="text-sm font-medium text-gray-700">
                  Reserve Production Slot (10% deposit required)
                </label>
              </div>

              {formData.reserveSlot && (
                <div className="pl-7 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Select Preferred Production Month
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {months.map(month => (
                        <button
                          key={month.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, preferredMonth: month.value }))}
                          className={`
                            relative p-4 text-left rounded-lg border-2 transition-all
                            ${month.value === formData.preferredMonth 
                              ? 'border-black bg-black/5' 
                              : 'border-gray-200 hover:border-gray-300'
                            }
                          `}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-sm font-medium ${
                              month.value === formData.preferredMonth ? 'text-black' : 'text-gray-900'
                            }`}>
                              {new Date(month.value).toLocaleString('default', { month: 'long' })}
                            </span>
                            {month.value === formData.preferredMonth && (
                              <Check className="w-4 h-4 text-black" />
                            )}
                          </div>
                          <div className={`text-xs ${
                            month.value === formData.preferredMonth ? 'text-black' : 'text-gray-500'
                          }`}>
                            {new Date(month.value).getFullYear()}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Secure your production slot with a 10% deposit ({(totalPrice * 0.1).toLocaleString()}€)
                  </p>
                </div>
              )}
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

        <div className="p-6 bg-gray-50 border-t rounded-b-lg">
          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-between px-8 py-4 bg-black text-white hover:bg-gray-900 transition-colors rounded"
          >
            <span className="text-base font-medium">
              {formData.reserveSlot ? 'Reserve Slot & Get Offer' : 'Get Offer'}
            </span>
            <span className="text-base font-medium">
              {formData.reserveSlot 
                ? `${(totalPrice * 0.1).toLocaleString()}€ deposit` 
                : `${totalPrice.toLocaleString()}€`}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}