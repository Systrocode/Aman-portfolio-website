import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience' | 'award';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "April 2025 – Present",
    title: "Security Intern, Albus Security LLP (Remote)",
    description: `Gaining hands-on experience in cybersecurity operations and ethical hacking practices. Assisting in vulnerability assessments, penetration testing, and security audits for client organizations. Learning advanced security tools and methodologies while contributing to real-world security projects under senior supervision.`,
    type: "experience"
  },
  {
    id: 2,
    year: "2023 - 2024",
    title: "Diploma in Cyber Security, Recon Cyber Security, New Delhi, India",
    description: "Specialized in advanced cybersecurity techniques, ethical hacking methodologies, network security protocols, and incident response procedures. Gained hands-on experience with penetration testing tools and security assessment frameworks.",
    type: "education"
  },
  {
    id: 3,
    year: "2018 - 2022",
    title: "Bachelor of Computer Applications (BCA), Jaipur National University, Jaipur, India",
    description: "Comprehensive study of computer applications, programming languages, database management, software development, and computer fundamentals. Built strong foundation in IT principles and software engineering practices.",
    type: "education"
  }
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Tech Stack & Skills */}
        <div className="lg:col-span-1">
          <Card className="h-full glass-card rounded-xl border-muted">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Security Arsenal</h3>
              
              {/* Skill Categories */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Penetration Testing</h4>
                  <div className="space-y-2">
                    {['Metasploit', 'Burp Suite', 'OWASP ZAP', 'Nmap'].map((skill, index) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{skill}</span>
                        <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${85 + (index * 3)}%`,
                              animationDelay: `${index * 200}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                  <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Network Security</h4>
                  <div className="space-y-2">
                    {['Wireshark', 'Nessus', 'OpenVAS', 'Aircrack-ng'].map((skill, index) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{skill}</span>
                        <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${80 + (index * 4)}%`,
                              animationDelay: `${(index + 4) * 200}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                  <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">API Security</h4>
                  <div className="space-y-2">
                    {['Postman', 'Burp Suite', 'OWASP ZAP', 'Fiddler'].map((tool, index) => (
                      <div key={tool} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{tool}</span>
                        <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${75 + (index * 5)}%`,
                              animationDelay: `${(index + 8) * 200}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Certifications</h3>
                <div className="flex flex-col gap-3">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition group">
                    <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-white font-bold text-xs group-hover:scale-110 transition">CEH</div>
                    <div>
                      <div className="font-semibold text-blue-400 text-sm">Certified Ethical Hacker (CEHv12)</div>
                      <div className="text-xs text-muted-foreground">EC-Council 2025</div>
                    </div>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition group">
                    <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white font-bold text-xs group-hover:scale-110 transition">eJPT</div>
                    <div>
                      <div className="font-semibold text-blue-400 text-sm">Junior Penetration Tester (eJPTv2)</div>
                      <div className="text-xs text-muted-foreground">INE 2023</div>
                    </div>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition group">
                    <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center text-white font-bold text-xs group-hover:scale-110 transition">CISEH</div>
                    <div>
                      <div className="font-semibold text-blue-400 text-sm">Certified Information Security and Ethical Hacker (CISEHv4)</div>
                      <div className="text-xs text-muted-foreground">Pristine InfoSolutions 2023</div>
                    </div>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition group">
                    <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-xs group-hover:scale-110 transition">RHCSA</div>
                    <div>
                      <div className="font-semibold text-blue-400 text-sm">Red Hat Certified System Administrator (RHCSA)</div>
                      <div className="text-xs text-muted-foreground">Red Hat 2019</div>
                    </div>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-1 bg-gradient-to-b from-blue-400 to-purple-500 shadow-lg rounded-full"></div>
            
            <div className="space-y-16">
              {timelineData.map((item, idx) => (
                <div key={item.id} className="relative pl-16 flex items-start group">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center rounded-full border-4 border-background z-10 shadow-lg group-hover:scale-110 transition">
                    {item.type === 'education' ? (
                      <GraduationIcon />
                    ) : item.type === 'experience' ? (
                      <WorkIcon />
                    ) : (
                      <AwardIcon />
                    )}
                  </div>
                  <Card className="glass-card rounded-xl border-muted shadow-xl group-hover:border-blue-400 transition-all w-full">
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const GraduationIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19.916 4.626a.75.75 0 01-.025 1.042l-7.25 6.5a.75.75 0 01-1 0l-7.25-6.5a.75.75 0 011.025-1.042L12 10.168l6.591-5.584a.75.75 0 01.975.042z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3.75 5.25h1.5M20.25 5.25h-1.5M3.75 18.75h1.5M20.25 18.75h-1.5M9 18.75v-4.5M12 18.75v-4.5M15 18.75v-4.5M1.5 12.75h21" 
    />
  </svg>
);

const AwardIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

export default About;
