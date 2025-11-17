import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-slate-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:harisaran123456789@gmail.com"
                 className="card-hover flex items-center gap-4 group">
                <div className="icon-box group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white font-medium">harisaran123456789@gmail.com</p>
                </div>
              </a>

              <a href="tel:6300608179"
                 className="card-hover flex items-center gap-4 group">
                <div className="icon-box group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-white font-medium">6300608179</p>
                </div>
              </a>

              <div className="card-hover flex items-center gap-4 group">
                <div className="icon-box group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-white font-medium">Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Saranhari123885"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="social-icon-large">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/hari-saran-18865a31b?utm_
              source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="social-icon-large">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="card-hover">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="input-field"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input-field"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Samudrala Hari Saran. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
