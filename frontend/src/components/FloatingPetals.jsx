import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const FloatingPetals = () => {
  const shouldReduceMotion = useReducedMotion();

  // Deterministic set of floating petals & gentle hearts with varying sizes, positions, durations
  const particles = useMemo(() => {
    return Array.from({ length: 22 }).map((_, index) => {
      const isHeart = index % 4 === 0;
      const size = isHeart ? 14 + (index % 10) : 18 + (index % 16);
      const startX = (index * 4.7) % 100;
      const duration = 14 + (index % 12);
      const delay = (index * 0.7) % 8;
      const rotation = index * 35;
      const sway = 25 + (index % 30);
      const opacity = isHeart ? 0.22 + (index % 5) * 0.04 : 0.28 + (index % 5) * 0.05;

      return {
        id: index,
        isHeart,
        size,
        startX,
        duration,
        delay,
        rotation,
        sway,
        opacity,
      };
    });
  }, []);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft Ambient Radial Light Spots */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#EBD2D0]/25 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#F9EEE8]/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-[#EBD2D0]/20 blur-3xl pointer-events-none" />

      {/* Floating Petals and Tiny Hearts */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute will-change-transform"
          style={{
            left: `${p.startX}%`,
            top: '-5%',
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          initial={{ y: -50, x: 0, rotate: p.rotation }}
          animate={{
            y: ['0vh', '108vh'],
            x: [0, p.sway, -p.sway, 0],
            rotate: [p.rotation, p.rotation + 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        >
          {p.isHeart ? (
            /* Tiny romantic heart */
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#C58D91]">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="currentColor"
              />
            </svg>
          ) : (
            /* Soft rose petal */
            <svg viewBox="0 0 30 30" fill="none" className="w-full h-full text-[#EBD2D0]">
              <path
                d="M15 2C10 7 4 14 6 22C8 28 17 29 23 24C28 19 26 9 15 2Z"
                fill="currentColor"
                stroke="#C58D91"
                strokeWidth="0.5"
                strokeOpacity="0.4"
              />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};
