"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import ChatAvatar from "@/components/ChatAvatar";
import { TypingIndicator } from "@/components/ChatMessage";

const ALL_PROJECTS = [
  {
    title: "Community Q&A",
    description:
      "Designed and scaled a 0→1 community-driven contribution model across multiple product surfaces at Yelp.",
    tags: ["0→1", "Community", "Scale"],
    href: "/work/community-qa",
    company: "Yelp",
  },
  {
    title: "Recognition System",
    description:
      "Reward and feedback systems that form contribution and engagement behaviors.",
    tags: ["Engagement", "Systems"],
    href: "/work/recognition",
    company: "Yelp",
  },
  {
    title: "Elite Ecosystem Experiences",
    description:
      "Awareness campaigns, nomination flows, and ecosystem experiences reinforcing belonging.",
    tags: ["Community", "Campaigns"],
    href: "/work/elite",
    company: "Yelp",
  },
  {
    title: "Year on Yelp",
    description:
      "Reflection-driven experiences that reinforce user identity through personalized annual summaries.",
    tags: ["Identity", "Engagement"],
    href: "/work/year-on-yelp",
    company: "Yelp",
  },
  {
    title: "Smart Omix",
    description:
      "End-to-end product design for a decentralized clinical research platform.",
    tags: ["SaaS", "B2B", "Healthcare"],
    href: "/other-work/smart-omix",
    company: "Doc.ai",
  },
  {
    title: "Design System",
    description:
      "Built a design system on top of Material UI with brand consistency and engineer-ready documentation.",
    tags: ["Design System", "Material UI"],
    href: "/other-work/design-system",
    company: "Doc.ai",
  },
];

const INTRO_LINES = [
  "Hi, I'm Jing - Lead Product Designer at Yelp.",
  "I focus on a problem most platforms face: how do you get people to contribute, and keep contributing?",
  "I design the systems that make that happen at scale.",
];

const SUGGESTION_PILLS = [
  "Tell me more about you",
  "What's your strength as a designer?",
  "Show me your most impactful work",
  "How do you approach a vague, complex problem?",
];

interface Message {
  role: "user" | "assistant";
  content: string;
  suggestions?: string[];
}

function TypewriterText({ text, onComplete, speed = 30 }: { text: string; onComplete?: () => void; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      indexRef.current += 1;
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return <span>{displayed}</span>;
}

export default function Home() {
  const [phase, setPhase] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMessages = sessionStorage.getItem("chat-messages");
      const hasMessages = savedMessages && JSON.parse(savedMessages).length > 0;
      if (hasMessages) {
        const saved = sessionStorage.getItem("chat-phase");
        return saved ? parseInt(saved, 10) : 0;
      }
    }
    return 0;
  });
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("chat-messages");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [followUpSuggestions, setFollowUpSuggestions] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("chat-suggestions");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sessionStorage.setItem("chat-phase", String(phase));
  }, [phase]);

  useEffect(() => {
    sessionStorage.setItem("chat-messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    sessionStorage.setItem("chat-suggestions", JSON.stringify(followUpSuggestions));
  }, [followUpSuggestions]);

  useEffect(() => {
    if (phase === 0) {
      const timer = setTimeout(() => setPhase(1), 1200);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [phase, messages, isLoading]);

  const handleLine1Complete = useCallback(() => {
    setTimeout(() => setPhase(2), 400);
  }, []);

  const handleLine2Complete = useCallback(() => {
    setTimeout(() => setPhase(3), 400);
  }, []);

  const handleLine3Complete = useCallback(() => {
    setTimeout(() => setPhase(4), 600);
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue("");
    setIsLoading(true);
    setFollowUpSuggestions([]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();

      if (data.error) {
        setMessages([...updatedMessages, { role: "assistant", content: "Sorry, I'm having trouble responding right now. Please try again!" }]);
      } else {
        setMessages([...updatedMessages, { role: "assistant", content: data.response }]);
        if (data.suggestions && data.suggestions.length > 0) {
          setFollowUpSuggestions(data.suggestions);
        }
      }
    } catch {
      setMessages([...updatedMessages, { role: "assistant", content: "Sorry, something went wrong. Please try again!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handlePillClick = (pill: string) => {
    sendMessage(pill);
  };

  return (
    <div className="min-h-screen pt-14 flex flex-col">
      {/* Chat area */}
      <div className="flex-1 overflow-y-auto px-[10px] sm:px-0">
        <div className="max-w-full sm:max-w-[75vw] mx-auto py-6 sm:py-16">
          {/* Avatar + messages container */}
          <div className="flex items-start gap-4">
            <ChatAvatar />
            <div className="flex flex-col gap-0 flex-1 min-w-0">
              {/* Typing indicator before any text */}
              <AnimatePresence>
                {phase === 0 && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <TypingIndicator />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Intro message bubble */}
              {phase >= 1 && (
                <motion.div
                  className="bg-white border border-neutral-200 rounded-2xl px-4 py-3 max-w-full sm:max-w-[70%]"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-base leading-relaxed text-neutral-700">
                    {phase === 1 ? (
                      <TypewriterText text={INTRO_LINES[0]} onComplete={handleLine1Complete} />
                    ) : (
                      INTRO_LINES[0]
                    )}
                  </p>
                  {phase >= 2 && (
                    <p className="text-base leading-relaxed text-neutral-700 mt-1">
                      {phase === 2 ? (
                        <TypewriterText text={INTRO_LINES[1]} onComplete={handleLine2Complete} />
                      ) : (
                        INTRO_LINES[1]
                      )}
                    </p>
                  )}
                  {phase >= 3 && (
                    <p className="text-base leading-relaxed text-neutral-700 mt-1">
                      {phase === 3 ? (
                        <TypewriterText text={INTRO_LINES[2]} onComplete={handleLine3Complete} />
                      ) : (
                        INTRO_LINES[2]
                      )}
                    </p>
                  )}
                </motion.div>
              )}

              {/* Project cards carousel */}
              {phase >= 4 && (
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                  onAnimationComplete={() => setPhase(5)}
                >
                  <div className="relative overflow-hidden">
                    {/* Left gradient + chevron — hidden on mobile */}
                    <div id="carousel-left" className="hidden sm:flex absolute left-0 top-0 bottom-0 w-16 z-10 items-center justify-start pl-1 opacity-0 pointer-events-none transition-opacity duration-200" style={{ background: "linear-gradient(to right, #EDEDED 30%, transparent)" }}>
                      <button
                        onClick={() => {
                          const el = document.getElementById("chat-carousel");
                          if (el) el.scrollBy({ left: -272, behavior: "smooth" });
                        }}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-500 hover:text-[#2556F5] hover:border-[#2556F5]/40 transition-colors duration-200 pointer-events-auto shadow-sm"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                      </button>
                    </div>
                    {/* Right gradient + chevron — hidden on mobile */}
                    <div id="carousel-right" className="hidden sm:flex absolute right-0 top-0 bottom-0 w-16 z-10 items-center justify-end pr-1 transition-opacity duration-200" style={{ background: "linear-gradient(to left, #EDEDED 30%, transparent)" }}>
                      <button
                        onClick={() => {
                          const el = document.getElementById("chat-carousel");
                          if (el) el.scrollBy({ left: 272, behavior: "smooth" });
                        }}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-500 hover:text-[#2556F5] hover:border-[#2556F5]/40 transition-colors duration-200 pointer-events-auto shadow-sm"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                    <div
                      id="chat-carousel"
                      className="flex gap-3 overflow-x-auto pb-3 pt-1 -mx-1 px-1"
                      style={{ scrollbarWidth: "none" }}
                      onScroll={(e) => {
                        const el = e.currentTarget;
                        const leftEl = document.getElementById("carousel-left");
                        const rightEl = document.getElementById("carousel-right");
                        if (leftEl) {
                          if (el.scrollLeft > 10) {
                            leftEl.classList.remove("opacity-0", "pointer-events-none");
                            leftEl.classList.add("opacity-100");
                          } else {
                            leftEl.classList.add("opacity-0", "pointer-events-none");
                            leftEl.classList.remove("opacity-100");
                          }
                        }
                        if (rightEl) {
                          if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
                            rightEl.classList.add("opacity-0", "pointer-events-none");
                            rightEl.classList.remove("opacity-100");
                          } else {
                            rightEl.classList.remove("opacity-0", "pointer-events-none");
                            rightEl.classList.add("opacity-100");
                          }
                        }
                      }}
                    >
                    {ALL_PROJECTS.map((project) => (
                      <Link key={project.href} href={project.href} className="group block shrink-0 w-64">
                        <motion.div
                          className="bg-white rounded-xl border border-neutral-200 p-4 h-full flex flex-col hover:border-neutral-300 hover:shadow-md transition-all duration-200"
                          whileHover={{ scale: 1.02, boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex gap-1.5 mb-2">
                            <span className="text-[10px] text-neutral-700 font-semibold">
                              {project.company}
                            </span>
                            {project.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="text-[10px] text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-sm font-medium text-neutral-900 mb-1 leading-snug">
                            {project.title}
                          </h3>
                          <p className="text-xs text-neutral-500 leading-relaxed flex-1">
                            {project.description}
                          </p>
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-[#2556F5] mt-3 group-hover:gap-1.5 transition-all duration-200">
                            View case study
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </motion.div>
                      </Link>
                    ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Conversation messages */}
          {messages.length > 0 && (
            <div className="mt-8 space-y-6">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex items-start gap-4 ${msg.role === "user" ? "justify-end" : ""}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.role === "assistant" && <ChatAvatar />}
                  <div
                    className={`max-w-full sm:max-w-[70%] rounded-2xl px-4 py-3 ${
                      msg.role === "user"
                        ? "bg-[#2556F5] text-white"
                        : "bg-white border border-neutral-200 text-neutral-700"
                    }`}
                  >
                    <p
                      className="text-base leading-relaxed whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{
                        __html: msg.role === "assistant"
                          ? msg.content.replace(
                              /\[([^\]]+)\]\(([^)]+)\)/g,
                              '<a href="$2" class="text-[#2556F5] underline hover:text-[#1a3fc2]">$1</a>'
                            )
                          : msg.content
                      }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <ChatAvatar />
                  <div className="bg-white border border-neutral-200 rounded-2xl px-4 py-3">
                    <TypingIndicator />
                  </div>
                </motion.div>
              )}
            </div>
          )}

          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Bottom input area */}
      <AnimatePresence>
        {phase >= 5 && (
          <motion.div
            className="sticky bottom-0 bg-gradient-to-t from-[#EDEDED] via-[#EDEDED] to-transparent pt-16 sm:pt-12 pb-[32px] px-[10px] sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="max-w-full sm:max-w-[75vw] mx-auto">
              {/* Suggestion pills — horizontal scroll on mobile, wrap on desktop */}
              {(messages.length === 0 ? SUGGESTION_PILLS.length > 0 : followUpSuggestions.length > 0) && !isLoading && (
                <div className="flex sm:flex-wrap gap-2 mb-3 overflow-x-auto sm:overflow-x-visible" style={{ scrollbarWidth: "none" }}>
                  {(messages.length === 0 ? SUGGESTION_PILLS : followUpSuggestions).map((pill) => (
                    <button
                      key={pill}
                      onClick={() => handlePillClick(pill)}
                      className="text-sm text-neutral-600 bg-white border border-neutral-200 rounded-full px-4 py-2 hover:border-[#2556F5]/40 hover:text-[#2556F5] transition-colors duration-200 shrink-0 sm:shrink"
                    >
                      {pill}
                    </button>
                  ))}
                </div>
              )}

              {/* Input box */}
              <form onSubmit={handleSubmit} className="flex items-center gap-3 bg-white rounded-xl border border-neutral-200 px-4 py-3 shadow-sm focus-within:border-[#2556F5]/40 transition-colors duration-200">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask anything to know me and my work."
                  className="flex-1 bg-transparent outline-none text-sm text-neutral-900 placeholder:text-neutral-400"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-[#2556F5] transition-colors duration-200 shrink-0 disabled:opacity-40 disabled:hover:bg-neutral-900"
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
