import React from 'react';
import Image from 'next/image';

const ProfileCard: React.FC = () => {
  return (
    <div className="bg-neutral-800 rounded-2xl p-6 shadow-xl text-center flex flex-col items-center">
      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h2 className="text-xl font-bold text-orange-400 mb-1">Luttapon</h2>
      <p className="text-sm text-neutral-400">STU ID: 6652410011</p>
      <p className="text-sm text-neutral-400">Fullstack Web Developer</p>

      {/* ไอคอน Social Media ที่เปลี่ยนเป็นรูปภาพ */}
      <div className="flex justify-center space-x-4 my-6 text-neutral-400">
        <a href="#" className="hover:opacity-70 transition-opacity duration-300">
          <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
        </a>
        <a href="#" className="hover:opacity-70 transition-opacity duration-300">
          <Image src="/icons/icons8-x.svg" alt="X (Twitter)" width={24} height={24} />
        </a>
        <a href="#" className="hover:opacity-70 transition-opacity duration-300">
          <Image src="/icons/instagram-50.png" alt="Instagram" width={24} height={24} />
        </a>
        <a href="#" className="hover:opacity-70 transition-opacity duration-300">
          <Image src="/icons/inkedin.svg" alt="LinkedIn" width={24} height={24} />
        </a>
        <a href="#" className="hover:opacity-70 transition-opacity duration-300">
          <Image src="/icons/google.png" alt="Google" width={24} height={24} />
        </a>
      </div>

      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-12 rounded-full transition-colors duration-300 w-full">
        HIRE ME !
      </button>
    </div>
  );
};

export default ProfileCard;