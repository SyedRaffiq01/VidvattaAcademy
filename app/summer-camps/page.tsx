import Link from 'next/link';
import { Sun, Users, Sparkles, Palette, Target, Trophy, CheckCircle, Calendar } from 'lucide-react';

export default function SummerCamps() {
  const activities = [
    {
      icon: Target,
      title: 'Abacus & Vedic Maths Basics',
      description: 'Introduction to mental math techniques through fun activities',
    },
    {
      icon: Sparkles,
      title: 'Fun Games & Puzzles',
      description: 'Math games that make learning enjoyable and engaging',
    },
    {
      icon: Palette,
      title: 'Art & Craft',
      description: 'Creative activities to enhance motor skills and creativity',
    },
    {
      icon: Trophy,
      title: 'Confidence Building',
      description: 'Activities designed to boost self-esteem and presentation skills',
    },
  ];

  const highlights = [
    'Fun-filled learning environment',
    'Skill building through play',
    'Productive holiday activities',
    'Small batch sizes for personal attention',
    'Certificate of participation',
    'Interactive sessions with peers',
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-saffron-50 via-white to-sandalwood-50 vedic-bg-pattern py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-saffron-100 p-4 rounded-full mb-6">
              <Sun className="w-12 h-12 text-saffron-700" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-vedic-maroon mb-6">
              Happy Trails Summer Camp
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Turn this summer into a learning adventure! Our exciting camp combines fun activities 
              with valuable math skills that boost confidence and keep kids engaged.
            </p>
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Users className="w-5 h-5 text-vedic-green" />
              <span className="font-semibold text-gray-800">Age: 6+ years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-vedic-maroon mb-6">
                What Makes Our Summer Camp Special?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our Happy Trails Summer Camp is designed to keep children engaged, learning, 
                and having fun during their holidays. We blend educational content with recreational 
                activities to create a memorable summer experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-sandalwood-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-sandalwood-100"
                  >
                    <div className="bg-saffron-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-saffron-700" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600">
                      {activity.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Details */}
      <section className="py-16 bg-gradient-to-br from-sandalwood-50 to-white vedic-bg-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-12">
              Camp Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-md"
                >
                  <CheckCircle className="w-6 h-6 text-vedic-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Children Will Learn */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-12">
              What Your Child Will Gain
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-vedic-green/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-10 h-10 text-vedic-green" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-2">
                  Math Skills
                </h3>
                <p className="text-gray-600">
                  Basic abacus and Vedic math techniques in a fun, non-intimidating way
                </p>
              </div>
              <div className="text-center">
                <div className="bg-saffron-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-10 h-10 text-saffron-700" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-2">
                  Creativity
                </h3>
                <p className="text-gray-600">
                  Art and craft activities that enhance imagination and motor skills
                </p>
              </div>
              <div className="text-center">
                <div className="bg-vedic-maroon/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-10 h-10 text-vedic-maroon" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-2">
                  Confidence
                </h3>
                <p className="text-gray-600">
                  Build self-esteem through achievement and peer interaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Details */}
      <section className="py-16 bg-gradient-to-br from-saffron-50 to-sandalwood-50 vedic-bg-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-sandalwood-100">
              <div className="flex items-center justify-center mb-6">
                <Calendar className="w-12 h-12 text-vedic-green" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-center text-vedic-maroon mb-8">
                Camp Schedule & Details
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-saffron-100 px-4 py-2 rounded-lg">
                    <span className="font-semibold text-vedic-maroon">Duration</span>
                  </div>
                  <p className="text-gray-700 flex-1 pt-2">
                    Multiple session options available. Contact us for specific dates and timings.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-saffron-100 px-4 py-2 rounded-lg">
                    <span className="font-semibold text-vedic-maroon">Mode</span>
                  </div>
                  <p className="text-gray-700 flex-1 pt-2">
                    Both Online and Offline options available
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-saffron-100 px-4 py-2 rounded-lg">
                    <span className="font-semibold text-vedic-maroon">Batch Size</span>
                  </div>
                  <p className="text-gray-700 flex-1 pt-2">
                    Limited seats to ensure personalized attention for every child
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-vedic-maroon via-vedic-maroonLight via-vedic-greenLight to-vedic-green text-white relative overflow-hidden">
        <div className="absolute inset-0 vedic-bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Secure Your Child's Spot Now!
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Limited seats available. Give your child a summer filled with learning, fun, 
            and confidence-building experiences they'll remember forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#summer-camp"
              className="inline-block bg-saffron-600 hover:bg-saffron-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Reserve Your Spot
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white/20 hover:bg-white/30 text-white px-10 py-4 rounded-full text-lg font-semibold border-2 border-white transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
