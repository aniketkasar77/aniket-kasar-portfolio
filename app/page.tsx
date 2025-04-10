import Image from "next/image";
import AnimatedBackground from './components/AnimatedBackground'
import AnimatedTypingText from './components/AnimatedTypingText'
import FloatingCards from './components/FloatingCards'
import ProjectCard3D from './components/ProjectCard3D'
import { HiCode, HiDesktopComputer, HiDeviceMobile, HiLightningBolt, HiCog, HiServer, HiChip, HiTerminal } from 'react-icons/hi'

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="home" className="min-h-screen pt-20 pb-12 flex flex-col justify-center relative">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
            <div className="md:w-1/2 z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Hi 👋, I'm <span className="text-gradient">Aniket Kasar</span>
              </h1>
              <AnimatedTypingText 
                texts={["Flutter Developer", "Mobile App Expert", "UI/UX Enthusiast", "FlutterFlow Specialist"]} 
                typingSpeed={80} 
              />
              <p className="text-secondary-light mt-6 mb-8 text-base sm:text-lg max-w-xl">
                I help businesses transform their ideas into high-quality mobile applications using 
                Flutter and FlutterFlow. With expertise in creating pixel-perfect UIs and seamless 
                experiences, I deliver solutions that exceed expectations.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="https://wa.me/919518791171" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-[#25D366] rounded-full text-white font-medium hover:bg-[#22c55e] transition-colors shadow-lg shadow-[#25D366]/20 flex items-center justify-center md:w-auto md:inline-flex w-full animate-float"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Less talks ? Lets talk 
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-4 bg-primary/10 border border-primary/30 rounded-full text-white font-medium hover:bg-primary/20 transition-colors flex items-center justify-center md:w-auto md:inline-flex w-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  View Projects
                </a>
              </div>
              <div className="flex items-center text-secondary-light text-sm gap-4">
                <span className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block mr-2 animate-pulse"></span>
                  Available for work
                </span>
                <span>|</span>
                <span>Based in India</span>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient rounded-full opacity-20 blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Aniket Kasar - Flutter Developer"
                    fill
                    style={{objectFit: "cover"}}
                    priority
                  />
                </div>
                <div className="absolute bottom-0 right-0 translate-y-1/2 flex items-center bg-green-500 px-3 py-1 rounded-full shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></div>
                  <span className="text-white text-sm font-medium">Available</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.me/919518791171" 
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 hover:bg-[#22c55e] transition-all hover:scale-110 z-50"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
        
        {/* About Section */}
        <section id="about" className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="card p-8 rounded-xl">
              <p className="text-lg mb-6 text-secondary-light">
                I love coding and turning ideas into real-world applications. As a Flutter and FlutterFlow developer,
                I bring creative designs to life with clean, efficient code.
              </p>
              <p className="text-lg mb-6 text-secondary-light">
                My focus is on creating high-performance mobile apps with user-friendly UI/UX, 
                developing apps with Firebase, APIs, and real-time databases, integrating AI-powered features, 
                and making responsive and scalable applications.
              </p>
              <p className="text-lg mb-6 text-secondary-light">
                I keep up with the latest trends in mobile development and AI to deliver the best solutions for my clients.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">Fast</div>
                  <div className="text-secondary-light">Development</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">Clean</div>
                  <div className="text-secondary-light">Code</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">Pixel</div>
                  <div className="text-secondary-light">Perfect UI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">AI</div>
                  <div className="text-secondary-light">Integration</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="py-16 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">My <span className="text-gradient">Skills</span></h2>
            <p className="text-secondary-light max-w-2xl mx-auto">Technologies I've mastered to build exceptional mobile applications</p>
          </div>
          
          <FloatingCards 
            skills={[
              {
                name: "Flutter",
                level: 95,
                levelName: "Expert",
                icon: HiDeviceMobile
              },
              {
                name: "FlutterFlow",
                level: 90,
                levelName: "Expert",
                icon: HiLightningBolt
              },
              {
                name: "Dart",
                level: 95,
                levelName: "Expert",
                icon: HiCode
              },
              {
                name: "Firebase",
                level: 85,
                levelName: "Advanced",
                icon: HiServer
              },
              {
                name: "UI/UX Design",
                level: 80,
                levelName: "Advanced",
                icon: HiDesktopComputer
              },
              {
                name: "State Management",
                level: 85,
                levelName: "Advanced",
                icon: HiCog
              },
              {
                name: "RESTful APIs",
                level: 80,
                levelName: "Advanced",
                icon: HiTerminal
              },
              {
                name: "CI/CD",
                level: 75,
                levelName: "Proficient",
                icon: HiChip
              }
            ]}
          />
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-16 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-secondary-light max-w-2xl mx-auto">Some of my best work showcasing my Flutter and FlutterFlow abilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard3D key={index} project={project} />
            ))}
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Let's <span className="text-gradient">Connect!</span>
            </h2>
            
            {/* Why Work With Me */}
            <div className="card p-4 sm:p-8 rounded-xl mb-6 sm:mb-10">
              <h3 className="text-2xl font-bold mb-6 sm:mb-8 text-center">Why Work With Me?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start bg-primary/5 p-3 sm:p-4 rounded-xl hover:bg-primary/10 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-1">Fast Development</h4>
                    <p className="text-secondary-light text-xs sm:text-sm">Quick turnaround times without compromising quality</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-primary/5 p-3 sm:p-4 rounded-xl hover:bg-primary/10 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-1">Clean Code</h4>
                    <p className="text-secondary-light text-xs sm:text-sm">Well-structured, maintainable code for long-term success</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-primary/5 p-3 sm:p-4 rounded-xl hover:bg-primary/10 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-1">Pixel-Perfect UI</h4>
                    <p className="text-secondary-light text-xs sm:text-sm">Attention to detail for visually stunning interfaces</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-primary/5 p-3 sm:p-4 rounded-xl hover:bg-primary/10 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-1">On-Time Delivery</h4>
                    <p className="text-secondary-light text-xs sm:text-sm">Meeting deadlines with reliable project management</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-primary/5 p-3 sm:p-4 rounded-xl hover:bg-primary/10 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-1">Clear Communication</h4>
                    <p className="text-secondary-light text-xs sm:text-sm">Transparent updates and responsive support</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-primary/5 p-3 sm:p-4 rounded-xl hover:bg-primary/10 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-1">AI Integration</h4>
                    <p className="text-secondary-light text-xs sm:text-sm">Creating smarter apps with cutting-edge AI capabilities</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 sm:mt-10 flex justify-center">
                <a 
                  href="https://wa.me/919518791171" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-8 py-3 sm:py-4 bg-[#25D366] rounded-full text-white font-semibold hover:bg-[#22c55e] transition-colors shadow-lg shadow-[#25D366]/20 flex items-center justify-center text-sm sm:text-base w-full sm:w-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="mr-2 sm:mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Transform Your App Idea Into Reality
                </a>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="card p-4 sm:p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 sm:mb-8 text-center">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Email */}
                <a 
                  href="mailto:infoaniketkasar@gmail.com" 
                  className="flex items-center p-3 sm:p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 sm:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold">Email</h4>
                    <p className="text-secondary-light text-xs sm:text-sm">infoaniketkasar@gmail.com</p>
                  </div>
                </a>
                
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/919518791171" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-3 sm:p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center mr-3 sm:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="h-5 w-5 sm:h-6 sm:w-6 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold">WhatsApp</h4>
                    <p className="text-secondary-light text-xs sm:text-sm">+91 95187 91171</p>
                  </div>
                </a>
                
                {/* GitHub */}
                <a 
                  href="https://github.com/aniketkasar77" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-3 sm:p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800/10 flex items-center justify-center mr-3 sm:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="h-5 w-5 sm:h-6 sm:w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold">GitHub</h4>
                    <p className="text-secondary-light text-xs sm:text-sm">github.com/aniketkasar77</p>
                  </div>
                </a>
                
                {/* Location */}
                <div className="flex items-center p-3 sm:p-4 rounded-xl bg-primary/5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500/10 flex items-center justify-center mr-3 sm:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-base sm:text-lg font-semibold">Location</h4>
                    <p className="text-secondary-light text-xs sm:text-sm">India</p>
                  </div>
                </div>
              </div>
              
              {/* Connect With Me */}
              <div className="mt-8 sm:mt-10">
                <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">Connect With Me</h4>
                <div className="flex justify-center space-x-3 sm:space-x-6">
                  <a 
                    href="https://linkedin.com/in/aniket-kasar" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0A66C2]/80 flex items-center justify-center text-white hover:bg-[#0A66C2] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/aniketkasar77" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://wa.me/919518791171" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:bg-[#22c55e] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-5 h-5 sm:w-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8 border-t border-slate-800">
          <div className="container mx-auto px-4 text-center">
            <div className="text-xl font-bold text-gradient mb-4">Aniket Kasar</div>
            <p className="text-secondary mb-6">Flutter &amp; FlutterFlow Developer</p>
            <div className="text-sm text-secondary-light">
              © {new Date().getFullYear()} All Rights Reserved
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

// Project Data
const projects = [
  {
    title: "E-Commerce Application",
    description: "A complete mobile shopping experience with product catalog, cart functionality, and secure payment processing.",
    image: "/profile-photo.jpg",
    tech: ["Flutter", "Firebase", "Stripe", "GetX"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Productivity app with task organization, reminders, and collaborative features for team projects.",
    image: "/profile-photo.jpg",
    tech: ["Flutter", "FlutterFlow", "Firestore", "Firebase Auth"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media Platform",
    description: "A fully-featured social platform with profiles, posts, comments, and real-time messaging.",
    image: "/profile-photo.jpg",
    tech: ["Flutter", "Firebase", "Cloud Functions", "Provider"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Fitness Tracker",
    description: "Health and fitness application with workout tracking, progress visualization, and personalized goals.",
    image: "/profile-photo.jpg",
    tech: ["Flutter", "Bloc", "SQLite", "Charts"],
    demoUrl: "#",
    githubUrl: "#"
  }
]
