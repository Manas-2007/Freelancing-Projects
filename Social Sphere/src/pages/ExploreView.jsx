import React from 'react';
import { Heart, MessageSquare, BarChart3, Play } from 'lucide-react';

const ExploreView = () => {
  const posts = [
    { id: 1, user: 'Aman_Photog', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=500', likes: '2.3k', comments: '3k', impressions: '15k', isVideo: true },
    { id: 2, user: 'Traveler_Ben', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=500', likes: '2.3k', comments: '56', impressions: '15k', isVideo: false },
    { id: 3, user: 'Traveler_Ben', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=500', likes: '2.3k', comments: '56', impressions: '15k', isVideo: true },
    { id: 4, user: 'Sarah_Travels', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=500', likes: '2.3k', comments: '5k', impressions: '15k', isVideo: true },
    { id: 5, user: 'Traveler_Ben', img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=500', likes: '2.3k', comments: '3k', impressions: '15k', isVideo: false },
    { id: 6, user: 'Aman_Photog', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=500', likes: '2.3k', comments: '56', impressions: '15k', isVideo: true },
    { id: 7, user: 'Traveler_Ben', img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=500', likes: '2.3k', comments: '56', impressions: '15k', isVideo: false },
    { id: 8, user: 'usernames', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=500', likes: '2.3k', comments: '56', impressions: '15k', isVideo: true },
  ];

  return (
    <div 
      className="h-[calc(100vh-140px)] overflow-y-auto pb-10 animate-in fade-in duration-700 
      /* LIGHT SCROLLBAR LOGIC START */
      [&::-webkit-scrollbar]:w-[4px] 
      [&::-webkit-scrollbar-track]:bg-transparent 
      [&::-webkit-scrollbar-thumb]:bg-slate-200 
      [&::-webkit-scrollbar-thumb]:rounded-full 
      hover:[&::-webkit-scrollbar-thumb]:bg-slate-300
      /* LIGHT SCROLLBAR LOGIC END */"
    >
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="group bg-white rounded-[32px] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] transition-all duration-500 hover:-translate-y-1 border border-white"
          >
            {/* User Header */}
            <div className="flex items-center gap-3 mb-4 px-1">
              <img 
                src={`https://i.pravatar.cc/150?u=${post.user}`} 
                alt="" 
                className="w-8 h-8 rounded-full object-cover border-2 border-blue-50" 
              />
              <span className="text-[14px] font-[800] text-slate-800 tracking-tight">{post.user}</span>
            </div>

            {/* Post Image Container */}
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden mb-4 shadow-inner bg-slate-100">
              <img 
                src={post.img} 
                alt="Post content" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              {post.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 shadow-lg">
                    <Play size={18} fill="currentColor" />
                  </div>
                </div>
              )}
            </div>

            {/* Interaction Stats */}
            <div className="flex items-center justify-between px-1">
              <div className="flex flex-col items-center">
                 <div className="flex items-center gap-1.5 text-rose-500">
                    <Heart size={15} fill="currentColor" />
                    <span className="text-[13px] font-[1000]">{post.likes}</span>
                 </div>
                 <span className="text-[8px] font-[800] text-slate-400 uppercase tracking-widest mt-0.5">Likes</span>
              </div>

              <div className="flex flex-col items-center">
                 <div className="flex items-center gap-1.5 text-slate-600">
                    <MessageSquare size={15} />
                    <span className="text-[13px] font-[1000]">{post.comments}</span>
                 </div>
                 <span className="text-[8px] font-[800] text-slate-400 uppercase tracking-widest mt-0.5">Comments</span>
              </div>

              <div className="flex flex-col items-center">
                 <div className="flex items-center gap-1.5 text-blue-500">
                    <BarChart3 size={15} />
                    <span className="text-[13px] font-[1000]">{post.impressions}</span>
                 </div>
                 <span className="text-[8px] font-[800] text-slate-400 uppercase tracking-widest mt-0.5">Stats</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreView;