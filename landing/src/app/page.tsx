'use client';

import { useEffect, useState } from 'react';

// Shooting Stars Component for ISS-like effects
function ShootingStars() {
  const [stars, setStars] = useState<Array<{ id: number, delay: number, top: string, left: string }>>([]);

  useEffect(() => {
    // Generate shooting stars with random positions and delays
    const generateStars = () => {
      const newStars = Array.from({ length: 3 }, (_, i) => ({
        id: i,
        delay: Math.random() * 15 + 5, // Random delay between 5-20 seconds
        top: Math.random() * 60 + '%', // Random vertical position
        left: Math.random() * 40 + '%', // Random horizontal position
      }));
      setStars(newStars);
    };

    generateStars();
    // Regenerate stars periodically for variety
    const interval = setInterval(generateStars, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {stars.map(star => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            '--delay': star.delay,
            top: star.top,
            left: star.left,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
}

// Ultra-Dense Micro Stars Component
function UltraDenseStars() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
      style={{
        backgroundImage: `
             radial-gradient(0.8px 0.8px at 10px 10px, #ffffff, transparent),
             radial-gradient(0.6px 0.6px at 50px 30px, #f0f8ff, transparent),
             radial-gradient(0.8px 0.8px at 90px 70px, #ffffff, transparent),
             radial-gradient(0.6px 0.6px at 130px 50px, #ffefd5, transparent),
             radial-gradient(0.8px 0.8px at 170px 90px, #ffffff, transparent),
             radial-gradient(0.6px 0.6px at 210px 30px, #f0f8ff, transparent),
             radial-gradient(0.8px 0.8px at 250px 110px, #ffffff, transparent),
             radial-gradient(0.6px 0.6px at 290px 70px, #ffefd5, transparent),
             radial-gradient(0.8px 0.8px at 330px 130px, #ffffff, transparent),
             radial-gradient(0.6px 0.6px at 370px 50px, #f0f8ff, transparent),
             radial-gradient(0.8px 0.8px at 410px 150px, #ffffff, transparent),
             radial-gradient(0.6px 0.6px at 450px 90px, #ffefd5, transparent),
             radial-gradient(0.8px 0.8px at 490px 170px, #ffffff, transparent),
             radial-gradient(0.6px 0.6px at 530px 110px, #f0f8ff, transparent),
             radial-gradient(0.8px 0.8px at 570px 190px, #ffffff, transparent),
             radial-gradient(0.6px 0.6px at 610px 130px, #ffefd5, transparent),
             radial-gradient(0.8px 0.8px at 25px 200px, #ffffff, transparent),
             radial-gradient(0.6px 0.6px at 65px 180px, #f0f8ff, transparent),
             radial-gradient(0.8px 0.8px at 105px 220px, #ffffff, transparent),
             radial-gradient(0.6px 0.6px at 145px 200px, #ffefd5, transparent),
             radial-gradient(0.8px 0.8px at 185px 240px, #ffffff, transparent),
             radial-gradient(0.6px 0.6px at 225px 220px, #f0f8ff, transparent),
             radial-gradient(0.8px 0.8px at 265px 260px, #ffffff, transparent),
             radial-gradient(0.6px 0.6px at 305px 240px, #ffefd5, transparent),
             radial-gradient(0.8px 0.8px at 345px 280px, #ffffff, transparent),
             radial-gradient(0.6px 0.6px at 385px 260px, #f0f8ff, transparent),
             radial-gradient(0.8px 0.8px at 425px 300px, #ffffff, transparent),
             radial-gradient(0.6px 0.6px at 465px 280px, #ffefd5, transparent),
             radial-gradient(0.8px 0.8px at 505px 320px, #ffffff, transparent),
             radial-gradient(0.6px 0.6px at 545px 300px, #f0f8ff, transparent),
             radial-gradient(0.8px 0.8px at 585px 340px, #ffffff, transparent),
             radial-gradient(0.6px 0.6px at 625px 320px, #ffefd5, transparent)
           `,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 150px',
        opacity: 0.3,
        animation: 'ultra-dense-drift 160s linear infinite'
      }}>
    </div>
  );
}

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);

  const bootSequence = [
    "System initialization...",
    "Loading core modules... [OK]",
    "Establishing connections... [CONNECTED]",
    "Starting application services... [READY]",
    "Performing system checks... [PASSED]",
    "Loading user interface... [COMPLETE]",
    "Preparing platform...",
    "",
    "Welcome to PLATONAUTAS v2.0.24"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine(prev => {
        if (prev < bootSequence.length - 1) {
          return prev + 1;
        } else {
          setTimeout(() => setBootComplete(true), 1000);
          clearInterval(timer);
          return prev;
        }
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  if (!bootComplete) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center screen-flicker transmission-interference">
        {/* Enhanced Parallax Starfield Layers */}
        <div className="starfield-layer starfield-mid"></div>
        <div className="starfield-layer starfield-twinkle"></div>
        <UltraDenseStars />
        <ShootingStars />
        <div className="spacecraft-monitor max-w-2xl w-full mx-2 sm:mx-4">
          <div className="monitor-header">
            <span>PLATONAUTAS://SYSTEM_STARTUP</span>
          </div>
          <div className="p-3 sm:p-6 min-h-[250px] sm:min-h-[300px]">
            {bootSequence.slice(0, currentLine + 1).map((line, index) => (
              <div key={index} className="mb-2">
                {line && <span className="text-[#94a3b8]">SYSTEM&gt; </span>}
                <span className="text-[#4ade80]">{line}</span>
                {index === currentLine && <span className="typing-cursor"></span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black transmission-interference screen-flicker">
      {/* Enhanced Parallax Starfield Layers */}
      <div className="starfield-layer starfield-mid"></div>
      <div className="starfield-layer starfield-twinkle"></div>
      <UltraDenseStars />
      <ShootingStars />
      {/* Mission Control Navigation */}
      <nav className="border-b-2 border-[#4ade80] bg-black">
        <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg sm:text-xl font-bold">
              <span className="text-[#94a3b8]">USER@</span>
              <span className="text-[#4ade80]">PLATONAUTAS</span>
              <span className="text-[#94a3b8]">:/home$</span>
            </div>
            <div className="hidden sm:flex space-x-4 md:space-x-8">
              <a href="#systems" className="text-[#3b82f6] hover:text-[#f97316] transition-colors">
                Features
              </a>
              <a href="#mission" className="text-[#3b82f6] hover:text-[#f97316] transition-colors">
                About
              </a>
              <a href="#communications" className="text-[#3b82f6] hover:text-[#f97316] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mission Control Terminal */}
      <section className="container mx-auto px-3 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="spacecraft-monitor mb-6 sm:mb-8">
            <div className="monitor-header">
              <span className="text-xs sm:text-sm">PLATONAUTAS://WELCOME</span>
            </div>
            <div className="p-4 sm:p-8">
              <div className="mb-6">
                <div className="text-[#94a3b8] mb-2">SYSTEM&gt; cat welcome.txt</div>
                <div className="mb-4">
                  <pre className="text-sm sm:text-lg md:text-2xl text-[#f97316] mb-4 overflow-x-auto">
                    {`
    🚀 PLATONAUTAS PLATFORM 🚀
    ===========================
           
      Innovation & Technology Hub
      Status: ACTIVE
      Access Level: OPEN
           
    [ Ready for Launch... ]
`}
                  </pre>
                </div>
                <div className="text-[#3b82f6] text-sm sm:text-lg mb-6">
                  INFO&gt; Your journey to digital innovation starts here
                </div>
                <div className="text-[#94a3b8] mb-4">
                  Join thousands of innovators and creators building<br />
                  breakthrough solutions and transforming ideas into reality.
                </div>
              </div>

              <div className="mb-4">
                <div className="text-[#94a3b8]">SYSTEM&gt; ls /available/actions/</div>
                <div className="text-[#22c55e] text-sm mb-2">
                  get_started.exe    explore_features.pdf    join_community.dat
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="mission-control-btn primary text-sm sm:text-base">
                  Get Started
                </button>
                <button className="mission-control-btn nav text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="systems" className="py-8 sm:py-12">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="spacecraft-monitor max-w-6xl mx-auto">
            <div className="monitor-header">
              <span className="text-xs sm:text-sm">PLATONAUTAS://FEATURES</span>
            </div>
            <div className="p-4 sm:p-8">
              <div className="mb-6">
                <div className="text-[#94a3b8] mb-4">SYSTEM&gt; show platform_features</div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="p-4 sm:p-6 bg-transparent">
                  <div className="mb-4">
                    <div className="text-[#4ade80] font-bold mb-2">
                      ● High Performance
                    </div>
                    <div className="text-[#22c55e] mb-2">[ACTIVE] running</div>
                  </div>
                  <div className="text-[#94a3b8] mb-4">
                    ┌─ FAST_PROCESSING<br />
                    ├─ optimized_infrastructure: enabled<br />
                    ├─ modern_algorithms: active<br />
                    └─ response_time: &lt;100ms
                  </div>
                  <div className="text-[#22c55e] text-sm">
                    // Experience fast, reliable performance with our<br />
                    // optimized infrastructure and modern technology stack.
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-transparent">
                  <div className="mb-4">
                    <div className="text-[#4ade80] font-bold mb-2">
                      ● Secure & Reliable
                    </div>
                    <div className="text-[#22c55e] mb-2">[ACTIVE] running</div>
                  </div>
                  <div className="text-[#94a3b8] mb-4">
                    ┌─ SECURITY_PROTOCOLS<br />
                    ├─ encryption: AES-256<br />
                    ├─ uptime: 99.9%<br />
                    └─ monitoring: enabled
                  </div>
                  <div className="text-[#22c55e] text-sm">
                    // Built with security-first principles and<br />
                    // 99.9% uptime guarantee to keep your data safe.
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-transparent">
                  <div className="mb-4">
                    <div className="text-[#4ade80] font-bold mb-2">
                      ● Active Community
                    </div>
                    <div className="text-[#22c55e] mb-2">[ACTIVE] running</div>
                  </div>
                  <div className="text-[#94a3b8] mb-4">
                    ┌─ COMMUNITY_STATS<br />
                    ├─ active_users: 12,847<br />
                    ├─ projects_launched: 3,291<br />
                    └─ collaboration: high
                  </div>
                  <div className="text-[#22c55e] text-sm">
                    // Join thousands of developers and innovators<br />
                    // in our vibrant community of builders.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execute Mission */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="terminal-window max-w-4xl mx-auto">
            <div className="terminal-header">
              <span className="text-xs sm:text-sm">PLATONAUTAS://GET_STARTED</span>
            </div>
            <div className="p-4 sm:p-8 text-center">
              <div className="mb-6">
                <div className="text-[#94a3b8] mb-4">$ ./initialize_mission.sh --target=innovation</div>
                <div className="text-[#f97316] text-xl sm:text-2xl md:text-4xl font-bold mb-4">
                  READY TO START BUILDING?
                </div>
                <div className="text-[#22c55e] text-sm sm:text-lg mb-6">
                  Join 12,847 active developers building the future
                </div>
              </div>
              <button className="mission-control-btn text-sm sm:text-lg lg:text-xl">
                Join Platform
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t-2 border-[#4ade80] bg-black py-6 sm:py-8">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="mb-4">
                <div className="text-[#94a3b8]">$ cat /platform/info</div>
                <div className="text-[#4ade80] font-bold mb-2">PLATONAUTAS</div>
                <div className="text-[#94a3b8] text-sm">
                  Version: 2.0.24<br />
                  Build: stable<br />
                  Platform: web
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <div className="text-[#94a3b8]">$ ls /quick_links/</div>
                <div className="space-y-1 mt-2">
                  <div><a href="#systems" className="text-[#3b82f6] hover:text-[#f97316] transition-colors">Features</a></div>
                  <div><a href="#mission" className="text-[#3b82f6] hover:text-[#f97316] transition-colors">About</a></div>
                  <div><a href="#contact" className="text-[#3b82f6] hover:text-[#f97316] transition-colors">Contact</a></div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <div className="text-[#94a3b8]">$ cat /contact/info</div>
                <div className="mt-2 space-y-1">
                  <div className="text-[#22c55e]">Email: hello@platonautas.com</div>
                  <div className="text-[#22c55e]">Phone: +1 (555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#475569] mt-8 pt-4 text-center">
            <div className="text-[#94a3b8] text-sm">
              © 2024 PLATONAUTAS. ALL RIGHTS RESERVED. | UPTIME: 99.9% | STATUS: ONLINE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
