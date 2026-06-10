import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import contactImg from '../assets/Contact.png';

type FormFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  as?: 'input' | 'textarea';
  className?: string;
  name: string;
  required?: boolean;
};

const FormField = ({
  label,
  type = 'text',
  placeholder = '',
  as = 'input',
  className = '',
  name,
  required,
}: FormFieldProps) => (
  <label className={`block ${className}`}>
    <span className="block text-xs text-gray-400 mb-3">{label}</span>
    {as === 'textarea' ? (
      <textarea
        name={name}
        required={required}
        rows={3}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-white/30 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2ccbb5] transition-colors resize-none"
      />
    ) : (
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-white/30 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2ccbb5] transition-colors"
      />
    )}
  </label>
);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const subject = String(data.get('subject') ?? 'Project inquiry');
    const phone = String(data.get('phone') ?? '');
    const message = String(data.get('message') ?? '');

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );
    window.location.href = `mailto:kaspxtech@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
    form.reset();
  };

  return (
    <section className="pt-40 sm:pt-44 pb-16 sm:pb-20 px-4 sm:px-6 bg-white min-h-screen">
      <motion.div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:pr-8 lg:pt-4 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-dark leading-[1.05] tracking-tight">
            Let&apos;s get
            <br />
            in touch
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-bold text-dark">
            Don&apos;t be afraid to say hello with us!
          </p>
          <div className="w-full max-w-md mx-auto lg:mx-0 mt-8 sm:mt-12 lg:mt-16">
            <img 
              src={contactImg} 
              alt="Contact illustration" 
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col w-full"
        >
          <motion.div className="flex items-center gap-4 sm:gap-6 pb-8 sm:pb-14">
            <span className="hidden sm:flex items-center flex-shrink-0" aria-hidden>
              <span className="w-16 md:w-24 h-px bg-dark block" />
              <ArrowRight className="w-5 h-5 text-[#2ccbb5] -ml-1" strokeWidth={2} />
            </span>
            <p className="text-secondary text-sm md:text-base leading-relaxed max-w-md">
              Great! We&apos;re excited to hear from you and let&apos;s start something special
              together. Reach out for any inquiry.
            </p>
          </motion.div>

          <motion.div className="bg-dark rounded-sm p-6 sm:p-8 md:p-10 lg:p-12">
            <p className="text-white text-sm font-semibold mb-6 sm:mb-8">Contact</p>

            {submitted && (
              <p className="mb-6 text-[#2ccbb5] text-sm">
                Thank you! Your email app should open — send the message to complete your inquiry.
              </p>
            )}

            <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                <FormField label="Name" name="name" placeholder="Your name" required />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                />
              </motion.div>

              <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                <FormField label="Subject" name="subject" placeholder="Project inquiry" required />
                <FormField
                  label="Mobile Number"
                  name="phone"
                  type="tel"
                  placeholder="+91 00000 00000"
                />
              </motion.div>

              <FormField
                label="Tell us about your interest"
                name="message"
                as="textarea"
                placeholder="Share a few details about your project..."
                required
              />

              <button
                type="submit"
                className="w-full py-4 mt-2 bg-[#2ccbb5] text-dark font-bold text-base hover:bg-[#25b5a1] transition-colors duration-300"
              >
                Send to us
              </button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
