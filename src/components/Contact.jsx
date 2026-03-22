import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(formRef.current);

    fetch('https://formsubmit.co/ajax/iamprdip160@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        if (data.success || data.success === "true") {
          setSuccess(true);
          if(formRef.current) formRef.current.reset();
          setTimeout(() => setSuccess(false), 3000);
        } else {
          alert("Failed to send the message. Please try again.");
        }
      })
      .catch(error => {
          console.log(error);
          setLoading(false);
          alert("Failed to send the message. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-24 w-full px-6 flex justify-center relative z-10">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
            Let's Connect
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-primary-purple to-primary-blue rounded-full"></div>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="glass p-8 rounded-3xl h-full relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-32 h-32 bg-primary-blue/10 rounded-full blur-3xl -ml-10 -mt-10 group-hover:bg-primary-blue/20 transition-all"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 text-gray-300 hover:text-primary-blue transition-colors">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary-blue bg-white/5">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-light text-gray-500">Email</p>
                    <p className="font-medium">iamprdip160@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300 hover:text-primary-purple transition-colors">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary-purple bg-white/5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-light text-gray-500">Location</p>
                    <p className="font-medium">Bokaro, Jharkhand, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-medium text-white mb-4">Connect on Socials</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/prdip01" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/pradeep-kumar-53a9502a6" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:bg-white/10 transition-all hover:-translate-y-1 glow-box-blue hover:shadow-[#0A66C2]/50">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/prdip01" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[#E1306C] hover:bg-white/10 transition-all hover:-translate-y-1 glow-box-purple hover:shadow-[#E1306C]/50">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form 
              ref={formRef} 
              onSubmit={handleSubmit}
              className="glass p-8 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-purple/10 rounded-full blur-3xl -mr-10 -mb-10"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-white text-center">Send Me a Message</h3>

              <div className="flex flex-col gap-4 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="user_name"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="user_email"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-purple focus:ring-1 focus:ring-primary-purple transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows="4"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-primary-blue to-primary-purple text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? 'Sending...' : 'Send Message'}
                    {!loading && <Send size={18} />}
                  </span>
                </button>

                {success && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-center text-sm font-medium mt-2"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
