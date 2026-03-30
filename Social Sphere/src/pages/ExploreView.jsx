import React from 'react';
import { Heart, MessageSquare, BarChart3, Sparkles, ChevronRight } from 'lucide-react';

const ExploreView = () => {
  const posts = [
    { id: 1, user: 'Aman_Photog', title: 'Cyber City', desc: 'Neon pulse of the modern world.', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=500', likes: '2.3k', comments: '3k', impressions: '15k' },
    { id: 2, user: 'Traveler_Ben', title: 'Mountain Silence', desc: 'Where clouds touch the peaks.', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=500', likes: '2.3k', comments: '56', impressions: '15k' },
    { id: 3, user: 'Traveler_Ben', title: 'Deep Woods', desc: 'Exploring the hidden trails.', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=500', likes: '2.3k', comments: '56', impressions: '15k' },
    { id: 4, user: 'Sarah_Travels', title: 'Golden Hour', desc: 'Sunset over the Mediterranean.', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=500', likes: '2.3k', comments: '5k', impressions: '15k' },
    { id: 5, user: 'Traveler_Ben', title: 'Crystal Falls', desc: 'A hidden oasis in the jungle.', img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=500', likes: '2.3k', comments: '3k', impressions: '15k' },
    { id: 6, user: 'Aman_Photog', title: 'Urban Jungle', desc: 'Beauty in architectural chaos.', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=500', likes: '2.3k', comments: '56', impressions: '15k' },
  ];

  return (
    <div className="h-[calc(100vh-140px)] overflow-y-auto no-scrollbar pb-10 animate-in fade-in duration-700 pr-2 font-sans mt-[-15px]">
      
      {/* 1. COMPACT HEADER */}
      <div className="mb-6 flex items-center justify-between bg-blue-50/40 p-4 px-7 rounded-[28px] border border-blue-100/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-[15px] flex items-center justify-center text-white shadow-md">
            <Sparkles size={20} />
          </div>
          <div>
            <h2 className="text-[18px] font-bold text-slate-900 tracking-tight leading-none">Explore Trends</h2>
            <p className="text-[10px] font-black text-blue-500/70 uppercase tracking-[1.5px] mt-1">Curated for you</p>
          </div>
        </div>
      </div>

      {/* 2. GRID SYSTEM: Strictly 3 columns on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-1">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="group bg-white rounded-[32px] p-3.5 shadow-sm border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
          >
            {/* Image: Fixed Aspect Ratio for clean rows */}
            <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden mb-4 bg-slate-100">
              <img 
                src={post.img} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              
              {/* Profile Overlay: Very Compact */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/30 backdrop-blur-md p-1 pr-3 rounded-full border border-white/20">
                <img src={`https://i.pravatar.cc/150?u=${post.user}`} className="w-5 h-5 rounded-full border border-white/50" alt="" />
                <span className="text-white font-bold text-[9px] tracking-tight">{post.user}</span>
              </div>
            </div>

            {/* Content: Compact Typography */}
            <div className="flex flex-col px-2 pb-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-[16px] font-bold text-slate-900 tracking-tight truncate pr-4">
                  {post.title}
                </h3>
                <ChevronRight size={14} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
              </div>
              <p className="text-slate-400 font-medium text-[12px] leading-snug line-clamp-1 mb-4">
                {post.desc}
              </p>

              {/* Stats Footer: Professional Scale */}
              <div className="mt-auto pt-3 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-rose-500">
                    <Heart size={14} fill="currentColor" />
                    <span className="text-[11px] font-bold">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MessageSquare size={14} />
                    <span className="text-[11px] font-bold">{post.comments}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-blue-500/80 bg-blue-50 px-2 py-0.5 rounded-lg">
                  <BarChart3 size={12} />
                  <span className="text-[9px] font-black">{post.impressions}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreView;