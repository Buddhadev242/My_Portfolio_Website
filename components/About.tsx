'use client';

export default function About() {
  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "Haldia Institute Of Technology",
      period: "2020–2022",
      icon: "ri-graduation-cap-fill"
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "Panskura Banamali College",
      period: "2017–2020",
      icon: "ri-book-fill"
    },
    {
      degree: "Higher Secondary",
      institution: "Mugberiya Gangadhar High School",
      period: "2017",
      icon: "ri-school-fill"
    },
    {
      degree: "Secondary",
      institution: "Haripur High School",
      period: "2015",
      icon: "ri-pencil-fill"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Biography */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate software engineer with a strong foundation in enterprise content management and full-stack development. My journey in technology began with a curiosity about how complex systems work, leading me to specialize in FileNet P8 administration and enterprise solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With over 2 years of professional experience, I've had the privilege of working on diverse projects ranging from FileNet P8 implementations to custom application development. My expertise spans across various domains including ECM systems, database management, and modern web technologies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My career goal is to leverage cutting-edge technologies to solve real-world problems and contribute to innovative solutions that make a meaningful impact. I'm particularly passionate about enterprise content management, cloud technologies, and creating seamless user experiences.
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    <i className="ri-award-fill text-blue-600"></i>
                  </div>
                  <span className="text-gray-700">Microsoft Certified: Azure Fundamentals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    <i className="ri-award-fill text-blue-600"></i>
                  </div>
                  <span className="text-gray-700">Build Your Generative AI Productivity Skills—Microsoft & LinkedIn</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className={`${edu.icon} text-blue-600 text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-700 mb-1">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}