"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Code,
  Home as HomeIcon,
  User,
  Star,
  Briefcase,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items (now using route paths instead of #anchors)
  const navLinks = [
    {
      href: "/home",
      text: "Home",
      icon: <HomeIcon className="inline w-4 h-4 mr-2" />,
    },
    {
      href: "/about",
      text: "About",
      icon: <User className="inline w-4 h-4 mr-2" />,
    },
    {
      href: "/skills",
      text: "Skills",
      icon: <Star className="inline w-4 h-4 mr-2" />,
    },
    {
      href: "/projects",
      text: "Projects",
      icon: <Briefcase className="inline w-4 h-4 mr-2" />,
    },
    {
      href: "/contact",
      text: "Contact",
      icon: <Mail className="inline w-4 h-4 mr-2" />,
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 transition-all duration-300 ${
        isScrolled ? "h-14 shadow-md" : "h-16"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center">
            <Code className="w-7 h-7 text-indigo-600 mr-2" />
            <h1 className="text-xl font-bold text-indigo-600">LMS System</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ href, text, icon }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-700 hover:text-indigo-600 flex items-center text-sm"
              >
                {icon} {text}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm transition-all duration-300 ease-in-out">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map(({ href, text, icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 hover:text-indigo-600"
              >
                {icon} {text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
