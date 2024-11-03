import React, { useState } from 'react';
import { kitchenOptions, floorOptions } from '../../data/config';
import { InteriorOption } from '../../types';
import { AdminTable } from './AdminTable';
import { InteriorForm } from './InteriorForm';
import { images } from '../../config/images';

export function InteriorEditor() {
  const [options, setOptions] = useState({
    kitchen: kitchenOptions.map(option => ({
      ...option,
      image: images.interior[option.id] || images.interior.default
    })),
    floor: floorOptions.map(option => ({
      ...option,
      image: images.interior[option.id] || images.interior.default
    }))
  });
  const [editingOption, setEditingOption] = useState<{ type: 'kitchen' | 'floor'; option: InteriorOption | null }>({
    type: 'kitchen',
    option: null,
  });

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'price', label: 'Price', format: (value: number) => `${value.toLocaleString()} €` },
    { 
      key: 'color',
      label: 'Color',
      format: (value: string) => (
        <div className="w-6 h-6 rounded-full border border-gray-200" style={{ backgroundColor: value }} />
      )
    },
  ];

  const handleSave = (type: 'kitchen' | 'floor', option: InteriorOption) => {
    setOptions(prev => ({
      ...prev,
      [type]: editingOption.option
        ? prev[type].map(o => o.id === option.id ? option : o)
        : [...prev[type], { ...option, id: `${type}-${prev[type].length + 1}` }],
    }));
    setEditingOption({ type, option: null });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-medium text-gray-900">Interior Options</h2>
        <p className="mt-1 text-sm text-gray-500">
          Configure kitchen styles and flooring options. Set colors, materials, and additional costs for each customization option.
        </p>
      </div>

      {(['kitchen', 'floor'] as const).map(type => (
        <div key={type} className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium text-gray-900 capitalize">{type} Options</h3>
              <p className="mt-1 text-sm text-gray-500">
                {type === 'kitchen' 
                  ? 'Manage kitchen styles, colors, and finishes available to customers.'
                  : 'Configure flooring materials, colors, and their associated costs.'}
              </p>
            </div>
            <button
              onClick={() => setEditingOption({ 
                type,
                option: { 
                  id: '', 
                  name: '', 
                  color: '#000000', 
                  price: 0,
                  image: images.interior.default 
                }
              })}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              Add Option
            </button>
          </div>

          <AdminTable
            data={options[type]}
            columns={columns}
            onEdit={(option) => setEditingOption({ type, option })}
            onDelete={(option) => setOptions(prev => ({
              ...prev,
              [type]: prev[type].filter(o => o.id !== option.id),
            }))}
          />

          {editingOption.type === type && editingOption.option && (
            <InteriorForm
              option={editingOption.option}
              onSave={(option) => handleSave(type, option)}
              onCancel={() => setEditingOption({ type, option: null })}
            />
          )}
        </div>
      ))}
    </div>
  );
}