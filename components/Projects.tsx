'use client';

import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "FileNet Installation & Configuration",
      description: "Comprehensive FileNet P8 system setup on WebSphere Application Server with LDAP integration and database connectivity using Oracle and MS SQL Server.",
      technologies: ["FileNet P8", "WebSphere", "LDAP", "Oracle", "MS SQL"],
      image: "https://readdy.ai/api/search-image?query=Enterprise%20content%20management%20system%20dashboard%20with%20modern%20interface%20showing%20document%20management%2C%20workflow%20automation%2C%20and%20security%20features.%20The%20interface%20should%20be%20clean%20and%20professional%20with%20blue%20and%20white%20color%20scheme%2C%20displaying%20FileNet%20P8%20administration%20panels%20and%20database%20connections%20in%20a%20corporate%20software%20environment.&width=600&height=400&seq=filenet-project&orientation=landscape",
      icon: "ri-database-2-fill",
      color: "blue"
    },
    {
      title: "Content Engine Extraction Tool",
      description: "Java Swing GUI application designed to extract metadata and content from FileNet repositories, providing administrators with powerful data analysis capabilities.",
      technologies: ["Java", "Swing", "FileNet API", "Metadata Processing"],
      image: "https://readdy.ai/api/search-image?query=Java%20Swing%20desktop%20application%20interface%20showing%20data%20extraction%20and%20metadata%20analysis%20tools.%20The%20interface%20should%20have%20a%20professional%20look%20with%20tables%2C%20forms%2C%20and%20extraction%20progress%20indicators.%20Focus%20on%20clean%20UI%20design%20with%20modern%20styling%20and%20data%20visualization%20components%20for%20enterprise%20content%20management.&width=600&height=400&seq=extraction-tool&orientation=landscape",
      icon: "ri-file-search-fill",
      color: "green"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing front-end development skills using React, Next.js, and Tailwind CSS with smooth animations and mobile optimization.",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      image: "https://readdy.ai/api/search-image?query=Modern%20portfolio%20website%20design%20showing%20responsive%20layout%20with%20clean%20typography%2C%20smooth%20animations%2C%20and%20professional%20presentation.%20The%20design%20should%20feature%20a%20developers%20portfolio%20with%20project%20showcases%2C%20skill%20sections%2C%20and%20contact%20forms.%20Use%20contemporary%20web%20design%20patterns%20with%20neutral%20colors%20and%20elegant%20spacing.&width=600&height=400&seq=portfolio-website&orientation=landscape",
      icon: "ri-computer-fill",
      color: "purple"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className={`w-10 h-10 bg-${project.color}-100 rounded-full flex items-center justify-center`}>
                    <i className={`${project.icon} text-${project.color}-600 text-lg`}></i>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm whitespace-nowrap cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center">
          <Link
            href="https://github.com/Buddhadev242"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium whitespace-nowrap cursor-pointer"
          >
            <div className="w-5 h-5 flex items-center justify-center mr-2">
              <i className="ri-github-fill text-lg"></i>
            </div>
            View All Projects on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}