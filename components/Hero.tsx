'use client';

import Link from 'next/link';
import ResumeDownload from './ResumeDownload';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=Modern%20minimalist%20workspace%20with%20a%20clean%20desk%2C%20laptop%2C%20and%20soft%20natural%20lighting%20creating%20a%20professional%20atmosphere.%20The%20background%20should%20be%20subtle%20and%20light%20with%20gentle%20gradients%20of%20blue%20and%20white%20tones.%20Focus%20on%20creating%20a%20calm%2C%20productive%20environment%20that%20represents%20software%20engineering%20and%20technology%20work.%20The%20overall%20aesthetic%20should%20be%20clean%2C%20modern%2C%20and%20inspiring%20for%20a%20software%20engineers%20portfolio%20website.&width=1920&height=1080&seq=hero-bg&orientation=landscape"
          alt="Professional workspace background"
          className="w-full h-full object-cover object-top opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hello, I'm{' '}
              <span className="text-blue-600">Buddhadev Kuila</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
              Software Engineer | FileNet P8 Administrator
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Passionate software engineer with expertise in FileNet P8 administration, enterprise content management, and full-stack development. I transform complex technical challenges into elegant solutions that drive business success.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ResumeDownload />
              <Link
                href="https://linkedin.com/in/buddhakuila242"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer inline-flex items-center justify-center"
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-linkedin-fill text-lg"></i>
                </div>
                LinkedIn
              </Link>
              <Link
                href="https://github.com/Buddhadev242"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-600 text-gray-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-600 hover:text-white transition-colors shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer inline-flex items-center justify-center"
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-github-fill text-lg"></i>
                </div>
                GitHub
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white bg-white">
                <img
                  src="https://static.readdy.ai/image/4706cd40f5ede932721d3c730011c0b6/34d72765de7bc3b98aed70f15f4cd8d5.jfif"
                  alt="Buddhadev Kuila - Software Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}