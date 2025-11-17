import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B.Tech - Computer Science & Engineering (Cyber Security)',
      institution: 'Vel Tech Rangarajan Dr.Sagunthala RD Institute of Science and Technology',
      period: 'Aug 2022 - Present',
      grade: 'GPA: 9.04/10',
      status: 'current'
    },
    {
      degree: 'Intermediate',
      institution: 'Narayana Junior College',
      period: 'July 2020 - Jun 2022',
      grade: 'Marks: 854/1000',
      status: 'completed'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Vignan Kerala High School',
      period: 'Jun 2008 - Jun 2020',
      grade: 'Marks: 568/600',
      status: 'completed'
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Education</h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="card-hover group">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className={`icon-box group-hover:scale-110 transition-transform ${
                  edu.status === 'current' ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : ''
                }`}>
                  <GraduationCap size={24} className="text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h3>
                    {edu.status === 'current' && (
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-semibold
                                   border border-cyan-500/30 w-fit">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-slate-300 font-medium mb-2">{edu.institution}</p>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={16} className="text-cyan-400" />
                      {edu.period}
                    </div>
                    <div className="text-cyan-400 font-semibold">
                      {edu.grade}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
