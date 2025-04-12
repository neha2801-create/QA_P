import React, { useState } from 'react';
import './App.css';
import AmazonPrimeTestingApp from './AmazonPrimeTestingApp';
import ResumeSection from './ResumeSection';

function App() {
  const [activeTab, setActiveTab] = useState('testCases');

  return (
    <div className="App">
      <div className="tab-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'testCases' ? 'active' : ''}`}
            onClick={() => setActiveTab('testCases')}
          >
            Amazon Prime Test Cases
          </button>
          <button 
            className={`tab ${activeTab === 'resume' ? 'active' : ''}`}
            onClick={() => setActiveTab('resume')}
          >
            Resume
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'testCases' && <AmazonPrimeTestingApp />}
          {activeTab === 'resume' && <ResumeSection />}
        </div>
      </div>
    </div>
  );
}

export default App;