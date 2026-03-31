import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

const PostCard = ({ user, content, image, likes, time }) => {
  return (
    <div className="w-full bg-white border border-slate-100 rounded-[20px] sm:rounded-[30px] p-4 sm:p-6 mb-4 sm:mb-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <img src={user.avatar} alt={user.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-sm" />
          <div>
            <h4 className="font-bold text-[14px] sm:text-[15px] text-slate-900 leading-none">{user.name}</h4>
            <p className="text-[12px] sm:text-sm text-slate-400 mt-1">{time}</p>
          </div>
        </div>
        <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={20} /></button>
      </div>

      {/* Content */}
      <p className="text-[13px] sm:text-[15px] text-slate-700 leading-relaxed mb-3 sm:mb-4">{content}</p>
      {image && (
        <div className="rounded-[14px] sm:rounded-[20px] overflow-hidden border border-slate-50 mb-3 sm:mb-4">
          <img src={image} alt="Post content" className="w-full h-auto object-cover" />
        </div>
      )}

      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-50">
        <div className="flex gap-4 sm:gap-6">
          <button className="flex items-center gap-1.5 sm:gap-2 text-slate-500 hover:text-red-500 transition-colors">
            <Heart size={18} /> <span className="font-bold text-[13px] sm:text-[14px]">{likes}</span>
          </button>
          <button className="flex items-center gap-1.5 sm:gap-2 text-slate-500 hover:text-blue-500 transition-colors">
            <MessageCircle size={18} /> <span className="font-bold text-[13px] sm:text-[14px]">24</span>
          </button>
        </div>
        <button className="text-slate-400 hover:text-[#3b82f6]"><Share2 size={18} /></button>
      </div>
    </div>
  );
};

export default PostCard;