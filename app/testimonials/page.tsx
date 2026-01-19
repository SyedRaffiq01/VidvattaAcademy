'use client';

import { Quote, Star, User } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      childName: 'Arjun',
      grade: 'Class 5',
      rating: 5,
      text: 'My son Arjun joined Vidvatta Academy six months ago, and the transformation is remarkable! His calculation speed has improved dramatically, and more importantly, he now enjoys math. The abacus method has boosted his confidence in all subjects. Highly recommended!',
      location: 'Bangalore',
    },
    {
      name: 'Rajesh Kumar',
      childName: 'Sneha',
      grade: 'Class 8',
      rating: 5,
      text: 'The Vedic Mathematics course has been a game-changer for my daughter. She&apos;s participating in math competitions now and solving problems in seconds that used to take minutes. The teachers are patient, dedicated, and make learning enjoyable. Thank you, Vidvatta Academy!',
      location: 'Bangalore',
    },
    {
      name: 'Meera Reddy',
      childName: 'Kavya',
      grade: 'Class 3',
      rating: 5,
      text: 'We enrolled Kavya in online classes during the pandemic, and it&apos;s been excellent! The interactive sessions keep her engaged, and we&apos;ve noticed improved concentration and focus across all subjects. The flexible timings work perfectly with our schedule.',
      location: 'Bangalore',
    },
    {
      name: 'Anjali Patel',
      childName: 'Rohan',
      grade: 'Class 6',
      rating: 5,
      text: 'The summer camp was amazing! Rohan not only learned valuable math skills but also made new friends. The blend of learning and fun activities kept him engaged throughout. He&apos;s now enrolled in regular classes and looks forward to every session!',
      location: 'Bangalore',
    },
    {
      name: 'Vikram Singh',
      childName: 'Aditi',
      grade: 'Class 9',
      rating: 5,
      text: 'As we prepare for board exams, the Vedic Mathematics techniques have been invaluable. Aditi can solve complex algebra problems much faster now, giving her more time for other subjects. The competitive exam preparation techniques are exactly what we needed.',
      location: 'Bangalore',
    },
    {
      name: 'Deepa Nair',
      childName: 'Vivaan',
      grade: 'Class 4',
      rating: 5,
      text: 'The offline classes at Vidvatta Academy are well-structured with excellent infrastructure. The small batch size ensures personalized attention, and Vivaan receives feedback immediately. He looks forward to every class. This is a great investment in his future!',
      location: 'Bangalore',
    },
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-saffron-50 via-white to-sandalwood-50 vedic-bg-pattern py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-16 h-16 text-vedic-maroon mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-vedic-maroon mb-6">
              Success Stories from Our Community
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Discover how Vidvatta Academy has transformed the lives of students and families, 
              building confidence and excellence one success story at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div
                    className="bg-gradient-to-br from-sandalwood-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-sandalwood-100 flex flex-col"
                  >
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-saffron-500 text-saffron-500" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-saffron-300 mb-4" />
                    <p className="text-gray-700 mb-6 flex-grow leading-relaxed italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="border-t border-sandalwood-200 pt-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-vedic-green/20 w-10 h-10 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-vedic-green" />
                        </div>
                        <div>
                          <p className="font-semibold text-vedic-maroon">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">
                            Parent of {testimonial.childName} ({testimonial.grade})
                          </p>
                          <p className="text-xs text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gradient-to-br from-sandalwood-50 to-white vedic-bg-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-12">
              Student Success Stories
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-sandalwood-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-saffron-100 p-3 rounded-full">
                    <Star className="w-6 h-6 text-saffron-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-2">
                      Olympiad Achievement
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      One of our students secured a gold medal in the International Math Olympiad 
                      after completing our Vedic Mathematics program. The speed techniques learned 
                      here proved invaluable during the competition.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-sandalwood-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-vedic-green/20 p-3 rounded-full">
                    <Star className="w-6 h-6 text-vedic-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-2">
                      Board Exam Excellence
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      A Class 10 student improved from 65% to 95% in mathematics after joining our 
                      program. The confidence and techniques gained helped excel not just in math, 
                      but across all subjects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-sandalwood-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-vedic-maroon/10 p-3 rounded-full">
                    <Star className="w-6 h-6 text-vedic-maroon" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-2">
                      Confidence Transformation
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      A shy Class 3 student who was afraid of math is now the first to volunteer 
                      for math problems in class. The abacus training helped build confidence that 
                      extends beyond academics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-vedic-maroon mb-6">
            Be the Next Success Story
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our community of confident learners. Enroll your child today and watch them 
            unlock their potential and excel beyond expectations!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-saffron-600 hover:bg-saffron-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </a>
            <a
              href="/contact#demo"
              className="inline-block bg-saffron-600 hover:bg-saffron-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Book Free Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
