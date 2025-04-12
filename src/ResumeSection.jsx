import React from 'react';

function ResumeSection() {
  return (
    <section className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-3">
        Technical Skills
      </h2>
      
      <div className="mb-8 bg-blue-50 p-5 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
          </svg>
          Prime Team Requirements Match
        </h3>
        <p className="text-gray-700 mb-5 text-sm italic bg-white p-3 rounded border-l-4 border-blue-400">
          Skills graph showing proficiency level and experience duration relevant to Amazon Prime QA Engineer position
        </p>
        
        <div className="space-y-6">
          {/* Manual Testing */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-800 flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Manual Testing
              </span>
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">5+ years</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full" style={{ width: '95%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Designed 100+ test cases for Enterprise Applications and Snapchat</p>
          </div>
          
          {/* Automation Testing */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-800 flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
                Automation Testing
              </span>
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">4.5 years</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full" style={{ width: '90%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Selenium Python, Pytest, Cucumber frameworks for web applications</p>
          </div>
          
          {/* UI Automation */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-800 flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                </svg>
                UI Automation (Selenium)
              </span>
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">4 years</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Led Snapchat UI testing with automated test suites for gesture-based features</p>
          </div>
          
          {/* API Testing */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-800 flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
                API Testing
              </span>
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">3.5 years</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Postman for RESTful endpoints, validating data integrity across services</p>
          </div>
          
          {/* Mobile Testing */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-800 flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                </svg>
                Mobile Testing
              </span>
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">3 years</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Extensive experience with Snapchat mobile application testing</p>
          </div>
          
          {/* Test Leadership */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-800 flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
                Test Leadership
              </span>
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">2+ years</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Led cross-functional testing teams at Accenture with teams in India</p>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-t-4 border-blue-500">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "Python", "C++", "SQL Server", "CI/CD", "Git", "Manual Testing", "Test Automation"].map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-white text-blue-800 text-sm rounded-full shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-t-4 border-green-500">
          <h3 className="text-lg font-semibold mb-3 text-green-700">Testing Tools</h3>
          <div className="flex flex-wrap gap-2">
            {["Selenium", "Pytest", "Postman", "JUnit", "Test Documentation", "Requirements Analysis"].map((tool, index) => (
              <span key={index} className="px-3 py-1 bg-white text-green-800 text-sm rounded-full shadow-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-t-4 border-purple-500">
          <h3 className="text-lg font-semibold mb-3 text-purple-700">Development & Analytics</h3>
          <div className="flex flex-wrap gap-2">
            {["Data Analytics", "Quantitative Analysis", "Performance Testing", "Business Analysis"].map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-white text-purple-800 text-sm rounded-full shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-t-4 border-orange-500">
          <h3 className="text-lg font-semibold mb-3 text-orange-700">Methodologies</h3>
          <div className="flex flex-wrap gap-2">
            {["Agile", "SDLC", "CI/CD", "Test Strategy", "Release Management"].map((method, index) => (
              <span key={index} className="px-3 py-1 bg-white text-orange-800 text-sm rounded-full shadow-sm">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;

