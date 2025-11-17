import React from 'react';
import { Award, Calendar } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Introduction to Cyber Security and Networking Basics',
      issuer: 'CISCO',
      date: 'Dec 2024',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Cloud Computing Fundamentals and Web DevelopmentS Fundamentals ',
      issuer: 'IBM SkillsBuilder',
      date: 'June 2025',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Certificate of Internship',
      issuer: 'Vaidsys Technologies',
      date: 'Aug 2025',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Certificate of Course Completion',
      issuer: 'Teachnook',
      date: 'Aug 2024',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Java Programming Fundamentals',
      issuer: 'Infosys Springboard',
      date: 'Mar 2024',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Java Full Stack Development',
      issuer: 'Livetech Institute',
      date: 'Oct 2025',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Certifications</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="card-hover group">
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5
                            transition-opacity duration-300 rounded-xl`}></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`icon-box bg-gradient-to-r ${cert.color}`}>
                    <Award size={20} className="text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-slate-300 font-medium mb-3">{cert.issuer}</p>

                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar size={14} className="text-cyan-400" />
                  {cert.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
