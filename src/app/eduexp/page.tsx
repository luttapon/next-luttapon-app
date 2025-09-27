import ProfileCard from '@/components/profileCard';
import Sidebar from '@/components/SidebarIcons';

export default function EduExpPage() {
  return (
    <div className="bg-black min-h-screen text-white p-6">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/4"><ProfileCard /></div>
        <div className="w-full md:w-2/4">
          <h1 className="text-3xl font-bold mb-6">Education & <span className="text-orange-500">Experience</span></h1>
          
          <div className="space-y-6 text-neutral-400">
            <div>
              <p className="text-sm">2022 - Present</p>
              <h2 className="text-lg font-bold text-white">UI/UX Designer</h2>
              <p className="text-sm">Freelance</p>
              <h2 className="text-lg font-bold text-white">Fullstack Web Developer</h2>
              <p className="text-sm">Freelance</p>
            </div>
            <div>
              <p className="text-sm">2022-2025</p>
              <h2 className="text-lg font-bold text-white">Bachelor Degree in Technology Digital and Innovation</h2>
              <p className="text-sm">Southeast Asia University</p>
            </div>
            <div>
              <p className="text-sm">2016-2021</p>
              <h2 className="text-lg font-bold text-white">High school</h2>
              <p className="text-sm">Taweethapiseck School</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex justify-end md:justify-start">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}