
/**
 * SYSTEM_DELTA PORTFOLIO CORE
 * MD RUBEL SHAKH - IT SERVICE DELIVERY ANALYST
 */

const DATA = {
    identity: {
        name: "Md Rubel Shakh",
        role: "IT Service Delivery Analyst",
        specialization: "Infrastructure & Data Center Specialist",
        experience: "8+ Years Expertise",
        location: "Dhaka, Bangladesh",
        photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rubel&backgroundColor=b6e3f4" // Replace with actual URL if available
    },
    uptime: "2015-01-01",
    stats: {
        "Incident Resolution": "99.8%",
        "SLA Compliance": "100%",
        "System Reliability": "HIGH",
        "Security Clearance": "VERIFIED"
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
            details: ["User Lifecycle Management", "Infrastructure Troubleshooting", "KB Documentation Lead", "Data Center Hands-on Tasks"]
        },
        {
            company: "Optimizely",
            role: "Associate Technical Support Engineer",
            period: "Mar 2024 – Feb 2025",
            status: "RESOLVED",
            details: ["FLT Incident Lead", "Global Support Delivery", "KB Quality Contributor", "Infra Collaboration"]
        },
        {
            company: "Amber Software Solutions",
            role: "Technical Support Advisor",
            period: "Nov 2022 – Jan 2024",
            status: "RESOLVED",
            details: ["Network Fault Diagnostics", "Web Modernization (PHP/JS)", "Automation Testing", "B2B Deployment"]
        },
        {
            company: "IBM",
            role: "Data Center Tech (Project Lead)",
            period: "2022 (Freelance)",
            status: "RESOLVED",
            details: ["Teradata Rack Setup", "Electrical Grounding", "Node Staging", "Hardware Decommissioning"]
        }
    ],
    knowledge_base: [
        { title: "Standard Operating Procedure: Rack Installation", id: "SOP-DC-001" },
        { title: "User Onboarding: Security Protocol v2.5", id: "SOP-SEC-012" },
        { title: "Data Center Disaster Recovery Protocol", id: "SOP-DR-009" }
    ],
    certifications: [
        "Microsoft O365 Admin (2024)",
        "SharePoint Administration (2024)",
        "Ethical Hacking Essentials (2023)",
        "Azure Fundamentals (2023)",
        "CCNA R&S (2016)"
    ]
};

// --- System Core ---

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    const btnText = document.getElementById('theme-btn-text');
    btnText.textContent = isDark ? "Switch to High-Legibility" : "Switch to Command-Center";
    
    // Refresh current module to ensure colors match theme
    const activeBtn = document.querySelector('.nav-btn.active');
    if (activeBtn) mountModule(activeBtn.dataset.module);
    lucide.createIcons();
}

async function runBootSequence() {
    const bootLines = [
        "INITIALIZING SYSTEM_DELTA KERNEL...",
        "CHECKING HARDWARE COMPATIBILITY...",
        "MOUNTING DATA_CENTER_MODULES...",
        "VERIFYING IDENTITY: MD_RUBEL_SHAKH",
        "ACCESS GRANTED. WELCOME ADMIN.",
        "READY."
    ];
    const log = document.getElementById('boot-log');
    
    for (const text of bootLines) {
        const div = document.createElement('div');
        div.textContent = `[ OK ] ${text}`;
        log.appendChild(div);
        await new Promise(r => setTimeout(r, 150));
    }

    setTimeout(() => {
        document.getElementById('boot-screen').style.display = 'none';
        document.getElementById('dashboard').classList.remove('hidden');
        document.getElementById('dashboard').classList.add('flex');
        startUptimeCounter();
        mountModule('hero');
        lucide.createIcons();
    }, 600);
}

function mountModule(id) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.module === id);
    });

    const container = document.getElementById('module-container');
    let html = "";

    switch(id) {
        case 'hero': html = renderHero(); break;
        case 'about': html = renderAbout(); break;
        case 'skills': html = renderSkills(); break;
        case 'experience': html = renderExperience(); break;
        case 'knowledge': html = renderKnowledge(); break;
    }

    container.innerHTML = `<div class="animate-in fade-in slide-in-from-bottom-4 duration-500">${html}</div>`;
    lucide.createIcons();
    container.scrollTop = 0;
}

// --- Render Modules ---

function renderHero() {
    return `
        <div class="flex flex-col justify-center min-h-[70vh] max-w-4xl">
            <div class="mono text-[var(--accent)] font-bold mb-4 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping"></span>
                CORE SYSTEM ACTIVE
            </div>
            <h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-none">
                MD RUBEL <br> SHAKH
            </h1>
            <p class="text-2xl md:text-3xl font-bold text-[var(--accent)] mono mb-8 uppercase">
                ${DATA.identity.role}
            </p>
            <p class="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed mb-10 font-medium">
                Expert in Infrastructure management, Data Center operations, and High-reliability service delivery. 
                I bridge the gap between complex hardware and enterprise uptime.
            </p>
            <div class="flex gap-4">
                <button onclick="mountModule('about')" class="px-10 py-5 bg-[var(--accent)] text-white dark:text-slate-900 font-black uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl">
                    Open Identity Scan
                </button>
            </div>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <!-- Biometric Photo Section -->
            <div class="lg:col-span-5 xl:col-span-4 flex flex-col items-center">
                <div class="biometric-frame w-full aspect-[4/5] rounded-lg group shadow-2xl">
                    <img src="${DATA.identity.photo}" alt="Profile" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100">
                    <div class="absolute bottom-4 left-4 right-4 z-20">
                        <div class="bg-[var(--accent)] text-white dark:text-slate-900 px-3 py-1 text-[10px] font-black uppercase mono inline-block mb-1">
                            Verified Identity
                        </div>
                        <div class="bg-black/60 backdrop-blur-md p-3 border border-white/20">
                            <div class="text-xs text-white font-bold mono">ID: 104-ALPHA-SHAKH</div>
                            <div class="w-full h-1 bg-white/20 mt-2"><div class="h-full bg-[var(--accent)] w-[85%]"></div></div>
                        </div>
                    </div>
                </div>
                <div class="mt-6 w-full system-border p-4 rounded-lg bg-[var(--bg-card)]">
                    <div class="flex justify-between items-center mono text-[10px] font-bold opacity-50 uppercase">
                        <span>Fingerprint Hash</span>
                        <span>Matched</span>
                    </div>
                    <div class="text-xs truncate mono mt-1 font-medium opacity-80">8f2g812h-9v12-4f1k-8s2j-92k1l8v10</div>
                </div>
            </div>

            <div class="lg:col-span-7 xl:col-span-8 space-y-10">
                <div>
                    <h2 class="text-4xl font-black mb-6 flex items-center gap-4">
                        <i data-lucide="user-check" class="w-10 h-10 text-[var(--accent)]"></i>
                        PROFILE BIOS
                    </h2>
                    <p class="text-lg text-[var(--text-muted)] leading-relaxed font-medium">
                        Analytical IT professional with a "zero-downtime" mindset. Extensive experience in both cloud-native (Azure/O365) and physical data center deployments (IBM/Teradata).
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${Object.entries(DATA.stats).map(([k, v]) => `
                        <div class="system-border p-6 bg-[var(--bg-card)] rounded-xl">
                            <div class="text-[10px] font-black uppercase mono text-[var(--accent)] opacity-60 mb-2">${k}</div>
                            <div class="text-2xl font-black">${v}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderSkills() {
    return `
        <div class="space-y-12">
            <h2 class="text-4xl font-black flex items-center gap-4">
                <i data-lucide="cpu" class="text-[var(--accent)] w-10 h-10"></i>
                ACTIVE SERVICES
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${DATA.services.map(s => `
                    <div class="system-border p-8 bg-[var(--bg-card)] rounded-2xl hover:border-[var(--accent)] transition-all">
                        <h3 class="mono text-sm font-black text-[var(--accent)] uppercase mb-6 tracking-widest">${s.category}</h3>
                        <div class="flex flex-wrap gap-2">
                            ${s.skills.map(skill => `
                                <span class="px-4 py-2 bg-[var(--bg-main)] border border-[var(--border)] rounded-md text-xs font-bold">${skill}</span>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderExperience() {
    return `
        <div class="space-y-12">
            <h2 class="text-4xl font-black flex items-center gap-4">
                <i data-lucide="database" class="text-[var(--accent)] w-10 h-10"></i>
                INCIDENT HISTORY
            </h2>
            <div class="space-y-8">
                ${DATA.incidents.map(i => `
                    <div class="system-border p-8 bg-[var(--bg-card)] rounded-2xl relative group">
                        <div class="flex flex-col md:flex-row justify-between mb-6">
                            <div>
                                <h3 class="text-2xl font-black">${i.company}</h3>
                                <div class="mono text-[var(--accent)] text-xs font-bold uppercase mt-1">${i.role}</div>
                            </div>
                            <div class="text-right">
                                <div class="text-xs font-bold opacity-60">${i.period}</div>
                                <div class="inline-block mt-2 px-3 py-1 text-[9px] font-black bg-[var(--bg-main)] rounded-full border border-[var(--border)] uppercase">Status: ${i.status}</div>
                            </div>
                        </div>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${i.details.map(d => `
                                <li class="text-sm text-[var(--text-muted)] flex gap-3 font-medium">
                                    <i data-lucide="check" class="w-4 h-4 text-[var(--accent)] shrink-0"></i>
                                    ${d}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderKnowledge() {
    return `
        <div class="space-y-12">
            <h2 class="text-4xl font-black flex items-center gap-4">
                <i data-lucide="shield-check" class="text-[var(--accent)] w-10 h-10"></i>
                CREDENTIALS
            </h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <div class="mono text-[10px] font-black uppercase opacity-40 mb-2">Internal Documentation</div>
                    ${DATA.knowledge_base.map(kb => `
                        <div class="system-border p-5 bg-[var(--bg-card)] flex justify-between items-center rounded-xl cursor-pointer hover:bg-[var(--accent-soft)] transition-all">
                            <span class="text-sm font-bold">${kb.title}</span>
                            <span class="mono text-[10px] font-black opacity-30">${kb.id}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="space-y-4">
                    <div class="mono text-[10px] font-black uppercase opacity-40 mb-2">Verified Badges</div>
                    ${DATA.certifications.map(c => `
                        <div class="system-border p-4 bg-[var(--accent-soft)] border-l-4 border-l-[var(--accent)] rounded-lg flex items-center gap-4">
                            <i data-lucide="award" class="text-[var(--accent)] w-6 h-6"></i>
                            <span class="text-xs font-black uppercase tracking-tighter">${c}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function startUptimeCounter() {
    const start = new Date(DATA.uptime);
    setInterval(() => {
        const diff = new Date() - start;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
        const m = Math.floor((diff / (1000 * 60)) % 60).toString().padStart(2, '0');
        const s = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');
        uptimeClock.textContent = `${d}D:${h}H:${m}M:${s}S`;
    }, 1000);
}

window.addEventListener('DOMContentLoaded', runBootSequence);
