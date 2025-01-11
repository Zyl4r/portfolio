import React, { useRef, useState } from 'react';
import { Clock, Rocket, Code, Wrench, Twitter, Youtube, Github, Mail, MessageSquare } from 'lucide-react';

// Translation object
const translations = {
  'en-US': {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    services: 'Services',
    contact: 'Contact',
    role: 'LuaU Developer',
    aboutText: "I'm a passionate LuaU developer with extensive experience in creating robust and efficient solutions within the Roblox ecosystem. My journey in programming began with LuaU, and I've spent the last five years honing my skills in full-stack development. I specialize in crafting custom systems and solutions that help bring ideas to life through clean, maintainable code.",
    contactCTA: "Interested? Hit me up and let's talk!",
    discordCopied: 'Discord username copied to clipboard!',
    experienceTitle: 'Experience',
    projectsTitle: 'Projects'
  },
  'pt-BR': {
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    services: 'Serviços',
    contact: 'Contato',
    role: 'Desenvolvedor LuaU',
    aboutText: 'Sou um desenvolvedor LuaU apaixonado com vasta experiência na criação de soluções robustas e eficientes no ecossistema Roblox. Minha jornada na programação começou com LuaU, e passei os últimos cinco anos aperfeiçoando minhas habilidades em desenvolvimento full-stack. Sou especializado em criar sistemas e soluções personalizadas que ajudam a dar vida a ideias através de código limpo e sustentável.',
    contactCTA: 'Interessado? Entre em contato e vamos conversar!',
    discordCopied: 'Nome de usuário do Discord copiado!',
    experienceTitle: 'Experiência',
    projectsTitle: 'Projetos'
  }
};

function App() {
  const [language, setLanguage] = useState<'en-US' | 'pt-BR'>('en-US');
  const t = translations[language];

  // Refs for scroll functionality
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(t.discordCopied);
  };

  const navItems = [
    { name: t.about, ref: aboutRef },
    { name: t.experience, ref: experienceRef },
    { name: t.projects, ref: projectsRef },
    { name: t.services, ref: servicesRef },
    { name: t.contact, ref: contactRef },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Zylar
            </span>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.ref)}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setLanguage(language === 'en-US' ? 'pt-BR' : 'en-US')}
                className="flex items-center justify-center px-3 py-1 rounded-md bg-gray-950/80 border border-purple-900 hover:border-purple-700 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              >
                {language === 'en-US' ? '🇺🇸' : '🇧🇷'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-cyan-600/10 to-purple-600/10 blur-3xl"></div>
          <div className="absolute -inset-2 bg-gray-950 opacity-80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">
              <span className="animate-pulse bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]">
                Zylar
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-8 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">{t.role}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Me Section */}
        <div ref={aboutRef} className="mb-16">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">{t.about}</h2>
          <div className="p-6 bg-gray-950/80 backdrop-blur-sm rounded-lg border border-purple-900 hover:border-purple-700 transition-colors hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            <p className="text-gray-300 leading-relaxed">
              {t.aboutText}
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div ref={experienceRef} className="mb-16">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">{t.experienceTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-950/80 backdrop-blur-sm rounded-lg border border-purple-900 hover:border-purple-700 transition-colors hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-cyan-400 mr-2" />
                <h3 className="text-xl font-semibold text-gray-300">2019 - Present</h3>
              </div>
              <h4 className="text-lg font-medium text-purple-400 mb-2">Freelance Developer</h4>
              <p className="text-gray-300">Working on various projects for clients, specializing in game systems and custom solutions.</p>
            </div>
            <div className="p-6 bg-gray-950/80 backdrop-blur-sm rounded-lg border border-purple-900 hover:border-purple-700 transition-colors hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]">
              <div className="flex items-center mb-4">
                <Rocket className="w-6 h-6 text-cyan-400 mr-2" />
                <h3 className="text-xl font-semibold text-gray-300">2020 - Present</h3>
              </div>
              <h4 className="text-lg font-medium text-purple-400 mb-2">Independent Developer</h4>
              <p className="text-gray-300">Creating and maintaining personal projects, focusing on innovative game mechanics and systems.</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div ref={projectsRef} className="mb-16">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">{t.projectsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-950/80 backdrop-blur-sm rounded-lg border border-purple-900 hover:border-purple-700 transition-colors hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-cyan-400 mr-2" />
                <h3 className="text-xl font-semibold text-gray-300">Custom Framework</h3>
              </div>
              <p className="text-gray-300 mb-4">A lightweight game framework built with LuaU, focusing on performance and ease of use.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300">LuaU</span>
                <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300">Game Development</span>
              </div>
            </div>
            <div className="p-6 bg-gray-950/80 backdrop-blur-sm rounded-lg border border-purple-900 hover:border-purple-700 transition-colors hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]">
              <div className="flex items-center mb-4">
                <Wrench className="w-6 h-6 text-cyan-400 mr-2" />
                <h3 className="text-xl font-semibold text-gray-300">Game Systems</h3>
              </div>
              <p className="text-gray-300 mb-4">Collection of reusable game systems and mechanics for various projects.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300">Systems Design</span>
                <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300">Architecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div ref={servicesRef} className="mb-16">
          {/* Services content remains the same */}
        </div>

        {/* Contact Section */}
        <div ref={contactRef} className="mb-16">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">{t.contact}</h2>
          <p className="text-xl text-gray-300 mb-8 text-center">{t.contactCTA}</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <a
              href="https://twitter.com/zylarcore"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-950/80 border border-purple-900 hover:border-purple-700 transition-colors hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
            >
              <Twitter className="w-6 h-6 text-cyan-400" />
            </a>
            <a
              href="https://youtube.com/@ZylarCore"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-950/80 border border-purple-900 hover:border-purple-700 transition-colors hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
            >
              <Youtube className="w-6 h-6 text-cyan-400" />
            </a>
            <a
              href="https://github.com/Zyl4r"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-950/80 border border-purple-900 hover:border-purple-700 transition-colors hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
            >
              <Github className="w-6 h-6 text-cyan-400" />
            </a>
            <a
              href="mailto:zylarcore@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-950/80 border border-purple-900 hover:border-purple-700 transition-colors hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
            >
              <Mail className="w-6 h-6 text-cyan-400" />
            </a>
            <button
              onClick={() => copyToClipboard('zyl4rcore')}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-950/80 border border-purple-900 hover:border-purple-700 transition-colors hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
            >
              <MessageSquare className="w-6 h-6 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;