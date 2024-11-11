import React from 'react'
import Link from 'next/link'

const Navigation: React.FC = () => {
  return (
    <div>
    <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
    <ul className="space-y-2">
      <li><Link href="#" className="text-[#7B7A7B] hover:text-[#2497F2]">Shipping Information</Link></li>
      <li><Link href="#" className="text-[#7B7A7B] hover:text-[#2497F2]">Returns & Exchanges</Link></li>
      <li><Link href="#" className="text-[#7B7A7B] hover:text-[#2497F2]">Terms & Conditions</Link></li>
    </ul>
  </div>
  );
};

export default Navigation;