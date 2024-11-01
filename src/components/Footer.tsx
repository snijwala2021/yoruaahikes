import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">About Yoruaa Hikes</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="hover:underline">Our Story</Link></li>
                <li><Link to="#" className="hover:underline">Team</Link></li>
                <li><Link to="#" className="hover:underline">Careers</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Our Treks</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="hover:underline">Destinations</Link></li>
                <li><Link to="#" className="hover:underline">Trek Types</Link></li>
                <li><Link to="#" className="hover:underline">Difficulty Levels</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3  className="text-lg font-bold">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="hover:underline">Blog</Link></li>
                <li><Link to="#" className="hover:underline">Packing Lists</Link></li>
                <li><Link to="#" className="hover:underline">FAQs</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact Us</h3>
              <ul className="space-y-2">
                <li>Email: info@yoruaahikes.com</li>
                <li>Phone: +91 8126417109</li>
                <li>Address: Balaji Enclave, Lane 1 Aamwala, Dehradun 248013, India</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-700 pt-6 text-center">
            <p>&copy; 2024 Yoruaa Hikes. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer