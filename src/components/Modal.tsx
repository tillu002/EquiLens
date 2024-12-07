import React from 'react';
import { X } from 'lucide-react';
import { TopicData } from '../data/topicsData';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: TopicData | null;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-[1200px] h-2/3 overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-purple-600">{data.title}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <img
              src={data.image1}
              alt={`${data.title} illustration 1`}
              className="w-full h-68 object-cover rounded-lg shadow-md"
            />
            <img
              src={data.image2}
              alt={`${data.title} illustration 2`}
              className="w-full h-68 object-cover rounded-lg shadow-md"
            />
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed text-2xl">{data.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;