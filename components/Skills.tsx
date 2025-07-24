
'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "ri-code-s-slash-fill",
      color: "blue",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      progressColor: "bg-blue-600",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "C", level: 80 }
      ]
    },
    {
      title: "Web Development",
      icon: "ri-global-fill",
      color: "green",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      progressColor: "bg-green-600",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      title: "Enterprise Content Management",
      icon: "ri-folder-settings-fill",
      color: "purple",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      progressColor: "bg-purple-600",
      skills: [
        { name: "FileNet P8", level: 95 },
        { name: "Image Services", level: 85 },
        { name: "CMOD", level: 80 }
      ]
    },
    {
      title: "Databases",
      icon: "ri-database-2-fill",
      color: "orange",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
      progressColor: "bg-orange-600",
      skills: [
        { name: "Oracle", level: 90 },
        { name: "MS SQL", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "ri-tools-fill",
      color: "red",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
      progressColor: "bg-red-600",
      skills: [
        { name: "Git", level: 85 },
        { name: "WebSphere", level: 80 },
        { name: "LDAP", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center mr-4`}>
                  <i className={`${category.icon} ${category.textColor} text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${category.progressColor} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Additional Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Enterprise Architecture",
              "System Integration",
              "Database Design",
              "Security Implementation",
              "Performance Optimization",
              "Technical Documentation",
              "Problem Solving",
              "Team Collaboration"
            ].map((skill, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
