import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FloatingPetals } from './components/FloatingPetals';
import { AmbientSound } from './components/AmbientSound';
import { Envelope } from './components/Envelope';
import { FirstLetter } from './components/FirstLetter';
import { ApologyCenterpiece } from './components/ApologyCenterpiece';
import { ScrapbookCards } from './components/ScrapbookCards';
import { FinalLetter } from './components/FinalLetter';
import { LittleHugModal } from './components/LittleHugModal';

export default function App() {
  // Screen 0: Envelope
  // Screen 1: First Letter
  // Screen 2: Apology Centerpiece
  // Screen 3: Scrapbook Cards
  // Screen 4: Final Letter
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isHugModalOpen, setIsHugModalOpen] = useState(false);

  // Scroll to top whenever screen transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const handleNext = () => {
    setCurrentScreen((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setCurrentScreen((prev) => Math.max(prev - 1, 0));
  };

  const handleReplay = () => {
    setIsHugModalOpen(false);
    setCurrentScreen(0);
  };

  // Subtle page turn animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 16,
      filter: 'blur(3px)',
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -16,
      filter: 'blur(2px)',
      transition: {
        duration: 0.45,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#FFF9F4] text-[#443438] flex flex-col justify-between selection:bg-[#EBD2D0] selection:text-[#443438] overflow-x-hidden">
      {/* Background Tactile Grain Noise */}
      <div className="fixed inset-0 noise-overlay pointer-events-none z-10" />

      {/* Ambient Floating Rose Petals & Low-Opacity Hearts */}
      <FloatingPetals />

      {/* Discreet Audio Player Toggle */}
      <AmbientSound />

      {/* Main Interactive Stage */}
      <main className="relative z-20 flex-1 flex flex-col justify-center items-center px-3 sm:px-6 py-6 sm:py-10">
        <AnimatePresence mode="wait">
          {currentScreen === 0 && (
            <motion.div
              key="screen-envelope"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <Envelope onOpenComplete={() => setCurrentScreen(1)} />
            </motion.div>
          )}

          {currentScreen === 1 && (
            <motion.div
              key="screen-first-letter"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <FirstLetter
                onNext={handleNext}
                onPrev={handlePrev}
              />
            </motion.div>
          )}

          {currentScreen === 2 && (
            <motion.div
              key="screen-centerpiece"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <ApologyCenterpiece
                onNext={handleNext}
                onPrev={handlePrev}
              />
            </motion.div>
          )}

          {currentScreen === 3 && (
            <motion.div
              key="screen-scrapbook"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <ScrapbookCards
                onNext={handleNext}
                onPrev={handlePrev}
              />
            </motion.div>
          )}

          {currentScreen === 4 && (
            <motion.div
              key="screen-final-letter"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <FinalLetter
                onSendHug={() => setIsHugModalOpen(true)}
                onPrev={handlePrev}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Little Hug Comfort Modal */}
      <LittleHugModal
        isOpen={isHugModalOpen}
        onClose={() => setIsHugModalOpen(false)}
        onReplay={handleReplay}
      />

      {/* Subtle Footer */}
      <footer className="relative z-20 py-4 text-center text-[11px] text-[#8B7777]/60 font-serif tracking-widest select-none">
        <span>A Little Letter For You</span>
        <span className="mx-2 text-[#C58D91]/60">·</span>
        <span className="italic">crafted with care</span>
      </footer>
    </div>
  );
}
