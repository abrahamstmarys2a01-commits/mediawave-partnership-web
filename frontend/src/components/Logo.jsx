import React from 'react';
import logoImg from '../assets/logo.png';
import logoLightImg from '../assets/logo-light.png';

export default function Logo({ variant = 'dark', className = '', size = 'md' }) {
  // size classes
  const sizeClass = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12 md:h-[52px]',
    lg: 'h-12 sm:h-14 md:h-16',
    xl: 'h-16 sm:h-20'
  }[size] || 'h-10 sm:h-12 md:h-[52px]';

  const currentLogo = variant === 'light' ? logoLightImg : logoImg;

  return (
    <div className={`inline-flex items-center bg-transparent ${className}`}>
      <img 
        src={currentLogo} 
        alt="Media Wave Technologies" 
        className={`${sizeClass} w-auto object-contain hover:scale-[1.02] transition-transform`} 
      />
    </div>
  );
}
