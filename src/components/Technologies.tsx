import React from 'react';
import { motion } from 'framer-motion';

const techGroups = [
  {
    label: 'Penetration Testing',
    items: [
      { name: 'Metasploit', icon: 'https://www.metasploit.com/sites/default/files/public/rapid7_logo_mobile.svg', docs: 'https://docs.metasploit.com/' },
      { name: 'Burp Suite', icon: 'https://portswigger.net/content/images/logos/portswigger-logo.svg', docs: 'https://portswigger.net/burp/documentation' },
      { name: 'OWASP ZAP', icon: 'https://www.zaproxy.org/img/zap256x256.png', docs: 'https://www.zaproxy.org/docs/' },
      { name: 'Nmap', icon: 'https://nmap.org/images/sitelogo.png', docs: 'https://nmap.org/book/' },
      { name: 'Nessus', icon: 'https://docs.tenable.com/logo.png', docs: 'https://docs.tenable.com/nessus/' },
      { name: 'OpenVAS', icon: 'https://community.greenbone.net/uploads/default/original/1X/29aa3c64e30ce79b838896e1c73a955e2e4c4e22.png', docs: 'https://docs.greenbone.net/' },
      { name: 'Nikto', icon: 'https://cirt.net/nikto/nikto_logo_200.png', docs: 'https://cirt.net/nikto2-docs/' },
      { name: 'SQLmap', icon: 'https://raw.githubusercontent.com/sqlmapproject/sqlmap/master/doc/sqlmap_logo.png', docs: 'https://github.com/sqlmapproject/sqlmap/wiki' },
    ],
  },
  {
    label: 'Network Security',
    items: [
      { name: 'Wireshark', icon: 'https://www.wireshark.org/assets/images/wireshark-icon-48.png', docs: 'https://www.wireshark.org/docs/' },
      { name: 'Aircrack-ng', icon: 'https://www.aircrack-ng.org/resources/image/aircrack-ng-logo.png', docs: 'https://www.aircrack-ng.org/documentation.html' },
      { name: 'Snort', icon: 'https://www.snort.org/assets/images/pig2008-small.gif', docs: 'https://www.snort.org/documents' },
      { name: 'pfSense', icon: 'https://www.pfsense.org/assets/images/pfsense-logo.png', docs: 'https://docs.netgate.com/pfsense/' },
      { name: 'Nessus', icon: 'https://docs.tenable.com/logo.png', docs: 'https://docs.tenable.com/' },
      { name: 'Kismet', icon: 'https://www.kismetwireless.net/images/kismet-icon.png', docs: 'https://www.kismetwireless.net/docs/' },
      { name: 'TCPdump', icon: 'https://www.tcpdump.org/tcpdump-logo.png', docs: 'https://www.tcpdump.org/manpages/' },
      { name: 'Netcat', icon: 'https://nmap.org/ncat/images/ncat-logo.png', docs: 'https://nc110.sourceforge.io/' },
    ],
  },
  {
    label: 'Operating Systems',
    items: [
      { name: 'Kali Linux', icon: 'https://www.kali.org/images/kali-dragon-icon.svg', docs: 'https://www.kali.org/docs/' },
      { name: 'Parrot OS', icon: 'https://www.parrotsec.org/assets/img/team/parrot.png', docs: 'https://docs.parrotsec.org/' },
      { name: 'BlackArch', icon: 'https://blackarch.org/images/logo.png', docs: 'https://blackarch.org/guide.html' },
      { name: 'Windows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg', docs: 'https://docs.microsoft.com/en-us/windows/' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', docs: 'https://www.kernel.org/doc/html/latest/' },
      { name: 'macOS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg', docs: 'https://developer.apple.com/documentation/' },
      { name: 'Ubuntu', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg', docs: 'https://ubuntu.com/server/docs' },
    ],
  },
  {
    label: 'Forensics & Analysis',
    items: [
  { name: 'Autopsy', icon: 'https://www.sleuthkit.org/autopsy/images/autopsy_logo_75.png', docs: 'https://www.sleuthkit.org/autopsy/' },
  { name: 'Volatility', icon: 'https://www.volatilityfoundation.org/images/volatility_logo.png', docs: 'https://volatility3.readthedocs.io/' },
  { name: 'YARA', icon: 'https://yara.readthedocs.io/en/stable/_static/logo.png', docs: 'https://yara.readthedocs.io/' },
  { name: 'Binwalk', icon: 'https://github.com/ReFirmLabs/binwalk/raw/master/docs/binwalk.png', docs: 'https://github.com/ReFirmLabs/binwalk' },
  { name: 'Ghidra', icon: 'https://ghidra-sre.org/images/GHIDRA_1.png', docs: 'https://ghidra-sre.org/' },
  { name: 'IDA Pro', icon: 'https://hex-rays.com/wp-content/uploads/2019/12/ida_logo_70.png', docs: 'https://hex-rays.com/ida-pro/' },
  { name: 'Velociraptor', icon: 'https://www.velocidex.com/wp-content/uploads/2020/07/velociraptor-logo.png', docs: 'https://docs.velociraptor.app/' },
  { name: 'Cuckoo Sandbox', icon: 'https://cuckoosandbox.org/static/images/logo.png', docs: 'https://cuckoosandbox.org/' },
    ],
  },
  {
    label: 'Programming & Scripting',
    items: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', docs: 'https://docs.python.org/3/' },
      { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', docs: 'https://www.gnu.org/software/bash/manual/' },
      { name: 'PowerShell', icon: 'https://raw.githubusercontent.com/PowerShell/PowerShell/master/assets/ps_black_128.svg', docs: 'https://docs.microsoft.com/en-us/powershell/' },
      { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', docs: 'https://isocpp.org/std/the-standard' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', docs: 'https://developer.mozilla.org/docs/Web/JavaScript' },
      { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg', docs: 'https://ruby-doc.org/' },
      { name: 'Perl', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg', docs: 'https://perldoc.perl.org/' },
      { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', docs: 'https://golang.org/doc/' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
    },
  },
};

const Technologies = () => {
  const [imageErrors, setImageErrors] = React.useState<Record<string, boolean>>({});

  const handleImageError = (techName: string) => {
    setImageErrors(prev => ({ ...prev, [techName]: true }));
  };

  return (
    <section id="technologies" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          Security Tools & Technologies
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Professional cybersecurity arsenal for comprehensive security assessments
        </p>
      </motion.div>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-12">
        {techGroups.map((group) => (
          <div key={group.label} className="flex flex-col items-center h-full">
            <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              {group.label}
            </h3>
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {group.items.map((tech) => (
                <motion.a
                  key={tech.name}
                  href={tech.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group no-underline"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.08,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <div className="relative p-2 rounded-xl bg-black/40 backdrop-blur-sm border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.08)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100"></div>
                    {!imageErrors[tech.name] ? (
                      <motion.img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-10 h-10 object-contain relative z-10 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        onError={() => handleImageError(tech.name)}
                      />
                    ) : (
                      <div className="w-10 h-10 flex items-center justify-center border-2 border-blue-500/40 rounded-lg bg-black/30 text-blue-400 font-bold text-lg z-10 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300">
                        {tech.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <motion.span 
                    className="mt-1 text-xs text-gray-400 group-hover:text-blue-400 transition-colors duration-300 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech.name}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
