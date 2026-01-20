'use client';

import { useState } from 'react';
import { Play, Image as ImageIcon, X, Youtube } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // YouTube video IDs - replace with your actual video IDs
  // To get video ID: from URL https://www.youtube.com/watch?v=VIDEO_ID, use VIDEO_ID
  const studentVideos = [
    {
      id: 'dQw4w9WgXcQ', // Replace with actual video ID
      title: 'Student Performing Abacus Calculations',
      description: 'Watch our student demonstrate lightning-fast mental calculations',
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual video ID
      title: 'Vedic Maths Problem Solving',
      description: 'Students solving complex problems using Vedic techniques',
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual video ID
      title: 'Certificate Distribution Ceremony',
      description: 'Celebrating student achievements and milestones',
    },
    // Add more videos as needed
  ];

  // Photo paths - store images in public/gallery/ folder
  // Example: public/gallery/learning-1.jpg, public/gallery/certificate-1.jpg
  const learningPhotos = [
    { src: '/gallery/learning-1.jpg', alt: 'Students learning Abacus' },
    { src: '/gallery/learning-2.jpg', alt: 'Interactive online class' },
    { src: '/gallery/learning-3.jpg', alt: 'Students practicing Vedic Maths' },
    { src: '/gallery/learning-4.jpg', alt: 'Group learning session' },
    // Add more photos as needed
  ];

  const certificatePhotos = [
    { src: '/gallery/certificate-1.jpg', alt: 'Certificate distribution ceremony' },
    { src: '/gallery/certificate-2.jpg', alt: 'Student receiving certificate' },
    { src: '/gallery/certificate-3.jpg', alt: 'Achievement celebration' },
    { src: '/gallery/certificate-4.jpg', alt: 'Graduation ceremony' },
    // Add more photos as needed
  ];

  const allPhotos = [...learningPhotos, ...certificatePhotos];

  // Helper function to get YouTube embed URL
  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  };

  // Helper function to get YouTube thumbnail
  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-saffron-50 via-white to-sandalwood-50 vedic-bg-pattern py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-vedic-maroon mb-4">
                Our Gallery
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Witness the journey of our students as they learn, grow, and achieve excellence in Abacus and Vedic Mathematics
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Certificate Photos Section */}
      <section className="py-16 bg-white vedic-bg-pattern">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-vedic-gold/20 rounded-full mb-4">
                <ImageIcon className="w-8 h-8 text-vedic-gold" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-vedic-maroon mb-4">
                Achievements & Certifications
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Celebrating milestones and recognizing the hard work of our students
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificatePhotos.map((photo, index) => (
              <ScrollReveal key={photo.src} delay={index * 50}>
                <div
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(photo.src)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback placeholder if image doesn't exist yet
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f3f4f6" width="400" height="400"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EAdd Photo%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-saffron-600 via-saffron-700 to-vedic-maroon text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Be Part of Our Success Stories
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Join hundreds of students who are mastering mathematics with confidence and joy
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-saffron-700 px-8 py-3 rounded-full font-semibold hover:bg-sandalwood-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Enroll Your Child Today
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-saffron-300 transition-colors"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={getYouTubeEmbedUrl(selectedVideo)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
              />
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-saffron-300 transition-colors z-10"
            aria-label="Close image"
          >
            <X className="w-10 h-10" />
          </button>
          <div className="max-w-6xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
