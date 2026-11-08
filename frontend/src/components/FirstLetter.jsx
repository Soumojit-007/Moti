import React from 'react';
import { motion } from 'framer-motion';
import { messages } from '../data/messages';
import { LetterPaper } from './LetterPaper';
import { PageControls } from './PageControls';
import { VintageDivider } from './BotanicalAccents';

export const FirstLetter = ({ onNext, onPrev }) => {
  const data = messages.screen2;

  // Stagger variants for soft, gentle text reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
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
        {/* Handwritten Salutation */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <h2 className="font-dancing text-3xl sm:text-4xl text-[#794A50] tracking-wide">
            {data.salutation}
          </h2>
        </motion.div>

        {/* Letter Paragraphs */}
        <div className="space-y-4 sm:space-y-5 text-[#443438] font-sans-body text-base sm:text-lg leading-[1.8] sm:leading-[1.9] tracking-normal font-normal">
          {data.paragraphs.map((para, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className={`${
                index === 2 || index === 4
                  ? 'text-[#443438] font-medium'
                  : 'text-[#443438]/90'
              }`}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="my-6 sm:my-8">
          <VintageDivider />
        </motion.div>

        {/* Closing prompt */}
        <motion.p
          variants={itemVariants}
          className="font-serif italic text-base sm:text-lg text-[#8B7777] text-center mb-2"
        >
          {data.closingPrompt}
        </motion.p>

        {/* Page navigation controls */}
        <PageControls
          currentStep={1}
          totalSteps={4}
          onPrev={onPrev}
          onNext={onNext}
          nextLabel={data.nextButton}
        />
      </motion.div>
    </LetterPaper>
  );
};
