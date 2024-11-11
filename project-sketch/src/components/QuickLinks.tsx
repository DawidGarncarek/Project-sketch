import React from 'react'
import Link from 'next/link'

const Navigation: React.FC = () => {
  return (
    <div>
    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
    <ul className="space-y-2">
      <li><Link href="#" className="text-[#7B7A7B] hover:text-[#2497F2]">About Us</Link></li>
      <li><Link href="#" className="text-[#7B7A7B] hover:text-[#2497F2]">Contact</Link></li>
      <li><Link href="#" className="text-[#7B7A7B] hover:text-[#2497F2]">FAQs</Link></li>
    </ul>
  </div>
  );
};

export default Navigation;