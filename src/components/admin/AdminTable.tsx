import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

interface Column {
  key: string;
  label: string;
  format?: (value: any, item: any) => React.ReactNode;
}

interface AdminTableProps {
  data: any[];
  columns: Column[];
  onEdit: (item: any) => void;
  onDelete: (item: any) => void;
}

export function AdminTable({ data, columns, onEdit, onDelete }: AdminTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
              Preview
            </th>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr 
              key={item.id || index}
              className="group hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 object-cover rounded-lg border border-gray-200"
                  />
                ) : (
                  <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                    No image
                  </div>
                )}
              </td>
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {column.format ? column.format(item[column.key], item) : item[column.key]}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center justify-end space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-gray-500 hover:text-black transition-colors"
                    title="Edit"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(item)}
                    className="text-gray-500 hover:text-red-500 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td 
                colSpan={columns.length + 2} 
                className="px-6 py-8 text-center text-sm text-gray-500"
              >
                No items found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}