import React from 'react';
import { X } from 'lucide-react';
import { SchoolPopulationData } from '../data/topicsData';

type TableModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: SchoolPopulationData | null;
};

const TableModal: React.FC<TableModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-blue-600">{data.title}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border px-4 py-2">School Name</th>
                  <th className="border px-4 py-2">Boys Percentage</th>
                  <th className="border px-4 py-2">Girls Percentage</th>
                </tr>
              </thead>
              <tbody>
                {data.tableData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="border px-4 py-2">{row.SchoolName}</td>
                    <td className="border px-4 py-2">{row.BoysPercentage}</td>
                    <td className="border px-4 py-2">{row.GirlsPercentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 prose max-w-none">
            <p className="text-gray-700 leading-relaxed">{data.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableModal;