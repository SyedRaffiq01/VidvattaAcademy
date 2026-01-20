import Link from 'next/link';
import { Monitor, Users, Clock, Calendar, CheckCircle, Video, BookOpen, Award } from 'lucide-react';

export default function Classes() {
  const onlineFeatures = [
    'Live interactive sessions with real-time feedback',
    'Screen sharing and digital abacus visualization',
    'Small batch sizes for personalized attention',
    'Flexible scheduling to fit your timezone',
  ];

  const offlineFeatures = [
    'Face-to-face learning',
    'Hands-on practice with physical abacus tools',
    'Direct interaction with certified trainers',
    'Peer learning and group activities',
    'Comfortable classroom environment',
    'Regular assessments and progress tracking',
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-saffron-50 via-white to-sandalwood-50 vedic-bg-pattern py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-vedic-maroon mb-6">
              Learn Your Way: Online or In-Person
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Choose the learning mode that fits your family. Whether online or offline, 
              your child gets the same exceptional training with our certified instructors.
            </p>
          </div>
        </div>
      </section>

      {/* Online Classes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-saffron-100 p-3 rounded-full">
                    <Monitor className="w-8 h-8 text-saffron-700" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-vedic-maroon">
                    Online Classes
                  </h2>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Experience the flexibility of learning from home without compromising on quality. 
                  Our online classes are designed to be just as interactive and engaging as in-person sessions.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Video className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Platform</p>
                      <p className="text-gray-600">Zoom / Google Meet with interactive tools</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Batch Size</p>
                      <p className="text-gray-600">Maximum 8-10 students per batch</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Session Duration</p>
                      <p className="text-gray-600">60-90 minutes per session</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2 mb-8">
                  {onlineFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-vedic-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Enroll in Online Classes
                </Link>
              </div>
              <div className="bg-gradient-to-br from-saffron-50 to-sandalwood-50 p-8 rounded-xl shadow-lg border border-sandalwood-100">
                <div className="space-y-6">
                  <div className="text-center">
                    <Video className="w-16 h-16 text-saffron-700 mx-auto mb-4" />
                    <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-2">
                      Interactive Learning
                    </h3>
                    <p className="text-gray-600">
                      Real-time interaction with instructors and peers
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">What You'll Need:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Stable internet connection</li>
                      <li>• Laptop/Tablet with camera & microphone</li>
                      <li>• Quiet study space</li>
                      <li>• Notebook and pen for practice</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offline Classes */}
      <section className="py-16 bg-gradient-to-br from-sandalwood-50 to-white vedic-bg-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-vedic-green/10 to-vedic-maroon/10 p-8 rounded-xl shadow-lg border border-sandalwood-100">
                <div className="space-y-6">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-vedic-green mx-auto mb-4" />
                    <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-2">
                      Traditional Learning
                    </h3>
                    <p className="text-gray-600">
                      Hands-on experience with physical tools and materials
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Location:</p>
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      Arehalli, Uttarahalli, Bangalore
                    </p>
                    <p className="text-xs text-gray-600">
                      Comfortable classroom environment for effective learning
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-vedic-green/20 p-3 rounded-full">
                    <Users className="w-8 h-8 text-vedic-green" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-vedic-maroon">
                    Offline Classes
                  </h2>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Experience the traditional classroom environment with hands-on learning, 
                  physical abacus tools, and direct interaction with our expert trainers.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Environment</p>
                      <p className="text-gray-600">Comfortable classroom environment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Batch Size</p>
                      <p className="text-gray-600">Maximum 8-12 students per batch</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-vedic-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Schedule</p>
                      <p className="text-gray-600">Weekday & weekend slots available</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2 mb-8">
                  {offlineFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-vedic-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-vedic-green hover:bg-vedic-green/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Enroll in Offline Classes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Timings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Clock className="w-16 h-16 text-saffron-700 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-vedic-maroon mb-6">
              Flexible Timings
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We understand that every family has different schedules. That's why we offer 
              flexible timing options for both online and offline classes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-sandalwood-50 p-6 rounded-xl border border-sandalwood-100">
                <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-3">
                  Weekday Slots
                </h3>
                <p className="text-gray-600">
                  Morning, afternoon, and evening slots available Monday through Friday
                </p>
              </div>
              <div className="bg-saffron-50 p-6 rounded-xl border border-saffron-100">
                <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-3">
                  Weekend Slots
                </h3>
                <p className="text-gray-600">
                  Saturday and Sunday sessions for students with busy weekday schedules
                </p>
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
            Ready to Begin Your Child's Transformation?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss the perfect class option and timing to unlock your child's mathematical potential
          </p>
          <Link
            href="/contact"
            className="inline-block bg-saffron-600 hover:bg-saffron-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Book Your Slot Today
          </Link>
        </div>
      </section>
    </div>
  );
}
