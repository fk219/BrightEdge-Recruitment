'use client';

import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag, TrendingUp, BookOpen, Heart, MessageCircle, Share2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlogPost from '../components/blog/BlogPost';

gsap.registerPlugin(ScrollTrigger);

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Career Advancement in 2025",
    excerpt: "Discover the most effective strategies to accelerate your career growth and stand out in today's competitive job market.",
    content: `
      <h2>Introduction</h2>
      <p>In today's rapidly evolving job market, staying ahead requires more than just technical skills. Here are 10 essential tips that will help you advance your career in 2025.</p>
      
      <h3>1. Embrace Continuous Learning</h3>
      <p>The most successful professionals never stop learning. Whether it's through online courses, workshops, or industry conferences, make learning a daily habit.</p>
      
      <h3>2. Build Your Personal Brand</h3>
      <p>Your personal brand is what sets you apart. Develop a strong online presence through LinkedIn, personal websites, and professional portfolios.</p>
      
      <h3>3. Network Strategically</h3>
      <p>Quality over quantity. Focus on building meaningful relationships with people in your industry who can provide value and insights.</p>
      
      <h3>4. Develop Soft Skills</h3>
      <p>Technical skills get you hired, but soft skills get you promoted. Focus on communication, leadership, and emotional intelligence.</p>
      
      <h3>5. Seek Mentorship</h3>
      <p>Find mentors who have achieved what you aspire to. Their guidance can help you avoid common pitfalls and accelerate your growth.</p>
    `,
    author: "Sarah Johnson",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Career Development",
    tags: ["Career", "Professional Growth", "Success Tips"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
    likes: 234,
    comments: 45,
    featured: true
  },
  {
    id: 2,
    title: "The Future of Remote Work: Trends and Predictions",
    excerpt: "Explore how remote work is reshaping the global workforce and what it means for your career trajectory.",
    content: `
      <h2>The Remote Revolution</h2>
      <p>Remote work has transformed from a temporary solution to a permanent fixture in the modern workplace. Let's explore what this means for the future.</p>
      
      <h3>Hybrid Models Dominate</h3>
      <p>The future isn't fully remote or fully in-office—it's hybrid. Companies are adopting flexible models that combine the best of both worlds.</p>
      
      <h3>Technology Integration</h3>
      <p>Advanced collaboration tools, VR meetings, and AI-powered productivity apps are making remote work more efficient than ever.</p>
      
      <h3>Global Talent Pool</h3>
      <p>Geographic boundaries are dissolving. Companies can now hire the best talent regardless of location, creating unprecedented opportunities.</p>
    `,
    author: "Michael Chen",
    date: "2025-01-12",
    readTime: "7 min read",
    category: "Work Culture",
    tags: ["Remote Work", "Future of Work", "Technology"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop",
    likes: 189,
    comments: 32
  },
  {
    id: 3,
    title: "Mastering the Art of Salary Negotiation",
    excerpt: "Learn proven strategies to negotiate your worth and secure the compensation package you deserve.",
    content: `
      <h2>Know Your Worth</h2>
      <p>Successful salary negotiation starts with understanding your market value. Research, prepare, and approach negotiations with confidence.</p>
      
      <h3>Research Industry Standards</h3>
      <p>Use salary surveys, industry reports, and networking to understand what professionals with your experience typically earn.</p>
      
      <h3>Timing is Everything</h3>
      <p>The best time to negotiate isn't just during job offers. Annual reviews and after major achievements are also prime opportunities.</p>
      
      <h3>Beyond Base Salary</h3>
      <p>Remember to negotiate the entire package: bonuses, benefits, flexible work arrangements, and professional development opportunities.</p>
    `,
    author: "Emily Rodriguez",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "Career Advice",
    tags: ["Salary", "Negotiation", "Career Growth"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop",
    likes: 312,
    comments: 67
  },
  {
    id: 4,
    title: "Building a Powerful Professional Network",
    excerpt: "Networking isn't just about collecting contacts—it's about building meaningful professional relationships.",
    content: `
      <h2>The Power of Authentic Connections</h2>
      <p>In the digital age, authentic networking has become more valuable than ever. Here's how to build a network that truly supports your career.</p>
      
      <h3>Quality Over Quantity</h3>
      <p>Focus on building deep, meaningful relationships rather than accumulating hundreds of superficial connections.</p>
      
      <h3>Give Before You Receive</h3>
      <p>The best networkers are those who help others first. Share opportunities, make introductions, and provide value without expecting immediate returns.</p>
    `,
    author: "David Park",
    date: "2025-01-08",
    readTime: "4 min read",
    category: "Networking",
    tags: ["Networking", "Professional Relationships", "Career"],
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=400&fit=crop",
    likes: 156,
    comments: 28
  },
  {
    id: 5,
    title: "AI and the Future of Recruitment",
    excerpt: "Discover how artificial intelligence is revolutionizing the hiring process and what it means for job seekers.",
    content: `
      <h2>The AI Revolution in Hiring</h2>
      <p>Artificial intelligence is transforming how companies find and evaluate talent. Understanding these changes is crucial for modern job seekers.</p>
      
      <h3>Automated Screening</h3>
      <p>AI-powered systems can now screen thousands of resumes in seconds, looking for specific keywords and qualifications.</p>
      
      <h3>Predictive Analytics</h3>
      <p>Companies use AI to predict candidate success, cultural fit, and long-term retention based on data patterns.</p>
    `,
    author: "Lisa Thompson",
    date: "2025-01-05",
    readTime: "8 min read",
    category: "Technology",
    tags: ["AI", "Recruitment", "Technology", "Future"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    likes: 278,
    comments: 54,
    featured: true
  },
  {
    id: 6,
    title: "Work-Life Balance in the Modern Era",
    excerpt: "Achieving work-life balance isn't about perfection—it's about finding what works for you.",
    content: `
      <h2>Redefining Balance</h2>
      <p>Work-life balance looks different for everyone. The key is finding a sustainable rhythm that supports both your career and personal well-being.</p>
      
      <h3>Set Clear Boundaries</h3>
      <p>In an always-connected world, boundaries are essential. Define your work hours and stick to them.</p>
      
      <h3>Prioritize Self-Care</h3>
      <p>Self-care isn't selfish—it's necessary. Regular exercise, adequate sleep, and mental health practices are investments in your long-term success.</p>
    `,
    author: "Robert Kim",
    date: "2025-01-03",
    readTime: "5 min read",
    category: "Wellness",
    tags: ["Work-Life Balance", "Wellness", "Productivity"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop",
    likes: 198,
    comments: 41
  }
];

const categories = ["All", "Career Development", "Work Culture", "Career Advice", "Networking", "Technology", "Wellness"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState(new Set());
  
  const headerRef = useRef(null);
  const searchRef = useRef(null);
  const categoriesRef = useRef(null);
  const postsRef = useRef([]);
  const featuredRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current, 
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Search bar animation
      gsap.fromTo(searchRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.3, ease: "back.out(1.7)" }
      );

      // Categories animation
      gsap.fromTo(categoriesRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, delay: 0.5, ease: "power2.out" }
      );

      // Featured post animation
      if (featuredRef.current) {
        gsap.fromTo(featuredRef.current,
          { opacity: 0, x: -50 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 1, 
            delay: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuredRef.current,
              start: "top 80%",
              once: true
            }
          }
        );
      }

      // Blog posts animation
      postsRef.current.forEach((post, index) => {
        if (post) {
          gsap.fromTo(post,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: post,
                start: "top 85%",
                once: true
              }
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleLike = (postId, e) => {
    e.stopPropagation();
    setLikedPosts(prev => {
      const newLikes = new Set(prev);
      if (newLikes.has(postId)) {
        newLikes.delete(postId);
      } else {
        newLikes.add(postId);
      }
      return newLikes;
    });
  };

  const handleShare = (post, e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href + '/' + post.id
      });
    }
  };

  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header ref={headerRef} className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                <BookOpen className="w-10 h-10 text-blue-600" />
                Insights & Resources
              </h1>
              <p className="text-gray-600 mt-2">Expert advice for your career journey</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {filteredPosts.length} articles
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div ref={searchRef} className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search articles, topics, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />
        </div>

        {/* Categories */}
        <div ref={categoriesRef} className="flex flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

                {/* Featured Post */}
                {featuredPost && selectedCategory === "All" && (
          <div
            ref={featuredRef}
            onClick={() => setSelectedPost(featuredPost)}
            className="relative overflow-hidden rounded-2xl bg-white shadow-lg mb-12 cursor-pointer group"
          >
            <div className="relative h-[360px] w-full">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Top actions */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  aria-label="Like article"
                  onClick={(e) => handleLike(featuredPost.id, e)}
                  className={`p-2 rounded-full backdrop-blur-md bg-white/20 hover:bg-white/30 transition ${
                    likedPosts.has(featuredPost.id) ? 'text-rose-500' : 'text-white'
                  }`}
                >
                  <Heart className="w-5 h-5" />
                </button>
                <button
                  aria-label="Share article"
                  onClick={(e) => handleShare(featuredPost, e)}
                  className="p-2 rounded-full backdrop-blur-md bg-white/20 hover:bg-white/30 text-white transition"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-blue-300" />
                  <span className="text-blue-100 text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-white/90 mt-3 max-w-3xl">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-white/80 text-sm">
                  <span className="inline-flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>

                  <button className="ml-auto inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium shadow hover:shadow-md transition group">
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {regularPosts.map((post, index) => (
            <article
              key={post.id}
              ref={(el) => (postsRef.current[index] = el)}
              onClick={() => setSelectedPost(post)}
              className="group relative bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80" />

                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 bg-white/90 text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow">
                    <Tag className="w-3.5 h-3.5" />
                    {post.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    aria-label="Like article"
                    onClick={(e) => handleLike(post.id, e)}
                    className={`p-1.5 rounded-full backdrop-blur-md bg-white/20 hover:bg-white/30 transition ${
                      likedPosts.has(post.id) ? 'text-rose-500' : 'text-white'
                    }`}
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                  <button
                    aria-label="Share article"
                    onClick={(e) => handleShare(post, e)}
                    className="p-1.5 rounded-full backdrop-blur-md bg-white/20 hover:bg-white/30 text-white transition"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-2 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1.5">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-gray-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Heart className={`w-4 h-4 ${likedPosts.has(post.id) ? 'text-rose-500' : ''}`} />
                      {likedPosts.has(post.id) ? post.likes + 1 : post.likes}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4" />
                      {post.comments}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-blue-700 font-medium">
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}

          {regularPosts.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-20">
              No articles found. Try a different search or category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}