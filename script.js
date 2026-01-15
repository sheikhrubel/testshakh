
/**
 * SYSTEM_DELTA CORE
 * REDESIGNED COMMAND CENTER INTERFACE
 */

const DATA = {
    identity: {
        name: "Md Rubel",
        surname: "Shakh",
        role: "IT Service Delivery Analyst",
        subRole: "Infrastructure Specialist",
        bio: "Experienced Technical Support Specialist with 10+ years' expertise in resolving complex IT issues and managing large-scale infrastructure. Specialist in O365, Intune, and Networking architectures.",
        photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rubel&backgroundColor=10b981"
    },
    uptime: "2015-01-01",
    services: [
        { title: "Infrastructure & Data Center", items: ["Data Center Server Break-Fix", "DIMM & CPU Replacement", "Motherboard & Parts Replacement", "Teradata IntelliFlex Rack Ops", "Structured Cabling (L0/L1)"], status: "RUNNING" },
        { title: "Cloud & Identity", items: ["Email & Office 365", "Mobile Device Setup", "Collaborative Sites", "Secure Logins"], status: "ACTIVE" },
        { title: "Security & Networking", items: ["Internet & Wi-Fi", "Safety Protocols", "Secure Access", "Risk Prevention"], status: "SECURE" },
        { title: "End-User & OS Support", items: ["Windows & Mac Expert", "Mobile Help", "Team Training", "Ticket Management"], status: "STABLE" }
    ],
    telemetry: [
        { label: "Incident_Triage", value: 95 },
        { label: "Knowledge_Engineering", value: 90 },
        { label: "Hardware_Provisioning", value: 88 }
    ],
    capabilities: ["ServiceNow", "Zendesk", "Microsoft Teams", "PowerShell", "Python", "SQL", "HTML/CSS"]
};

// --- System Engine ---

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    lucide.createIcons();
}

function startUptime() {
    const start = new Date(DATA.uptime);
    setInterval(() => {
        const diff = new Date() - start;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const y = Math.floor(d / 365);
        const remD = d % 365;
        const m = Math.floor(remD / 30);
        const finalD = remD % 30;
        document.getElementById('uptime-display').textContent = `${y}Y ${m}M ${finalD}D`;
    }, 1000);
}

function mountModule(id) {
    const label = document.getElementById('module-id-label');
    const container = document.getElementById('module-container');
    
    // Update active nav
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.module === id);
    });

    let html = "";
    switch(id) {
        case 'hero': 
            label.textContent = "HERO";
            html = renderHero(); 
            break;
        case 'about': 
            label.textContent = "PROFILE";
            html = renderProfile(); 
            break;
        case 'skills': 
            label.textContent = "SERVICES";
            html = renderServices(); 
            break;
        case 'experience': 
            label.textContent = "INCIDENTS";
            html = renderIncidents(); 
            break;
        case 'knowledge': 
            label.textContent = "KNOWLEDGE";
            html = renderKnowledge(); 
            break;
        case 'contact': 
            label.textContent = "COMMS";
            html = renderContact(); 
            break;
    }

    container.innerHTML = `<div class="animate-in fade-in slide-in-from-left-4 duration-500">${html}</div>`;
    lucide.createIcons();
}

// --- Component Renderers ---

function renderHero() {
    return `
        <div class="max-w-5xl space-y-12">
            <div class="p-2 border border-emerald-900/30 bg-emerald-950/10 text-[10px] text-emerald-500 font-bold uppercase tracking-widest inline-block">
                Initializing_Identity...
            </div>
            
            <div>
                <h1 class="text-7xl font-light text-white leading-tight">
                    ${DATA.identity.name} <span class="text-emerald-500 font-black">${DATA.identity.surname}</span>
                </h1>
                <div class="flex items-center gap-4 mt-6">
                    <span class="text-emerald-500 font-bold">></span>
                    <span class="text-2xl text-emerald-500 font-medium">${DATA.identity.role} | ${DATA.identity.subRole}</span>
                </div>
            </div>

            <div class="p-8 border border-gray-900 bg-surface/50 max-w-2xl">
                <p class="text-xl text-gray-400 font-medium leading-relaxed">
                    Keeping systems running. Solving problems before they escalate.<span class="inline-block w-2 h-6 bg-emerald-500 ml-2 align-middle animate-pulse"></span>
                </p>
            </div>

            <div class="grid grid-cols-4 gap-12 pt-10 border-t border-gray-900">
                <div>
                    <div class="text-[10px] text-gray-600 font-bold uppercase mb-2">Experience</div>
                    <div class="text-2xl font-black text-white">10+ YEARS</div>
                </div>
                <div>
                    <div class="text-[10px] text-gray-600 font-bold uppercase mb-2">Certifications</div>
                    <div class="text-2xl font-black text-white">12+ BADGES</div>
                </div>
                <div>
                    <div class="text-[10px] text-gray-600 font-bold uppercase mb-2">Availability</div>
                    <div class="text-2xl font-black text-white">24/7</div>
                </div>
                <div>
                    <div class="text-[10px] text-gray-600 font-bold uppercase mb-2">Success_Rate</div>
                    <div class="text-2xl font-black text-white">99.9%</div>
                </div>
            </div>
            
            <div class="pt-20">
                <h2 class="text-2xl font-black uppercase text-white tracking-widest">02_System_Profile</h2>
                <div class="h-[1px] bg-gray-900 w-full mt-4"></div>
            </div>
        </div>
    `;
}

function renderProfile() {
    return `
        <div class="grid grid-cols-12 gap-10 max-w-7xl">
            <!-- Left: Biometric Scan -->
            <div class="col-span-12 lg:col-span-4">
                <div class="biometric-photo-wrapper bg-black">
                    <div class="scan-line"></div>
                    <div class="photo-overlay">
                        LAT: 23.7941° N<br>LON: 90.4261° E<br>ALT: 12.4m_MSL
                    </div>
                    
                    <img src="${DATA.identity.photo}" alt="Bio-Subject" class="w-full grayscale opacity-60 contrast-125">
                    
                    <div class="absolute top-10 right-[-30px] p-3 border border-gray-800 bg-surface text-center">
                        <div class="text-[8px] text-gray-500 uppercase font-bold">Biometric_Sync</div>
                        <div class="text-[10px] text-emerald-500 font-black flex items-center gap-1 justify-center mt-1">
                            <i data-lucide="refresh-cw" class="w-2.5 h-2.5 animate-spin"></i> 99.2% Match
                        </div>
                    </div>

                    <div class="absolute bottom-[-10px] left-[-20px] p-3 border border-gray-800 bg-surface">
                        <div class="text-[7px] text-gray-600 uppercase font-black">Stress_Telemetry</div>
                        <div class="text-[9px] text-emerald-500 font-black uppercase mt-1">Nominal_0.02%</div>
                    </div>

                    <div class="mt-4 p-4 border border-gray-900 bg-surface text-center">
                        <div class="text-[9px] text-emerald-500 font-bold uppercase tracking-widest">Subject_Identity</div>
                        <div class="text-lg font-black mt-1">RUBEL_SHAKH.<span class="text-[10px] text-gray-500">L3</span></div>
                        <div class="flex justify-between text-[7px] text-gray-700 mt-2 font-black uppercase">
                            <span>Base_Stabilized</span>
                            <span>Auth: Pass</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right: Directives & Telemetry -->
            <div class="col-span-12 lg:col-span-8 space-y-10">
                <div class="p-10 border border-gray-900 bg-surface relative">
                    <div class="corner-tl"></div>
                    <div class="corner-br"></div>
                    <p class="text-2xl text-gray-300 font-medium leading-relaxed italic">
                        "${DATA.identity.bio}"
                    </p>
                </div>

                <div class="grid grid-cols-2 gap-10">
                    <div>
                        <div class="text-[10px] text-emerald-500 font-black uppercase tracking-[0.2em] mb-6">Core_Directives</div>
                        <div class="space-y-6">
                            <div class="flex gap-4">
                                <span class="text-emerald-500 font-black text-xs mt-1">[01]</span>
                                <div>
                                    <div class="text-xs font-black uppercase text-white">Fast_Response</div>
                                    <div class="text-[10px] text-gray-500 mt-1 leading-relaxed font-medium">Fixing critical outages within SLA windows.</div>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <span class="text-emerald-500 font-black text-xs mt-1">[02]</span>
                                <div>
                                    <div class="text-xs font-black uppercase text-white">Data_Integrity</div>
                                    <div class="text-[10px] text-gray-500 mt-1 leading-relaxed font-medium">Ensuring zero data loss across infrastructure.</div>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <span class="text-emerald-500 font-black text-xs mt-1">[03]</span>
                                <div>
                                    <div class="text-xs font-black uppercase text-white">Team_Enabling</div>
                                    <div class="text-[10px] text-gray-500 mt-1 leading-relaxed font-medium">Empowering users through structured documentation.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="text-[10px] text-emerald-500 font-black uppercase tracking-[0.2em] mb-6">System_Telemetry</div>
                        <div class="space-y-6">
                            ${DATA.telemetry.map(t => `
                                <div>
                                    <div class="flex justify-between text-[8px] font-black uppercase mb-1">
                                        <span>${t.label}</span>
                                        <span class="text-emerald-500">${t.value}%</span>
                                    </div>
                                    <div class="telemetry-bar"><div class="telemetry-fill" style="width: ${t.value}%"></div></div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderServices() {
    return `
        <div class="max-w-7xl space-y-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                ${DATA.services.map(s => `
                    <div class="p-8 border border-gray-900 bg-surface/50 hover:border-emerald-500/50 transition-all group">
                        <div class="flex justify-between items-start mb-6">
                            <div class="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-emerald-500/20 group-hover:text-emerald-500 transition-colors">
                                <i data-lucide="zap" class="w-5 h-5"></i>
                            </div>
                            <div class="status-tag">${s.status}</div>
                        </div>
                        <h3 class="text-sm font-black text-white uppercase mb-4 leading-tight">${s.title}</h3>
                        <ul class="space-y-2">
                            ${s.items.map(item => `
                                <li class="text-[10px] text-gray-500 flex gap-2">
                                    <span class="text-emerald-500 font-black">+</span> ${item}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>

            <div class="pt-10 border-t border-gray-900">
                <div class="text-[10px] text-emerald-500 font-black uppercase tracking-widest mb-6">Development_Capabilities</div>
                <div class="flex flex-wrap gap-3">
                    ${DATA.capabilities.map(cap => `
                        <div class="px-4 py-2 border border-gray-800 bg-surface text-[10px] font-bold text-gray-400 uppercase hover:text-white hover:border-emerald-500 transition-all cursor-default">
                            ${cap}
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="pt-10">
                <h2 class="text-2xl font-black uppercase text-white tracking-widest">04_Incident_Resolutions</h2>
                <div class="h-[1px] bg-gray-900 w-full mt-4"></div>
            </div>
        </div>
    `;
}

function renderIncidents() {
    return `<div class="text-center py-20 text-gray-600 uppercase font-black tracking-widest">Loading_Historic_Logs...</div>`;
}

function renderKnowledge() {
    return `<div class="text-center py-20 text-gray-600 uppercase font-black tracking-widest">Accessing_Verified_Certs...</div>`;
}

function renderContact() {
    return `<div class="text-center py-20 text-gray-600 uppercase font-black tracking-widest">Establishing_Secure_Link...</div>`;
}

// Start
window.addEventListener('DOMContentLoaded', () => {
    startUptime();
    mountModule('hero');
});
