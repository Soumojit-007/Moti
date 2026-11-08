import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { messages } from '../data/messages';
import { DecorativeHeart, VintageDivider } from './BotanicalAccents';

export const LittleHugModal = ({ isOpen, onClose, onReplay }) => {
  const data = messages.hugModal;

  useEffect(() => {
    if (isOpen) {
      // Gentle petal and heart confetti burst
      const end = Date.now() + 1800;
      const colors = ['#EBD2D0', '#C58D91', '#794A50', '#FFF9F4', '#F9EEE8'];

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: colors,
          shapes: ['circle'],
          ticks: 200,
          gravity: 0.8,
          scalar: 1.1,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: colors,
          shapes: ['circle'],
          ticks: 200,
          gravity: 0.8,
          scalar: 1.1,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Warm Backdrop with subtle blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-[#443438]/30 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Warm ambient glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute w-[450px] h-[450px] rounded-full bg-[#EBD2D0]/40 blur-3xl pointer-events-none"
          />

          {/* Physical note card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 120,
            }}
            className="relative z-10 w-full max-w-md bg-[#FFFCF8] paper-sheet rounded-sm p-7 sm:p-10 border border-[#EBD2D0] text-center paper-texture shadow-2xl"
          >
            {/* Top Washi Tape */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 washi-tape" />

            {/* Inner fine border */}
            <div className="absolute inset-3 pointer-events-none border border-[#EBD2D0]/50 rounded-xs" />

            {/* Floating Soft Heart Emblem */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.25, 1] }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center mb-5"
            >
              <div className="w-14 h-14 rounded-full bg-[#F9EEE8] border border-[#EBD2D0] flex items-center justify-center shadow-inner">
                <DecorativeHeart className="w-8 h-8 text-[#794A50]" />
              </div>
            </motion.div>

            {/* Final Thoughtful Message */}
            <div className="space-y-3 font-serif text-lg sm:text-xl text-[#443438] leading-relaxed my-4">
              <p className="font-dancing text-2xl sm:text-3xl text-[#794A50]">
                {data.lines[0]}
              </p>
              <p className="text-base sm:text-lg text-[#8B7777] italic font-serif">
                {data.lines[1]}
              </p>
              <div className="py-2">
                <VintageDivider className="my-1 text-[#C58D91]/40" />
              </div>
              <p className="font-playfair text-lg sm:text-xl text-[#443438] font-normal">
                {data.lines[2]}
              </p>
            </div>

            {/* Small decorative heart underneath */}
            <div className="flex justify-center my-4 text-[#C58D91]">
              <span className="text-lg">♡</span>
            </div>

            {/* Quiet, no-pressure options */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onReplay}
                className="w-full sm:w-auto px-5 py-2 rounded-full border border-[#EBD2D0] hover:border-[#C58D91] text-[#8B7777] hover:text-[#443438] bg-[#FFF9F4] font-serif italic text-xs tracking-wide transition-all"
              >
                {data.replayButton}
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#794A50] hover:bg-[#643B40] text-[#FFFCF8] font-serif text-xs tracking-wide shadow-sm hover:shadow transition-all"
              >
                {data.closeButton}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
