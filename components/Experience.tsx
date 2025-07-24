'use client';

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "TurnPikeAnalyst LLC",
      location: "Remote",
      period: "Jan 2023 – Feb 2025",
      role: "FileNet P8 Administrator",
      description: [
        "Configured and maintained FileNet P8 enterprise content management systems",
        "Implemented domain and object store setup for optimized document management",
        "Managed security configurations and LDAP integration for user authentication",
        "Developed automated workflows to streamline business processes",
        "Collaborated with cross-functional teams to deliver enterprise solutions"
      ],
      icon: "ri-code-s-slash-fill",
      color: "blue"
    },
    {
      title: "Field Service Engineer",
      company: "CIS Worldwide Ltd.",
      location: "On-site",
      period: "Feb 2020 – Aug 2020",
      role: "Hardware & Network Support",
      description: [
        "Resolved 20+ hardware and networking issues for Samsung project",
        "Provided technical support for system installations and configurations",
        "Troubleshot complex technical problems in enterprise environments",
        "Maintained detailed documentation of issue resolution processes",
        "Ensured minimal downtime through proactive maintenance"
      ],
      icon: "ri-tools-fill",
      color: "green"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className={`w-16 h-16 bg-${exp.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <i className={`${exp.icon} text-${exp.color}-600 text-2xl`}></i>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-gray-700 mb-1">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      {exp.role}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}