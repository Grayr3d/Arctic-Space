import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface AdminNavProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export function AdminNav({ tabs, activeTab, onTabChange }: AdminNavProps) {
  return (
    <nav className="flex space-x-1">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              px-4 py-2 rounded-md text-sm font-medium flex items-center space-x-2
              transition-all duration-200 ease-in-out
              ${isActive 
                ? 'bg-black text-white shadow-sm' 
                : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }
            `}
          >
            <Icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}