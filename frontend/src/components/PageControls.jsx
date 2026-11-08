import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const PageControls = ({ currentStep, totalSteps, onPrev, onNext, nextLabel = "Next →" }) => {
  return (
    <div className="flex items-center justify-between w-full pt-8 mt-8 border-t border-[#EBD2D0]/40 text-xs sm:text-sm text-[#8B7777]">
      {/* Back button */}
      <div>
        {currentStep > 1 ? (
          <button
            onClick={onPrev}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-[#F9EEE8] text-[#8B7777] hover:text-[#443438] transition-colors font-serif italic"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Previous</span>
          </button>
        ) : (
          <div className="w-16" />
        )}
      </div>

      {/* Page indicator */}
      <div className="flex items-center gap-1.5 font-serif text-[#794A50]/80 tracking-widest text-xs uppercase">
        <span>Part {currentStep}</span>
        <span className="text-[#C58D91]">·</span>
        <span>{totalSteps}</span>
      </div>

      {/* Forward Action button */}
      <div>
        {onNext && (
          <button
            onClick={onNext}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#794A50] hover:bg-[#643B40] text-[#FFFCF8] shadow-sm hover:shadow transition-all duration-300 font-serif italic text-sm tracking-wide"
          >
            <span>{nextLabel}</span>
          </button>
        )}
      </div>
    </div>
  );
};
