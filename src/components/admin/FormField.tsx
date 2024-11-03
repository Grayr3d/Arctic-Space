import React from 'react';

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
  description?: string;
}

export function FormField({ label, error, children, description }: FormFieldProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {description && (
        <p className="text-sm text-gray-500">{description}</p>
      )}
      {children}
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}