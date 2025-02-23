import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <img 
                src="/api/placeholder/32/32" 
                alt="Logo" 
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-bold">PM Tool</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
