import React, { useState } from 'react';
import { Send, PlusSquare, LayoutGrid, X, Camera, Trash2 } from 'lucide-react';
import { useSocial } from '../context/SocialContext'; 

const FeedView = () => {
  const { user, posts, addPost, deletePost } = useSocial(); 
  const [activeSubTab, setActiveSubTab] = useState('view');
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
  };

  const handlePublish = () => {
    if (!title.trim() || !content.trim()) {
      alert("Fields cannot be empty!");
      return;
    }
    const newPost = {
      id: Date.now(),
      user: user.username,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`,
      title, content,
      image: selectedImage || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000',
      time: 'Just now',
      likes: '0',
      comments: '0'
    };
    addPost(newPost);
    setTitle(""); setContent(""); setSelectedImage(null);
    setActiveSubTab('view');
  };

  return (
    <div className="h-[calc(100vh-70px)] md:h-[calc(100vh-100px)] flex flex-col gap-2 animate-in fade-in duration-700 overflow-hidden font-sans select-none mt-[-10px]">
      
      {/* 1. CAPSULE SWITCHER */}
      <div className="flex justify-center py-2 sticky top-0 z-50">
        <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-full flex gap-1 border border-slate-200 shadow-sm">
          <button 
            onClick={() => setActiveSubTab('view')} 
            className={`flex items-center gap-1.5 sm:gap-2 px-5 sm:px-8 py-2 rounded-full font-bold text-[11px] sm:text-[12px] transition-all duration-300 ${
              activeSubTab === 'view' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'text-slate-500 hover:text-blue-600'
            }`}
          >
            <LayoutGrid size={13} /> Stream
          </button>
          <button 
            onClick={() => setActiveSubTab('create')} 
            className={`flex items-center gap-1.5 sm:gap-2 px-5 sm:px-8 py-2 rounded-full font-bold text-[11px] sm:text-[12px] transition-all duration-300 ${
              activeSubTab === 'create' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'text-slate-500 hover:text-blue-600'
            }`}
          >
            <PlusSquare size={13} /> Compose
          </button>
        </div>
      </div>

      {/* 2. DYNAMIC CONTENT AREA */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-10 pt-2">
        {activeSubTab === 'create' ? (
          /* COMPOSE FORM */
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 p-3 sm:p-4 animate-in slide-in-from-bottom-4">
            <div className="md:col-span-7 bg-white rounded-[28px] sm:rounded-[40px] p-5 sm:p-8 shadow-xl border border-slate-100 flex flex-col gap-4 sm:gap-5">
              <div>
                <h3 className="text-[18px] sm:text-[22px] font-bold text-slate-900 tracking-tight">New Story</h3>
                <p className="text-slate-400 text-[12px] font-medium mt-1">What's happening in your world?</p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Catchy Title..." className="w-full p-3 sm:p-4 bg-slate-50 rounded-3xl font-semibold text-slate-800 outline-none border-2 border-transparent focus:border-blue-500/20 transition-all text-[14px]" />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Tell your story..." className="w-full p-3 sm:p-4 bg-slate-50 rounded-3xl font-semibold text-slate-800 h-28 sm:h-32 outline-none resize-none border-2 border-transparent focus:border-blue-500/20 transition-all text-[14px]" />
              </div>
              <button onClick={handlePublish} className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-3xl font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
                Broadcast Now <Send size={14} />
              </button>
            </div>

            <div className="md:col-span-5">
              {selectedImage ? (
                <div className="relative h-full min-h-[220px] sm:min-h-[300px] rounded-[28px] sm:rounded-[40px] overflow-hidden border-4 border-white shadow-xl">
                  <img src={selectedImage} className="w-full h-full object-cover" alt="" />
                  <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-red-500 transition-colors"><X size={18} /></button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-full min-h-[220px] sm:min-h-[400px] bg-white border-2 border-dashed border-slate-200 rounded-[28px] sm:rounded-[40px] cursor-pointer hover:bg-blue-50/50 hover:border-blue-300 transition-all group">
                  <div className="p-4 sm:p-5 bg-blue-50 rounded-3xl text-blue-500 group-hover:scale-110 transition-transform">
                    <Camera size={28} />
                  </div>
                  <span className="text-slate-900 font-bold mt-3 sm:mt-4 text-[14px]">Visual Cover</span>
                  <p className="text-slate-400 text-[11px] mt-1 font-medium italic">Click to upload media</p>
                  <input type="file" className="hidden" onChange={handleImageUpload} />
                </label>
              )}
            </div>
          </div>
        ) : (
          /* STREAM VIEW */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 p-2 sm:p-4 max-w-[1200px] mx-auto animate-in slide-in-from-bottom-4">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className="group relative bg-white rounded-[28px] sm:rounded-[40px] p-3 sm:p-5 shadow-lg border border-slate-50 transition-all hover:border-blue-100 hover:shadow-xl">
                  {post.user === user.username && (
                   <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Card click event ko rokne ke liye
                      window.confirm("System: Delete story?") && deletePost(post.id);
                    }} 
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 p-2 sm:p-2.5 
                              bg-red-50 text-red-500 rounded-full transition-all 
                              hover:bg-red-500 hover:text-white active:scale-90
                              /* 🔥 MOBILE FIX: Hamesha dikhega, Desktop par sirf Hover par */
                              opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                  >
                    <Trash2 size={13} />
                  </button>
                  )}
                  <div className="relative aspect-video rounded-[18px] sm:rounded-[30px] overflow-hidden mb-3 sm:mb-4 bg-slate-100 shadow-inner">
                    <img src={post.image || post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" />
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex items-center gap-2 bg-black/30 backdrop-blur-md p-1.5 pr-3 sm:pr-4 rounded-full border border-white/20">
                      <img src={post.avatar} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white" alt="" />
                      <span className="text-white font-bold text-[9px] sm:text-[10px] tracking-tight">@{post.user}</span>
                    </div>
                  </div>
                  <div className="px-1 sm:px-2">
                    <h3 className="text-[15px] sm:text-[18px] font-bold text-slate-900 tracking-tight">{post.title}</h3>
                    <p className="text-slate-400 font-medium text-[12px] sm:text-[13px] mt-1.5 sm:mt-2 line-clamp-2 leading-relaxed">{post.content}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 sm:py-32 flex flex-col items-center opacity-40">
                 <LayoutGrid size={48} className="text-slate-300 mb-4" />
                 <p className="text-slate-500 font-bold italic text-lg">Your stream is silent.</p>
                 <button onClick={() => setActiveSubTab('create')} className="text-blue-600 text-sm font-bold mt-2 hover:underline">Compose a story</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedView;