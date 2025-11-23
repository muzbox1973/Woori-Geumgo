import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import Button from './Button';
import { NavItem } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: '홈', path: '/' },
    { label: '금융상품 안내', path: '/products' },
    { label: '상담 신청', path: '/consultation' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-bold" : "text-gray-600 hover:text-primary";
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg text-white">
              <ShieldCheck size={28} />
            </div>
            <span className="font-sans text-2xl font-bold text-primary tracking-tight">우리금고</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`text-base transition-colors ${isActive(item.path)}`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/consultation">
              <Button variant="primary" size="sm">무료 상담 예약</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === item.path ? "bg-blue-50 text-primary" : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/consultation" onClick={() => setIsOpen(false)}>
                <Button fullWidth variant="primary">무료 상담 예약</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;