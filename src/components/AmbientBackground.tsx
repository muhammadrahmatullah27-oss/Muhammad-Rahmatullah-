import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Deep Forest Green Radial Glows */}
      <div 
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] rounded-full blur-[160px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(27, 77, 62, 0.6) 0%, rgba(15, 59, 43, 0.2) 60%, transparent 100%)',
        }}
      />
      <div 
        className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] rounded-full blur-[170px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, rgba(20, 54, 40, 0.2) 60%, transparent 100%)',
        }}
      />
      <div 
        className="absolute -bottom-[10%] left-[25%] w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(10, 41, 30, 0.1) 70%, transparent 100%)',
        }}
      />

      {/* Subtle organic book texture dot grid */}
      <div 
        className="absolute inset-0 opacity-[0.035]" 
        style={{
          backgroundImage: 'radial-gradient(rgba(243, 229, 171, 0.8) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
    </div>
  );
};
