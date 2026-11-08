import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { messages } from '../data/messages';
import { VintageDivider } from './BotanicalAccents';

export const Envelope = ({ onOpenComplete }) => {
  const [isOpenSequence, setIsOpenSequence] = useState(false);
  const data = messages.screen1;

  const handleOpen = () => {
    if (isOpenSequence) return;
    setIsOpenSequence(true);

    // Timeline for cinematic opening:
    // 0ms: seal fades/breaks
    // 400ms: flap flips up in 3D
    // 900ms: letter paper slides up from inside
    // 1800ms: transition to Screen 2
    setTimeout(() => {
      onOpenComplete();
    }, 1900);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[92vh] px-4 py-8 text-center max-w-2xl mx-auto">
      {/* Top Tagline */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-[11px] sm:text-xs tracking-[0.25em] text-[#C58D91] font-serif uppercase mb-3"
      >
        {data.tagline}
      </motion.p>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className="font-playfair text-4xl sm:text-5xl md:text-6xl text-[#443438] font-normal mb-4 tracking-tight"
      >
        {data.heading}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <VintageDivider className="my-2 mb-4" />
      </motion.div>

      {/* Supporting Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-[#8B7777] font-sans-body text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-8 px-2"
      >
        {data.subheading}
      </motion.p>

      {/* Interactive 3D Vintage Envelope */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative my-4 cursor-pointer select-none group"
        onClick={handleOpen}
        aria-label="Click to open letter"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOpen();
          }
        }}
      >
        {/* Floating Idle Animation container */}
        <motion.div
          animate={
            isOpenSequence
              ? { y: 0, rotate: 0 }
              : {
                  y: [-3, 4, -3],
                  rotate: [-0.5, 0.5, -0.5],
                }
          }
          transition={{
            duration: 5,
            repeat: isOpenSequence ? 0 : Infinity,
            ease: "easeInOut",
          }}
          className="relative w-[300px] sm:w-[360px] h-[200px] sm:h-[230px] rounded-lg envelope-shadow transition-transform duration-300 group-hover:scale-[1.02]"
          style={{ perspective: 1200 }}
        >
          {/* Base Envelope Body (Back Panel) */}
          <div className="absolute inset-0 bg-[#F9EEE8] rounded-lg border border-[#EBD2D0] overflow-hidden">
            {/* Subtle paper grain */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#C58D91_0.5px,transparent_0.5px)] [background-size:16px_16px]" />
          </div>

          {/* Letter Peeking / Emerging from inside pocket */}
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={
              isOpenSequence
                ? { y: -110, opacity: 1, scale: 1.05 }
                : { y: 0, opacity: 0.4 }
            }
            transition={{
              duration: 1,
              delay: isOpenSequence ? 0.6 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-[5%] right-[5%] top-[10%] h-[180px] bg-[#FFFCF8] rounded-sm border border-[#EBD2D0] p-4 shadow-md z-10 flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="w-full h-full border border-dashed border-[#C58D91]/30 rounded-xs p-3 flex flex-col items-center justify-center">
              <span className="font-dancing text-xl text-[#794A50] mb-1">Dear you,</span>
              <div className="w-16 h-[1px] bg-[#C58D91]/40 mb-2" />
              <p className="font-serif italic text-xs text-[#8B7777] text-center line-clamp-3">
                "Sometimes, we get so comfortable with someone's presence that we forget..."
              </p>
            </div>
          </motion.div>

          {/* Front Envelope Pocket (Left, Right, Bottom triangular folds) */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-lg">
            {/* Left triangle */}
            <div
              className="absolute inset-0 bg-[#FFF9F4] border-l border-b border-[#EBD2D0]/60"
              style={{
                clipPath: 'polygon(0 0, 0 100%, 50% 50%)',
              }}
            />
            {/* Right triangle */}
            <div
              className="absolute inset-0 bg-[#FFF9F4] border-r border-b border-[#EBD2D0]/60"
              style={{
                clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)',
              }}
            />
            {/* Bottom triangle fold */}
            <div
              className="absolute inset-0 bg-[#FFFCF8] border-b border-[#EBD2D0]"
              style={{
                clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)',
                boxShadow: '0 -2px 6px rgba(121, 74, 80, 0.04)',
              }}
            />

            {/* Handwritten Label on front */}
            <div className="absolute bottom-6 left-0 right-0 text-center z-30">
              <span className="font-dancing text-lg sm:text-xl text-[#794A50] tracking-wide bg-[#FFFCF8]/90 px-4 py-0.5 rounded-full border border-[#EBD2D0]/40 shadow-xs">
                {data.envelopeLabel}
              </span>
            </div>
          </div>

          {/* Envelope Top Flap (Opens in 3D) */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isOpenSequence ? -180 : 0 }}
            transition={{
              duration: 0.85,
              delay: isOpenSequence ? 0.3 : 0,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              transformOrigin: 'top center',
              transformStyle: 'preserve-3d',
            }}
            className="absolute inset-x-0 top-0 h-[120px] sm:h-[135px] z-30"
          >
            {/* Flap triangular shape */}
            <div
              className="w-full h-full bg-[#FFF9F4] border-t border-[#EBD2D0] relative"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                boxShadow: '0 4px 8px rgba(121, 74, 80, 0.08)',
              }}
            >
              {/* Inner subtle fold gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#F9EEE8]/60 to-transparent" />
            </div>

            {/* Burgundy Wax Seal with Heart Emblem */}
            <AnimatePresence>
              {!isOpenSequence && (
                <motion.div
                  initial={{ scale: 1, opacity: 1 }}
                  exit={{
                    scale: [1, 1.3, 0],
                    opacity: [1, 0.8, 0],
                    filter: "blur(4px)",
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full wax-seal flex items-center justify-center cursor-pointer z-40 transition-transform group-hover:scale-105"
                  title="Click to open"
                >
                  {/* Embossed inner ring */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#FFFCF8]/30 flex items-center justify-center shadow-inner">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFFCF8]/90">
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Open Button below */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-8"
      >
        <button
          onClick={handleOpen}
          disabled={isOpenSequence}
          className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#794A50] hover:bg-[#643B40] text-[#FFFCF8] shadow-md hover:shadow-lg transition-all duration-300 font-serif tracking-wide text-base disabled:opacity-75 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>{isOpenSequence ? "Unfolding your letter..." : data.openButton}</span>
          {!isOpenSequence && (
            <span className="text-[#EBD2D0] group-hover:scale-125 transition-transform duration-300">
              ♡
            </span>
          )}
        </button>
        <p className="text-[11px] text-[#8B7777]/80 font-serif italic mt-2.5">
          Tap the envelope or button to open
        </p>
      </motion.div>
    </div>
  );
};
