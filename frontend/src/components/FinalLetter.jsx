import React from 'react';
import { motion } from 'framer-motion';
import { messages } from '../data/messages';
import { LetterPaper } from './LetterPaper';
import { VintageDivider } from './BotanicalAccents';
import { ArrowLeft, Heart } from 'lucide-react';

export const FinalLetter = ({ onSendHug, onPrev }) => {
  const data = messages.screen5;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <LetterPaper showStamp={true} showCornerFlourishes={true}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col text-left"
      >
        {/* Small Pre-heading */}
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#C58D91] font-serif mb-2"
        >
          {data.preHeading}
        </motion.p>

        {/* Letter Paragraphs */}
        <div className="space-y-4 sm:space-y-5 text-[#443438] font-sans-body text-base sm:text-lg leading-[1.85] font-normal">
          {data.paragraphs.map((p, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className={`${
                index === 2 || index === 4 || index === 8
                  ? 'text-[#443438] font-medium'
                  : 'text-[#443438]/90'
              }`}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="my-8 sm:my-10">
          <VintageDivider />
        </motion.div>

        {/* Climax Statements in Very Large Cormorant Garamond */}
        <motion.div
          variants={itemVariants}
          className="text-center my-4 py-6 px-4 bg-[#F9EEE8]/50 rounded-sm border border-[#EBD2D0]/60 shadow-xs"
        >
          <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-[#794A50] font-medium italic leading-relaxed sm:leading-snug mb-3">
            "{data.statement1}"
          </h2>
          <p className="font-cormorant text-xl sm:text-2xl text-[#8B7777] italic">
            "{data.statement2}"
          </p>
        </motion.div>

        {/* Signature in Dancing Script */}
        <motion.div
          variants={itemVariants}
          className="mt-8 mb-6 text-right sm:pr-8"
        >
          <p className="font-dancing text-xl sm:text-2xl text-[#8B7777] mb-1">
            {data.signoff}
          </p>
          <p className="font-dancing text-2xl sm:text-3xl text-[#794A50] font-semibold tracking-wide">
            {data.signature}
          </p>
        </motion.div>

        {/* Bottom Interaction Area */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-[#EBD2D0]/40 flex flex-col items-center justify-center gap-4 text-center"
        >
          <button
            onClick={onSendHug}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#794A50] hover:bg-[#643B40] text-[#FFFCF8] shadow-md hover:shadow-lg transition-all duration-300 font-serif text-base tracking-wide transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Heart className="w-4 h-4 text-[#EBD2D0] fill-[#EBD2D0] group-hover:scale-125 transition-transform duration-300" />
            <span>{data.hugButton}</span>
          </button>

          <p className="font-serif italic text-xs text-[#8B7777]">
            Press gently when you are ready
          </p>

          {/* Discreet previous link */}
          <div className="w-full flex justify-between items-center pt-4 text-xs text-[#8B7777]">
            <button
              onClick={onPrev}
              className="flex items-center gap-1 hover:text-[#443438] font-serif italic transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Review previous pages</span>
            </button>
            <span className="font-serif text-[#C58D91] tracking-widest uppercase">Part 4 of 4</span>
          </div>
        </motion.div>
      </motion.div>
    </LetterPaper>
  );
};
