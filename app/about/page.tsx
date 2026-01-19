import { Lightbulb, Target, GraduationCap, Heart } from 'lucide-react';

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
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-vedic-maroon mb-6">
              About Vidvatta Academy
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Where ancient wisdom meets modern education, creating confident learners 
              and skilled mathematicians for tomorrow's world.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
                Drawing from the rich heritage of Vedic Mathematics—a system developed thousands of 
                years ago in India—combined with the proven Abacus methodology, we've created a unique 
                learning experience that transforms how children perceive and interact with numbers.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, we're proud to guide students from Class 1 to Class 10 on their mathematical 
                journey, helping them build not just calculation skills, but also confidence, 
                concentration, and a genuine love for learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-sandalwood-50 to-white vedic-bg-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-12">
              What Makes Us Different?
            </h2>
            <div className="space-y-6">
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
                    and confidence—skills that benefit students across all subjects and in life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
