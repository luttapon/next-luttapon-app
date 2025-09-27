import ProfileCard from '@/components/profileCard';
import Sidebar from '@/components/SidebarIcons';

export default function AboutMePage() {
  return (
    <div className="bg-black min-h-screen text-white p-6">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto space-y-6 md:space-y-0 md:space-x-8">
        
        <div className="w-full md:w-1/4">
          <ProfileCard />
        </div>

        <div className="w-full md:w-2/4">
          <h1 className="text-3xl font-bold mb-6">About <span className="text-orange-500">Me</span></h1>
          <p className="text-xl font-bold leading-relaxed mb-4">
            I find fulfillment in blending visual design with the power of coding to create meaningful experiences.
          </p>
          <p className="text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum voluptates obcaecati corrupti voluptatem.
          </p>
        </div>
        
        <div className="w-full md:w-1/4 flex justify-end md:justify-start">
          <Sidebar />
        </div>

      </div>
    </div>
  );
}