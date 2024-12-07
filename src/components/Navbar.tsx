import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-scroll';

type NavbarProps = {
  onButtonClick: (topic: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onButtonClick }) => {
  const topics = [
    'School Population',
    'Dropouts',
    'Teacher Interactions',
    'Awareness Campaign',
    'Child Labour'
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link className="flex items-center cursor-pointer" to='/'>
            <GraduationCap className="h-10 w-10 text-blue-600" />
            <span className="ml-2 text-4xl font-semibold text-blue-600">Education Gender Analysis</span>
          </Link>
          <div className="hidden md:block">
            <div className="flex items-center space-x-3">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => onButtonClick(topic)}
                  className="px-4 py-2 rounded-md text-lg font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;