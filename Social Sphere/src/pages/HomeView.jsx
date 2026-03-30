import React, { useState, useRef } from 'react';
import { 
  TrendingUp, Users, Clock, Layers, Sparkles, Image as ImageIcon, 
  Camera, MoreHorizontal, Heart, MessageSquare, Share2, 
  BarChart3, Zap, ArrowUpRight, ArrowRight, Send
} from 'lucide-react';
import { useSocial } from '../context/SocialContext';

const HomeView = () => {
  const { user, posts, addPost } = useSocial();
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  // Stats Logic
  const stats = [
    { label: 'Total Network', value: '1.2k', theme: 'from-blue-600 to-cyan-400', shadow: 'group-hover:shadow-blue-500/30', icon: <Users size={18} /> },
    { label: 'Sphere Score', value: (posts.length * 1.5 + 4).toFixed(1), theme: 'from-indigo-600 to-pink-500', shadow: 'group-hover:shadow-purple-500/30', icon: <TrendingUp size={18} /> },
    { label: 'Engagement', value: '24%', theme: 'from-emerald-600 to-cyan-500', shadow: 'group-hover:shadow-emerald-500/30', icon: <Layers size={18} /> },
    { label: 'Live Stories', value: posts.length, theme: 'from-orange-500 to-yellow-400', shadow: 'group-hover:shadow-amber-500/30', icon: <Zap size={18} /> },
  ];

  // 📸 Image Handling Logic
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const triggerFileSelect = () => fileInputRef.current.click();

  // 🚀 Broadcast Logic
  const handleBroadcast = () => {
    if (!content.trim()) return alert("Write something to broadcast!");
    
    const newPost = {
      id: Date.now(),
      user: user.username,
      avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=Lucky`,
      title: `${user.username}'s Update`,
      content: content,
      image: selectedImage || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000',
      time: 'Just now',
      likes: '0',
      comments: '0'
    };

    addPost(newPost);
    setContent("");
    setSelectedImage(null);
    alert("Transmission Successful!");
  };

  return (
    <div className="flex-1 w-full flex flex-col gap-8 animate-in fade-in duration-1000 font-sans pb-10 overflow-y-auto no-scrollbar select-none mt-[-25px]">
      
      {/* 1. STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
        {stats.map((stat, i) => (
          <div key={i} className={`group relative h-32 rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-1 ${stat.shadow} cursor-pointer border border-white/20 shadow-sm`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.theme} opacity-100 group-hover:scale-110 transition-transform duration-700`}></div>
            <div className="relative h-full p-5 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <div className="p-2 rounded-xl bg-white/20 backdrop-blur-lg text-white border border-white/20">
                  {stat.icon}
                </div>
                <div className="text-[9px] font-bold text-white/90 border border-white/20 px-2 py-0.5 rounded-md uppercase tracking-wider bg-white/10">Live</div>
              </div>
              <div>
                <p className="text-white/70 font-bold text-[10px] uppercase tracking-[2px]">{stat.label}</p>
                <h3 className="text-[26px] font-bold text-white tracking-tight leading-none">{stat.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. CREATE QUICK BROADCAST (Updated UI) */}
<div className="bg-[#0f172a] rounded-[40px] p-6 border border-white/5 shadow-2xl relative overflow-hidden group">
  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full group-hover:opacity-100 opacity-50 transition-opacity"></div>
  <div className="relative z-10 flex flex-col gap-6">
    <div className="flex gap-5 items-center">
      <div className="relative p-1 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 shadow-lg shadow-blue-500/20">
        <img 
          src={`https://kenh14cdn.com/203336854389633024/2021/11/4/photo-1-16360000252341588868443.png`} 
          className="w-12 h-12 rounded-[14px] border-2 border-[#0f172a] bg-slate-800" 
          alt="Avatar" 
        />
        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#0f172a] rounded-full shadow-lg"></div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        {/* Updated Text: Create Your Post */}
        <h4 className="text-blue-400 font-black text-[10px] uppercase tracking-[3px] ml-1">Create Your Post</h4>
        <input 
          type="text" 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={`What's the latest update in the Sphere?`} 
          className="w-full bg-white/5 border border-white/10 rounded-[22px] px-6 py-4 text-[14px] font-medium text-blue-50 outline-none focus:bg-white/10 focus:border-blue-500/40 transition-all placeholder:text-slate-500"
        />
      </div>
    </div>

    {/* Image/File Preview */}
    {selectedImage && (
      <div className="relative w-44 h-24 ml-16 rounded-2xl overflow-hidden border-2 border-blue-500/30 group/preview animate-in zoom-in duration-300">
        <img src={selectedImage} className="w-full h-full object-cover" alt="Preview" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity">
           <button onClick={() => setSelectedImage(null)} className="text-white bg-red-500 p-1.5 rounded-lg text-[10px] font-bold">Remove</button>
        </div>
      </div>
    )}

    <div className="flex items-center justify-between pt-4 border-t border-white/5">
      <div className="flex gap-5 ml-16">
        {/* Hidden File Input */}
        <input type="file" ref={fileInputRef} className="hidden" onChange={handleImageChange} />
        
        {/* Updated Button: Upload Document */}
        <button 
          onClick={triggerFileSelect} 
          className="flex items-center gap-2.5 text-slate-400 hover:text-white font-bold text-[11px] uppercase tracking-wider transition-all group/btn bg-white/5 px-4 py-2 rounded-xl border border-transparent hover:border-white/10"
        >
          <div className="p-1.5 bg-white/10 rounded-lg group-hover/btn:bg-blue-600 transition-colors">
            <Layers size={14} className="text-white" />
          </div>
          Upload Document
        </button>
      </div>

      <button 
        onClick={handleBroadcast}
        className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-[18px] font-bold uppercase tracking-[2px] text-[11px] transition-all hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 shadow-lg shadow-blue-500/30"
      >
        Broadcast <Send size={14} />
      </button>
    </div>
  </div>
</div>

      {/* 3. RECENT BROADCASTS (Live Sync) */}
      <div className="bg-white border border-slate-100 rounded-[40px] p-2 shadow-sm min-h-[150px] flex flex-col">
        <div className="p-6 flex justify-between items-center border-b border-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-xl text-blue-600 shadow-inner"><BarChart3 size={18} /></div>
            <h4 className="text-slate-900 font-black text-[17px] tracking-tight">Recent Activity</h4>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Real-time Stream</span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {posts.length > 0 ? (
            posts.slice(0, 2).map((post) => (
              <div key={post.id} className="flex items-center gap-6 p-4 rounded-[30px] bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 transition-all cursor-pointer group">
                <div className="relative">
                  <img src={post.image} className="w-32 h-20 rounded-2xl object-cover shadow-md group-hover:scale-105 transition-transform duration-500" alt="" />
                  <div className="absolute -top-2 -left-2 bg-blue-600 text-white text-[8px] font-black px-2 py-0.5 rounded-md">NEW</div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h6 className="text-slate-900 font-bold text-[15px] tracking-tight">{post.title}</h6>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">{post.time}</span>
                  </div>
                  <p className="text-slate-500 text-[12px] line-clamp-1 mt-1 font-medium">{post.content}</p>
                  <div className="flex gap-4 mt-3">
                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-rose-500"><Heart size={14} /> {post.likes}</span>
                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-blue-500"><MessageSquare size={14}/> {post.comments}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-10 text-center opacity-20">
              <Layers size={32} className="mx-auto mb-2" />
              <p className="text-[11px] font-bold uppercase tracking-widest">No Active Transmissions</p>
            </div>
          )}
        </div>
      </div>

      {/* 4. SYSTEM LOGS & GOALS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto">
        <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex flex-col group">
          <h3 className="text-[18px] font-bold text-slate-900 tracking-tight flex items-center gap-3 mb-6 uppercase tracking-[1px]">
            <BarChart3 size={18} className="text-blue-600" /> Intelligence Logs
          </h3>
          <div className="space-y-4">
            {[{ title: 'Security Protocol', desc: 'Session end-to-end encrypted.', time: 'Just Now' }, { title: 'Network Pulse', desc: 'Global Sphere nodes stable.', time: '12m ago' }].map((log, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-blue-100 transition-all">
                <div className="p-2 bg-white rounded-lg shadow-sm text-slate-400"><Clock size={16} /></div>
                <div><h5 className="text-slate-900 font-bold text-[13px]">{log.title}</h5><p className="text-slate-500 text-[11px] font-medium">{log.desc}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0f172a] p-8 rounded-[40px] border border-white/5 shadow-2xl flex flex-col overflow-hidden">
          <h3 className="text-[18px] font-bold text-white tracking-tight flex items-center gap-3 mb-8 uppercase tracking-[1px]">
            <Zap className="text-amber-400" size={18} /> Performance
          </h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-white/60 font-bold text-[10px] uppercase tracking-[2px]"><span>System Authority</span><span>94%</span></div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-blue-600 rounded-full" style={{ width: '94%' }}></div></div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-white/60 font-bold text-[10px] uppercase tracking-[2px]"><span>Sphere Reach</span><span>72%</span></div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-purple-600 rounded-full" style={{ width: '72%' }}></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. FOOTER */}
      <footer className="rounded-[40px] bg-white border border-slate-100 p-8 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg"><Sparkles size={18} /></div>
             <h2 className="text-[20px] font-black text-slate-900 tracking-tighter">SocialSphere <span className="text-[10px] text-blue-600 align-top ml-1">V2.8</span></h2>
          </div>
          <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Documentation</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-slate-200">|</span>
            <span className="text-slate-900">© 2026 Crafted by Manas</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeView;