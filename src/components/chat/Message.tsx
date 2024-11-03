import React from 'react';
import { User } from 'lucide-react';

interface MessageProps {
  type: 'user' | 'assistant';
  content: string;
  assistantImage: string;
}

export function Message({ type, content, assistantImage }: MessageProps) {
  return (
    <div className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex items-start space-x-3 max-w-[80%] ${
        type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
      }`}>
        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
          {type === 'user' ? (
            <div className="bg-black text-white w-full h-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
          ) : (
            <img
              src={assistantImage}
              alt="Assistant"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className={`rounded-2xl px-6 py-4 ${
          type === 'user' 
            ? 'bg-black text-white' 
            : 'bg-white text-gray-900 shadow-sm'
        }`}>
          {content}
        </div>
      </div>
    </div>
  );
}