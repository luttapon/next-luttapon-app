import ProfileCard from '@/components/profileCard';
import Sidebar from '@/components/SidebarIcons';

export default function ContactMePage() {
  return (
    <div className="bg-black min-h-screen text-white p-6">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/4"><ProfileCard /></div>
        <div className="w-full md:w-2/4">
          <h1 className="text-3xl font-bold mb-2">Contact <span className="text-orange-500">Me</span></h1>
          <p className="text-neutral-400 mb-6">Lets get in touch!</p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Email" className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-orange-500" />
              <input type="text" placeholder="Phone" className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-orange-500" />
              <input type="text" placeholder="Name" className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-orange-500" />
              <input type="text" placeholder="Address" className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-orange-500" />
            </div>
            <textarea placeholder="Content" rows={4} className="p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-orange-500 w-full"></textarea>
            
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="newsletter" className="form-checkbox text-orange-500 border-neutral-700 rounded-sm focus:ring-orange-500" />
              <label htmlFor="newsletter" className="text-sm text-neutral-400">I would like to receive the newsletter</label>
            </div>
            
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Submit
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/4 flex justify-end md:justify-start">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}