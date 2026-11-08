import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AmbientSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  // Soothing chord progression frequencies (Hz): Soft C major 7th / F major 7th / A minor 7th
  // Notes: C4, E4, G4, B4, A4, C5, E5, D4
  const notes = [261.63, 329.63, 392.00, 493.88, 440.00, 523.25, 659.25, 293.66];

  const playPluck = (freq, timeOffset = 0) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Warm, muted music-box / soft acoustic tone
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, ctx.currentTime + timeOffset);

    // Warm lowpass filter to remove harsh highs
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, ctx.currentTime + timeOffset);
    filter.Q.setValueAtTime(2, ctx.currentTime + timeOffset);

    // Exponential gentle decay
    const startTime = ctx.currentTime + timeOffset;
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.08, startTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 2.4);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + 2.5);
  };

  const startMusicBox = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      audioCtxRef.current = new AudioContext();
    }

    let noteIndex = 0;
    // Play an initial delicate chime
    playPluck(notes[0], 0);
    playPluck(notes[2], 0.2);
    playPluck(notes[4], 0.4);

    intervalRef.current = setInterval(() => {
      const base = notes[noteIndex % notes.length];
      const harmony = notes[(noteIndex + 2) % notes.length];
      playPluck(base, 0);
      playPluck(harmony, 0.25);
      noteIndex = (noteIndex + 1) % notes.length;
    }, 1800);
  };

  const stopMusicBox = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopMusicBox();
      setIsPlaying(false);
    } else {
      startMusicBox();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopMusicBox();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-40">
      <button
        onClick={toggleSound}
        className={`group flex items-center gap-2 px-3 py-1.5 rounded-full text-xs transition-all duration-300 shadow-sm border ${
          isPlaying
            ? 'bg-[#EBD2D0]/60 border-[#C58D91] text-[#794A50]'
            : 'bg-[#FFFCF8]/80 hover:bg-[#FFFCF8] border-[#EBD2D0]/60 text-[#8B7777] hover:text-[#443438]'
        } backdrop-blur-sm`}
        title={isPlaying ? "Mute ambient melody" : "Play gentle ambient melody"}
        aria-label="Toggle ambient melody"
      >
        {isPlaying ? (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C58D91] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#794A50]"></span>
            </span>
            <Volume2 className="w-3.5 h-3.5 text-[#794A50]" />
            <span className="font-serif italic text-[11px] tracking-wide hidden sm:inline">Melody playing</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-[#8B7777] group-hover:text-[#443438]" />
            <span className="font-serif italic text-[11px] tracking-wide hidden sm:inline">Sound: Off</span>
          </>
        )}
      </button>
    </div>
  );
};
