import React, { useCallback } from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploadProps {
  currentImage?: string;
  onImageSelect: (image: string) => void;
}

export function ImageUpload({ currentImage, onImageSelect }: ImageUploadProps) {
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        onImageSelect(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageSelect]);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Image</label>
      
      <div className="flex items-start space-x-4">
        {currentImage && (
          <div className="relative group">
            <div className="w-32 h-32 rounded-lg overflow-hidden border border-gray-200">
              <img
                src={currentImage}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() => onImageSelect('')}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
              title="Remove image"
            >
              <X className="w-4 h-4 text-gray-500 hover:text-red-500" />
            </button>
          </div>
        )}

        <div className="flex-1">
          <label className="group relative flex justify-center items-center h-32 rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 cursor-pointer transition-colors">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-8 w-8 text-gray-400 group-hover:text-gray-500 transition-colors" />
              <div className="flex flex-col items-center text-sm text-gray-500">
                <span className="font-medium text-black hover:underline">
                  Upload an image
                </span>
                <p className="text-xs">PNG, JPG up to 5MB</p>
              </div>
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
}