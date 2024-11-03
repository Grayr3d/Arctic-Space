import React, { useState, useCallback } from 'react';
import { ImageUpload } from './ImageUpload';
import { images } from '../../config/images';
import { Home, Building2, LayoutDashboard, Save, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

interface SummaryImages {
  floorPlan: string;
  exterior: string;
  interior: string;
}

interface ImageSection {
  key: keyof SummaryImages;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function SummaryEditor() {
  const [summaryImages, setSummaryImages] = useState<SummaryImages>(images.summary);
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const sections: ImageSection[] = [
    {
      key: 'floorPlan',
      title: 'Floor Plan Preview',
      description: 'This image will be shown in the floor plan selection step',
      icon: <LayoutDashboard className="w-5 h-5 text-gray-400" />,
    },
    {
      key: 'exterior',
      title: 'Exterior Preview',
      description: 'This image will be shown in the exterior customization step',
      icon: <Building2 className="w-5 h-5 text-gray-400" />,
    },
    {
      key: 'interior',
      title: 'Interior Preview',
      description: 'This image will be shown in the interior customization step',
      icon: <Home className="w-5 h-5 text-gray-400" />,
    },
  ];

  const handleImageUpdate = useCallback((key: keyof SummaryImages, image: string) => {
    setSummaryImages(prev => ({
      ...prev,
      [key]: image
    }));
    setHasChanges(true);
    setSaveSuccess(false);
  }, []);

  const handleSave = async () => {
    setSaving(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSaveSuccess(true);
      setHasChanges(false);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Failed to save changes:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 pb-24">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-medium text-gray-900">Summary Images</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage the preview images shown during the configuration process
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {sections.map(section => (
          <div
            key={section.key}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all hover:shadow-sm"
          >
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                {section.icon}
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {section.description}
                  </p>
                </div>
              </div>
              
              <ImageUpload
                currentImage={summaryImages[section.key]}
                onImageSelect={(image) => handleImageUpdate(section.key, image)}
              />
            </div>
          </div>
        ))}
      </div>

      <div 
        className={`
          fixed bottom-0 right-0 left-[320px] 
          bg-white border-t shadow-lg
          transform transition-all duration-200 ease-in-out
          ${hasChanges ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {saveSuccess ? (
                <span className="flex items-center text-sm text-green-600">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Changes saved successfully
                </span>
              ) : (
                <span className="text-sm text-gray-600">
                  You have unsaved changes
                </span>
              )}
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="secondary"
                onClick={() => {
                  setSummaryImages(images.summary);
                  setHasChanges(false);
                }}
                disabled={saving}
              >
                Discard Changes
              </Button>
              <Button
                variant="primary"
                icon={<Save className="w-4 h-4" />}
                onClick={handleSave}
                loading={saving}
                disabled={!hasChanges || saving}
              >
                {saving ? 'Saving Changes...' : 'Save All Changes'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}