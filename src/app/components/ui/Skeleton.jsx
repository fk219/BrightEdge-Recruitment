'use client';

import { cn } from '../../lib/utils';

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]",
        className
      )}
      style={{
        animation: 'shimmer 2s infinite linear',
      }}
      {...props}
    />
  );
}

// Predefined skeleton components for common use cases
const SkeletonCard = ({ className, ...props }) => (
  <div className={cn("bg-white rounded-xl p-6 shadow-lg border border-gray-100", className)} {...props}>
    <Skeleton className="h-12 w-12 rounded-xl mb-4" />
    <Skeleton className="h-6 w-3/4 mb-3" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-2/3 mb-4" />
    <div className="space-y-2">
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
      <Skeleton className="h-3 w-4/5" />
    </div>
  </div>
);

const SkeletonText = ({ lines = 3, className, ...props }) => (
  <div className={cn("space-y-2", className)} {...props}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton 
        key={i} 
        className={cn(
          "h-4",
          i === lines - 1 ? "w-3/4" : "w-full"
        )} 
      />
    ))}
  </div>
);

const SkeletonAvatar = ({ className, ...props }) => (
  <Skeleton className={cn("h-12 w-12 rounded-full", className)} {...props} />
);

const SkeletonButton = ({ className, ...props }) => (
  <Skeleton className={cn("h-10 w-24 rounded-lg", className)} {...props} />
);

const SkeletonImage = ({ className, ...props }) => (
  <Skeleton className={cn("w-full h-48 rounded-lg", className)} {...props} />
);

// Hero section skeleton
const SkeletonHero = () => (
  <div className="relative pt-20 pb-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Skeleton className="h-8 w-48 mx-auto mb-6 rounded-full" />
      <Skeleton className="h-16 w-full max-w-4xl mx-auto mb-6" />
      <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-12" />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <SkeletonButton className="w-40 h-12" />
        <SkeletonButton className="w-40 h-12" />
      </div>
    </div>
  </div>
);

// Stats section skeleton
const SkeletonStats = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
    {Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <Skeleton className="w-8 h-8 mx-auto mb-3 rounded-lg" />
        <Skeleton className="h-8 w-16 mx-auto mb-1" />
        <Skeleton className="h-4 w-20 mx-auto" />
      </div>
    ))}
  </div>
);

// Services grid skeleton
const SkeletonServices = ({ count = 6 }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

// Team members skeleton
const SkeletonTeam = ({ count = 4 }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="text-center">
        <SkeletonImage className="h-64 mb-4 rounded-xl" />
        <Skeleton className="h-6 w-32 mx-auto mb-2" />
        <Skeleton className="h-4 w-24 mx-auto mb-1" />
        <Skeleton className="h-3 w-28 mx-auto" />
      </div>
    ))}
  </div>
);

// Blog posts skeleton
const SkeletonBlog = ({ count = 3 }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
        <SkeletonImage className="h-48 rounded-none" />
        <div className="p-6">
          <Skeleton className="h-6 w-full mb-3" />
          <SkeletonText lines={3} className="mb-4" />
          <div className="flex items-center gap-3">
            <SkeletonAvatar className="w-8 h-8" />
            <div className="flex-1">
              <Skeleton className="h-3 w-20 mb-1" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Navigation skeleton
const SkeletonNav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-3">
          <Skeleton className="w-12 h-12 rounded-xl" />
          <div>
            <Skeleton className="h-6 w-32 mb-1" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-20 rounded-xl" />
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <SkeletonButton className="w-24 h-10" />
          <SkeletonButton className="w-28 h-10" />
        </div>
      </div>
    </div>
  </nav>
);

// Page loading skeleton
const SkeletonPage = () => (
  <div className="min-h-screen bg-gray-50">
    <SkeletonNav />
    <div className="pt-20">
      <SkeletonHero />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <SkeletonServices />
        </div>
      </div>
    </div>
  </div>
);

export {
  Skeleton,
  SkeletonCard,
  SkeletonText,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonImage,
  SkeletonHero,
  SkeletonStats,
  SkeletonServices,
  SkeletonTeam,
  SkeletonBlog,
  SkeletonNav,
  SkeletonPage
};

export default Skeleton;