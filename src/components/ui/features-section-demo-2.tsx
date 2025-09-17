import React from 'react';

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Network Pentesting",
      description: "Comprehensive network security assessments using advanced techniques to identify vulnerabilities in network infrastructure, services, and protocols.",
    },
    {
      title: "Web App Pentesting",
      description: "In-depth web application security testing following OWASP methodology to discover and exploit vulnerabilities like XSS, SQL injection, and authentication bypasses.",
    },
    {
      title: "API Testing",
      description: "Specialized REST and GraphQL API security assessments, testing for authentication flaws, authorization bypasses, and data exposure vulnerabilities.",
    },
    {
      title: "Vulnerability Assessment",
      description: "Systematic identification and classification of security weaknesses using automated tools and manual testing techniques.",
    },
    {
      title: "Security Auditing",
      description: "Comprehensive security reviews and compliance assessments to ensure adherence to industry standards and best practices.",
    },
    {
      title: "SOC",
      description: "Security Operations Center monitoring, incident response, and threat intelligence to protect organizations from cyber attacks in real time.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const FeatureCard = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="glass">
          <div className="content">
            <span className="title">{title}</span>
            <span className="text">{description}</span>
          </div>
        </div>
        
        <div className="logo">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
          <div className="circle circle5">
            <svg className="svg" viewBox="0 0 24 24">
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H15.5C16.4,11 17,11.4 17,12V16C17,16.6 16.6,17 16,17H8C7.4,17 7,16.6 7,16V12C7,11.4 7.4,11 8,11H8.5V10C8.5,8.6 9.6,7 12,7M12,8.2C10.2,8.2 9.8,9.2 9.8,10V11H14.2V10C14.2,9.2 13.8,8.2 12,8.2Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}; 