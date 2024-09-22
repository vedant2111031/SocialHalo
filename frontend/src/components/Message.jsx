import React from "react";

const Message = ({message}) => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="chat-header text-slate-900">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50 text-slate-900">12:45</time>
        </div>
        <div className="chat-bubble">{message?.message}</div>
        
      </div>
    </div>
  );
};

export default Message;
