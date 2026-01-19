import { GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Grades() {
  const grades = [
    {
      level: 'Grade 1 & Above',
      age: '6-8 years',
      focus: 'Foundation Building',
      description: 'Introduction to numbers, basic counting, and abacus fundamentals through fun activities. Perfect starting point for Abacus training.',
      skills: ['Number recognition', 'Basic counting', 'Abacus basics', 'Concentration exercises'],
    },
    {
      level: 'Class 3-4',
      age: '8-10 years',
      focus: 'Skill Development',
      description: 'Building mental math skills with abacus and introduction to Vedic math concepts',
      skills: ['Mental calculation', 'Visualization techniques', 'Speed building', 'Pattern recognition'],
    },
    {
      level: 'Class 5-6',
      age: '10-12 years',
      focus: 'Advanced Abacus',
      description: 'Mastering abacus techniques and comprehensive Vedic mathematics training',
      skills: ['Advanced abacus', 'Vedic math sutras', 'Complex calculations', 'Problem solving'],
    },
    {
      level: 'Class 7-8',
      age: '12-14 years',
      focus: 'Vedic Mathematics',
      description: 'Deep dive into Vedic math techniques with focus on competitive exam preparation',
      skills: ['Vedic shortcuts', 'Algebra basics', 'Exam strategies', 'Speed techniques'],
    },
    {
      level: 'Class 9-10',
      age: '14-16 years',
      focus: 'Competitive Excellence',
      description: 'Advanced Vedic mathematics for board exams, Olympiads, and scholarship tests',
      skills: ['Board exam prep', 'Olympiad training', 'Advanced algebra', 'Time management'],
    },
  ];

  const learningPath = [
    {
      stage: 'Foundation',
      classes: 'Class 1-2',
      color: 'saffron',
    },
    {
      stage: 'Building',
      classes: 'Class 3-4',
      color: 'sandalwood',
    },
    {
      stage: 'Mastering',
      classes: 'Class 5-6',
      color: 'vedic-green',
    },
    {
      stage: 'Advancing',
      classes: 'Class 7-8',
      color: 'vedic-maroon',
    },
    {
      stage: 'Excelling',
      classes: 'Class 9-10',
      color: 'vedic-gold',
    },
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-saffron-50 via-white to-sandalwood-50 vedic-bg-pattern py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <GraduationCap className="w-16 h-16 text-vedic-maroon mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-vedic-maroon mb-6">
              Grade Coverage
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              A structured learning path designed for students from Class 1 to Class 10, 
              progressively building skills and confidence at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Path Visualization */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-12">
            Progressive Learning Path
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 relative">
              {learningPath.map((path, index) => {
                const bgColorClass = 
                  path.color === 'vedic-gold' ? 'bg-yellow-500' :
                  path.color === 'saffron' ? 'bg-saffron-600' :
                  path.color === 'sandalwood' ? 'bg-sandalwood-600' :
                  path.color === 'vedic-green' ? 'bg-vedic-green' :
                  'bg-vedic-maroon';
                
                return (
                  <div key={index} className="flex flex-col items-center flex-1 relative">
                    <div className={`${bgColorClass} text-white w-16 h-16 rounded-full flex items-center justify-center mb-3 font-serif font-bold text-lg shadow-lg`}>
                      {index + 1}
                    </div>
                    <p className="font-semibold text-gray-800 text-sm">{path.stage}</p>
                    <p className="text-xs text-gray-600">{path.classes}</p>
                    {index < learningPath.length - 1 && (
                      <ArrowRight className="hidden md:block w-6 h-6 text-gray-400 absolute right-[-24px] top-8" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Grade Details */}
      <section className="py-16 bg-gradient-to-br from-sandalwood-50 to-white vedic-bg-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {grades.map((grade, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-sandalwood-100 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
                  <div className="md:col-span-1">
                    <div className="bg-gradient-to-br from-saffron-100 to-sandalwood-100 p-6 rounded-lg h-full flex flex-col justify-center">
                      <h3 className="text-2xl font-serif font-bold text-vedic-maroon mb-2">
                        {grade.level}
                      </h3>
                      <p className="text-saffron-700 font-semibold mb-4">{grade.age}</p>
                      <span className="inline-block bg-vedic-green text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {grade.focus}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {grade.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-vedic-maroon mb-3">Key Skills Developed:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {grade.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-vedic-green flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Across Grades */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-12">
              Benefits at Every Stage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-saffron-50 p-6 rounded-xl border border-saffron-100">
                <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-3">
                  Early Grades (1-4)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Strong foundation in numbers and basic operations</li>
                  <li>• Improved concentration and focus</li>
                  <li>• Enhanced memory and recall abilities</li>
                  <li>• Confidence building through early success</li>
                </ul>
              </div>
              <div className="bg-vedic-green/10 p-6 rounded-xl border border-vedic-green/20">
                <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-3">
                  Middle Grades (5-7)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Advanced calculation techniques</li>
                  <li>• Problem-solving skills development</li>
                  <li>• Preparation for competitive exams</li>
                  <li>• Logical thinking and reasoning</li>
                </ul>
              </div>
              <div className="bg-sandalwood-50 p-6 rounded-xl border border-sandalwood-100">
                <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-3">
                  Upper Grades (8-10)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Board exam excellence</li>
                  <li>• Olympiad and scholarship preparation</li>
                  <li>• Time management skills</li>
                  <li>• Advanced mathematical concepts</li>
                </ul>
              </div>
              <div className="bg-vedic-maroon/10 p-6 rounded-xl border border-vedic-maroon/20">
                <h3 className="text-xl font-serif font-semibold text-vedic-maroon mb-3">
                  Life Skills
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Confidence and self-esteem</li>
                  <li>• Discipline and perseverance</li>
                  <li>• Analytical thinking</li>
                  <li>• Academic excellence mindset</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-vedic-maroon to-vedic-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Start Your Child's Learning Journey Today
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Find the perfect program for your child's grade level and help them unlock their mathematical potential
          </p>
          <Link
            href="/contact"
            className="inline-block bg-saffron-600 hover:bg-saffron-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
}
