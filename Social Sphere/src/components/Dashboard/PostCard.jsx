import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

const PostCard = ({ user, content, image, likes, time }) => {
  return (
    <div className="w-full bg-white border border-slate-100 rounded-[30px] p-6 mb-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
          <div>
            <h4 className="font-bold text-slate-900 leading-none">{user.name}</h4>
            <p className="text-sm text-slate-400 mt-1">{time}</p>
          </div>
        </div>
        <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal /></button>
      </div>

      {/* Content */}
      <p className="text-slate-700 leading-relaxed mb-4">{content}</p>
      {image && (
        <div className="rounded-[20px] overflow-hidden border border-slate-50 mb-4">
          <img src={image} alt="Post content" className="w-full h-auto object-cover" />
        </div>
      )}

      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
        <div className="flex gap-6">
          <button className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors">
            <Heart size={20} /> <span className="font-bold">{likes}</span>
          </button>
          <button className="flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors">
            <MessageCircle size={20} /> <span className="font-bold">24</span>
          </button>
        </div>
        <button className="text-slate-400 hover:text-[#3b82f6]"><Share2 size={20} /></button>
      </div>
    </div>
  );
};

export default PostCard;