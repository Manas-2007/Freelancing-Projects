import React from 'react';
import { TrendingUp, Users, Hash, ChevronRight } from 'lucide-react';

const TrendingBar = () => {
  const trends = [
    { tag: 'ReactJS', posts: '12.5k', category: 'Technology' },
    { tag: 'UIUXDesign', posts: '8.2k', category: 'Design' },
    { tag: 'WebDev2026', posts: '25k', category: 'Development' },
    { tag: 'SocialSphere', posts: '100k', category: 'Platform' },
  ];

  const suggestedUsers = [
    { name: 'Sarah Connor', handle: '@sarah_c', avatar: 'https://i.pravatar.cc/150?u=sarah' },
    { name: 'John Doe', handle: '@johnd', avatar: 'https://i.pravatar.cc/150?u=john' },
  ];

  return (
    <aside className="w-[380px] h-screen sticky top-0 bg-[#f8fafc] border-l border-slate-200 p-8 flex flex-col gap-8 overflow-y-auto">
      
      {/* 1. Search Bar (Premium Glass Style) */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#3b82f6] transition-colors">
          <Hash size={20} />
        </div>
        <input 
          type="text" 
          placeholder="Search SocialSphere..." 
          className="w-full bg-white border border-slate-200 rounded-[20px] py-4 pl-12 pr-4 text-[15px] font-[600] focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-[#3b82f6] transition-all shadow-sm"
        />
      </div>

      {/* 2. Trending Topics Card */}
      <div className="bg-white border border-slate-200 rounded-[35px] p-7 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-50 text-[#3b82f6] rounded-lg">
            <TrendingUp size={20} />
          </div>
          <h3 className="text-[18px] font-[1000] text-slate-900 tracking-tight">Trending Now</h3>
        </div>

        <div className="space-y-6">
          {trends.map((trend) => (
            <div key={trend.tag} className="group cursor-pointer flex items-center justify-between">
              <div>
                <p className="text-[12px] font-[800] text-slate-400 uppercase tracking-wider mb-1">{trend.category}</p>
                <h4 className="text-[16px] font-[800] text-slate-800 group-hover:text-[#3b82f6] transition-colors">#{trend.tag}</h4>
                <p className="text-[13px] font-[600] text-slate-400 mt-1">{trend.posts} posts</p>
              </div>
              <ChevronRight size={18} className="text-slate-300 group-hover:text-[#3b82f6] transition-all" />
            </div>
          ))}
        </div>

        <button className="w-full mt-8 py-3 text-[14px] font-[800] text-[#3b82f6] hover:bg-blue-50 rounded-xl transition-all">
          Show More
        </button>
      </div>

      {/* 3. Who to Follow (Social Media vibe) */}
      <div className="bg-white border border-slate-200 rounded-[35px] p-7 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
            <Users size={20} />
          </div>
          <h3 className="text-[18px] font-[1000] text-slate-900 tracking-tight">Who to Follow</h3>
        </div>

        <div className="space-y-5">
          {suggestedUsers.map((user) => (
            <div key={user.handle} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={user.avatar} className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm" alt="" />
                <div className="leading-tight">
                  <h4 className="text-[15px] font-[800] text-slate-800">{user.name}</h4>
                  <p className="text-[13px] font-[600] text-slate-400">{user.handle}</p>
                </div>
              </div>
              <button className="bg-slate-900 text-white text-[12px] font-[800] px-4 py-2 rounded-full hover:bg-[#3b82f6] transition-all">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
};

export default TrendingBar;