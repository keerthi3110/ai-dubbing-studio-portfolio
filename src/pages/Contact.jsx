import { useState, useEffect } from 'react';
import { 
  MdEmail, 
  MdAccessTime, 
  MdCheckCircle, 
  MdArrowForward,
  MdInfoOutline
} from 'react-icons/md';
import RevealOnScroll from '../components/RevealOnScroll';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field as user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="bg-off-white dark:bg-dark-navy text-body-text dark:text-muted-text min-h-screen pt-36 pb-24 overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        
        {/* SECTION 1: HERO HEADER */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <RevealOnScroll>
            <span className="font-label-caps text-label-caps text-primary-blue mb-6 flex items-center gap-2 uppercase tracking-widest">
              <MdEmail className="text-lg" />
              CONTACT
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-headline-lg lg:text-display-lg text-dark-navy dark:text-white mb-8 leading-none">
              Let's talk.
            </h1>
            <p className="font-body-lg text-body-lg text-body-text dark:text-muted-text max-w-2xl leading-relaxed">
              Questions about pricing, enterprise partnerships, product demos, technical integrations, or collaborations? We'd love to hear from you.
            </p>
          </RevealOnScroll>
        </div>

        {/* SECTION 2: TWO-COLUMN LAYOUT */}
        <div className="grid md:grid-cols-12 gap-gutter items-start">
          
          {/* LEFT COLUMN: CONTACT DETAILS & INFO */}
          <div className="md:col-span-5 space-y-12 pr-0 md:pr-12">
            
            {/* Email Channels Card */}
            <RevealOnScroll delay={100}>
              <div className="bg-white dark:bg-slate border border-border-gray/30 dark:border-slate-800/80 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="font-label-caps text-[11px] text-muted-text block mb-4 tracking-widest uppercase">
                  DIRECT EMAIL
                </span>
                <div className="space-y-4">
                  <a 
                    href="mailto:social@inkaai.com"
                    className="font-display-lg text-[22px] md:text-[26px] font-semibold text-dark-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-blue transition-colors block leading-tight break-all"
                  >
                    social@inkaai.com
                  </a>
                  <a 
                    href="mailto:adithya@inkaai.com"
                    className="font-display-lg text-[22px] md:text-[26px] font-semibold text-dark-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-blue transition-colors block leading-tight break-all"
                  >
                    adithya@inkaai.com
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            {/* Response Time Info */}
            <RevealOnScroll delay={200}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-soft-blue dark:bg-primary-blue/15 rounded-lg flex items-center justify-center text-primary-blue text-xl flex-shrink-0">
                  <MdAccessTime />
                </div>
                <div>
                  <h3 className="font-button text-[14px] font-bold text-dark-navy dark:text-white mb-2 uppercase tracking-wide">
                    Response Time
                  </h3>
                  <p className="font-body-md text-body-text dark:text-muted-text text-[15px] leading-relaxed">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Good For Checklist */}
            <RevealOnScroll delay={300}>
              <div>
                <h3 className="font-button text-[14px] font-bold text-dark-navy dark:text-white mb-6 uppercase tracking-wide">
                  Good For
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                  {[
                    'Enterprise pricing',
                    'API integrations',
                    'Product demonstrations',
                    'AI Avatar enquiries',
                    'Voice cloning projects',
                    'Partnerships'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-body-md text-[15px] text-body-text dark:text-muted-text">
                      <MdCheckCircle className="text-primary-blue text-lg flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="md:col-span-7 mt-12 md:mt-0">
            <RevealOnScroll delay={150}>
              <div className="bg-white dark:bg-slate border border-border-gray/30 dark:border-slate-800/80 p-8 md:p-10 rounded-xl shadow-lg relative">
                
                {isSubmitted && (
                  <div className="mb-8 p-6 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50 rounded-xl flex items-start gap-4 animate-fade-in">
                    <MdCheckCircle className="text-emerald-500 text-2xl flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-button text-sm font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-1">
                        Message Sent
                      </h4>
                      <p className="font-body-md text-emerald-700 dark:text-emerald-500 text-[14px] leading-relaxed">
                        Thank you! Your message has been received.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  {/* Name Field */}
                  <div className="space-y-3">
                    <label 
                      htmlFor="name" 
                      className="block font-button text-[12px] font-bold uppercase tracking-wider text-dark-navy dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      className={`w-full bg-off-white dark:bg-dark-navy border ${
                        errors.name 
                          ? 'border-red-500 focus-visible:ring-red-500' 
                          : 'border-border-gray/50 dark:border-slate-800 focus-visible:ring-primary-blue'
                      } px-5 py-4 font-body-md text-[15px] text-dark-navy dark:text-white rounded-xl placeholder:text-muted-text/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs flex items-center gap-1.5 font-body-md">
                        <MdInfoOutline className="text-[14px]" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-3">
                    <label 
                      htmlFor="email" 
                      className="block font-button text-[12px] font-bold uppercase tracking-wider text-dark-navy dark:text-white"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full bg-off-white dark:bg-dark-navy border ${
                        errors.email 
                          ? 'border-red-500 focus-visible:ring-red-500' 
                          : 'border-border-gray/50 dark:border-slate-800 focus-visible:ring-primary-blue'
                      } px-5 py-4 font-body-md text-[15px] text-dark-navy dark:text-white rounded-xl placeholder:text-muted-text/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs flex items-center gap-1.5 font-body-md">
                        <MdInfoOutline className="text-[14px]" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-3">
                    <label 
                      htmlFor="message" 
                      className="block font-button text-[12px] font-bold uppercase tracking-wider text-dark-navy dark:text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows="5"
                      className={`w-full bg-off-white dark:bg-dark-navy border ${
                        errors.message 
                          ? 'border-red-500 focus-visible:ring-red-500' 
                          : 'border-border-gray/50 dark:border-slate-800 focus-visible:ring-primary-blue'
                      } px-5 py-4 font-body-md text-[15px] text-dark-navy dark:text-white rounded-xl placeholder:text-muted-text/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs flex items-center gap-1.5 font-body-md">
                        <MdInfoOutline className="text-[14px]" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full group relative overflow-hidden bg-primary-blue text-white py-5 font-button text-button uppercase tracking-widest transition-all hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      SEND MESSAGE
                      <MdArrowForward className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-primary-hover-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.2, 1, 0.3, 1)" />
                  </button>
                </form>
              </div>
            </RevealOnScroll>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;
