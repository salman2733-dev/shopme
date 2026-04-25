import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-200">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">ShopMe</h2>
            <p className="mb-4 text-gray-400">
              Providing quality products and exceptional service since 2010. Our
              mission is to exceed customer expectations.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="hover:text-blue-400 transition-transform duration-300 transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"
                className="hover:text-blue-400 transition-transform duration-300 transform hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="hover:text-pink-400 transition-transform duration-300 transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="hover:text-blue-400 transition-transform duration-300 transform hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/top" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Top Rated
                </Link>
              </li>
              <li>
                <Link to="/kid" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Kids Wear
                </Link>
              </li>
              <li>
                <Link to="/Mans" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Mens Wear
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">Our Services</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/top" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Top Rated Items
                </Link>
              </li>
              <li>
                <Link to="/kid" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Kids Collection
                </Link>
              </li>
              <li>
                <Link to="/Mans" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Mens Collection
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Bulk / Wholesale
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">Contact Us</h2>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-gray-400" />
                <span className="text-gray-400">
                  Shop No. 12, Liberty Market, Lahore, Pakistan
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0 text-gray-400" />
                <a href="tel:+923001234567" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +92 300 1234567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0 text-gray-400" />
                <a href="mailto:support@shopme.pk" className="text-gray-400 hover:text-white transition-colors duration-300">
                  support@shopme.pk
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 font-semibold">
              © {currentYear} ShopMe. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <Link to="/shop" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;