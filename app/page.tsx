import Link from 'next/link';
import { Calculator, Brain, Users, Calendar, Clock, Award, Target, Sparkles, BookOpen, Megaphone } from 'lucide-react';

export default function Home() {
  const highlights = [
    { icon: Calculator, title: 'Abacus Training', description: 'Master mental calculation through visualization' },
    { icon: BookOpen, title: 'Vedic Mathematics', description: 'Learn ancient shortcut techniques' },
    { icon: Users, title: 'Online & Offline Classes', description: 'Flexible learning options' },
    { icon: Calendar, title: 'Summer Camps', description: 'Fun-filled learning during holidays' },
    { icon: Clock, title: 'Flexible Timings', description: 'Weekday & weekend slots available' },
    { icon: Award, title: 'Certified Trainers', description: 'Experienced & qualified instructors' },
  ];

  const benefits = [
    { icon: Target, title: 'Improves Concentration & Memory', description: 'Enhanced focus and retention abilities' },
    { icon: Calculator, title: 'Faster Calculations', description: 'Lightning-fast mental math skills' },
    { icon: Sparkles, title: 'Boosts Confidence', description: 'Build self-esteem through achievement' },
    { icon: Brain, title: 'Logical Thinking', description: 'Develop problem-solving abilities' },
    { icon: Users, title: 'Fun-based Learning', description: 'Enjoyable and engaging methods' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-saffron-50 via-white to-sandalwood-50 vedic-bg-pattern py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <p className="text-lg md:text-xl font-semibold text-saffron-700 mb-4 tracking-wide">
                JOIN · LEARN · RULE
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-vedic-maroon mb-6 leading-tight">
              Building Sharp Minds with<br />
              <span className="text-saffron-700">Abacus & Vedic Mathematics</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
              Engage your child to enhance their confidence and sharpen their skills!
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              A holistic brain development program for students from Class 1 to Class 10
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-vedic-maroon hover:bg-vedic-maroon/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Enroll Now
              </Link>
              <Link
                href="/contact#demo"
                className="bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Book Free Demo Class
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-12">
            Why Choose Vidvatta Academy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-sandalwood-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-sandalwood-100"
                >
                  <div className="bg-saffron-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-saffron-700" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Vidvatta Academy Section */}
      <section className="py-16 bg-gradient-to-br from-sandalwood-50 to-white vedic-bg-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-4">
            Why Vidvatta Academy?
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-lg">
            Our unique approach combines ancient wisdom with modern pedagogy to unlock your child's full potential
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-sandalwood-200"
                >
                  <Icon className="w-10 h-10 text-vedic-green mb-4" />
                  <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Batch Information Banner */}
      <section className="py-12 bg-gradient-to-r from-vedic-green to-vedic-maroon text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 mr-3" />
              <h3 className="text-xl md:text-2xl font-serif font-semibold">
                Next Batch Starting Soon!
              </h3>
            </div>
            <p className="text-lg md:text-xl mb-6 text-white/95">
              New batches of Abacus and Vedic Maths classes are commencing regularly.
            </p>
            <p className="text-base md:text-lg mb-8 text-white/90">
              Enroll now to secure your child&apos;s spot in the upcoming batch!
            </p>
            <Link
              href="/contact"
              className="inline-block bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Enroll Your Kid Now!
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-vedic-maroon to-vedic-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Child's Future?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of students who have discovered the joy of mathematics and unlocked their true potential
          </p>
          <Link
            href="/contact"
            className="inline-block bg-saffron-600 hover:bg-saffron-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
