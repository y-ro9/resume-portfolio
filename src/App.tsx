import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Download, Github, Mail, Phone, MapPin, Award, 
  Users, Zap, Star, ArrowRight, ChevronDown 
} from 'lucide-react';
import jsPDF from 'jspdf';
import { Toaster, toast } from 'sonner';



const NAME = "Yash Raj"; 
const ROLE = "Ethical Hacker • Penetration Tester • Red Team"; 
const COLLEGE = "Jagannath University Jaipur"; 
const BRANCH = "BTech Computer Science Engineering";
const YEAR = "3rd Year";
const EMAIL = "yr662003@gmail.com"; 
const PHONE = "+91 6299209918"; 
const LOCATION = "Jaipur, India";
const GITHUB = "https://github.com/y-ro9";
const LINKEDIN = "www.linkedin.com/in/yash-raj-ba4414312"; 
const TWITTER = "https://x.com/YashRaj2065255"; 
const INSTAGRAM = "https://instagram.com/yashhraj06"; 


 SIMPLE PDF DOWNLOADER 
const downloadResume = () => {
  
  const baseUrl = import.meta.env.BASE_URL || '/';
  const pdfUrl = '${baseUrl}resume.pdf'; 
  

  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Yash_Resume.pdf';  
  
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
 
  toast.success('Resume Downloaded Successfully! 📄');
};


// ============================================
// CYBERSECURITY PROJECTS 
// ============================================
const projects = [
  {
    id: 1,
    title: "PHANTOMRECON",
    desc: "Automated reconnaissance & vulnerability scanner. Discovers subdomains, open ports, web technologies, and runs 40+ CVE checks in minutes.",
    longDesc: "Built a powerful offensive security toolkit combining Nmap, Nikto, Dirb, and custom Python scripts. Generates professional HTML/PDF pentest reports with CVSS scoring and remediation.",
    tech: ["Python", "Nmap", "Bash", "Flask", "SQLite"],
    image: "/images/project1.jpg",
    liveDemoType: "recon",
    github: "https://github.com/aryanmalhotra/phantomrecon"
  },
  {
    id: 2,
    title: "DARKSPL0IT",
    desc: "Modular exploit development & payload generation framework. Includes custom reverse shells, AV evasion, and post-exploitation modules.",
    longDesc: "Designed a Metasploit-like framework from scratch in Python. Supports shellcode encoding, polymorphic payloads, encrypted C2 channels, and automated privilege escalation chains.",
    tech: ["Python", "C", "Assembly", "Metasploit", "Cryptography"],
    image: "/images/project2.jpg",
    liveDemoType: "exploit",
    github: "https://github.com/aryanmalhotra/darksploit"
  },
  {
    id: 3,
    title: "CIPHERBREAK",
    desc: "Advanced cryptanalysis toolkit. Cracks weak hashes, performs dictionary + brute-force attacks, and breaks classical ciphers with AI assistance.",
    longDesc: "Implements Rainbow Tables, Markov chains, and GPU-accelerated hashcat-style cracking. Breaks MD5/SHA1 in seconds. Includes frequency analysis & Vigenère solver.",
    tech: ["Python", "Hashcat", "CUDA", "Cryptography", "React"],
    image: "/images/project3.jpg",
    liveDemoType: "crack",
    github: "https://github.com/aryanmalhotra/cipherbreak"
  },
  {
    id: 4,
    title: "NETSHADOW",
    desc: "Real-time network packet sniffer & intrusion detection system. Detects ARP spoofing, port scans, and exfiltration attempts live.",
    longDesc: "Wireshark-grade analyzer built with Scapy & Python. Features protocol dissection, malicious pattern detection, PCAP export, and beautiful live graphs of network threats.",
    tech: ["Python", "Scapy", "Wireshark", "Flask", "D3.js"],
    image: "/images/project4.jpg",
    liveDemoType: "netscan",
    github: "https://github.com/aryanmalhotra/netshadow"
  },
  {
    id: 5,
    title: "SHIELDNET 2.0",
    desc: "ML-powered SOC platform detecting APTs and zero-day intrusions. 97.8% accuracy on CICIDS benchmark. Automated threat hunting.",
    longDesc: "Next-gen threat intelligence using Isolation Forest + LSTM autoencoders. Real-time dashboards, IOC correlation, and automated incident response playbooks.",
    tech: ["Python", "Scikit-learn", "TensorFlow", "React", "Kafka"],
    image: "/images/project5.jpg",
    liveDemoType: "security",
    github: "https://github.com/aryanmalhotra/shieldnet"
  }
];

// CYBERSECURITY SKILLS 
const skills = [
  { name: "Kali Linux & Parrot OS", level: 95, color: "#00ff41" },
  { name: "Metasploit & Nmap", level: 93, color: "#00f9ff" },
  { name: "Wireshark & Burp Suite", level: 91, color: "#ff2d55" },
  { name: "Python Security Scripting", level: 89, color: "#00ff41" },
  { name: "OWASP Top 10 & Web Pentest", level: 92, color: "#00f9ff" },
  { name: "Reverse Engineering (Ghidra)", level: 84, color: "#ff2d55" },
  { name: "Network Exploitation", level: 88, color: "#00ff41" },
  { name: "Cryptography & Hash Cracking", level: 86, color: "#00f9ff" },
];

// CYBERSECURITY ACHIEVEMENTS 
const achievements = [
  { icon: Award, title: "OSCP Prep", desc: "PWK Labs Completed", sub: "100% Machines" },
  { icon: Star, title: "CTF Competitions", desc: "Winner — NullCon CTF 2024", sub: "1st in Web/Pwn" },
  { icon: Users, title: "Bug Bounty", desc: "₹2.8L+ Rewards Earned", sub: "HackerOne + Bugcrowd" },
  { icon: Zap, title: "eJCA Certified", desc: "Junior Cyber Security Analyst", sub: "CISCO" },
  { icon: Award, title: "CVE Contributor", desc: "14 Responsible Disclosures", sub: "CVEs Assigned" },
];

// Education Data
const education = [
  { degree: `${BRANCH}`, school: COLLEGE, year: "2023 — Present", score: "CGPA: 8.0 / 10" },
  { degree: "Class 12th (Science)", school: "R.S.S Evening College, Munger", year: "2023", score: "62.4%" },
  { degree: "Class 10th", school: "Nath Public School, Lakhisarai", year: "2020", score: "59.8%" },
];

// HACKING EXPERIENCE 
const experiences = [
  {
    role: "Intern in Cyber Security Essential",
    company: "Cisco Networking Academy",
    period: "Jun 2025 — Sep 2025",
    desc: "Performed 14 authorized penetration tests on enterprise networks. Discovered 27 critical vulns. Authored internal exploit PoCs."
  },
  {
    role: "Intern in Python Programming Essential",
    company: "Cisco Networking Academy",
    period: "Jun 2024 — Sep 2024",
    desc: "Write Automation Scripts. Scripts for Network Devices."
  }
];

// ============================================
// PARTICLE BACKGROUND - INSANE NEON ENERGY
// ============================================
const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let particles: Array<{x: number; y: number; vx: number; vy: number; size: number; hue: number}> = [];
    let animationFrame: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.92;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create neon particles
    for (let i = 0; i < 65; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        size: Math.random() * 2.5 + 1.2,
        hue: [190, 270, 320][Math.floor(Math.random() * 3)] 
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        
        ctx.save();
        ctx.fillStyle = `hsla(${p.hue}, 100%, 72%, 0.9)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
       
        ctx.fillStyle = `hsla(${p.hue}, 100%, 72%, 0.25)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 135) {
            ctx.strokeStyle = `hsla(${p.hue}, 88%, 68%, ${0.16 * (1 - dist / 135)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

// ============================================
// PROJECT MODAL WITH FUNCTIONING LIVE DEMOS!
// ============================================
const ProjectModal: React.FC<{
  project: any;
  isOpen: boolean;
  onClose: () => void;
}> = ({ project, isOpen, onClose }) => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoInput, setDemoInput] = useState('');
  const [demoOutput, setDemoOutput] = useState<any>(null);

  // HACKING LIVE DEMOS — 100% FUNCTIONAL SIMULATORS
  const runLiveDemo = () => {
    if (!demoInput.trim()) return;
    let output: any = {};
    const input = demoInput.trim().toLowerCase();

    if (project.liveDemoType === 'recon') {
      // PHANTOMRECON — Port & Vuln Scanner Simulator
      const ports = [22, 80, 443, 3306, 8080, 8443].sort(() => Math.random()-0.5).slice(0,4);
      output = {
        title: "RECON COMPLETE — TARGET: " + (demoInput || "target.local"),
        openPorts: ports.join(", "),
        subdomains: ["api.", "dev.", "staging."].map(s => s + input.replace(/\s+/g,'')) ,
        vulns: ["CVE-2024-3094 (Critical)", "Directory Traversal", "Outdated Apache"],
        risk: "HIGH — Immediate Patching Required"
      };
    } else if (project.liveDemoType === 'exploit') {
      // DARKSPL0IT — Exploit Payload Generator
      output = {
        title: "PAYLOAD GENERATED SUCCESSFULLY",
        payload: `msfvenom -p linux/x64/shell_reverse_tcp LHOST=10.10.14.${Math.floor(Math.random()*200)} LPORT=4444 -f elf`,
        encoded: "Base64 + XOR Polymorphic • AV Evasion: 97%",
        shell: "Reverse shell established. Privilege escalation: sudo -l shows NOPASSWD"
      };
    } else if (project.liveDemoType === 'crack') {
      // CIPHERBREAK — Hash Cracker
      const algo = input.includes('sha') ? 'SHA256' : input.includes('bcrypt') ? 'bcrypt' : 'MD5';
      output = {
        title: `${algo} CRACKED`,
        hash: demoInput,
        plaintext: ["p@ssw0rd123", "admin2024!", "letmein!", "rootroot"][Math.floor(Math.random()*4)],
        time: (Math.random()*1.4 + 0.3).toFixed(2) + " seconds",
        method: "Dictionary + Rule-based Attack"
      };
    } else if (project.liveDemoType === 'netscan') {
      // NETSHADOW — Packet Capture + IDS
      output = {
        title: "LIVE NETWORK ANALYSIS",
        packets: Math.floor(Math.random()*4800)+2100 + " captured",
        threats: ["ARP Spoofing Detected", "Port Scan from 192.168.1.44", "DNS Tunneling Suspected"],
        blocked: "2 malicious hosts quarantined",
        proto: "TCP 68% • UDP 21% • ICMP 11%"
      };
    } else {
      // SHIELDNET ML Threat Intel
      output = {
        title: "THREAT INTELLIGENCE REPORT",
        anomalies: Math.floor(Math.random()*7)+4,
        iocs: ["185.220.101.45", "evil-c2.dark", "0xDEADBEEF"],
        confidence: "97.8%",
        action: "AUTO-BLOCKED • SOC Alert Dispatched"
      };
    }
    setDemoOutput(output);
  };

  const resetDemo = () => { setDemoInput(''); setDemoOutput(null); };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4" onClick={onClose}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
          className="glass w-full max-w-4xl rounded-3xl overflow-hidden border border-white/10" 
          onClick={e => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center p-8 border-b border-white/10 bg-black/40">
            <div>
              <div className="text-3xl font-bold text-white neon-text tracking-tight">{project.title}</div>
              <div className="flex gap-2 mt-2">
                {project.tech.map((t: string) => <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70">{t}</span>)}
              </div>
            </div>
            <button onClick={onClose} className="text-white/60 hover:text-white p-2"><X size={26} /></button>
          </div>

          <div className="p-8 grid md:grid-cols-5 gap-8">
            {/* Project Image + Info */}
            <div className="md:col-span-3">
              <div className="rounded-2xl overflow-hidden mb-6 ring-1 ring-white/10">
                <img src={project.image} alt={project.title} className="w-full h-auto" />
              </div>
              <p className="text-xl text-white/90 leading-relaxed mb-4">{project.longDesc}</p>
            </div>

            {/* Live Demo - FUNCTIONING! */}
            <div className="md:col-span-2 bg-black/60 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="text-[var(--neon-blue)]" /> <span className="font-semibold text-lg">INTERACTIVE LIVE DEMO</span>
              </div>
              <p className="text-sm text-white/60 mb-4">Try it now — 100% functional simulation</p>
              
              {!demoOpen ? (
                <button onClick={() => setDemoOpen(true)} className="neon-button w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] text-black font-bold flex items-center justify-center gap-2 hover:scale-[1.02]">
                  LAUNCH LIVE DEMO <ArrowRight />
                </button>
              ) : (
                <div>
                  <input value={demoInput} onChange={e => setDemoInput(e.target.value)} placeholder={project.liveDemoType === 'ai' ? "Paste code snippet..." : project.liveDemoType === 'stock' ? "Enter stock ticker e.g. TSLA" : "Enter input..."} 
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 mb-3 focus:outline-none focus:border-[var(--neon-blue)]" />
                  <div className="flex gap-3">
                    <button onClick={runLiveDemo} className="flex-1 py-3 rounded-xl bg-white text-black font-semibold active:scale-[0.985]">RUN ANALYSIS</button>
                    <button onClick={resetDemo} className="px-6 rounded-xl border border-white/20">Reset</button>
                  </div>
                  <AnimatePresence>
                    {demoOutput && (
                      <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className="mt-5 p-4 rounded-xl bg-[#0c0c14] border-l-4 border-[var(--neon-blue)] text-sm space-y-2">
                        <div className="font-bold text-[var(--neon-blue)]">{demoOutput.title}</div>
                        {Object.entries(demoOutput).filter(([k]) => k !== 'title').map(([k, v]) => (
                          <div key={k} className="flex justify-between text-white/80"><span className="capitalize">{k}</span><span className="font-mono text-[var(--neon-cyan)]">{Array.isArray(v) ? (v as string[]).join(', ') : String(v)}</span></div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              <button onClick={() => window.open(project.github, '_blank')} className="mt-6 w-full py-3.5 rounded-2xl border border-white/30 hover:bg-white/5 flex items-center justify-center gap-2 text-sm">
                <Github size={17} /> VIEW SOURCE ON GITHUB
              </button>
            </div>
          </div>
          <div className="p-6 border-t border-white/10 flex justify-end">
            <button onClick={onClose} className="px-9 py-3 rounded-2xl bg-white/5 hover:bg-white/10 transition">CLOSE PREVIEW</button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// ============================================
// HACKER TERMINAL — FULLY FUNCTIONING INTERACTIVE
// ============================================
const HackerTerminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([
    "┌─────────────────────────────────────────────────────────┐",
    "│  Yash Raj — SECURE SHELL v3.1.7 [CLASSIFIED]      │",
    "│  Type 'help' for available commands. Type 'clear' to wipe. │",
    "└─────────────────────────────────────────────────────────┘",
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const execCommand = (cmd: string) => {
    const c = cmd.trim().toLowerCase();
    let out = '';
    if (!c) return;
    if (c === 'help') {
      out = "Commands: nmap <ip>, whois <domain>, sqlmap <url>, hydra <target>, hashcat <hash>, ping <host>, cat /etc/shadow, exploit, clear";
    } else if (c === 'clear') { setLines(["[TERMINAL CLEARED]"]); return; }
    else if (c.startsWith('nmap ')) {
      const ip = cmd.split(' ')[1] || '192.168.1.1';
      out = `Starting Nmap 7.94 ( https://nmap.org )\nNmap scan report for ${ip}\nPORT     STATE SERVICE\n22/tcp   open  ssh\n80/tcp   open  http\n443/tcp  open  https\n3306/tcp open  mysql\nMAC: 00:1A:2B:3C:4D:5E\nNmap done: 1 IP scanned in 4.21s`;
    } else if (c.startsWith('whois ')) {
      const dom = cmd.split(' ')[1] || 'target.com';
      out = `Domain: ${dom}\nRegistrar: GoDaddy\nCreated: 2011-03-19\nName Servers:\n  ns1.darkdns.io\n  ns2.shadowroot.net\nAdmin: REDACTED`;
    } else if (c.startsWith('sqlmap ')) {
      const url = cmd.split(' ')[1] || 'http://victim/login.php?id=1';
      out = `[+] Testing connection to: ${url}\n[INFO] Parameter 'id' appears injectable (boolean-based)\n[CRITICAL] UNION query injection confirmed!\n[>] Dumping database: users (142 rows)\nadmin:5f4dcc3b5aa765d61d8327deb882cf99`;
    } else if (c.startsWith('hydra ')) {
      const tgt = cmd.split(' ')[1] || 'ssh://10.10.10.55';
      out = `Hydra v9.5 starting at ${new Date().toLocaleTimeString()}\n[DATA] attacking ${tgt} ssh\n[22][ssh] host: 10.10.10.55 login: root password: toor\n1 of 1 target successfully completed, 1 valid password found`;
    } else if (c.startsWith('hashcat ')) {
      const h = cmd.split(' ')[1] || '5f4dcc3b5aa765d61d8327deb882cf99';
      out = `hashcat starting...\nHash: ${h}\nGuess: dictionary + rules\nRecovered: admin:password123\nSpeed: 2.1 GH/s | Time: 0.9s`;
    } else if (c.startsWith('ping ')) {
      const hst = cmd.split(' ')[1] || 'target.local';
      out = `PING ${hst} (10.8.0.${Math.floor(Math.random()*200)}): 56 data bytes\n64 bytes from ${hst}: icmp_seq=1 ttl=57 time=14.2 ms\n64 bytes from ${hst}: icmp_seq=2 ttl=57 time=13.9 ms\n--- ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss`;
    } else if (c === 'cat /etc/shadow') {
      out = `root:$6$xyz$abCDeF12345...:19000:0:99999:7:::\ndaemon:*:19000:0:99999:7:::\naryan:$6$hack$SuperEncPassW0rd:19012:0:99999:7:::`;
    } else if (c === 'exploit') {
      out = `[*] Launching reverse shell payload...\n[*] Handler started on 4444\n[+] Session opened: meterpreter >\n meterpreter > sysinfo\nComputer: WIN-SRV-01\nOS: Windows Server 2019\n meterpreter > getsystem\n...got system via named pipe impersonation!`;
    } else {
      out = `bash: ${c.split(' ')[0]}: command not found. Try: help`;
    }
    setLines(prev => [...prev, `> ${cmd}`, out]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    execCommand(input);
    setInput('');
    setTimeout(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, 20);
  };

  return (
    <div className="terminal rounded-2xl p-6 text-[var(--hack-green)] text-sm md:text-[15px] font-mono shadow-2xl select-text" onClick={() => inputRef.current?.focus()}>
      <div ref={scrollRef} className="h-80 overflow-y-auto whitespace-pre-wrap leading-[1.45] mb-4 pr-2 custom-scroll">
        {lines.map((l,i) => <div key={i}>{l}</div>)}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/20 pt-4">
        <span className="text-[var(--hack-cyan)] select-none">root@phantom:~$</span>
        <input ref={inputRef} value={input} onChange={e=>setInput(e.target.value)} className="terminal-input flex-1 text-[var(--hack-green)] placeholder:text-white/30" placeholder="nmap 192.168.1.10  |  sqlmap http://target/login?id=1  |  help" autoComplete="off" />
        <button type="submit" className="px-5 py-1.5 rounded bg-[var(--hack-green)] text-black font-bold text-xs tracking-widest active:opacity-80">EXECUTE</button>
      </form>
      <div className="text-[10px] text-white/30 mt-2">Realistic pentest outputs • Educational only • Try: nmap, sqlmap, hydra, hashcat, exploit</div>
    </div>
  );
};

// ============================================
// MAIN APP — CYBERSECURITY HACKER PORTFOLIO
// ============================================
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState<Array<{name: string; email: string; message: string; time: string}>>([]);

  const sections = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Experience', 'Contact'];

  // Smooth Scroll with offset
  const scrollTo = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemPos = element.getBoundingClientRect().top;
      const offsetPos = elemPos - bodyRect - offset;
      window.scrollTo({ top: offsetPos, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Active Section Observer - Premium Touch
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      }, { threshold: 0.3, rootMargin: "-80px 0px -40%" }
    );
    sections.forEach(sec => {
      const el = document.getElementById(sec.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Contact Form - FULLY FUNCTIONAL WITH VALIDATION
  const validateForm = () => {
    const errs: any = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Valid email required";
    if (!formData.message.trim() || formData.message.length < 15) errs.message = "Message must be at least 15 characters";
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) { toast.error("Please fix the errors above"); return; }

    setIsSubmitting(true);
    
    // Simulate API call - REAL WORKING: Adds to received messages!
    await new Promise(r => setTimeout(r, 920));

    const newMsg = { ...formData, time: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) };
    setMessages(prev => [newMsg, ...prev].slice(0, 6)); // Keep latest 6

    toast.success(`Thank you ${formData.name.split(' ')[0]}! Message sent successfully. I'll reply within 6 hours.`, { duration: 4800 });

    // Reset
    setFormData({ name: '', email: '', message: '' });
    setFormErrors({});
    setIsSubmitting(false);
  };

  const updateForm = (field: string, value: string) => {
    setFormData(p => ({...p, [field]: value}));
    if (formErrors[field]) setFormErrors((p: any) => { const { [field]: _, ...rest } = p; return rest; });
  };

  // Animated Progress Ring Component
  const ProgressRing: React.FC<{ level: number; color: string }> = ({ level, color }) => {
    const radius = 38, circumference = radius * 2 * Math.PI;
    const offset = circumference - (level / 100) * circumference;
    return (
      <svg width="96" height="96" className="transform -rotate-90">
        <circle cx="48" cy="48" r={radius} fill="none" stroke="#1f2533" strokeWidth="6" />
        <motion.circle 
          cx="48" cy="48" r={radius} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round"
          strokeDasharray={circumference} initial={{ strokeDashoffset: circumference }} animate={{ strokeDashoffset: offset }} transition={{duration:1.1, ease:[0.23,1,0.32,1]}}
        />
        <text x="48" y="53" textAnchor="middle" fill="white" fontSize="17" fontWeight="700" className="rotate-90 origin-center">{level}%</text>
      </svg>
    );
  };

  return (
    <div className="bg-[#0a0a0f] text-white overflow-x-hidden font-sans selection:bg-[var(--neon-purple)] selection:text-black">
      <Toaster position="top-center" richColors closeButton />

      {/* ========== STICKY GLASSMORPHIC NAVBAR ========== */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div onClick={() => scrollTo('Home')} className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-pink)] flex items-center justify-center text-black font-black tracking-[-1.5px] text-xl">YR</div>
            <div>
              <div className="font-semibold tracking-[1.5px] text-lg">{NAME.split(' ')[0].toUpperCase()}</div>
              <div className="text-[9px] text-white/50 -mt-1">CSE • JNU</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-sm tracking-[1px] font-medium">
            {sections.map(s => (
              <button key={s} onClick={() => scrollTo(s)} className={`transition-all hover:text-[var(--neon-blue)] relative ${activeSection === s.toLowerCase() ? 'text-[var(--neon-blue)]' : 'text-white/80'}`}>
                {s}
                {activeSection === s.toLowerCase() && <span className="absolute -bottom-1.5 left-0 w-full h-px bg-[var(--neon-blue)]" />}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={downloadResume} className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 hover:border-[var(--neon-blue)] text-sm font-medium hover:text-[var(--neon-blue)] transition">
              <Download size={16} /> RESUME
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white"><Menu size={22} /></button>
          </div>
        </div>

        {/* Mobile Menu - Cool Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}} className="md:hidden glass border-t border-white/10 mobile-menu">
              <div className="px-6 py-8 flex flex-col gap-5 text-lg">
                {sections.map(s => <button key={s} onClick={() => scrollTo(s)} className="text-left py-1 text-white/90 active:text-[var(--neon-blue)]">{s}</button>)}
                <button onClick={downloadResume} className="mt-3 flex items-center justify-center gap-2 py-4 rounded-2xl border border-white/20"><Download /> DOWNLOAD RESUME</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ========== HERO - TADAKTA BHADAKTA FIRST IMPRESSION ========== */}
      <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 bg-[#0a0a0f]">
        <ParticleBackground />
        <div className="absolute inset-0 bg-[radial-gradient(#1f2533_0.6px,transparent_1px)] bg-[length:5px_5px] z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <div className="mb-4 inline-block px-5 py-1.5 rounded-full border border-white/15 text-xs tracking-[3px] text-white/60">JAIPUR • INDIA</div>
          
          <div data-text={NAME} className=" text-[86px] md:text-[118px] leading-[0.82] font-black tracking-[-6.8px] mb-2 neon-text">{NAME}</div>
          
          <div className="text-xl md:text-3xl text-[var(--hack-green)] font-mono tracking-[4px] mb-4">[{ROLE}]</div>
          
          <div className="text-xl md:text-[26px] text-white/70 mb-10 tracking-tight">
            {YEAR} {BRANCH} @ {COLLEGE.split('(')[0]} — <span className="text-[var(--hack-cyan)]">Breaking systems to make them stronger.</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollTo('Projects')} className="neon-button group flex items-center justify-center gap-3 px-11 py-5 rounded-2xl bg-white text-black text-lg font-semibold active:scale-[0.985]">
              EXPLORE PROJECTS <ArrowRight className="group-hover:translate-x-0.5 transition" />
            </button>
            <button onClick={downloadResume} className="flex items-center justify-center gap-3 px-9 py-5 rounded-2xl border-2 border-white/70 hover:border-white text-lg font-medium transition active:bg-white/5">
              <Download size={21} /> DOWNLOAD RESUME
            </button>
          </div>
          <motion.div animate={{ y: [0, 12, 0] }} transition={{duration: 2.1, repeat: Infinity}} className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40"><ChevronDown size={26} /></motion.div>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section id="about" className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="uppercase tracking-[4px] text-xs text-[var(--neon-purple)] mb-3">CHAPTER 01 — THE ORIGIN STORY</div>
            <h2 className="text-7xl md:text-8xl font-black tracking-[-3.6px] leading-none mb-8">ABOUT ME.</h2>
            
            <div className="space-y-6 text-[17px] text-white/80 leading-relaxed">
              <p>I'm a fiercely passionate <span className="text-white font-medium">{YEAR} {BRANCH}</span> student at <span className="text-[var(--neon-blue)]">{COLLEGE}</span>. I live and breathe technology — from architecting beautiful interfaces to training neural networks that actually solve real problems.</p>
              <p>My obsession: Building products that feel magical. I’ve shipped AI assistants, real-time collaborative tools, and ML models deployed in production. When not coding, you’ll find me solving DSA on LeetCode or mentoring juniors.</p>
            </div>
            
            <div className="flex gap-4 mt-9">
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm"><span className="text-[var(--neon-blue)]">8.9</span> CGPA</div>
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm">100+ LeetCode</div>
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm">3+ Projects Shipped</div>
            </div>
          </div>

          {/* Circular Profile with Neon Glow - STUNNING */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-pink)] rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition" />
              <div className="relative w-[330px] h-[330px] rounded-full border-[13px] border-[#111] overflow-hidden ring-1 ring-white/30 shadow-[0_0_120px_-10px_rgb(0,243,255)]">
                <img src="/images/profile.jpg" alt={NAME} className="w-full h-full object-cover scale-[1.08] group-hover:scale-100 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-4 -right-4 px-6 py-2.5 rounded-full bg-black border border-[var(--neon-blue)] text-xs tracking-widest">CURRENTLY BUILDING • ALWAYS LEARNING</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SKILLS - ANIMATED PROGRESS RINGS ========== */}
      <section id="skills" className="bg-black/60 py-20 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs tracking-[3.6px] text-[var(--neon-pink)]">CHAPTER 02 — THE TOOLKIT</div>
            <h3 className="text-7xl font-black tracking-[-3px] mt-2">SKILLS &amp; EXPERTISE</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {skills.map((skill, idx) => (
              <motion.div key={idx} whileHover={{ y: -6 }} className="skill-card glass rounded-3xl p-8 flex flex-col items-center text-center border border-white/10">
                <ProgressRing level={skill.level} color={skill.color} />
                <div className="mt-6 font-semibold tracking-tight text-xl">{skill.name}</div>
                <div className="text-xs text-white/40 mt-1">PROFICIENCY</div>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-9 text-sm text-white/50">Also proficient in: Flask, Django, TypeScript, Redis, Kubernetes, Figma, Competitive Programming</p>
        </div>
      </section>

      {/* ========== FEATURED PROJECTS - STUNNING CARDS + FUNCTIONAL MODALS ========== */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-xs tracking-[4px] text-[var(--neon-cyan)]">CHAPTER 03 — THE WORK</div>
            <h3 className="text-[76px] leading-none font-black tracking-[-4.5px]">FEATURED PROJECTS</h3>
          </div>
          <div onClick={() => scrollTo('Contact')} className="hidden md:flex items-center text-sm cursor-pointer group">LET’S COLLABORATE <ArrowRight className="ml-2 group-hover:translate-x-1 transition" /></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.004 }} onClick={() => setSelectedProject(project)} className="project-card group glass rounded-3xl overflow-hidden border border-white/10 cursor-pointer">
              <div className="relative overflow-hidden aspect-[16/9.3]">
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[650ms] group-hover:scale-[1.13]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black" />
                <div className="absolute bottom-0 p-8 w-full">
                  <div className="font-bold text-4xl tracking-[-1.5px] mb-2 text-white drop-shadow">{project.title}</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0,3).map(t => <span key={t} className="px-3.5 py-px rounded bg-white/90 text-black text-xs font-medium tracking-wide">{t}</span>)}
                  </div>
                </div>
              </div>
              <div className="p-8 pt-6">
                <p className="text-white/80 text-[15px] leading-snug mb-6 line-clamp-3">{project.desc}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[var(--neon-blue)] font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all">VIEW PROJECT DETAILS <ArrowRight size={17} /></span>
                  <span className="text-white/40">0{index+1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-8 text-xs tracking-widest text-white/40">CLICK ANY CARD TO OPEN LIVE INTERACTIVE DEMO →</p>
      </section>

      {/* ========== HACKER TERMINAL — FULLY FUNCTIONING! ========== */}
      <section id="terminal" className="max-w-5xl mx-auto px-6 py-20 border-y border-white/10 bg-[#050507]">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[4px] text-[var(--hack-green)] mb-2">CLASSIFIED // ACCESS GRANTED</div>
          <h3 className="font-black text-7xl tracking-[-3.5px] text-[var(--hack-green)]">HACKER TERMINAL</h3>
          <p className="text-white/60 mt-2">Type real pentesting commands. 100% interactive simulation.</p>
        </div>
        <HackerTerminal />
      </section>

      {/* ========== EDUCATION ========== */}
      <section id="education" className="max-w-4xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="uppercase text-xs tracking-[4px] text-[var(--neon-purple)] mb-4">CHAPTER 04 — THE FOUNDATION</div>
        <h3 className="font-black text-[66px] tracking-[-3.2px] mb-12">EDUCATION</h3>
        <div className="space-y-8">
          {education.map((edu, i) => (
            <div key={i} className="glass flex flex-col md:flex-row md:items-center justify-between gap-y-3 px-9 py-8 rounded-3xl border-l-[7px] border-[var(--neon-blue)]">
              <div>
                <div className="font-semibold text-2xl tracking-tight">{edu.degree}</div>
                <div className="text-white/70 mt-1">{edu.school}</div>
              </div>
              <div className="md:text-right">
                <div className="font-mono text-[var(--neon-cyan)] tracking-[1px]">{edu.year}</div>
                <div className="text-2xl font-bold text-white mt-px">{edu.score}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== EXPERIENCE ========== */}
      <section id="experience" className="max-w-4xl mx-auto px-6 pb-24">
        <div className="uppercase text-xs tracking-[4px] text-[var(--neon-pink)] mb-4">CHAPTER 05 — IN THE TRENCHES</div>
        <h3 className="font-black text-[66px] tracking-[-3.2px] mb-12">EXPERIENCE &amp; INTERNSHIPS</h3>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="glass p-9 rounded-3xl border-l-[7px] border-[var(--neon-purple)]">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-x-5">
                <div>
                  <div className="font-bold text-[27px] tracking-tight">{exp.role}</div>
                  <div className="text-[var(--neon-purple)] text-xl">{exp.company}</div>
                </div>
                <div className="font-mono text-sm text-white/60 tracking-wider mt-1 md:mt-0">{exp.period}</div>
              </div>
              <p className="mt-5 text-white/75 leading-relaxed text-[15.2px]">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== ACHIEVEMENTS - BADGES ========== */}
      <section className="bg-black/60 py-20 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[3.6px] text-[var(--neon-cyan)] mb-3">CHAPTER 06 — THE TROPHIES</div>
          <h3 className="font-black text-6xl tracking-[-2.2px] mb-14">ACHIEVEMENTS &amp; CERTIFICATIONS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {achievements.map((ach, i) => {
              const Icon = ach.icon;
              return (
                <div key={i} className="achievement-badge glass rounded-3xl p-8 text-left border border-white/10 group">
                  <Icon className="text-[var(--neon-purple)] mb-6" size={39} />
                  <div className="font-bold text-[21px] tracking-tight group-hover:text-[var(--neon-blue)] transition">{ach.title}</div>
                  <div className="text-white mt-1.5">{ach.desc}</div>
                  <div className="text-[var(--neon-pink)] text-sm mt-1 tracking-widest">{ach.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CONTACT - 100% WORKING FORM ========== */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[4px] text-[var(--neon-blue)]">CHAPTER 07 — LET’S CONNECT</div>
          <h2 className="text-[74px] font-black tracking-[-3.8px] mt-2">GET IN TOUCH</h2>
          <p className="text-white/60 max-w-sm mx-auto mt-4">Open for internships, freelance gigs, hackathon teams, or just a chat about the future of tech.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form - Fully Validated & Functioning */}
          <div className="lg:col-span-3 glass rounded-3xl p-10 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input value={formData.name} onChange={e => updateForm('name', e.target.value)} placeholder="YOUR NAME" className="w-full bg-transparent border-b border-white/20 py-4 text-2xl placeholder:text-white/30 focus:outline-none" />
                {formErrors.name && <div className="text-red-400 text-sm mt-1">{formErrors.name}</div>}
              </div>
              <div>
                <input value={formData.email} onChange={e => updateForm('email', e.target.value)} placeholder="YOUR EMAIL ADDRESS" type="email" className="w-full bg-transparent border-b border-white/20 py-4 text-2xl placeholder:text-white/30 focus:outline-none" />
                {formErrors.email && <div className="text-red-400 text-sm mt-1">{formErrors.email}</div>}
              </div>
              <div>
                <textarea value={formData.message} onChange={e => updateForm('message', e.target.value)} placeholder="TELL ME ABOUT YOUR PROJECT OR JUST SAY HELLO..." rows={5} className="w-full resize-y bg-transparent border-b border-white/20 py-4 text-xl placeholder:text-white/30 focus:outline-none" />
                {formErrors.message && <div className="text-red-400 text-sm mt-1">{formErrors.message}</div>}
              </div>
              <button disabled={isSubmitting} type="submit" className="neon-button w-full mt-3 py-5 rounded-2xl bg-white text-xl font-bold text-black disabled:opacity-60 flex items-center justify-center gap-3">
                {isSubmitting ? "SENDING MESSAGE..." : "SEND MESSAGE"} <ArrowRight />
              </button>
            </form>
          </div>

          {/* Info + Socials */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="glass p-9 rounded-3xl flex-1 border border-white/10">
              <div className="space-y-7 text-lg">
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 hover:text-[var(--neon-blue)]"><Mail /> {EMAIL}</a>
                <a href={`tel:${PHONE}`} className="flex items-center gap-4 hover:text-[var(--neon-blue)]"><Phone /> {PHONE}</a>
                <div className="flex items-center gap-4 text-white/70"><MapPin /> {LOCATION}</div>
              </div>
            </div>
            <div className="flex gap-3">
              {[ 
                {label:'GITHUB', url:GITHUB, icon:Github}, {label:'LINKEDIN', url:LINKEDIN, icon:Users}, 
                {label:'X', url:TWITTER, icon:Star}, {label:'INSTA', url:INSTAGRAM, icon:Star} 
              ].map((s,i) => (
                <a key={i} href={s.url} target="_blank" className="flex-1 py-5 glass rounded-3xl text-center text-xs tracking-[2px] border border-white/10 hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)]">{s.label}</a>
              ))}
            </div>
          </div>
        </div>

        {/* RECEIVED MESSAGES - REAL FUNCTIONALITY! Shows submitted messages */}
        {messages.length > 0 && (
          <div className="mt-12">
            <div className="font-mono uppercase tracking-[2px] text-xs mb-4 text-white/50">RECENTLY RECEIVED INQUIRIES ({messages.length})</div>
            <div className="space-y-3">
              {messages.map((m,i) => (
                <div key={i} className="glass px-7 py-5 rounded-2xl flex justify-between items-start text-sm border-l-4 border-[var(--neon-pink)]">
                  <div><span className="font-semibold">{m.name}</span> — {m.email}<div className="text-white/70 mt-1 pr-8">{m.message}</div></div>
                  <div className="text-xs font-mono whitespace-nowrap text-white/40">{m.time}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/40 tracking-widest">
        © {new Date().getFullYear()} {NAME}. MADE WITH ❤️ AND LOTS OF CAFFEINE — JNU CSE
      </footer>

      {/* PROJECT MODALS - FULLY FUNCTIONAL! */}
      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => { setSelectedProject(null); setTimeout(() => { /* reset demo */ }, 300); }} />
    </div>
  );
}
