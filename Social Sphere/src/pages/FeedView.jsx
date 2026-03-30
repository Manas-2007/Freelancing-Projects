import React, { useState } from 'react';
import { Image as ImageIcon, Send, Heart, MessageSquare, Share2, Bookmark, PlusSquare, LayoutGrid, X, Camera, Sparkles } from 'lucide-react';

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
    <div className="h-[calc(100vh-140px)] flex flex-col gap-6 animate-in fade-in duration-700 overflow-hidden font-['Plus_Jakarta_Sans']">
      
      {/* 1. ULTRA-PREMIUM NAV SWITCHER */}
      <div className="flex justify-between items-center bg-white/80 backdrop-blur-xl p-3 px-6 rounded-[32px] border border-white shadow-[0_8px_32px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <Sparkles size={20} />
            </div>
            <h2 className="text-[22px] font-[1000] text-slate-900 tracking-tighter italic">Feed Engine</h2>
        </div>
        
        <div className="bg-slate-100/50 p-1.5 rounded-2xl flex gap-1 border border-slate-100">
          <button 
            onClick={() => setActiveSubTab('view')}
            className={`flex items-center gap-2 px-8 py-2.5 rounded-xl font-[900] text-[13px] transition-all duration-500 ${
              activeSubTab === 'view' ? 'bg-[#0f172a] text-white shadow-2xl scale-105' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <LayoutGrid size={16} /> Stream
          </button>
          <button 
            onClick={() => setActiveSubTab('create')}
            className={`flex items-center gap-2 px-8 py-2.5 rounded-xl font-[900] text-[13px] transition-all duration-500 ${
              activeSubTab === 'create' ? 'bg-[#0f172a] text-white shadow-2xl scale-105' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <PlusSquare size={16} /> Compose
          </button>
        </div>
      </div>

      {/* 2. DYNAMIC CONTENT AREA */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-6">
        
        {activeSubTab === 'create' ? (
          /* CREATE POST: ZERO-SCROLL SPLIT UI */
          <div className="h-full max-w-[1100px] mx-auto grid grid-cols-12 gap-6 animate-in zoom-in-95 duration-500 pb-4">
             {/* LEFT: Info Section (5/12) */}
             <div className="col-span-5 bg-white rounded-[40px] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.08)] border border-white flex flex-col justify-between h-full">
                <div className="space-y-8">
                    <div>
                        <h3 className="text-[28px] font-[1000] text-slate-900 tracking-tighter leading-tight">Create New <br/>Story</h3>
                        <p className="text-slate-400 font-[700] text-[14px] mt-2 italic">Fill in the details to inspire the world.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex flex-col gap-2 group">
                            <label className="text-[11px] font-[1000] text-slate-400 uppercase tracking-[3px] ml-1 group-focus-within:text-blue-500 transition-colors">Post Title</label>
                            <input type="text" placeholder="Gwalior Fort Vibe..." className="w-full p-4.5 bg-slate-50 rounded-[22px] font-[700] outline-none border-2 border-transparent focus:border-blue-500/20 focus:bg-white transition-all shadow-inner" />
                        </div>
                        <div className="flex flex-col gap-2 group">
                            <label className="text-[11px] font-[1000] text-slate-400 uppercase tracking-[3px] ml-1 group-focus-within:text-blue-500 transition-colors">Description</label>
                            <textarea placeholder="Capturing the essence of legacy..." className="w-full p-4.5 bg-slate-50 rounded-[22px] font-[700] h-32 outline-none resize-none border-2 border-transparent focus:border-blue-500/20 focus:bg-white transition-all shadow-inner" />
                        </div>
                    </div>
                </div>

                <button className="group w-full bg-[#0f172a] text-white py-5 rounded-[24px] font-[1000] uppercase tracking-[3px] flex items-center justify-center gap-3 shadow-2xl shadow-slate-200 hover:bg-blue-600 transition-all hover:-translate-y-1 active:scale-95">
                   Publish Story <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </div>

             {/* RIGHT: High-Res Media (7/12) */}
             <div className="col-span-7 h-full relative group">
                {selectedImage ? (
                  <div className="relative h-full rounded-[45px] overflow-hidden shadow-2xl border-4 border-white animate-in fade-in duration-500">
                    <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    <button onClick={() => setSelectedImage(null)} className="absolute top-8 right-8 p-3 bg-white/20 backdrop-blur-xl text-white rounded-full border border-white/40 hover:bg-red-500 hover:border-transparent transition-all shadow-2xl">
                      <X size={24} />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-full bg-white border-2 border-dashed border-slate-200 rounded-[45px] cursor-pointer hover:bg-blue-50/50 hover:border-blue-200 transition-all group shadow-sm overflow-hidden relative">
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative flex flex-col items-center gap-4">
                        <div className="w-20 h-20 bg-blue-50 rounded-[30px] flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                            <Camera size={38} />
                        </div>
                        <div className="text-center">
                            <span className="block text-[18px] font-[1000] text-slate-800">Visual Impact</span>
                            <span className="text-slate-400 font-[800] text-[13px]">Attach High-Res Media</span>
                        </div>
                    </div>
                    <input type="file" className="hidden" onChange={handleImageUpload} />
                  </label>
                )}
             </div>
          </div>
        ) : (
          /* VIEW FEED: MAGAZINE GRID */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in slide-in-from-bottom-10 duration-700 p-2">
            {feedPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-[45px] p-3 shadow-[0_15px_50px_-20px_rgba(0,0,0,0.06)] border border-white hover:border-blue-100 transition-all duration-500 group cursor-pointer hover:shadow-[0_30px_80px_-20px_rgba(59,130,246,0.15)] hover:-translate-y-1">
                <div className="relative aspect-video rounded-[38px] overflow-hidden mb-6 shadow-inner">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/20 backdrop-blur-xl p-2 pr-5 rounded-full border border-white/30 shadow-2xl">
                    <img src={post.avatar} className="w-8 h-8 rounded-full border-2 border-white shadow-lg" alt="" />
                    <span className="text-white font-[1000] text-[12px] tracking-tight">{post.user}</span>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-[24px] font-[1000] text-slate-900 italic tracking-tighter leading-none">{post.title}</h3>
                    <span className="text-slate-300 font-[900] text-[10px] uppercase tracking-widest">{post.time}</span>
                  </div>
                  <p className="text-slate-500 font-[600] text-[15px] leading-relaxed mb-8 line-clamp-2">{post.content}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex gap-8">
                      <button className="flex items-center gap-2.5 text-slate-900 font-[1000] text-[14px] hover:text-rose-500 transition-all">
                        <Heart size={20} className="group-hover:scale-125 transition-transform" /> {post.likes}
                      </button>
                      <button className="flex items-center gap-2.5 text-slate-900 font-[1000] text-[14px] hover:text-blue-500 transition-all">
                        <MessageSquare size={20} className="group-hover:scale-125 transition-transform" /> {post.comments}
                      </button>
                    </div>
                    <div className="flex gap-5 text-slate-300">
                      <Share2 size={20} className="hover:text-blue-600 transition-colors" />
                      <Bookmark size={20} className="hover:text-amber-500 transition-colors" />
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