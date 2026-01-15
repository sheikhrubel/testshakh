
/**
 * SYSTEM_DELTA PORTFOLIO ENGINE
 * Author: Md Rubel Shakh
 * Concept: Infrastructure & Data Center Command Dashboard
 */

// --- Data Constants ---
const DATA = {
    identity: {
        name: "Md Rubel Shakh",
        role: "IT Service Delivery Analyst",
        specialization: "Infrastructure & Data Center Specialist",
        experience: "8+ Years Expertise",
        location: "Dhaka, Bangladesh"
    },
    uptime: "2015-01-01",
    stats: {
        "Incident Resolution": "99.8%",
        "SLA Compliance": "100%",
        "System Reliability": "HIGH",
        "Security Status": "VERIFIED"
    },
    services: [
        { category: "Infrastructure", skills: ["Active Directory", "Windows Server", "Networking", "Hardware Maintenance"] },
        { category: "Cloud & Identity", skills: ["O365 Administration", "Intune", "SharePoint Admin", "Azure"] },
        { category: "Data Center", skills: ["Rack & Stack", "Structured Cabling", "Grounding & Staging", "Server Cooling"] },
        { category: "Technical Ops", skills: ["Python", "SQL", "Teradata", "Zendesk", "ServiceNow"] }
    ],
    incidents: [
        {
            company: "Kontoor Brands – Lee | Wrangler",
            role: "IT Service Delivery Analyst",
            period: "Feb 2025 – Continuing",
            status: "ACTIVE",
            details: [
                "User Lifecycle Management & Access Security",
                "Advanced Infrastructure Troubleshooting",
                "Knowledge Base Documentation Lead",
                "Data Center Hands-on Tasks (Rack/Cabling)"
            ]
        },
        {
            company: "Optimizely",
            role: "Associate Technical Support Engineer",
            period: "Mar 2024 – Feb 2025",
            status: "RESOLVED",
            details: [
                "First Line Team (FLT) Incident Lead",
                "Global Multi-channel Technical Support",
                "Knowledge Base Quality Contributor",
                "Cross-functional Infrastructure Collaboration"
            ]
        },
        {
            company: "Amber Software Solutions",
            role: "Technical Support Advisor",
            period: "Nov 2022 – Jan 2024",
            status: "RESOLVED",
            details: [
                "System & Network Fault Diagnostics",
                "Web Portal Modernization (PHP/JS)",
                "Automation Testing (Selenium/Java)",
                "B2B IT Equipment Deployment"
            ]
        },
        {
            company: "IBM",
            role: "Data Center Tech (Project Lead)",
            period: "2022 (Freelance)",
            status: "RESOLVED",
            details: [
                "Teradata IntelliFlex Rack Setup",
                "Electrical Grounding & Node Staging",
                "Complex Rack-level Labeling & Cabling",
                "Hardware Decommissioning & Troubleshooting"
            ]
        },
        {
            company: "ServicEngine Ltd - SEBPO",
            role: "Executive – IT & Cybersecurity",
            period: "Feb 2021 – Nov 2022",
            status: "RESOLVED",
            details: [
                "Data Center Equipment Maintenance",
                "Office 365 & SharePoint Configuration",
                "Compliance with Security Protocols",
                "AV Conferencing Deployment (Logitech)"
            ]
        },
        {
            company: "PRAN – RFL Group",
            role: "MIS Specialist",
            period: "Jan 2015 – Jun 2018",
            status: "RESOLVED",
            details: [
                "Disaster Recovery Planning Participant",
                "Active Directory & DHCP Administration",
                "CCTV & IP Camera Infrastructure",
                "Legacy Hardware Lifecycle Support"
            ]
        }
    ],
    knowledge_base: [
        { title: "Standard Operating Procedure: Rack Installation", id: "SOP-DC-001" },
        { title: "Network Troubleshooting: VPN & Latency Diagnostics", id: "SOP-NET-042" },
        { title: "User Onboarding: Security Protocol v2.5", id: "SOP-SEC-012" },
        { title: "Data Center Disaster Recovery Protocol", id: "SOP-DR-009" }
    ],
    certifications: [
        "Microsoft O365 Administration (2024)",
        "SharePoint Administration (2024)",
        "Ethical Hacking Essentials (EHE) (2023)",
        "Azure Fundamentals (2023)",
        "Python with GUI (2020)",
        "CCNA R&S (2016)"
    ]
};

// --- DOM References ---
const bootScreen = document.getElementById('boot-screen');
const bootLog = document.getElementById('boot-log');
const dashboard = document.getElementById('dashboard');
const moduleContainer = document.getElementById('module-container');
const uptimeClock = document.getElementById('uptime-clock');
const themeCtaText = document.getElementById('theme-cta-text');

// --- Theme Toggle Logic ---
function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    themeCtaText.textContent = isDark 
        ? "Switch to High-Legibility Mode" 
        : "Switch to Command-Center Mode";
    
    // Force icons to update if any dynamic content is visible
    lucide.createIcons();
}

// --- Boot Sequence Engine ---
const bootLines = [
    { text: "SYSTEM_DELTA BIOS v4.0.25 (REL: 2025.02)", delay: 100 },
    { text: "CPU: Intel(R) Core(TM) i9-14900K @ 5.80GHz", delay: 150 },
    { text: "MEMORY: 65536MB RAM TEST... OK", delay: 100 },
    { text: "DETECTING INFRASTRUCTURE LAYERS...", delay: 200 },
    { text: "VERIFYING SECURITY CREDENTIALS [MD_RUBEL_SHAKH]...", delay: 300 },
    { text: "ACCESS GRANTED: LEVEL 7 - ADMIN", delay: 100 },
    { text: "INITIALIZING CONTROL PANEL INTERFACE...", delay: 400 },
    { text: "READY.", delay: 200 }
];

async function runBootSequence() {
    for (const line of bootLines) {
        const div = document.createElement('div');
        div.className = "opacity-0 transition-opacity duration-75";
        div.textContent = `> ${line.text}`;
        bootLog.appendChild(div);
        bootScreen.scrollTop = bootScreen.scrollHeight;
        await new Promise(r => setTimeout(r, line.delay));
        div.classList.replace("opacity-0", "opacity-100");
    }

    setTimeout(() => {
        bootScreen.classList.add('transition-all', 'duration-1000', 'opacity-0', 'pointer-events-none');
        dashboard.classList.remove('hidden');
        dashboard.classList.add('flex');
        lucide.createIcons();
        startUptimeCounter();
        mountModule('hero');
    }, 800);
}

// --- Navigation Engine ---
function mountModule(moduleId) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const isActive = btn.dataset.module === moduleId;
        btn.classList.toggle('bg-emerald-500/10', isActive);
        btn.classList.toggle('text-emerald-600', isActive);
        btn.classList.toggle('dark:text-emerald-400', isActive);
        btn.classList.toggle('text-slate-500', !isActive);
        btn.classList.toggle('dark:text-emerald-500/60', !isActive);
    });

    let content = "";
    switch(moduleId) {
        case 'hero': content = renderHero(); break;
        case 'about': content = renderAbout(); break;
        case 'skills': content = renderSkills(); break;
        case 'experience': content = renderExperience(); break;
        case 'knowledge': content = renderKnowledge(); break;
        case 'contact': content = renderContact(); break;
    }

    moduleContainer.innerHTML = `<div class="module-entry">${content}</div>`;
    lucide.createIcons();
    moduleContainer.scrollTop = 0;
}

// --- Renderers (Updated for Readability) ---

function renderHero() {
    return `
        <div class="h-full flex flex-col justify-center items-start space-y-6 max-w-3xl">
            <div class="mono p-2 border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs inline-block uppercase tracking-[0.2em] font-bold">
                Status: System Online
            </div>
            <h1 class="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
                Md Rubel Shakh
            </h1>
            <h2 class="text-xl md:text-3xl mono text-emerald-600 dark:text-emerald-500/80 uppercase font-bold">
                ${DATA.identity.role}
            </h2>
            <p class="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                Ensuring Enterprise System Stability. 8+ years of expertise in Infrastructure Management, 
                Data Center operations, and Technical Support Delivery.
            </p>
            <div class="flex flex-wrap gap-4 pt-4">
                <button onclick="mountModule('experience')" class="px-8 py-4 bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 mono font-bold uppercase text-sm hover:scale-105 transition-all shadow-lg">
                    Professional Logs
                </button>
                <button onclick="mountModule('contact')" class="px-8 py-4 border-2 border-emerald-600 dark:border-emerald-500/50 text-emerald-600 dark:text-emerald-500 mono font-bold uppercase text-sm hover:bg-emerald-500/10 transition-all">
                    Establish Link
                </button>
            </div>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="space-y-10">
            <div class="flex items-center gap-4">
                <i data-lucide="user-cog" class="text-emerald-600 dark:text-emerald-500 w-10 h-10"></i>
                <h3 class="text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white">Profile Bios</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="system-border p-8 bg-white dark:bg-slate-900/40 space-y-6">
                    <h4 class="mono text-emerald-600 dark:text-emerald-500 uppercase text-xs font-bold border-b border-emerald-900/10 pb-2">System Architecture</h4>
                    <ul class="space-y-4 mono text-sm font-semibold">
                        <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2"><span class="text-slate-400">IDENTITY</span> <span>MD RUBEL SHAKH</span></li>
                        <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2"><span class="text-slate-400">PROFESSION</span> <span>IT SERVICE DELIVERY</span></li>
                        <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2"><span class="text-slate-400">UPTIME</span> <span>8+ YEARS EXP</span></li>
                        <li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2"><span class="text-slate-400">FIRMWARE</span> <span>B.TECH (CSE)</span></li>
                    </ul>
                </div>
                <div class="system-border p-8 bg-white dark:bg-slate-900/40 space-y-6">
                    <h4 class="mono text-emerald-600 dark:text-emerald-500 uppercase text-xs font-bold border-b border-emerald-900/10 pb-2">Service Performance</h4>
                    <div class="grid grid-cols-2 gap-4">
                        ${Object.entries(DATA.stats).map(([label, val]) => `
                            <div class="p-4 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-emerald-900/20">
                                <div class="text-[10px] text-emerald-600 dark:text-emerald-500/50 uppercase font-bold mb-1">${label}</div>
                                <div class="text-2xl font-black mono text-slate-800 dark:text-white">${val}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="system-border p-8 bg-emerald-500/5 border-l-4 border-l-emerald-600">
                <p class="text-slate-700 dark:text-slate-300 text-lg leading-relaxed italic font-medium">
                    "Experienced Technical Support Specialist with expertise in resolving high-priority IT issues, managing data center infrastructure, and adept in diverse technologies including Office 365, Azure, and Python."
                </p>
            </div>
        </div>
    `;
}

function renderSkills() {
    return `
        <div class="space-y-10">
            <div class="flex items-center gap-4">
                <i data-lucide="activity" class="text-emerald-600 dark:text-emerald-500 w-10 h-10"></i>
                <h3 class="text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white">Active Services</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${DATA.services.map(service => `
                    <div class="system-border p-6 bg-white dark:bg-slate-900/40 hover:border-emerald-500 transition-all group">
                        <div class="flex justify-between items-center mb-6">
                            <h4 class="mono text-emerald-600 dark:text-emerald-500 font-bold uppercase text-sm tracking-widest">${service.category}</h4>
                            <span class="text-[10px] mono text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded-full font-bold">HEALTHY</span>
                        </div>
                        <div class="flex flex-wrap gap-2.5">
                            ${service.skills.map(s => `
                                <span class="text-xs font-bold px-4 py-2 rounded bg-slate-100 dark:bg-emerald-950/30 text-slate-700 dark:text-emerald-200 border border-slate-200 dark:border-emerald-500/20">${s}</span>
                            `).join('')}
                        </div>
                        <div class="mt-8 h-1.5 w-full bg-slate-100 dark:bg-emerald-950 overflow-hidden rounded-full">
                            <div class="h-full bg-emerald-600 dark:bg-emerald-500 progress-fill" style="width: ${Math.floor(Math.random() * 15) + 85}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderExperience() {
    return `
        <div class="space-y-10">
            <div class="flex items-center gap-4">
                <i data-lucide="database" class="text-emerald-600 dark:text-emerald-500 w-10 h-10"></i>
                <h3 class="text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white">Incident History</h3>
            </div>
            <div class="space-y-8">
                ${DATA.incidents.map((job) => `
                    <div class="relative pl-10 border-l-4 border-slate-200 dark:border-emerald-900/30 py-4 group">
                        <div class="absolute -left-[14px] top-8 w-6 h-6 rounded-full bg-[var(--current-bg)] border-4 ${job.status === 'ACTIVE' ? 'border-emerald-600' : 'border-slate-300 dark:border-emerald-800'}"></div>
                        <div class="system-border p-8 bg-white dark:bg-slate-900/40 hover:shadow-2xl transition-all">
                            <div class="flex flex-col md:flex-row justify-between md:items-start mb-6 gap-4">
                                <div>
                                    <h4 class="text-2xl font-black text-slate-900 dark:text-white uppercase">${job.company}</h4>
                                    <p class="mono text-emerald-600 dark:text-emerald-500 text-sm font-bold uppercase tracking-widest mt-1">${job.role}</p>
                                </div>
                                <div class="text-left md:text-right shrink-0">
                                    <div class="mono text-xs font-bold text-slate-400 dark:text-emerald-500/60">${job.period}</div>
                                    <div class="inline-block mt-2 px-3 py-1 text-[10px] mono font-black uppercase rounded-full ${job.status === 'ACTIVE' ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}">
                                        STATUS: ${job.status}
                                    </div>
                                </div>
                            </div>
                            <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                ${job.details.map(d => `
                                    <li class="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                                        <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                                        ${d}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderKnowledge() {
    return `
        <div class="space-y-10">
            <div class="flex items-center gap-4">
                <i data-lucide="book-open" class="text-emerald-600 dark:text-emerald-500 w-10 h-10"></i>
                <h3 class="text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white">Credentials</h3>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div class="space-y-6">
                    <h4 class="mono text-emerald-600 dark:text-emerald-500 uppercase text-xs font-bold border-b border-slate-200 dark:border-emerald-900/30 pb-2 tracking-widest">Knowledge Base Entries</h4>
                    <div class="space-y-4">
                        ${DATA.knowledge_base.map(kb => `
                            <div class="p-5 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-emerald-900/20 flex justify-between items-center group cursor-pointer hover:border-emerald-500 transition-all shadow-sm">
                                <div class="mono text-sm font-bold">
                                    <span class="text-emerald-600/40 dark:text-emerald-500/40 mr-3">${kb.id}</span>
                                    <span class="text-slate-700 dark:text-slate-300 uppercase">${kb.title}</span>
                                </div>
                                <i data-lucide="file-text" class="w-5 h-5 text-slate-200 dark:text-emerald-500/20 group-hover:text-emerald-500 transition-colors"></i>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="space-y-6">
                    <h4 class="mono text-emerald-600 dark:text-emerald-500 uppercase text-xs font-bold border-b border-slate-200 dark:border-emerald-900/30 pb-2 tracking-widest">Verified Badges</h4>
                    <div class="grid grid-cols-1 gap-3">
                        ${DATA.certifications.map(cert => `
                            <div class="flex items-center gap-4 p-4 bg-emerald-500/5 border border-emerald-600/10 rounded-lg group hover:bg-emerald-500/10 transition-colors">
                                <div class="p-2 bg-emerald-600 text-white rounded shadow-md group-hover:scale-110 transition-transform">
                                    <i data-lucide="award" class="w-5 h-5"></i>
                                </div>
                                <span class="text-xs mono font-black uppercase text-slate-800 dark:text-emerald-200 tracking-tight">${cert}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderContact() {
    return `
        <div class="h-full flex flex-col justify-center items-center space-y-12">
            <div class="text-center space-y-4">
                <div class="inline-flex items-center justify-center p-6 rounded-full bg-emerald-600/10 mb-2">
                    <i data-lucide="shield-check" class="text-emerald-600 w-16 h-16"></i>
                </div>
                <h3 class="text-5xl font-black uppercase tracking-tight text-slate-900 dark:text-white">Secure Access</h3>
                <p class="text-slate-500 dark:text-slate-400 mono text-sm font-bold max-w-md mx-auto">Establishing secure handshake for inquiry and collaboration.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                <a href="mailto:rubel.cmt09@gmail.com" class="system-border p-10 bg-white dark:bg-slate-900/40 text-center space-y-4 group hover:shadow-2xl hover:-translate-y-2 transition-all">
                    <i data-lucide="mail" class="w-12 h-12 text-emerald-600 mx-auto group-hover:scale-110 transition-transform"></i>
                    <div class="mono text-sm font-black uppercase tracking-[0.2em] text-slate-800 dark:text-white">E-Mail</div>
                    <div class="text-xs text-slate-500 font-bold truncate">rubel.cmt09@gmail.com</div>
                </a>
                <a href="https://linkedin.com/in/rubelshakh" target="_blank" class="system-border p-10 bg-white dark:bg-slate-900/40 text-center space-y-4 group hover:shadow-2xl hover:-translate-y-2 transition-all">
                    <i data-lucide="linkedin" class="w-12 h-12 text-emerald-600 mx-auto group-hover:scale-110 transition-transform"></i>
                    <div class="mono text-sm font-black uppercase tracking-[0.2em] text-slate-800 dark:text-white">LinkedIn</div>
                    <div class="text-xs text-slate-500 font-bold truncate">in/rubelshakh</div>
                </a>
                <a href="#" class="system-border p-10 bg-white dark:bg-slate-900/40 text-center space-y-4 group hover:shadow-2xl hover:-translate-y-2 transition-all">
                    <i data-lucide="file-down" class="w-12 h-12 text-emerald-600 mx-auto group-hover:scale-110 transition-transform"></i>
                    <div class="mono text-sm font-black uppercase tracking-[0.2em] text-slate-800 dark:text-white">Profile CV</div>
                    <div class="text-xs text-slate-500 font-bold">DOCUMENT.PDF</div>
                </a>
            </div>
        </div>
    `;
}

// --- Background Task: Uptime Counter ---
function startUptimeCounter() {
    const start = new Date(DATA.uptime);
    setInterval(() => {
        const now = new Date();
        const diff = now - start;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);
        uptimeClock.textContent = `${days}d:${hours.toString().padStart(2, '0')}h:${mins.toString().padStart(2, '0')}m:${secs.toString().padStart(2, '0')}s`;
    }, 1000);
}

window.addEventListener('DOMContentLoaded', runBootSequence);
