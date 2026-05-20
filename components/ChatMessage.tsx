"use client";

import { motion } from "framer-motion";

interface ChatMessageProps {
  children: React.ReactNode;
  isTyping?: boolean;
  delay?: number;
}

export function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-neutral-400"
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function ChatMessage({ children, delay = 0 }: ChatMessageProps) {
  return (
    <motion.div
      className="flex items-start gap-3 max-w-2xl"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="chat-bubble">{children}</div>
    </motion.div>
  );
}
