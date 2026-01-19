'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Send, Calendar, User, BookOpen } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentGrade: '',
    interest: '',
    message: '',
    inquiryType: 'general',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          studentGrade: '',
          interest: '',
          message: '',
          inquiryType: 'general',
        });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
        alert(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
      alert('Failed to submit inquiry. Please try again or contact us directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 78925 05452', '+91 98869 31521'],
      link: 'tel:+917892505452',
      color: 'vedic-green',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['Vidvatta.academy@gmail.com'],
      link: 'mailto:Vidvatta.academy@gmail.com',
      color: 'saffron',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Arehalli, Uttarahalli', 'Bangalore'],
      link: 'https://maps.app.goo.gl/53nB3jxRZBeDExRy6',
      color: 'vedic-maroon',
    },
    {
      icon: Instagram,
      title: 'Social Media',
      details: ['@vidvatta.academy'],
      link: 'https://instagram.com/vidvatta.academy',
      color: 'vedic-gold',
    },
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-saffron-50 via-white to-sandalwood-50 vedic-bg-pattern py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-vedic-maroon mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Get in touch with us to learn more about our programs or to enroll your child. 
              We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const bgColorClass = 
                  method.color === 'vedic-gold' ? 'bg-yellow-100' :
                  method.color === 'saffron' ? 'bg-saffron-100' :
                  method.color === 'vedic-green' ? 'bg-vedic-green/20' :
                  'bg-vedic-maroon/10';
                
                const iconColorClass = 
                  method.color === 'vedic-gold' ? 'text-yellow-600' :
                  method.color === 'saffron' ? 'text-saffron-700' :
                  method.color === 'vedic-green' ? 'text-vedic-green' :
                  'text-vedic-maroon';
                
                return (
                  <a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="bg-gradient-to-br from-sandalwood-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-sandalwood-100 text-center group"
                  >
                    <div className={`${bgColorClass} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-8 h-8 ${iconColorClass}`} />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-vedic-maroon mb-2">
                      {method.title}
                    </h3>
                    {method.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-gradient-to-br from-sandalwood-50 to-white vedic-bg-pattern" id="demo">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Calendar className="w-16 h-16 text-vedic-maroon mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-vedic-maroon mb-4">
                Send Us an Inquiry
              </h2>
              <p className="text-lg text-gray-700">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-sandalwood-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-sandalwood-200 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="demo">Book Free Demo Class</option>
                    <option value="enrollment">Enrollment</option>
                    <option value="summer-camp">Summer Camp</option>
                    <option value="online">Online Classes</option>
                    <option value="offline">Offline Classes</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-sandalwood-200 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none"
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-sandalwood-200 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-sandalwood-200 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Student Grade */}
                  <div>
                    <label htmlFor="studentGrade" className="block text-sm font-semibold text-gray-700 mb-2">
                      Student Grade/Class *
                    </label>
                    <div className="relative">
                      <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        id="studentGrade"
                        name="studentGrade"
                        value={formData.studentGrade}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-sandalwood-200 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none appearance-none bg-white"
                      >
                        <option value="">Select Grade</option>
                        <option value="Class 1">Class 1</option>
                        <option value="Class 2">Class 2</option>
                        <option value="Class 3">Class 3</option>
                        <option value="Class 4">Class 4</option>
                        <option value="Class 5">Class 5</option>
                        <option value="Class 6">Class 6</option>
                        <option value="Class 7">Class 7</option>
                        <option value="Class 8">Class 8</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10</option>
                      </select>
                    </div>
                  </div>

                  {/* Interest */}
                  <div>
                    <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                      Interested In *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-sandalwood-200 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none"
                    >
                      <option value="">Select Interest</option>
                      <option value="abacus">Abacus Program</option>
                      <option value="vedic-math">Vedic Mathematics</option>
                      <option value="both">Both Programs</option>
                      <option value="summer-camp">Summer Camp</option>
                      <option value="online">Online Classes</option>
                      <option value="offline">Offline Classes</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-sandalwood-200 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none resize-none"
                    placeholder="Tell us more about your requirements or ask any questions..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className="w-full bg-saffron-600 hover:bg-saffron-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <span>✓</span>
                        <span>Message Sent Successfully! Check your email for confirmation.</span>
                      </>
                    ) : formStatus === 'error' ? (
                      <>
                        <span>⚠</span>
                        <span>Error - Please try again</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-vedic-maroon mb-4">
              Find Us
            </h2>
            <p className="text-center text-gray-700 mb-8">
              Visit us at our academy in Bangalore
            </p>
            <div className="rounded-xl overflow-hidden shadow-xl border border-sandalwood-200">
              <iframe
                src="https://www.google.com/maps?q=WG7Q%2BG9+Bengaluru,+Karnataka&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vidvatta Academy Location - Arehalli, Uttarahalli, Bangalore"
              />
              <div className="bg-sandalwood-50 p-6 border-t border-sandalwood-200">
                <div className="flex items-center justify-center space-x-2 text-gray-700">
                  <MapPin className="w-5 h-5 text-vedic-green" />
                  <p className="font-semibold">
                    Arehalli, Uttarahalli, Bangalore
                  </p>
                </div>
                <div className="text-center mt-4">
                  <a
                    href="https://maps.app.goo.gl/53nB3jxRZBeDExRy6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-vedic-green hover:text-vedic-maroon font-semibold transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action CTA */}
      <section className="py-16 bg-gradient-to-r from-vedic-maroon via-vedic-green to-vedic-maroon text-white relative overflow-hidden">
        <div className="absolute inset-0 vedic-bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Child's Future?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's start the conversation! Call us or send a message—we're here to answer 
            all your questions and help your child begin their journey to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917892505452"
              className="inline-block bg-saffron-600 hover:bg-saffron-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href="#demo"
              className="inline-block bg-white/20 hover:bg-white/30 text-white px-10 py-4 rounded-full text-lg font-semibold border-2 border-white transition-all duration-300 transform hover:scale-105"
            >
              Enroll Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
