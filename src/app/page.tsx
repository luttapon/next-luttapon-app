// src/app/page.tsx
import ProfileCard from '@/components/profileCard';
import Sidebar from '@/components/SidebarIcons';

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-white p-6">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto space-y-6 md:space-y-0 md:space-x-8">
        
        {/* ส่วนซ้าย: Profile Card */}
        <div className="w-full md:w-1/4">
          <ProfileCard />
        </div>

        {/* ส่วนกลาง: เนื้อหาหลัก */}
        <div className="w-full md:w-2/4">
          <h1 className="text-3xl font-bold mb-6">
            Lets Work <span className="text-orange-500">Together !</span>
          </h1>
          
          <div className="mb-8">
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Hi From <span className="text-orange-500">Yourname</span> ,<br />
              Interactive Designer & Fullstack<br />
              Web Developer
            </h2>
            <p className="text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
              tempora at neque a adipisci nulla voluptatem? Mollitia, officiis,
              architecto earum voluptates obcaecati corrupti voluptatem.
            </p>
          </div>
          
          {/* ส่วน Experience และ Projects */}
          <div className="flex space-x-12">
            <div>
              <p className="text-4xl font-bold">3+</p>
              <p className="text-neutral-400">Years of<br/>Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold">10+</p>
              <p className="text-neutral-400">Projects<br/>Completed</p>
            </div>
          </div>
        </div>
        
        {/* ส่วนขวา: Sidebar */}
        <div className="w-full md:w-1/4 flex justify-end md:justify-start">
          <Sidebar />
        </div>

      </div>
    </div>
  );
}