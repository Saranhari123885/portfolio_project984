import { Lock, Image, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: Lock,
      title: 'Steganographic Cryptography System for Covert Communication',
      description: 'A secure covert communication system integrating cryptography and steganography for secret information transmission.',
      highlights: [
        'Implemented AES/DES encryption for data security',
        'Embedded encrypted text into images, audio, and video files',
        'Built with HTML, CSS, and JavaScript'
      ],
      technologies: [ 'JavaScript', 'AES', 'DES', 'HTML/CSS'],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Image,
      title: 'Implementation of Image Segmentation for Cyber Forensics',
      description: 'Re-benchmarking framework for fair evaluation of machine learning models with focus on reproducibility and optimization.',
      highlights: [
        'Designed standardized benchmarking framework',
        'Implemented fairness measures and bias elimination',
        'Automated evaluation mechanisms for consistency',
        'Enhanced reproducibility in results'
      ],
      technologies: ['Python', 'Machine Learning', 'Computer Vision', 'Benchmarking'],
      gradient: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-hover group">
              <div className="relative overflow-hidden rounded-t-xl h-2 mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient}`}></div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className={`icon-box bg-gradient-to-r ${project.gradient}`}>
                  <project.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>

              <p className="text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2 mb-4">
                {project.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex items-start gap-2 text-slate-400">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-800 text-cyan-400 rounded-md text-xs font-medium
                             border border-cyan-500/30"
                  >
                    {tech}
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
