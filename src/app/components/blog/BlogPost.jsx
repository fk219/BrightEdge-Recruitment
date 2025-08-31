'use client';

import { useEffect, useRef } from 'react';
import { ArrowLeft, Calendar, Clock, User, Heart, Share2, Tag, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BlogPost({ post, onBack, isLiked, onToggleLike }) {
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
      gsap.fromTo(imageRef.current, { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out', delay: 0.1 });

      // Reading progress
      ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top top+=120',
        end: 'bottom bottom-=80',
        onUpdate: (self) => {
          if (progressRef.current) {
            progressRef.current.style.width = `${Math.round(self.progress * 100)}%`;
          }
        }
      });

      // Stagger in headings and paragraphs
      const items = contentRef.current.querySelectorAll('h2, h3, p, li');
      gsap.fromTo(items, { opacity: 0, y: 12 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out',
        scrollTrigger: { trigger: contentRef.current, start: 'top 85%', once: true }
      });
    });

    return () => ctx.revert();
  }, []);

  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}#post-${post.id}` : '';
    try {
      if (navigator.share) {
        await navigator.share({ title: post.title, text: post.excerpt, url });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      }
    } catch (e) {
      // no-op
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sticky top bar with progress */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="h-1 bg-gray-100">
          <div ref={progressRef} className="h-1 bg-blue-600 w-0 transition-[width] duration-150" />
        </div>
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to articles
          </button>
          <div className="flex items-center gap-2">
            <button
              aria-label="Like"
              onClick={onToggleLike}
              className={`p-2 rounded-md border transition ${isLiked ? 'text-rose-600 border-rose-200 bg-rose-50' : 'text-gray-600 border-gray-200 hover:bg-gray-50'}`}
            >
              <Heart className="w-5 h-5" />
            </button>
            <button
              aria-label="Share"
              onClick={handleShare}
              className="p-2 rounded-md border text-gray-600 border-gray-200 hover:bg-gray-50 transition"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header ref={headerRef} className="max-w-4xl mx-auto px-4 pt-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-blue-700 font-medium mb-3">
          <Tag className="w-4 h-4" />
          {post.category}
        </div>
        <h1 id={`post-${post.id}`} className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          {post.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-gray-600">
          <span className="inline-flex items-center gap-2">
            <User className="w-4 h-4" />
            {post.author}
          </span>
          <span className="inline-flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString()}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
          <span className="inline-flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            {post.comments} comments
          </span>
        </div>
      </header>

      {/* Cover Image */}
      <div className="max-w-5xl mx-auto px-4 mt-6">
        <div ref={imageRef} className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <main ref={contentRef} className="max-w-3xl mx-auto px-4 py-10">
        <article className="prose prose-blue max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm border border-blue-100"
              >
                <Tag className="w-3.5 h-3.5" />
                {t}
              </span>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}