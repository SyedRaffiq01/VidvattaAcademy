'use client';

import { GraduationCap, CheckCircle, Clock, Target, Award, Sparkles, Brain, TrendingUp, Star, Rocket, BookOpen, Users, FileText } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function Grades() {
  const gradeStages = [
    {
      title: 'Foundation Years',
      grades: 'Class 1 - 3',
      age: '6-9 years',
      icon: Rocket,
      color: 'saffron',
      description: 'Building Strong Mathematical Foundations',
      focus: 'Establishing love for numbers and building confidence',
      outcomes: [
        'Strong number sense and basic operations',
        'Improved concentration and attention span',
        'Enhanced memory through visualization',
        'Confidence in tackling math problems',
        'Better listening and following instructions',
      ],
      academicImpact: 'Sets the stage for future mathematical success with a positive mindset',
      testimonial: 'Perfect starting point - my daughter now loves math!',
    },
    {
      title: 'Growth Years',
      grades: 'Class 4 - 6',
      age: '9-12 years',
      icon: TrendingUp,
      color: 'vedic-green',
      description: 'Accelerating Mental Math Skills',
      focus: 'Mastering speed techniques and building analytical thinking',
      outcomes: [
        'Lightning-fast mental calculations',
        'Advanced problem-solving abilities',
        'Pattern recognition and logical reasoning',
        'Competitive exam preparation foundation',
        'Improved performance across all subjects',
      ],
      academicImpact: 'Builds critical thinking skills that enhance overall academic performance',
      testimonial: 'My son\'s calculation speed has amazed his teachers!',
    },
    {
      title: 'Excellence Years',
      grades: 'Class 7 - 10',
      age: '12-16 years',
      icon: Award,
      color: 'vedic-maroon',
      description: 'Achieving Competitive Excellence',
      focus: 'Board exam mastery and competitive edge',
      outcomes: [
        'Board exam excellence and top scores',
        'Olympiad and scholarship success',
        'Time management and exam strategies',
        'Advanced mathematical concepts mastery',
        'Leadership and presentation confidence',
      ],
      academicImpact: 'Direct impact on board results and competitive exam achievements',
      testimonial: 'Scored 98% in math - Vedic techniques were game-changers!',
    },
  ];

  const uniqueFeatures = [
    {
      icon: Users,
      title: 'Small Batch Learning',
      description: 'Maximum 8-12 students per batch ensures personalized attention',
    },
    {
      icon: Clock,
      title: 'Flexible Progression',
      description: '3-4 months per level with flexible scheduling for all grades',
    },
    {
      icon: FileText,
      title: 'Certification',
      description: 'Certificate of completion awarded upon successful program completion',
    },
    {
      icon: Brain,
      title: 'Holistic Development',
      description: 'Builds concentration, memory, and confidence alongside math skills',
    },
    {
      icon: Star,
      title: 'Proven Results',
      description: 'Consistent excellence outcomes across all grade levels',
    },
  ];

  const transformationStages = [
    {
      stage: 'Start',
      title: 'Begin the Journey',
      description: 'Assessment and placement into appropriate level',
      duration: 'Week 1',
    },
    {
      stage: 'Learn',
      title: 'Master Fundamentals',
      description: 'Structured learning with regular practice sessions',
      duration: 'Months 1-3',
    },
    {
      stage: 'Practice',
      title: 'Build Speed & Accuracy',
      description: 'Intensive practice and skill refinement',
      duration: 'Months 2-4',
    },
    {
      stage: 'Excel',
      title: 'Achieve Excellence',
      description: 'Mastery demonstrated through assessments and real-world application',
      duration: 'By Completion',
    },
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-saffron-50 via-white to-sandalwood-50 vedic-bg-pattern py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <GraduationCap className="w-20 h-20 text-vedic-maroon mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-vedic-maroon mb-6">
                Every Grade, Every Success Story
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4">
                From Class 1 to Class 10, we tailor our comprehensive program 
                to help your child excel at every stage of their academic journey.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Whether building foundations or preparing for competitive exams, 
                our structured approach ensures mastery and confidence at every grade level.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Grade Stages - The Main Focus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-4">
              Tailored Excellence for Every Stage
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
              Our program adapts to support your child's unique needs at each academic stage, 
              ensuring maximum impact and transformation.
            </p>
          </ScrollReveal>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {gradeStages.map((stage, index) => {
              const Icon = stage.icon;
              const bgColor = 
                stage.color === 'saffron' ? 'from-saffron-50 to-saffron-100' :
                stage.color === 'vedic-green' ? 'from-vedic-green/10 to-vedic-green/20' :
                'from-vedic-maroon/10 to-vedic-maroon/20';
              
              const borderColor =
                stage.color === 'saffron' ? 'border-saffron-200' :
                stage.color === 'vedic-green' ? 'border-vedic-green/30' :
                'border-vedic-maroon/30';

              const iconBg =
                stage.color === 'saffron' ? 'bg-saffron-100' :
                stage.color === 'vedic-green' ? 'bg-vedic-green/20' :
                'bg-vedic-maroon/20';

              const iconColor =
                stage.color === 'saffron' ? 'text-saffron-700' :
                stage.color === 'vedic-green' ? 'text-vedic-green' :
                'text-vedic-maroon';

              return (
                <ScrollReveal key={index} delay={index * 150}>
                  <div className={`bg-gradient-to-br ${bgColor} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${borderColor} overflow-hidden`}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-10">
                      {/* Left Column - Grade Info */}
                      <div className="lg:col-span-1">
                        <div className={`${iconBg} w-20 h-20 rounded-full flex items-center justify-center mb-6`}>
                          <Icon className={`w-10 h-10 ${iconColor}`} />
                        </div>
                        <div className="mb-4">
                          <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-bold text-vedic-maroon mb-2 shadow-md">
                            {stage.grades}
                          </span>
                          <p className="text-gray-600 text-sm mb-4">{stage.age}</p>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-vedic-maroon mb-3">
                          {stage.title}
                        </h3>
                        <p className="text-lg font-semibold text-gray-800 mb-4">
                          {stage.description}
                        </p>
                        <div className="bg-white/80 p-4 rounded-lg border border-white/50">
                          <p className="text-sm text-gray-700 italic">
                            "{stage.testimonial}"
                          </p>
                        </div>
                      </div>

                      {/* Middle Column - Focus & Outcomes */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <div className="flex items-center space-x-2 mb-3">
                            <Target className={`w-5 h-5 ${iconColor}`} />
                            <h4 className="font-bold text-vedic-maroon text-lg">Primary Focus</h4>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            {stage.focus}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center space-x-2 mb-4">
                            <Star className={`w-5 h-5 ${iconColor}`} />
                            <h4 className="font-bold text-vedic-maroon text-lg">Key Outcomes</h4>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {stage.outcomes.map((outcome, outcomeIndex) => (
                              <div key={outcomeIndex} className="flex items-start space-x-2 bg-white/60 p-3 rounded-lg">
                                <CheckCircle className={`w-5 h-5 ${iconColor} mt-0.5 flex-shrink-0`} />
                                <span className="text-gray-700 text-sm">{outcome}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white/80 p-4 rounded-lg border-l-4 border-vedic-green">
                          <div className="flex items-center space-x-2 mb-2">
                            <BookOpen className="w-5 h-5 text-vedic-green" />
                            <h4 className="font-semibold text-vedic-maroon">Academic Impact</h4>
                          </div>
                          <p className="text-gray-700 text-sm">
                            {stage.academicImpact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transformation Journey */}
      <section className="py-16 bg-gradient-to-br from-sandalwood-50 to-white vedic-bg-pattern">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-6">
              The Journey to Excellence
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
              Every student, regardless of grade, follows a structured transformation journey 
              that builds skills progressively and ensures mastery at every step.
            </p>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {transformationStages.map((step, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center border-2 border-sandalwood-100 hover:border-vedic-green transition-all duration-300">
                    <div className="bg-vedic-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-serif font-bold text-2xl shadow-md">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-vedic-maroon mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                    <span className="inline-block bg-saffron-100 text-saffron-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {step.duration}
                    </span>
                    {index === 3 && (
                      <div className="mt-4 pt-4 border-t border-sandalwood-200">
                        <div className="flex items-center justify-center space-x-2 text-vedic-green">
                          <FileText className="w-5 h-5" />
                          <span className="text-sm font-semibold">Certificate Awarded</span>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-6">
              Why Our Approach Works for All Grades
            </h2>
          </ScrollReveal>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {uniqueFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-gradient-to-br from-sandalwood-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-sandalwood-100 text-center">
                    <div className="bg-saffron-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FeatureIcon className="w-8 h-8 text-saffron-700" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-vedic-maroon mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gradient-to-br from-vedic-green/10 to-vedic-maroon/10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-vedic-green/20">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-8">
                The Result: Consistent Excellence Across All Grades
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-vedic-green mb-2">85%+</div>
                  <p className="text-gray-700">Faster Calculation Speed</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-vedic-maroon mb-2">70%+</div>
                  <p className="text-gray-700">Improved Concentration</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-saffron-700 mb-2">100%</div>
                  <p className="text-gray-700">Confidence Building</p>
                </div>
              </div>
              <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto mb-6">
                Whether your child starts in Class 1 or Class 10, our structured program ensures 
                they develop exceptional mathematical abilities, improved cognitive skills, and 
                unshakeable confidence that extends far beyond academics.
              </p>
              <div className="flex items-center justify-center space-x-2 text-vedic-green mt-6">
                <FileText className="w-6 h-6" />
                <span className="font-semibold text-lg">Certificate of Completion Awarded to All Successful Graduates</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-vedic-maroon via-vedic-maroonLight via-vedic-greenLight to-vedic-green text-white relative overflow-hidden">
        <div className="absolute inset-0 vedic-bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Start Your Child's Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join hundreds of students who are excelling at every grade level. 
              Let's discuss how our program can transform your child's mathematical journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-saffron-600 hover:bg-saffron-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Enroll Now
              </Link>
              <Link
                href="/contact#demo"
                className="inline-block bg-white/20 hover:bg-white/30 text-white px-10 py-4 rounded-full text-lg font-semibold border-2 border-white transition-all duration-300 transform hover:scale-105"
              >
                Book Free Demo
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
