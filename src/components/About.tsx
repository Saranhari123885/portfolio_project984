import { Target, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="card-hover">
              <div className="flex items-start gap-4">
                <div className="icon-box">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Objectives</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Seeking a challenging role as a Java Full-Stack Developer to leverage my technical
                    expertise in Java and cybersecurity, along with strong communication skills, to
                    contribute to innovative projects and collaborate with international clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="flex items-start gap-4">
                <div className="icon-box">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Achievements</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Participated in Hackathon and Codethon coding competitions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Organized CYBERNIX'25 Project Expo at Vel Tech University</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>NSS CPC Volunteer - Community service and student support initiatives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card-hover">
            <div className="flex items-start gap-4">
              <div className="icon-box">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Extracurricular Activities</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Workshops and Seminars</h4>
                    <p className="text-slate-400 mb-3">
                      Attended various workshops and seminars to gain introductory knowledge in different fields:
                    </p>
                    <ul className="space-y-2 text-slate-400">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Basic paper and poster presentations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Applications of Cyber security</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
