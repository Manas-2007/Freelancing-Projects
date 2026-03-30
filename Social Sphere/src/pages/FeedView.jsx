import React, { useState } from 'react';
import { Send, Heart, MessageSquare, Share2, Bookmark, PlusSquare, LayoutGrid, X, Camera, Sparkles } from 'lucide-react';

const FeedView = () => {
  const [activeSubTab, setActiveSubTab] = useState('view');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
  };

  const feedPosts = [
    {
      id: 1,
      user: 'Sarah Williams',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
      title: 'The Gwalior Heritage',
      content: 'The architectural details here are just insane. Every stone tells a story of a thousand years.',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1000',
      time: '2h ago', likes: '1.2k', comments: '84'
    },
    {
      id: 2,
      user: 'Aman_Photog',
      avatar: 'https://i.pravatar.cc/150?u=aman',
      title: 'Monsoon Vibes',
      content: 'Nothing beats the smell of rain on dry earth. Captured this right before the downpour.',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000',
      time: '4h ago', likes: '940', comments: '12'
    }
  ];

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col gap-6 animate-in fade-in duration-700 overflow-hidden font-sans no-italic-force select-none">
      
      {/* 1. ULTRA-PREMIUM NAV SWITCHER */}
      <div className="flex justify-between items-center bg-slate-200 py-[12px] backdrop-blur-xl px-8 rounded-[35px] border-2 border-blue-100/50 shadow-sm">
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-[15px] flex items-center justify-center text-white shadow-lg">
                <Sparkles size={20} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
                <h2 className="text-[20px] font-bold text-slate-900 tracking-tight leading-none">Feed Post</h2>
                <span className="text-[10px] font-black uppercase tracking-[2px] text-blue-500/60 mt-1">Social Hub</span>
            </div>
        </div>
        
        <div className="bg-blue-100/40 p-1.5 rounded-[20px] flex gap-2 border border-blue-100/60">
          <button 
            onClick={() => setActiveSubTab('view')}
            className={`flex items-center gap-2.5 px-6 py-2.5 rounded-[15px] font-bold text-[13px] transition-all duration-500 ${
              activeSubTab === 'view' ? 'bg-blue-600 text-white shadow-md scale-105' : 'text-slate-500 hover:text-blue-600'
            }`}
          >
            <LayoutGrid size={16} /> Stream
          </button>
          <button 
            onClick={() => setActiveSubTab('create')}
            className={`flex items-center gap-2.5 px-6 py-2.5 rounded-[15px] font-bold text-[13px] transition-all duration-500 ${
              activeSubTab === 'create' ? 'bg-blue-600 text-white shadow-md scale-105' : 'text-slate-500 hover:text-blue-600'
            }`}
          >
            <PlusSquare size={16} /> Compose
          </button>
        </div>
      </div>

      {/* 2. DYNAMIC CONTENT AREA */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-10">
        {activeSubTab === 'create' ? (
          /* CREATE POST: Balanced PC Scale */
          <div className="max-w-[1000px] mx-auto grid grid-cols-12 gap-6 animate-in zoom-in-95 duration-500 py-4">
              
              {/* LEFT: Info Section (7/12) */}
              <div className="col-span-7 bg-slate-300 rounded-[35px] p-8 shadow-lg border border-slate-200 flex flex-col justify-start gap-6 h-[500px]">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[20px] font-bold text-slate-900 tracking-tight">Create New Story</h3>
                    <p className="text-blue-700 font-semibold text-[13px] mt-0.5 opacity-80">Share your journey with SocialSphere.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col gap-1.5 group">
                      <label className="text-[11px] font-black text-black uppercase tracking-[1.5px] ml-1 opacity-70">Post Title</label>
                      <input 
                        type="text" 
                        placeholder="Title of your post..." 
                        className="w-full p-3.5 bg-white/90 rounded-[18px] font-semibold text-slate-700 text-[13px] outline-none border-2 border-transparent focus:border-blue-500/30 transition-all shadow-sm" 
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 group">
                      <label className="text-[11px] font-black text-black uppercase tracking-[1.5px] ml-1 opacity-70">Description</label>
                      <textarea 
                        placeholder="About your post..." 
                        className="w-full p-3.5 bg-white/90 rounded-[18px] font-semibold text-slate-700 h-28 text-[13px] outline-none resize-none border-2 border-transparent focus:border-blue-500/30 transition-all shadow-sm" 
                      />
                    </div>
                  </div>
                </div>

                <button className="group w-fit min-w-[200px] bg-blue-600 text-white py-3.5 px-8 rounded-[18px] font-bold uppercase tracking-[2px] text-[13px] flex items-center justify-center gap-3 shadow-lg hover:bg-blue-700 transition-all active:scale-95">
                  Publish Story <Send size={14} className="group-hover:translate-x-1" />
                </button>
              </div>

              {/* RIGHT: Media Section (5/12) */}
              <div className="col-span-5 h-[500px] relative group">
                {selectedImage ? (
                  <div className="relative h-full rounded-[35px] overflow-hidden shadow-xl border-4 border-white">
                    <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                    <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md text-white rounded-full hover:bg-red-500 transition-all">
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-full bg-white border-2 border-dashed border-slate-200 rounded-[35px] cursor-pointer hover:bg-blue-50/30 transition-all group shadow-sm overflow-hidden relative">
                    <div className="relative flex flex-col items-center gap-3">
                      <div className="w-14 h-14 bg-slate-50 rounded-[20px] flex items-center justify-center text-blue-500 shadow-inner group-hover:scale-110 transition-transform">
                        <Camera size={26} />
                      </div>
                      <div className="text-center">
                        <span className="block text-[14px] font-bold text-slate-800 tracking-tight">Visual Impact</span>
                        <span className="text-slate-400 font-semibold text-[11px]">Click to upload media</span>
                      </div>
                    </div>
                    <input type="file" className="hidden" onChange={handleImageUpload} />
                  </label>
                )}
              </div>
          </div>
        ) : (
          /* VIEW FEED: Compact Grid */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in slide-in-from-bottom-10 duration-700 p-2 font-sans">
            {feedPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-[35px] p-4 shadow-md border border-slate-100 hover:border-blue-200 transition-all duration-500 group cursor-pointer hover:-translate-y-1">
                <div className="relative aspect-[16/9] rounded-[28px] overflow-hidden mb-4 shadow-inner">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md p-1.5 pr-4 rounded-full border border-white/20">
                    <img src={post.avatar} className="w-7 h-7 rounded-full border-2 border-white" alt="" />
                    <span className="text-white font-bold text-[10px] tracking-tight">{post.user}</span>
                  </div>
                </div>

                <div className="px-3 pb-2">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[17px] font-bold text-slate-900 tracking-tight">{post.title}</h3>
                    <span className="text-slate-500 font-bold text-[9px] uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded-md">{post.time}</span>
                  </div>
                  <p className="text-slate-500 font-medium text-[13px] leading-relaxed mb-5 line-clamp-2">{post.content}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex gap-5">
                      <button className="flex items-center gap-2 text-slate-800 font-bold text-[12px] hover:text-rose-500 transition-all">
                        <Heart size={16} className="group-hover:text-rose-500 transition-all" /> {post.likes}
                      </button>
                      <button className="flex items-center gap-2 text-slate-800 font-bold text-[12px] hover:text-blue-600 transition-all">
                        <MessageSquare size={16} /> {post.comments}
                      </button>
                    </div>
                    <div className="flex gap-4 text-slate-300">
                      <Share2 size={16} className="hover:text-blue-600 transition-colors" />
                      <Bookmark size={16} className="hover:text-amber-500 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedView;