import React, { useState, useEffect } from 'react';
import { Heart, MessageSquare, BarChart3, ChevronRight, RefreshCcw, Sparkles, Trash2 } from 'lucide-react';
import { useSocial } from '../context/SocialContext'; 

const ExploreView = () => {
  const { posts: myPosts, user, deletePost } = useSocial(); 
  const [globalPosts, setGlobalPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🚀 INCREASED DATA: Now fetching 12+ posts for a richer grid
  const fetchGlobalTrends = () => {
    setLoading(true);
    setTimeout(() => {
      const topics = ['Cyber', 'Minimal', 'Nature', 'Urban', 'Abstract', 'Vibe', 'Future', 'Architecture', 'Motion', 'Tech', 'Street', 'Ocean'];
      
      const dummyGlobal = Array.from({ length: 12 }).map((_, i) => ({
        id: `global-sync-${i}-${Math.random()}`,
        user: topics[i % topics.length].toLowerCase() + '_vision',
        title: topics[i % topics.length] + ' Aesthetics',
        desc: 'Analyzing the latest trends in ' + topics[i % topics.length].toLowerCase() + ' world.',
        img: `https://picsum.photos/600/400?random=${i + Math.random()}`,
        likes: (Math.random() * 5 + 1).toFixed(1) + 'k',
        comments: Math.floor(Math.random() * 500) + 50,
        impressions: Math.floor(Math.random() * 40) + 5 + 'k',
        isGlobal: true 
      }));

      setGlobalPosts(dummyGlobal);
      setLoading(false);
    }, 1200);
  };

  useEffect(() => {
    fetchGlobalTrends();
  }, []);

  // Syncing your real-time posts with the expanded global list
  const allExplorePosts = [...myPosts, ...globalPosts];

  return (
    <div className="h-[calc(100vh-140px)] overflow-y-auto no-scrollbar pb-10 pr-2 mt-[-10px] animate-in fade-in duration-500">
      
      {/* HEADER ACTION */}
      <div className="mb-6 flex items-center justify-between px-4 pt-2">
        <div className="flex flex-col">
          <h3 className="text-slate-900 font-black text-[18px] tracking-tight">Global Discovery</h3>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[2px]">Real-time Trends</p>
        </div>
        <button 
          onClick={fetchGlobalTrends} 
          disabled={loading}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white text-blue-600 border border-blue-100 font-bold text-[11px] shadow-sm hover:bg-blue-50 transition-all active:scale-95"
        >
          <RefreshCcw size={14} className={loading ? 'animate-spin' : ''} />
          {loading ? 'SYNCING...' : 'REFRESH SPHERE'}
        </button>
      </div>

      {loading ? (
        /* PREMIUM LOADER */
        <div className="flex flex-col items-center justify-center h-[50vh]">
            <div className="relative flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-blue-600/10 border-t-blue-600 rounded-full animate-spin"></div>
              <Sparkles size={24} className="absolute text-blue-600 animate-pulse" />
            </div>
            <p className="mt-6 text-slate-400 font-black text-[10px] uppercase tracking-[4px]">Accessing Database...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-1">
          {allExplorePosts.map((post) => (
            <div 
              key={post.id} 
              className={`group relative bg-white rounded-[40px] p-4 shadow-sm border transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl ${!post.isGlobal ? 'border-blue-400 bg-blue-50/10 ring-4 ring-blue-500/5' : 'border-slate-100'}`}
            >
              
              {/* ACTION: DELETE (Only for your posts) */}
              {!post.isGlobal && post.user === user.username && (
                <button 
                   onClick={() => window.confirm("Delete this story?") && deletePost(post.id)}
                   className="absolute top-6 right-6 z-50 p-2.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg"
                >
                  <Trash2 size={14} />
                </button>
              )}

              {/* IMAGE ENGINE */}
              <div className="relative aspect-[16/11] rounded-[30px] overflow-hidden mb-5 bg-slate-100 shadow-inner">
                <img 
                  src={post.image || post.img} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt="" 
                />
                
                {/* TAGS */}
                {!post.isGlobal ? (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    My Story
                  </div>
                ) : (
                  <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md text-white text-[8px] font-bold px-3 py-1 rounded-full uppercase border border-white/20">
                    Trending
                  </div>
                )}
              </div>

              {/* TEXT CONTENT */}
              <div className="px-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-[17px] font-black text-slate-900 tracking-tight leading-tight truncate pr-4">
                    {post.title}
                  </h3>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                </div>
                <p className="text-slate-400 font-medium text-[12px] line-clamp-2 mt-2 leading-relaxed italic">
                  {post.content || post.desc}
                </p>
                
                {/* METRICS FOOTER */}
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex items-center gap-5 text-slate-400 text-[11px] font-black">
                      <span className="flex items-center gap-1.5 hover:text-rose-500 transition-colors cursor-pointer">
                        <Heart size={15} fill={!post.isGlobal ? "currentColor" : "none"} className={!post.isGlobal ? "text-rose-500" : ""} /> 
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1.5 hover:text-blue-500 transition-colors cursor-pointer">
                        <MessageSquare size={15}/> {post.comments}
                      </span>
                   </div>
                   <div className="text-[9px] font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100/50 uppercase tracking-tighter">
                      {post.impressions || '0'} Visual Reach
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreView;