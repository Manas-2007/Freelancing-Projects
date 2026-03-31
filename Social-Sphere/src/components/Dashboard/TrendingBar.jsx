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
    <aside className="w-full lg:w-[380px] lg:h-screen lg:sticky lg:top-0 bg-[#f8fafc] border-t lg:border-t-0 lg:border-l border-slate-200 p-4 lg:p-8 flex flex-col gap-4 lg:gap-8 overflow-y-auto">
      
      {/* 1. Search Bar */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#3b82f6] transition-colors">
          <Hash size={18} />
        </div>
        <input 
          type="text" 
          placeholder="Search SocialSphere..." 
          className="w-full bg-white border border-slate-200 rounded-[16px] lg:rounded-[20px] py-3 lg:py-4 pl-11 pr-4 text-[14px] lg:text-[15px] font-[600] focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-[#3b82f6] transition-all shadow-sm"
        />
      </div>

      {/* 2. Trending Topics Card */}
      <div className="bg-white border border-slate-200 rounded-[22px] lg:rounded-[35px] p-4 lg:p-7 shadow-sm">
        <div className="flex items-center gap-3 mb-4 lg:mb-6">
          <div className="p-2 bg-blue-50 text-[#3b82f6] rounded-lg">
            <TrendingUp size={18} />
          </div>
          <h3 className="text-[16px] lg:text-[18px] font-[1000] text-slate-900 tracking-tight">Trending Now</h3>
        </div>

        <div className="space-y-4 lg:space-y-6">
          {trends.map((trend) => (
            <div key={trend.tag} className="group cursor-pointer flex items-center justify-between">
              <div>
                <p className="text-[11px] lg:text-[12px] font-[800] text-slate-400 uppercase tracking-wider mb-1">{trend.category}</p>
                <h4 className="text-[14px] lg:text-[16px] font-[800] text-slate-800 group-hover:text-[#3b82f6] transition-colors">#{trend.tag}</h4>
                <p className="text-[12px] lg:text-[13px] font-[600] text-slate-400 mt-1">{trend.posts} posts</p>
              </div>
              <ChevronRight size={16} className="text-slate-300 group-hover:text-[#3b82f6] transition-all" />
            </div>
          ))}
        </div>

        <button className="w-full mt-5 lg:mt-8 py-3 text-[13px] lg:text-[14px] font-[800] text-[#3b82f6] hover:bg-blue-50 rounded-xl transition-all">
          Show More
        </button>
      </div>

      {/* 3. Who to Follow */}
      <div className="bg-white border border-slate-200 rounded-[22px] lg:rounded-[35px] p-4 lg:p-7 shadow-sm">
        <div className="flex items-center gap-3 mb-4 lg:mb-6">
          <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
            <Users size={18} />
          </div>
          <h3 className="text-[16px] lg:text-[18px] font-[1000] text-slate-900 tracking-tight">Who to Follow</h3>
        </div>

        <div className="space-y-4 lg:space-y-5">
          {suggestedUsers.map((user) => (
            <div key={user.handle} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={user.avatar} className="w-9 h-9 lg:w-11 lg:h-11 rounded-full object-cover border-2 border-white shadow-sm" alt="" />
                <div className="leading-tight">
                  <h4 className="text-[14px] lg:text-[15px] font-[800] text-slate-800">{user.name}</h4>
                  <p className="text-[12px] lg:text-[13px] font-[600] text-slate-400">{user.handle}</p>
                </div>
              </div>
              <button className="bg-slate-900 text-white text-[11px] lg:text-[12px] font-[800] px-3 lg:px-4 py-1.5 lg:py-2 rounded-full hover:bg-[#3b82f6] transition-all">
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