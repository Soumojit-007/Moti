import React from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, VintageStamp } from './BotanicalAccents';

export const LetterPaper = ({
  children,
  className = "",
  showStamp = true,
  showCornerFlourishes = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -18, scale: 0.985 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full max-w-[740px] mx-auto paper-sheet rounded-sm p-6 sm:p-12 md:p-16 my-6 sm:my-10 paper-texture ${className}`}
    >
      {/* Decorative Double Hairline Inner Border */}
      <div className="absolute inset-3 sm:inset-5 pointer-events-none border border-[#EBD2D0]/60 rounded-xs" />
      <div className="absolute inset-4 sm:inset-6 pointer-events-none border border-[#C58D91]/25 rounded-xs" />

      {/* Corner Botanical Flourishes */}
      {showCornerFlourishes && (
        <>
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 pointer-events-none">
            <CornerFlourish className="w-8 h-8 sm:w-12 sm:h-12 text-[#C58D91]/40" />
          </div>
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 pointer-events-none rotate-90">
            <CornerFlourish className="w-8 h-8 sm:w-12 sm:h-12 text-[#C58D91]/40" />
          </div>
          <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 pointer-events-none -rotate-90">
            <CornerFlourish className="w-8 h-8 sm:w-12 sm:h-12 text-[#C58D91]/40" />
          </div>
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 pointer-events-none rotate-180">
            <CornerFlourish className="w-8 h-8 sm:w-12 sm:h-12 text-[#C58D91]/40" />
          </div>
        </>
      )}

      {/* Subtle Vintage Postmark Stamp (Top Right) */}
      {showStamp && (
        <div className="absolute top-5 right-6 sm:top-8 sm:right-10 pointer-events-none opacity-40 select-none">
          <VintageStamp className="w-14 h-14 sm:w-18 sm:h-18 text-[#C58D91]" />
        </div>
      )}

      {/* Main Content Area */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </motion.div>
  );
};
