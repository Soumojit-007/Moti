import React from 'react';
import { motion } from 'framer-motion';
import { messages } from '../data/messages';
import { LetterPaper } from './LetterPaper';
import { PageControls } from './PageControls';
import { VintageDivider } from './BotanicalAccents';

export const ApologyCenterpiece = ({ onNext, onPrev }) => {
  const data = messages.screen3;

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
    <LetterPaper showStamp={true}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col text-left"
      >
        {/* Small pre-heading */}
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#C58D91] font-serif mb-1"
        >
          {data.preHeading}
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          variants={itemVariants}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#443438] font-normal tracking-tight mb-4"
        >
          {data.mainHeading}
        </motion.h2>

        <motion.div variants={itemVariants}>
          <VintageDivider className="my-2 mb-6" />
        </motion.div>

        {/* Highlight 1 */}
        <motion.div
          variants={itemVariants}
          className="my-3 py-2 px-4 border-l-2 border-[#C58D91] bg-[#F9EEE8]/40 rounded-r-sm"
        >
          <p className="font-cormorant text-2xl sm:text-3xl text-[#794A50] font-medium italic leading-snug">
            "{data.highlights[0]}"
          </p>
        </motion.div>

        {/* Paragraphs 1-3 */}
        <div className="space-y-4 my-3 text-[#443438] font-sans-body text-base sm:text-lg leading-[1.85] font-normal">
          <motion.p variants={itemVariants}>
            And I don't want to make excuses for that.
          </motion.p>
          <motion.p variants={itemVariants}>
            I know that sometimes I may not have shown the appreciation you deserved. Maybe I got too comfortable, maybe I assumed you'd always understand, or maybe I simply failed to express what I genuinely feel.
          </motion.p>
          <motion.p variants={itemVariants}>
            But that doesn't make it okay.
          </motion.p>
        </div>

        {/* Highlight 2 */}
        <motion.div
          variants={itemVariants}
          className="my-4 py-3 px-4 border-l-2 border-[#794A50] bg-[#EBD2D0]/30 rounded-r-sm"
        >
          <p className="font-cormorant text-2xl sm:text-3xl text-[#794A50] font-medium italic leading-snug">
            "{data.highlights[1]}"
          </p>
        </motion.div>

        {/* Paragraphs 4-6 */}
        <div className="space-y-4 my-3 text-[#443438] font-sans-body text-base sm:text-lg leading-[1.85] font-normal">
          <motion.p variants={itemVariants}>
            And I genuinely don't want my actions to make you question your importance to me.
          </motion.p>
          <motion.p variants={itemVariants}>
            I value you. I value your presence, your conversations, your little moments, and everything that makes you who you are.
          </motion.p>
          <motion.p variants={itemVariants}>
            I know words alone cannot undo the way I've made you feel.
          </motion.p>
        </div>

        {/* Highlight 3 */}
        <motion.div
          variants={itemVariants}
          className="my-4 py-3 px-4 border-l-2 border-[#C58D91] bg-[#F9EEE8]/40 rounded-r-sm"
        >
          <p className="font-cormorant text-2xl sm:text-3xl text-[#794A50] font-medium italic leading-snug">
            "{data.highlights[2]}"
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-[#443438] font-sans-body text-base sm:text-lg leading-[1.85] mb-4 font-normal"
        >
          I want you to know that I recognise my mistake, and I genuinely want to do better.
        </motion.p>

        {/* Page controls */}
        <PageControls
          currentStep={2}
          totalSteps={4}
          onPrev={onPrev}
          onNext={onNext}
          nextLabel={data.nextButton}
        />
      </motion.div>
    </LetterPaper>
  );
};
