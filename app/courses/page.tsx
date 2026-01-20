import Link from 'next/link';
import { Calculator, BookOpen, Users, Clock, Target, Brain, Award, CheckCircle, FileText, Layers } from 'lucide-react';

export default function Courses() {
  const abacusBenefits = [
    'Concentration - Increased focus and attention span with enhanced problem-solving capabilities',
    'Visualization - Improved mental visualization and spatial reasoning skills',
    'Pattern Recognition - Better memory power through recognizing mathematical patterns',
    'Speed & Accuracy - Formulae-based approach increases calculation speed with accurate results',
    'Thinking Ability - Enhanced overall thinking and analytical abilities',
    'Creativity - Encourages creative problem-solving approaches and quick solution-finding',
    'Self-Confidence - Builds self-esteem and self-reliance through achievement',
    'Attentiveness - Improved focus and concentration during learning',
    'Listening Skills - Enhanced auditory processing and instruction-following',
    'Visual Memory - Better retention and recall abilities',
    'Enhanced brain development and cognitive skills',
  ];

  const vedicBenefits = [
    'Simplified Problem Solving - Helps solve problems in a simplified manner with multiple approaches',
    'Memory & Concentration - Sharpens memory, concentration, and confidence through various problem-solving methods',
    'Reduced Mistakes - Helps in reducing small calculation mistakes with the help of sutras',
    'Increased Interest - Mainly helps increase the child\'s interest in mathematics',
    'Stress-Free Learning - No finger counting or rough work needed for calculations',
    'Faster Calculations - Sutras make calculations quicker and easier to solve',
    'Improved Cognition - Enhances cognitive abilities that help in various aspects of life',
    'Mental Calculation - Solve problems in your head instantly',
    'Application Knowledge - Practical problem-solving skills for Arithmetic, Algebra, Geometry, and Calculus',
    'Competitive Exam Readiness - Excellent preparation for Olympiads, scholarship tests, and board exams',
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-saffron-50 via-white to-sandalwood-50 vedic-bg-pattern py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-vedic-maroon mb-6">
              Transform Your Child's Math Journey
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Choose from our proven programs that build strong foundations, boost confidence, 
              and unlock your child's full mathematical potential.
            </p>
          </div>
        </div>
      </section>

      {/* Abacus Program */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-saffron-100 p-3 rounded-full">
                    <Calculator className="w-8 h-8 text-saffron-700" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-vedic-maroon">
                    Abacus Program
                  </h2>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Grade Range</p>
                      <p className="text-gray-600">Grade 1 - Grade 4 (6-10 years)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Layers className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Course Structure</p>
                      <p className="text-gray-600">8 Levels • Approximately 3-4 months per level</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Course Scope</p>
                      <p className="text-gray-600">Arithmetic operations, square roots, cube roots</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Mode</p>
                      <p className="text-gray-600">Online Live Classes & Offline Classroom Training</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Certification</p>
                      <p className="text-gray-600">Certificate of completion awarded upon program completion</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-4">
                  Key Benefits
                </h3>
                <ul className="space-y-2 mb-8">
                  {abacusBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-vedic-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-saffron-50 p-4 rounded-lg border border-saffron-200 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong className="text-vedic-maroon">✨ Free Materials Included:</strong> Books and Abacus Scale provided at no additional cost
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-block bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Enroll in Abacus Program
                </Link>
              </div>
              <div className="bg-gradient-to-br from-saffron-50 to-sandalwood-50 p-8 rounded-xl shadow-lg border border-sandalwood-100">
                <Brain className="w-20 h-20 text-saffron-700 mb-6 mx-auto" />
                <h3 className="text-2xl font-serif font-bold text-vedic-maroon mb-4 text-center">
                  Brain Development
                </h3>
                <p className="text-gray-700 text-center leading-relaxed mb-6">
                  The Abacus, also called Counting Frame, is a calculating tool used since ancient times. 
                  It was used in Europe, China, and Russia centuries before the adoption of the 
                  Hindu-Arabic numeral system. Around the 5th century, Indian clerks developed methods 
                  to record abacus contents. This method stimulates both hemispheres of the brain, 
                  improving coordination, memory, and cognitive abilities.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-vedic-green">+85%</p>
                    <p className="text-sm text-gray-600">Faster Calculation</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-vedic-green">+70%</p>
                    <p className="text-sm text-gray-600">Better Concentration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vedic Mathematics */}
      <section className="py-16 bg-gradient-to-br from-sandalwood-50 to-white vedic-bg-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-vedic-green/10 to-vedic-maroon/10 p-8 rounded-xl shadow-lg border border-sandalwood-100">
                <BookOpen className="w-20 h-20 text-vedic-green mb-6 mx-auto" />
                <h3 className="text-2xl font-serif font-bold text-vedic-maroon mb-4 text-center">
                  Ancient Wisdom, Modern Application
                </h3>
                <p className="text-gray-700 text-center leading-relaxed mb-6">
                  Vedic Mathematics comes from Atharva Veda, founded by Jagadguru Shankaracharya 
                  Shri Bharati Krishna Thirthaji Maharaj between 1911-1918. It consists of 16 Sutras 
                  (formulae) and 13 sub-sutras (sub-formulae) that help solve problems in Arithmetic, 
                  Algebra, Geometry, and Calculus, making math faster, easier, and more enjoyable.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-vedic-maroon">16</p>
                    <p className="text-sm text-gray-600">Core Sutras</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-vedic-maroon">13</p>
                    <p className="text-sm text-gray-600">Sub-Sutras</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-vedic-maroon">100+</p>
                    <p className="text-sm text-gray-600">Shortcuts</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-vedic-green/20 p-3 rounded-full">
                    <BookOpen className="w-8 h-8 text-vedic-green" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-vedic-maroon">
                    Vedic Mathematics
                  </h2>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Grade Range</p>
                      <p className="text-gray-600">Grade 5 and above (10+ years)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Layers className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Course Structure</p>
                      <p className="text-gray-600">6 Levels • Approximately 3-4 months per level</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Course Scope</p>
                      <p className="text-gray-600">Arithmetic, Algebra, Geometry, Calculus</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Mode</p>
                      <p className="text-gray-600">Online Live Classes & Offline Classroom Training</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Focus</p>
                      <p className="text-gray-600">Competitive exam preparation & foundation building</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Certification</p>
                      <p className="text-gray-600">Certificate of completion awarded upon program completion</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-4">
                  Key Benefits
                </h3>
                <ul className="space-y-2 mb-8">
                  {vedicBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-vedic-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-vedic-green/10 p-4 rounded-lg border border-vedic-green/20 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong className="text-vedic-green">✨ Free Materials Included:</strong> Course books provided at no additional cost
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-block bg-vedic-green hover:bg-vedic-green/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Enroll in Vedic Mathematics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Materials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-12">
              Investment & Materials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-saffron-50 to-sandalwood-50 p-8 rounded-xl shadow-lg border border-saffron-200">
                <div className="text-center mb-6">
                  <Award className="w-16 h-16 text-saffron-700 mx-auto mb-4" />
                  <h3 className="text-2xl font-serif font-bold text-vedic-maroon mb-2">
                    Registration Fee
                  </h3>
                  <p className="text-4xl font-bold text-vedic-maroon mb-2">INR 1000/-</p>
                  <p className="text-gray-600">One-time registration fee</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-vedic-green/10 to-vedic-maroon/10 p-8 rounded-xl shadow-lg border border-vedic-green/20">
                <div className="text-center mb-6">
                  <CheckCircle className="w-16 h-16 text-vedic-green mx-auto mb-4" />
                  <h3 className="text-2xl font-serif font-bold text-vedic-maroon mb-4">
                    Free Materials Included
                  </h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-vedic-green flex-shrink-0" />
                      <span className="text-gray-700">Course Books</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-vedic-green flex-shrink-0" />
                      <span className="text-gray-700">Abacus Scale (for Abacus program)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-vedic-green flex-shrink-0" />
                      <span className="text-gray-700">All learning materials</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-vedic-maroon via-vedic-maroonLight to-vedic-green text-white relative overflow-hidden">
        <div className="absolute inset-0 vedic-bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Unsure Which Course Fits Your Child?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Book a free consultation and let our experts guide you to the perfect program 
            that will unlock your child's mathematical excellence.
          </p>
          <Link
            href="/contact#demo"
            className="inline-block bg-saffron-600 hover:bg-saffron-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
