// src/components/Sidebar.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // สำคัญ: import Link component

const Sidebar: React.FC = () => {
  return (
    <div className="bg-neutral-800 rounded-full md:rounded-2xl p-4 shadow-xl flex flex-row md:flex-col items-center space-x-4 md:space-x-0 md:space-y-4">
      
      {/* 1. Home Page */}
      <Link href="/" className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300">
        <Image src="/icons/home.svg" alt="Home" width={24} height={24} className="invert" />
      </Link>
      
      {/* 2. About Me Page */}
      <Link href="/aboutme" className="opacity-50 hover:opacity-100 transition-opacity duration-300">
        <Image src="/icons/user-24.png" alt="About Me" width={24} height={24} className="invert" />
      </Link>

      {/* 3. Education & Experience Page */}
      <Link href="/eduexp" className="opacity-50 hover:opacity-100 transition-opacity duration-300">
        <Image src="/icons/icons8-file.svg" alt="Education & Experience" width={24} height={24} className="invert" />
      </Link>

      {/* 4. Specializations Page */}
      <Link href="/spec" className="opacity-50 hover:opacity-100 transition-opacity duration-300">
        <Image src="/icons/icons8-menu.svg" alt="Specializations" width={24} height={24} className="invert" />
      </Link>
      
      {/* 5. Projects Page */}
      <Link href="/projects" className="opacity-50 hover:opacity-100 transition-opacity duration-300">
        <Image src="/icons/icons8-briefcase.svg" alt="Projects" width={24} height={24} className="invert" />
      </Link>

      {/* 6. Skills Page */}
      <Link href="/skills" className="opacity-50 hover:opacity-100 transition-opacity duration-300">
        <Image src="/icons/icons8-code-80.png" alt="Skills" width={24} height={24} className="invert" />
      </Link>
      
      {/* 7. Contact Me Page */}
      <Link href="/contactme" className="opacity-50 hover:opacity-100 transition-opacity duration-300">
        <Image src="/icons/icons8-chat-message-50.png" alt="Contact Me" width={24} height={24} className="invert" />
      </Link>
    </div>
  );
};

export default Sidebar;