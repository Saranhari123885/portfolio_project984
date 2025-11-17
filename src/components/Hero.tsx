import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      glowRef.current.style.left = `${x}px`;
      glowRef.current.style.top = `${y}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center pt-16">
      <div
        ref={glowRef}
        className="pointer-events-none fixed w-96 h-96 rounded-full blur-3xl opacity-0 hover:opacity-20
                   bg-gradient-to-r from-cyan-500 to-blue-500 transition-opacity duration-300"
        style={{
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
        }}
      ></div>

      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-cyan-400 text-xl font-semibold animate-fade-in">Hello, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white animate-slide-up">
                Samudrala<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Hari Saran
                </span>
              </h1>
            </div>

            <p className="text-2xl text-slate-300 animate-fade-in-delayed">
              Java Full-Stack Developer & Cybersecurity Enthusiast
            </p>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              Passionate about building scalable, secure, and high-performance applications.
              Specializing in Java, JavaScript, and cybersecurity solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="mailto:harisaran123456789@gmail.com"
                 className="btn-primary">
                <Mail size={20} />
                Contact Me
              </a>
              <a href="#projects"
                 className="btn-secondary">
                View Projects
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a href="mailto:harisaran123456789@gmail.com"
                 className="contact-link">
                <Mail size={18} />
                harisaran123456789@gmail.com
              </a>
              <a href="tel:6300608179"
                 className="contact-link">
                <Phone size={18} />
                6300608179
              </a>
              <div className="contact-link">
                <MapPin size={18} />
                Chennai
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Saranhari123885"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="social-icon">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/hari-saran-18865a31b?utm_
              source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="social-icon">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500
                          rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                 style={{ animation: 'pulse 3s ease-in-out infinite' }}></div>

            <div className="card-3d">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
              <img
                src="/portfolio/portfolio_project/public/saran.jpg"
                alt="Hari Saran"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto border-4 border-cyan-500/30
                         group-hover:border-cyan-400 transition-all duration-300"
              />
            </div>

            <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
                 style={{
                   background: 'radial-gradient(circle at center, rgba(34, 211, 238, 0.1) 0%, transparent 70%)',
                   animation: 'shimmer 3s ease-in-out infinite',
                 }}>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
