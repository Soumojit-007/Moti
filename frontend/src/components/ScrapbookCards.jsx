import React from 'react';
import { motion } from 'framer-motion';
import { messages } from '../data/messages';
import { LetterPaper } from './LetterPaper';
import { PageControls } from './PageControls';
import { BotanicalFlower, DecorativeHeart, HandDrawnStar, VintageDivider } from './BotanicalAccents';

export const ScrapbookCards = ({ onNext, onPrev }) => {
  const data = messages.screen4;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: (customRotation) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: customRotation,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 14,
      },
    }),
  };

  const getVisual = (type) => {
    switch (type) {
      case 'flower':
        return <BotanicalFlower className="w-12 h-12 text-[#C58D91]" />;
      case 'heart':
        return <DecorativeHeart className="w-12 h-12 text-[#C58D91]" />;
      case 'star':
        return <HandDrawnStar className="w-12 h-12 text-[#C58D91]" />;
      default:
        return null;
    }
  };

  return (
    <LetterPaper showStamp={false}>
      <div className="flex flex-col text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-3xl sm:text-4xl text-[#443438] font-normal tracking-tight mb-2"
        >
          {data.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif italic text-sm sm:text-base text-[#8B7777] mb-2"
        >
          {data.subheading}
        </motion.p>

        <VintageDivider className="my-3 mb-8" />

        {/* 3 Scrapbook Stationery Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 my-2 text-left"
        >
          {data.cards.map((card, index) => (
            <motion.div
              key={card.id}
              custom={card.rotation}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                rotate: 0,
                y: -6,
                transition: { duration: 0.25 },
              }}
              className="relative bg-[#FFFCF8] rounded-sm p-6 sm:p-7 border border-[#EBD2D0] shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between min-h-[220px]"
            >
              {/* Washi Tape Accent on Top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 washi-tape rotate-[-1deg]" />

              <div>
                {/* Visual Icon */}
                <div className="mb-4 flex items-center justify-center sm:justify-start">
                  <div className="p-2 rounded-full bg-[#F9EEE8]/60 border border-[#EBD2D0]/40">
                    {getVisual(card.visual)}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-playfair text-xl sm:text-2xl text-[#794A50] font-normal mb-2.5">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="font-sans-body text-sm sm:text-base text-[#443438]/90 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Subtle corner numbering */}
              <div className="mt-4 pt-3 border-t border-[#EBD2D0]/30 flex justify-between items-center text-[11px] font-serif text-[#C58D91]">
                <span>No. {index + 1}</span>
                <span className="font-dancing text-xs text-[#794A50]">always</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation controls */}
        <PageControls
          currentStep={3}
          totalSteps={4}
          onPrev={onPrev}
          onNext={onNext}
          nextLabel={data.nextButton}
        />
      </div>
    </LetterPaper>
  );
};
