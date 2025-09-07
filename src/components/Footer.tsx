
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-pulse-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="text-xl font-display font-bold">INAW</span>
            </div>
            <p className="text-gray-300 mb-4">
              Transform your digital displays into dynamic revenue-generating media assets with our two-sided advertising marketplace.
            </p>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pulse-500" />
                <a href="mailto:info@hept.de" className="text-gray-300 hover:text-white transition-colors">
                  info@hept.de
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pulse-500" />
                <a href="tel:+49123456789" className="text-gray-300 hover:text-white transition-colors">
                  +49 123 456 789
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#features" className="block text-gray-300 hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="block text-gray-300 hover:text-white transition-colors">
                Success Stories
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 INAW. All rights reserved. Transforming displays into revenue streams.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
