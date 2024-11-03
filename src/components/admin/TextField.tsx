import React from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export function TextField({ error, className = '', ...props }: TextFieldProps) {
  return (
    <input
      className={`
        block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm
        placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-0
        disabled:opacity-50 disabled:cursor-not-allowed
        ${error ? 'border-red-500' : 'focus:border-black'}
        ${className}
      `}
      {...props}
    />
  );
}