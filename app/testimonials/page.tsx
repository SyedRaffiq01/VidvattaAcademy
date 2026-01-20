'use client';

import { Quote, Star, User } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Deepa Devarkonda',
      rating: 5,
      text: 'Excellent coaching for vedic maths..i enrolled my kids as they r struggling for multiplication..now they r happy to solve mathematics solutions...thanku aishwarya madam for ur friendly teaching...',
    },
    {
      name: 'Shruthi Balu',
      rating: 5,
      text: 'Found this place when I was looking to enroll my kid for abacus. The teachers here are very good, interactive and deal with kids patiently. My daughter enjoys the class thoroughly. Thank you Vidvatta Academy.',
    },
    {
      name: 'Shreenivas Hegde',
      rating: 5,
      text: 'I was very much satisfied with Vedic maths Class as off now , my son learning here. Especially with the way of teaching, they gave individual attention . The teachers patience is highly appreciable. I always received prompt friendly replies from Sushma & Aishwarya… thanks a lot',
    },
    {
      name: 'Bavdeep Boj',
      rating: 5,
      text: 'Very good experience for Vedic math and Abacus.My kids are really enjoying the classes.Even teachers also very cooperative. My kids are eagerly waiting for the classes Thank you Sushma and Aishwarya ..,,',
    },
    {
      name: 'Kalpana Raju',
      rating: 5,
      text: 'I was very much satisfied with both of my kids learning here. Especially with the way of teaching, they gave individual attention for each and every students.The teachers patience is highly appreciable. I always received prompt friendly replies from my tutor.',
    },
    {
      name: 'Swapna vaddi',
      rating: 5,
      text: 'I am very happy with the way Vidvatta Academy was taking th abacus classes. I enrolled both my kids to abacus classes. Sushma mam is such a wonderful teacher. She is very soft and her gentle nature is very much appreciatable. Would highly recommend vidvatta academy services. Thank you sushma mam for your services',
    },
    {
      name: 'Reshika Sureshbabu',
      rating: 5,
      text: 'Hello all, Vidvatta academy has a friendly atmosphere for kids to learn. My daughter goes for abacus classes. Teachers are kind and approachable. I would recommend anyone to go join your kid to improve their love on Maths.',
    },
    {
      name: 'Vishalakshi bk Nesara',
      rating: 5,
      text: 'We have joined our daughter to the abacus class in vidvatta Academy since one year. My daughter was interested in math when we joined her academy then she liked maths & she started self studying. In this academy the teacher treats children like their own children. They are bringing a Positive bonding with children & parents also. They have good communication with parents also. In the academy teachers are supportive & they keep attention for each student individually.',
    },
    {
      name: 'Anil Kumar G',
      rating: 5,
      text: 'My kid has been practicing abacus in this academy from past 6 months. They have been very good with their curriculum along with other communication. She has improved her mathematical ability and has been able solve problems at better rate with almost minimal errors now',
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
                            Parent
                          </p>
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
