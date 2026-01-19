'use client';

import { Lightbulb, Target, GraduationCap, Heart, BookOpen, History } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Our Mission',
      description: 'Blending ancient Vedic wisdom with modern teaching methods to make mathematics enjoyable, stress-free, and confidence-driven. We believe every child has the potential to excel in mathematics when taught the right way.',
    },
    {
      icon: Target,
      title: 'Our Vision',
      description: 'To create a generation of confident problem solvers who see mathematics as a tool for life, not a subject to fear. We envision a world where children approach math with curiosity and excitement.',
    },
    {
      icon: GraduationCap,
      title: 'Teaching Philosophy',
      description: 'Learn → Practice → Apply → Excel. Our structured approach ensures students understand concepts deeply, practice regularly, apply skills in real-world scenarios, and ultimately excel in their academic journey.',
    },
    {
      icon: Heart,
      title: 'Our Commitment',
      description: 'We are committed to providing personalized attention, maintaining small batch sizes, and creating a nurturing environment where every student feels valued and encouraged to reach their full potential.',
    },
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-saffron-50 via-white to-sandalwood-50 vedic-bg-pattern py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-vedic-maroon mb-6">
                Empowering Young Minds with Vedic Excellence
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                We blend ancient wisdom with modern teaching to unlock your child's mathematical potential 
                and build confidence that lasts a lifetime.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-serif font-bold text-vedic-maroon mb-6 text-center">
                  Our Story
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Vidvatta Academy was founded with a simple yet powerful vision: to make mathematics 
                  accessible, enjoyable, and empowering for every child. We recognized that traditional 
                  math education often creates fear and anxiety, leaving many students feeling overwhelmed 
                  and underconfident.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Drawing from the rich heritage of Vedic Mathematics - a system developed thousands of 
                  years ago in India - combined with the proven Abacus methodology, we've created a unique 
                  learning experience that transforms how children perceive and interact with numbers.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Today, we're proud to guide students from Class 1 to Class 10 on their mathematical 
                  journey, helping them build not just calculation skills, but also confidence, 
                  concentration, and a genuine love for learning.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* History & Heritage Section */}
      <section className="py-16 bg-gradient-to-br from-sandalwood-50 to-white vedic-bg-pattern">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-12">
              History & Heritage
            </h2>
          </ScrollReveal>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vedic Mathematics History */}
            <ScrollReveal>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-sandalwood-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-vedic-green/20 p-3 rounded-full">
                    <BookOpen className="w-8 h-8 text-vedic-green" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-vedic-maroon">
                    Vedic Mathematics
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-vedic-maroon">Origin:</strong> Vedic Mathematics comes from 
                    one of the four Vedas - <strong>Atharva Veda</strong>. This ancient system was revived 
                    by <strong>Jagadguru Shankaracharya Shri Bharati Krishna Thirthaji Maharaj</strong> 
                    between <strong>1911-1918</strong>.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-vedic-maroon">Structure:</strong> The system consists of 
                    <strong> 16 Sutras</strong> (formulae) and <strong>13 sub-sutras</strong> 
                    (sub-formulae) that provide multiple approaches to solving mathematical problems.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-vedic-maroon">Scope:</strong> These sutras help solve 
                    problems in <strong>Arithmetic, Algebra, Geometry, and Calculus</strong>, making 
                    complex calculations simpler and faster.
                  </p>
                  <div className="bg-vedic-green/10 p-4 rounded-lg mt-4">
                    <p className="text-sm text-gray-700">
                      <strong>Did you know?</strong> The founder discovered these sutras after years 
                      of studying ancient Vedic texts and systematized them for modern mathematical education.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Abacus History */}
            <ScrollReveal>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-sandalwood-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-saffron-100 p-3 rounded-full">
                    <History className="w-8 h-8 text-saffron-700" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-vedic-maroon">
                    Abacus (Counting Frame)
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-vedic-maroon">Global Heritage:</strong> The Abacus, also 
                    called Counting Frame, is a calculating tool used since ancient times. It was used 
                    extensively in <strong>Europe, China, and Russia</strong> centuries before the 
                    adoption of the Hindu-Arabic numeral system.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-vedic-maroon">Indian Contribution:</strong> Around the 
                    <strong> 5th century</strong>, Indian clerks were already finding ways of recording 
                    the contents of abacus, contributing significantly to its development.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-vedic-maroon">Capabilities:</strong> The abacus is primarily 
                    used to perform <strong>Arithmetic operations</strong> and can even calculate 
                    <strong> square or cube roots</strong> of numbers, making it a versatile mathematical tool.
                  </p>
                  <div className="bg-saffron-50 p-4 rounded-lg mt-4">
                    <p className="text-sm text-gray-700">
                      <strong>Heritage:</strong> The exact origin of the abacus has not yet been fully 
                      determined, but its use spans multiple civilizations, showing its universal value 
                      in mathematical learning.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-sandalwood-50 to-white vedic-bg-pattern">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-12">
              Our Core Values
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div
                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-sandalwood-100"
                  >
                    <div className="bg-saffron-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-saffron-700" />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-vedic-maroon mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-12">
                What Makes Us Different?
              </h2>
            </ScrollReveal>
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <div className="flex items-start space-x-4">
                  <div className="bg-vedic-green text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-2">
                      Dual Methodology Approach
                    </h3>
                    <p className="text-gray-600">
                      We combine Abacus visualization techniques with Vedic Mathematics shortcuts, 
                      offering students multiple pathways to solve problems and understand concepts.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="flex items-start space-x-4">
                  <div className="bg-vedic-green text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-2">
                      Small Batch Sizes
                    </h3>
                    <p className="text-gray-600">
                      Our classes are intentionally small to ensure every student receives personalized 
                      attention and can progress at their own pace.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex items-start space-x-4">
                  <div className="bg-vedic-green text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-2">
                      Flexible Learning Options
                    </h3>
                    <p className="text-gray-600">
                      Whether you prefer online interactive sessions or traditional classroom settings, 
                      we offer both options with flexible timings to fit your family's schedule.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="flex items-start space-x-4">
                  <div className="bg-vedic-green text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-2">
                      Holistic Development
                    </h3>
                    <p className="text-gray-600">
                      Beyond math skills, we focus on building concentration, memory, logical thinking, 
                      and confidence - skills that benefit students across all subjects and in life.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
