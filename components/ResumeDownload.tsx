'use client';

import { useState } from 'react';

export default function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Create resume content
      const resumeContent = `
BUDDHADEV KUILA
Software Engineer | FileNet P8 Administrator
Phone: +91 8967248818 | Email: work.buddhadev@gmail.com
LinkedIn: linkedin.com/in/buddhakuila242 | GitHub: github.com/Buddhadev242

PROFESSIONAL SUMMARY
Passionate software engineer with expertise in FileNet P8 administration, enterprise content management, and full-stack development. Experienced in transforming complex technical challenges into elegant solutions that drive business success.

EXPERIENCE

Software Engineer | TurnPikeAnalyst LLC (Remote)
Jan 2023 – Feb 2025 | FileNet P8 Administrator
• Configured and maintained FileNet P8 enterprise content management systems
• Implemented domain and object store setup for optimized document management
• Managed security configurations and LDAP integration for user authentication
• Developed automated workflows to streamline business processes
• Collaborated with cross-functional teams to deliver enterprise solutions

Field Service Engineer | CIS Worldwide Ltd. (On-site)
Feb 2020 – Aug 2020 | Hardware & Network Support
• Resolved 20+ hardware and networking issues for Samsung project
• Provided technical support for system installations and configurations
• Troubleshot complex technical problems in enterprise environments
• Maintained detailed documentation of issue resolution processes
• Ensured minimal downtime through proactive maintenance

EDUCATION
MCA (Master of Computer Applications) | Haldia Institute Of Technology | 2020–2022
BCA (Bachelor of Computer Applications) | Panskura Banamali College | 2017–2020
Higher Secondary | Mugberiya Gangadhar High School | 2017
Secondary | Haripur High School | 2015

TECHNICAL SKILLS
Programming Languages: Java, Python, JavaScript, TypeScript, C++
Web Development: React, Next.js, Node.js, HTML5, CSS3, Tailwind CSS
Enterprise Content Management: FileNet P8, Content Engine, Process Engine
Databases: Oracle, MySQL, PostgreSQL, MongoDB
Tools & Technologies: Git, Docker, AWS, Azure, Jenkins, REST APIs

CERTIFICATIONS
• Microsoft Certified: Azure Fundamentals
• Build Your Generative AI Productivity Skills—Microsoft & LinkedIn

PROJECTS
• Enterprise Content Management System - FileNet P8 implementation
• Full-stack Web Applications - React and Node.js development
• Database Management Systems - Oracle and MySQL optimization
• Cloud Integration Solutions - AWS and Azure deployments
      `;

      // Create and download file
      const blob = new Blob([resumeContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Buddhadev_Kuila_Resume.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      // Show success message
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
      
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
    >
      {isDownloading ? (
        <>
          <div className="w-5 h-5 flex items-center justify-center mr-2">
            <i className="ri-loader-4-line animate-spin"></i>
          </div>
          Downloading...
        </>
      ) : (
        <>
          <div className="w-5 h-5 flex items-center justify-center mr-2">
            <i className="ri-download-2-line"></i>
          </div>
          Download Resume
        </>
      )}
    </button>
  );
}