import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderKanban, 
  Users, 
  Settings,
  PlusCircle 
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-sm h-[calc(100vh-4rem)]">
      <div className="p-4">
        <button className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white p-2 rounded-lg">
          <PlusCircle size={20} />
          <span>New Project</span>
        </button>
      </div>
      
      <nav className="space-y-1 px-2">
        <Link to="/" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>
        
        <Link to="/projects" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
          <FolderKanban size={20} />
          <span>Projects</span>
        </Link>
        
        <Link to="/team" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
          <Users size={20} />
          <span>Team</span>
        </Link>
        
        <Link to="/settings" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
