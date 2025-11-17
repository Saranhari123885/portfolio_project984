import { Code, Database, Shield, Wrench, MessageSquare } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Technical Skills',
      skills: ['C', 'Java', 'JavaScript', 'HTML', 'CSS']
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['SQL', 'Query Optimization']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      skills: ['IAM Basics', 'Kali Linux', 'Wireshark', 'AES/DES Encryption', 'Steganography']
    },
    {
      icon: Wrench,
      title: 'Concepts & Tools',
      skills: ['OOPS', 'SDLC', 'Git', 'Linux', 'Problem Solving']
    },
    {
      icon: MessageSquare,
      title: 'Soft Skills',
      skills: ['Communication', 'Leadership', 'Team Collaboration', 'Adaptability']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-hover group">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box group-hover:scale-110 transition-transform">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-slate-700 text-cyan-400 rounded-full text-sm font-medium
                             border border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-400
                             transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
