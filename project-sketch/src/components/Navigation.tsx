import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li><Link href="#" className="hover:text-[#2497F2]">Components</Link></li>
        <li><Link href="#" className="hover:text-[#2497F2]">Accessories</Link></li>
        <li><Link href="#" className="hover:text-[#2497F2]">Ready-made Sets</Link></li>
        <li><Link href="#" className="hover:text-[#2497F2]">Custom PC Builder</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;