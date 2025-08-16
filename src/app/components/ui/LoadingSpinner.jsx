'use client';

import { useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';
import gsap from 'gsap';

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'blue', 
  className,
  text,
  fullScreen = false,
  ...props 
}) => {
  const spinnerRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main spinner rotation
      gsap.to(spinnerRef.current, {
        rotation: 360,
        duration: 1,
        ease: 'none',
        repeat: -1
      });

      // Animated dots
      if (dotsRef.current.length > 0) {
        gsap.to(dotsRef.current, {
          scale: 1.5,
          opacity: 0.3,
          duration: 0.6,
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut'
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    green: 'text-green-600',
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    gray: 'text-gray-600'
  };

  const textSizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  // Simple spinner
  const SimpleSpinner = () => (
    <div
      ref={spinnerRef}
      className={cn(
        'border-2 border-current border-t-transparent rounded-full',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      {...props}
    />
  );

  // Dots spinner
  const DotsSpinner = () => (
    <div className={cn('flex items-center gap-1', className)}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          ref={el => dotsRef.current[i] = el}
          className={cn(
            'rounded-full bg-current',
            size === 'xs' ? 'w-1 h-1' :
            size === 'sm' ? 'w-1.5 h-1.5' :
            size === 'md' ? 'w-2 h-2' :
            size === 'lg' ? 'w-3 h-3' : 'w-4 h-4',
            colorClasses[color]
          )}
        />
      ))}
    </div>
  );

  // Pulse spinner
  const PulseSpinner = () => (
    <div className={cn('relative', sizeClasses[size], className)}>
      <div className={cn(
        'absolute inset-0 rounded-full bg-current opacity-75 animate-ping',
        colorClasses[color]
      )} />
      <div className={cn(
        'relative rounded-full bg-current',
        sizeClasses[size],
        colorClasses[color]
      )} />
    </div>
  );

  // Bars spinner
  const BarsSpinner = () => (
    <div className={cn('flex items-end gap-1', className)}>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={cn(
            'bg-current animate-pulse',
            size === 'xs' ? 'w-0.5 h-3' :
            size === 'sm' ? 'w-1 h-4' :
            size === 'md' ? 'w-1 h-6' :
            size === 'lg' ? 'w-1.5 h-8' : 'w-2 h-10',
            colorClasses[color]
          )}
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: '0.8s'
          }}
        />
      ))}
    </div>
  );

  // Advanced GSAP spinner
  const AdvancedSpinner = () => (
    <div className={cn('relative', sizeClasses[size], className)}>
      <div
        ref={spinnerRef}
        className={cn(
          'absolute inset-0 border-2 border-transparent rounded-full',
          colorClasses[color]
        )}
        style={{
          borderTopColor: 'currentColor',
          borderRightColor: 'currentColor',
        }}
      />
      <div className={cn(
        'absolute inset-1 border border-current opacity-30 rounded-full',
        colorClasses[color]
      )} />
    </div>
  );

  const spinnerVariants = {
    simple: SimpleSpinner,
    dots: DotsSpinner,
    pulse: PulseSpinner,
    bars: BarsSpinner,
    advanced: AdvancedSpinner
  };

  const SpinnerComponent = spinnerVariants.simple;

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="text-center">
          <SpinnerComponent />
          {text && (
            <p className={cn(
              'mt-4 font-medium text-gray-600',
              textSizeClasses[size]
            )}>
              {text}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <SpinnerComponent />
      {text && (
        <span className={cn(
          'font-medium text-gray-600',
          textSizeClasses[size]
        )}>
          {text}
        </span>
      )}
    </div>
  );
};

// Specialized loading components
export const PageLoader = ({ text = "Loading..." }) => (
  <LoadingSpinner 
    size="lg" 
    color="blue" 
    text={text} 
    fullScreen 
  />
);

export const ButtonLoader = ({ size = "sm" }) => (
  <LoadingSpinner 
    size={size} 
    color="white" 
    className="text-current" 
  />
);

export const CardLoader = () => (
  <div className="flex items-center justify-center p-8">
    <LoadingSpinner size="md" color="blue" text="Loading content..." />
  </div>
);

export const InlineLoader = ({ text }) => (
  <LoadingSpinner size="sm" color="gray" text={text} />
);

// Loading overlay component
export const LoadingOverlay = ({ isLoading, children, text = "Loading..." }) => {
  if (!isLoading) return children;

  return (
    <div className="relative">
      <div className="opacity-50 pointer-events-none">
        {children}
      </div>
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center">
        <LoadingSpinner size="lg" color="blue" text={text} />
      </div>
    </div>
  );
};

// Progress bar component
export const ProgressBar = ({ progress = 0, className, showPercentage = true }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        width: `${progress}%`,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  }, [progress]);

  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Progress</span>
        {showPercentage && (
          <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          ref={progressRef}
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;