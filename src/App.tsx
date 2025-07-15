import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, Menu, X, Award, Calendar, User, Lock, Eye, EyeOff, Trophy, Star, Target, UserPlus } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS configuration - Replace these with your actual values from EmailJS dashboard
const EMAILJS_SERVICE_ID = 'ravi45'; // Updated Service ID
const EMAILJS_TEMPLATE_ID = 'template_swx01kl'; // Updated Template ID
const EMAILJS_PUBLIC_KEY = 'pgfGdQ3m1gpOsUUA9'; // Updated Public Key

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Bharath Kumar Reddy',
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Initialize EmailJS
export const initializeEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

function App() {
  // Remove all login/signup state and logic
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // Remove isLoggedIn, isSignUp, loginForm, signUpForm, and their handlers

  // Contact form state
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const skills = [
    { name: 'Html', level: 95 },
    { name: 'Css', level: 95 },
    { name: 'JavaScript', level: 95 },
    { name: 'Clanguage', level: 88 },
    { name: 'Python', level: 85 },
    { name: 'Database Design (SQL/NoSQL)', level: 93 },
    { name: 'Java', level: 86 },
  ];

  const achievements = [
    {
      title: 'Event Management Certification',
      issuer: 'Professional Event Management Institute',
      date: '2023',
      image: './Event.jpg',
      description: 'Comprehensive certification in event planning, coordination, and management. Covers logistics, vendor management, and successful event execution.',
      credentialId: 'CERT-2023-EM-001',
      type: 'certification'
    },
    {
      title: 'TCS Digital Certification',
      issuer: 'Tata Consultancy Services',
      date: '2023',
      image: './Tcs.jpg',
      description: 'Professional certification in digital technologies and consulting services. Demonstrates expertise in IT consulting and digital transformation.',
      credentialId: 'Cert ID: 240640-28228918-1016',
      type: 'certification'
    },
    {
      title: 'SQL Database Administration',
      issuer: 'Microsoft Certified',
      date: '2023',
      image: './Sql.jpg',
      description: 'Advanced certification in SQL database design, administration, and optimization. Covers data modeling, performance tuning, and security.',
      credentialId: '1008698620CSSQL12C',
      type: 'certification'
    },
    {
      title: 'Java Development Certification',
      issuer: 'Oracle Certified Professional',
      date: '2022',
      image: './Java.jpg',
      description: 'Professional Java programming certification covering core Java concepts, enterprise development, and best practices in software development.',
      credentialId: 'ORACLE-JAVA-2022-004',
      type: 'certification'
    }
  ];

  const projects = [
    {
      title: 'Enterprise E-Commerce Platform',
      description: 'Full-stack e-commerce solution handling 100K+ daily transactions with React, Node.js, and PostgreSQL. Features real-time inventory, payment processing, and comprehensive admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '#',
      metrics: '100K+ daily users'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence platform with machine learning insights. Built with React, D3.js, Python backend, and TensorFlow for predictive analytics.',
      technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'AWS', 'Docker'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '#',
      metrics: '40% efficiency increase'
    },
    {
      title: 'Secure Banking Mobile App',
      description: 'Cross-platform mobile banking application with React Native. Features biometric authentication, real-time transactions, and push notifications.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Firebase'],
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '#',
      metrics: '500K+ downloads'
    },
    {
      title: 'Microservices Architecture Platform',
      description: 'Scalable microservices platform handling 1M+ daily requests. Implemented with Docker, Kubernetes, and event-driven architecture for high availability.',
      technologies: ['Docker', 'Kubernetes', 'Go', 'RabbitMQ', 'MongoDB', 'Prometheus'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '#',
      metrics: '99.9% uptime'
    }
  ];

  useEffect(() => {
    initializeEmailJS();
    // Remove login-dependent scroll logic
      const handleScroll = () => {
        const sections = ['about', 'achievements', 'skills', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 100;
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
            }
          }
        });
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('sending');
    const success = await sendContactEmail(contactForm);
    setContactStatus(success ? 'success' : 'error');
    if (success) {
      setContactForm({ name: '', email: '', message: '' });
    }
  };

  // Remove all login/signup UI and return only the main portfolio JSX
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-red-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-red-900/80 backdrop-blur-md border-b border-red-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white drop-shadow-lg">
              H.Ravi Teja
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'achievements', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section
                      ? 'text-red-300'
                      : 'text-red-100 hover:text-white'
                  }`}
                >
                  {section === 'achievements' ? 'Achievements' : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-red-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-red-800 border-t border-red-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['about', 'achievements', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-3 py-2 capitalize transition-colors duration-200 ${
                    activeSection === section
                      ? 'text-red-300'
                      : 'text-red-100 hover:text-white'
                  }`}
                >
                  {section === 'achievements' ? 'Achievements' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* About Me Section */}
      <section id="about" className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-red-800/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-400 to-red-600 p-2 shadow-2xl flex items-center justify-center">
              <img 
                src="/WhatsApp Image 2025-07-07 at 11.12.49_99569377.jpg" 
                alt="H.Ravi Teja Profile" 
                className="w-full h-full rounded-full object-cover border-4 border-red-900/50 bg-red-900"
                style={{ display: 'block', objectPosition: 'center 20%' }}
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-300 via-red-100 to-red-300 bg-clip-text text-transparent">
              Hi, I'm H.Ravi Teja
            </h1>
            <p className="text-lg text-red-300 max-w-2xl mx-auto leading-relaxed">
            A CSE (AI) student at Saveetha School of Engineering - Chennai, passionate about building smart and efficient tech solutions. I enjoy working with Java, Python, and web technologies, and I'm currently exploring AI, cloud, and automation. Always curious and eager to learn, I love turning ideas into real projects.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 border border-red-400 rounded-lg font-semibold hover:bg-red-800 transition-all duration-200 transform hover:scale-105"
            >
              View My Work
            </button>
          </div>

          <div className="animate-bounce">
            <ChevronDown
              size={32}
              className="mx-auto text-red-300 cursor-pointer hover:text-white transition-colors"
              onClick={() => scrollToSection('achievements')}
            />
          </div>
        </div>
      </section>

      {/* Achievements & Certifications Section */}
      <section id="achievements" className="py-20 bg-red-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-300 to-red-100 bg-clip-text text-transparent">
              Achievements & Certifications
            </h2>
            <p className="text-xl text-red-200 max-w-2xl mx-auto">
              Professional milestones and industry-recognized certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="group bg-red-900/30 backdrop-blur-sm rounded-lg overflow-hidden border border-red-700/50 hover:border-red-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      {item.type === 'achievement' ? 
                        <Trophy size={20} className="text-white" /> : 
                        <Award size={20} className="text-white" />
                      }
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-red-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-red-300 mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{item.issuer} • {item.date}</span>
                  </div>
                  <p className="text-red-200 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="bg-red-800/50 rounded-lg p-3 border border-red-700/50">
                    <p className="text-xs text-red-300 mb-1">
                      {item.type === 'achievement' ? 'Achievement ID' : 'Credential ID'}
                    </p>
                    <p className="text-sm font-mono text-red-200">{item.credentialId}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-lg border border-red-500/30">
              <Star size={24} className="text-red-300 mr-3" />
              <div className="text-left">
                <p className="text-white font-semibold">Excellence in Technology</p>
                <p className="text-red-300 text-sm">Committed to continuous learning and professional growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-300 to-red-100 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-red-200 max-w-2xl mx-auto">
              A decade of expertise across modern technologies and frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-red-900/30 backdrop-blur-sm rounded-lg p-6 border border-red-700/50 hover:border-red-500/70 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-red-300 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-red-800/50 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">10+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
              <p className="text-red-300">Building enterprise applications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">75+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Projects Delivered</h3>
              <p className="text-red-300">From startups to Fortune 500</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">20+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Members Led</h3>
              <p className="text-red-300">Mentoring next-gen developers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-red-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-300 to-red-100 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-red-200 max-w-2xl mx-auto">
              Innovative solutions delivering measurable business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-red-900/30 backdrop-blur-sm rounded-lg overflow-hidden border border-red-700/50 hover:border-red-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-red-600/80 rounded-full text-sm font-semibold">
                      {project.metrics}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-red-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-red-200 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-red-800/50 rounded-full text-sm text-red-200 border border-red-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-red-300 hover:text-red-200 transition-colors group"
                  >
                    View Project 
                    <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-300 to-red-100 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-red-200 max-w-2xl mx-auto">
              Ready to collaborate on your next big project? Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-red-200">Email</p>
                    <p className="text-white font-semibold">ravilucky@2003gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-red-200">Phone</p>
                    <p className="text-white font-semibold">9390116858</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-red-200">Location</p>
                    <p className="text-white font-semibold">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/hotelraviteja" className="w-12 h-12 bg-red-800/50 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors border border-red-700/50">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/hotel-ravi-teja-ab8b00329/" className="w-12 h-12 bg-red-800/50 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors border border-red-700/50">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://x.com/ravilucky50055" className="w-12 h-12 bg-red-800/50 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors border border-red-700/50">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div>
                  <label className="block text-sm font-medium text-red-200 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactInputChange}
                    className="w-full px-4 py-3 bg-red-900/30 border border-red-700/50 rounded-lg focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 text-white placeholder-red-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-red-200 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactInputChange}
                    className="w-full px-4 py-3 bg-red-900/30 border border-red-700/50 rounded-lg focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 text-white placeholder-red-300"
                    placeholder="ravilucky@2003gmail.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-red-200 mb-2">Message</label>
                  <textarea 
                    rows={6}
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactInputChange}
                    className="w-full px-4 py-3 bg-red-900/30 border border-red-700/50 rounded-lg focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 text-white resize-none placeholder-red-300"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  disabled={contactStatus === 'sending'}
                >
                  {contactStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {contactStatus === 'success' && (
                  <p className="text-green-400 text-center mt-2">Message sent successfully!</p>
                )}
                {contactStatus === 'error' && (
                  <p className="text-red-400 text-center mt-2">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-red-700/50 bg-red-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-300">
            © 2024 H.Ravi Teja. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;