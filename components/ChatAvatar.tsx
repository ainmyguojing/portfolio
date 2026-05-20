"use client";

export default function ChatAvatar() {
  return (
    <div className="w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/avatar.png"
        alt="Jing Guo"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
