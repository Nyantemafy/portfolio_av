/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Layout, 
  Cpu, 
  Music, 
  User,
  ChevronRight,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  X,
  FileText,
  Video,
  ClipboardList,
  Facebook,
  Instagram,
  MessageSquare
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
interface Project {
  title: string;
  period: string;
  description: string;
  role: string;
  tags: string[];
  image: string;
}

interface Tool {
  name: string;
  icon: string;
}

interface Demo {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  icon: React.ReactNode;
  image: string;
  details: {
    context: string;
    content: React.ReactNode;
    tools: string[];
  };
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "CUA (Gestion Publicitaire)",
    period: "Juillet 2025 - Janvier 2026",
    description: "Conception d’une application de gestion de panneaux publicitaires. Création de maquettes et design visuel avec Figma et Canva. Conception de bases de données et rédaction de cahier des charges.",
    role: "Développeuse Freelance",
    tags: ["Figma", "Canva", "Base de données", "Gestion de projet"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Massage by mi",
    period: "Février 2026 - Mars 2026",
    description: "Application de gestion d'employés. Réalisation complète en solo : planification, relation client, conception logique et maquettes, développement et déploiement.",
    role: "Développeuse Freelance",
    tags: ["Fullstack", "UI/UX", "Gestion d'employés", "Déploiement"],
    image: "https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&q=80&w=800"
  }
];

const TOOLS_DIGITAL: Tool[] = [
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
  { name: "Canva", icon: "https://cdn.simpleicons.org/canva" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion" },
  { name: "PowerPoint", icon: "https://cdn.simpleicons.org/microsoftpowerpoint" },
  { name: "Google Sheets", icon: "https://cdn.simpleicons.org/googlesheets" },
  { name: "Google Calendar", icon: "https://cdn.simpleicons.org/googlecalendar" },
  { name: "CapCut", icon: "https://cdn.simpleicons.org/capcut" },
  { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai" },
  { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic" },
  { name: "Gemini", icon: "https://cdn.simpleicons.org/google" },
  { name: "DeepSeek", icon: "https://cdn.simpleicons.org/deepseek" },
  { name: "Copilot", icon: "https://cdn.simpleicons.org/microsoft" }
];

const SOCIAL_MEDIA: Tool[] = [
  { name: "LinkedIn", icon: "https://cdn.simpleicons.org/linkedin" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
  { name: "Facebook", icon: "https://cdn.simpleicons.org/facebook" },
  { name: "Instagram", icon: "https://cdn.simpleicons.org/instagram" },
  { name: "TikTok", icon: "https://cdn.simpleicons.org/tiktok" },
  { name: "Snapchat", icon: "https://cdn.simpleicons.org/snapchat" },
  { name: "Pinterest", icon: "https://cdn.simpleicons.org/pinterest" }
];

const EDUCATION = [
  {
    title: "Licence Informatique (en cours)",
    institution: "IT University",
    period: "Présent"
  },
  {
    title: "Baccalauréat Série D (Assez Bien)",
    institution: "Lycée Privée Aladin Majunga",
    period: "2021-2022"
  },
  {
    title: "Delf B1",
    institution: "Alliance Française Majunga",
    period: "2021-2022"
  },
  {
    title: "Delf A1, A2",
    institution: "Alliance Française Antananarivo",
    period: "2012-2013"
  },
  {
    title: "Présidente RHI Majunga",
    institution: "Lycée Privé Aladin Majunga",
    period: "2021-2022 (Leadership & Anti-corruption)"
  }
];

const DEMOS: Demo[] = [
  {
    id: "redaction",
    title: "Rédaction de Contenu & Marketing",
    category: "Marketing Digital",
    shortDesc: "Descriptions d'objets et stratégies d'acquisition client.",
    icon: <FileText size={24} />,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
    details: {
      context: "Démonstration de rédaction persuasive et descriptive pour le web.",
      tools: ["Google Docs", "ChatGPT", "Canva"],
      content: (
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h4 className="font-bold text-brand-primary mb-2">1. Description d'Objet (L'Œuvre)</h4>
            <p className="text-sm text-gray-600 italic mb-3">Exemple de description captivante pour un objet d'art ou de design.</p>
            <p className="text-sm leading-relaxed">
              "Plus qu'un simple objet, cette pièce incarne l'équilibre parfait entre la matière brute et la finesse artisanale. 
              Chaque courbe raconte une histoire, chaque reflet invite à la contemplation. Un ajout intemporel pour un intérieur qui a du caractère."
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h4 className="font-bold text-brand-primary mb-2">2. Stratégie d'Agence (Attraction Client)</h4>
            <p className="text-sm text-gray-600 italic mb-3">Structure marketing pour attirer de nouveaux prospects.</p>
            <ul className="text-sm space-y-2 list-disc pl-5">
              <li>Accroche : "Votre visibilité mérite une expertise qui vous ressemble."</li>
              <li>Problématique : "Pourquoi 80% des entreprises échouent à convertir leur audience ?"</li>
              <li>Solution : "Une approche centrée sur l'humain et optimisée par l'IA."</li>
              <li>Appel à l'action : "Réservez votre audit gratuit dès aujourd'hui."</li>
            </ul>
          </div>
        </div>
      )
    }
  },
  {
    id: "transcription",
    title: "Transcription Vidéo Optimisée",
    category: "Assistance Virtuelle",
    shortDesc: "Transformation de contenus audio/vidéo en documents structurés.",
    icon: <Video size={24} />,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    details: {
      context: "Démonstration de la valeur ajoutée par une transcription intelligente et organisée.",
      tools: ["CapCut", "Google Docs", "Notion"],
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-red-50 rounded-lg border border-red-100">
              <h5 className="text-xs font-bold text-red-800 mb-2">AVANT (Brut)</h5>
              <p className="text-[10px] text-gray-500 leading-tight">
                "euh alors on va parler de la gestion de projet euh c'est important de savoir que euh y'a plusieurs étapes d'abord on planifie puis on fait le truc et voilà..."
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border border-green-100">
              <h5 className="text-xs font-bold text-green-800 mb-2">APRÈS (Optimisé)</h5>
              <p className="text-[10px] text-gray-700 leading-tight font-medium">
                <strong>Gestion de Projet : Les Étapes Clés</strong><br/>
                1. Planification stratégique<br/>
                2. Exécution opérationnelle<br/>
                3. Suivi et ajustements
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-brand-primary">Valeur Ajoutée</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                <span><strong>Organisation :</strong> Ponctuation parfaite, paragraphes aérés et bullet points pour une lecture rapide.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                <span><strong>Clarté :</strong> Suppression des tics de langage et reformulation pour un ton professionnel.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  },
  {
    id: "notion",
    title: "Organisation Notion & Suivi",
    category: "Productivité",
    shortDesc: "To-do lists, mise en forme de documents et tableaux de bord.",
    icon: <ClipboardList size={24} />,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    details: {
      context: "Mise en place de systèmes d'organisation pour particuliers et entreprises.",
      tools: ["Notion", "Google Calendar", "Trello"],
      content: (
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h4 className="font-bold text-brand-primary mb-3">Exemples de Réalisations</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-brand-secondary rounded flex items-center justify-center text-brand-primary">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold">To-Do List Intelligente</p>
                  <p className="text-[10px] text-gray-500">Priorisation par urgence et importance (Matrice d'Eisenhower).</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-brand-secondary rounded flex items-center justify-center text-brand-primary">
                  <Layout size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold">Mise en forme de Documents</p>
                  <p className="text-[10px] text-gray-500">Structuration de rapports complexes avec sommaires interactifs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
];

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-serif font-bold text-brand-primary"
        >
          L'Atelier Digital
        </motion.div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {['Accueil', 'Projets', 'Démos', 'Outils', 'À propos'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-primary transition-colors">
              {item}
            </a>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg shadow-brand-primary/20"
        >
          Me Contacter
        </motion.button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-secondary text-brand-primary text-xs font-bold mb-6">
            Assistante Virtuelle & Développeuse
          </span>
          <h1 className="text-6xl md:text-7xl font-serif leading-tight mb-6">
            Concevoir des <span className="text-brand-primary italic">Systèmes</span> <br />
            avec <span className="font-light">Cœur</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            Je fais le pont entre l'expression créative et la rigueur technique. 
            Ancienne slameuse devenue danseuse et développeuse, je bâtis les fondations digitales de votre vision.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="bg-brand-primary text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2"
            >
              Explorer mon travail <ArrowRight size={18} />
            </motion.button>
            <button className="px-8 py-4 rounded-xl border border-gray-200 font-medium hover:bg-gray-50 transition-colors">
              Voir mon CV
            </button>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
              alt="Profil Professionnel"
              className="rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 w-48 h-48 rounded-3xl overflow-hidden shadow-xl border-8 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" 
                alt="Côté Créatif"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-secondary/30 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

const Profile = () => {
  return (
    <section id="à-propos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Profil Professionnel</h2>
          <p className="text-gray-500 italic">Organisée. Proactive. Leadership.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-2 p-10 rounded-3xl bg-gray-50 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6 text-brand-primary">
              <Sparkles size={24} />
              <h3 className="text-2xl font-serif">Ma Philosophie</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              En tant qu'assistante virtuelle et développeuse, je ne me contente pas d'exécuter des tâches ; j'optimise des écosystèmes. 
              Mon expertise en outils digitaux et IA me permet d'automatiser le quotidien pour se concentrer sur l'essentiel. 
              Je m'épanouis à l'intersection de l'organisation et de l'innovation, garantissant que chaque projet est mené avec précision et passion.
            </p>
          </motion.div>

          <div className="bg-brand-primary p-10 rounded-3xl text-white flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 size={24} />
              <h3 className="text-2xl font-serif">Atouts</h3>
            </div>
            <ul className="space-y-4 text-brand-secondary">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                Rigueur Structurelle
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                Solutions Proactives
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                Leadership Empathique
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="projets" className="py-24 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-serif mb-4">Expériences Clés</h2>
          <p className="text-gray-500">Transformer des besoins complexes en solutions élégantes.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-video mb-6 bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-primary font-bold mb-2 block">
                    {project.role}
                  </span>
                  <h3 className="text-2xl font-serif group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span className="text-xs text-gray-400 font-mono">{project.period}</span>
              </div>
              <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white border border-gray-100 rounded-full text-[10px] font-medium text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Demos = () => {
  const [selectedDemo, setSelectedDemo] = useState<Demo | null>(null);

  return (
    <section id="démos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Mes Démos</h2>
          <p className="text-gray-500">Aperçu concret de mes compétences en action.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {DEMOS.map((demo) => (
            <motion.div
              key={demo.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedDemo(demo)}
              className="group cursor-pointer bg-gray-50 rounded-3xl overflow-hidden border border-gray-100"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={demo.image} 
                  alt={demo.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-colors" />
                <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur rounded-xl text-brand-primary shadow-sm">
                  {demo.icon}
                </div>
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-widest text-brand-primary font-bold mb-2 block">
                  {demo.category}
                </span>
                <h3 className="text-xl font-serif mb-2 group-hover:text-brand-primary transition-colors">{demo.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{demo.shortDesc}</p>
                <div className="flex items-center gap-2 text-brand-primary text-xs font-bold">
                  Voir les détails <ChevronRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedDemo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDemo(null)}
              className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedDemo(null)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X size={24} />
              </button>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-brand-secondary rounded-2xl text-brand-primary">
                    {selectedDemo.icon}
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-brand-primary font-bold">
                      {selectedDemo.category}
                    </span>
                    <h3 className="text-3xl font-serif">{selectedDemo.title}</h3>
                  </div>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-600 mb-6">{selectedDemo.details.context}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedDemo.details.tools.map(tool => (
                      <span key={tool} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-medium text-gray-500">
                        {tool}
                      </span>
                    ))}
                  </div>
                  {selectedDemo.details.content}
                </div>

                <button 
                  onClick={() => setSelectedDemo(null)}
                  className="w-full py-4 bg-brand-primary text-white rounded-2xl font-bold hover:bg-brand-primary/90 transition-colors"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Toolkit = () => {
  return (
    <section id="outils" className="py-24 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-serif mb-4">Outils Digitaux & IA</h2>
              <p className="text-gray-500">Maîtrise technique pour une productivité décuplée.</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {TOOLS_DIGITAL.map((tool, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white rounded-2xl border border-gray-100 flex flex-col items-center gap-3 shadow-sm"
                >
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="w-8 h-8 object-contain" 
                    style={{ filter: 'sepia(100%) hue-rotate(320deg) saturate(150%) brightness(60%) contrast(100%)' }}
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-[10px] font-bold text-gray-600 text-center">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-serif mb-4">Réseaux Sociaux & Liens</h2>
              <p className="text-gray-500">Présence digitale et collaboration.</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {SOCIAL_MEDIA.map((social, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white rounded-2xl border border-gray-100 flex flex-col items-center gap-3 shadow-sm"
                >
                  <img 
                    src={social.icon} 
                    alt={social.name} 
                    className="w-8 h-8 object-contain" 
                    style={{ filter: 'sepia(100%) hue-rotate(320deg) saturate(150%) brightness(60%) contrast(100%)' }}
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-[10px] font-bold text-gray-600 text-center">{social.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-serif mb-4">Éducation</h2>
          <p className="text-gray-500">Fondations académiques et certifications.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {EDUCATION.map((edu, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm"
            >
              <GraduationCap className="text-brand-primary mb-4" size={24} />
              <h3 className="text-xl font-serif mb-2">{edu.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{edu.institution}</p>
              <span className="text-xs text-gray-400 font-mono">{edu.period}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArtisticSide = () => {
  return (
    <section className="py-24 bg-[#FDFCFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative z-10"
            >
              <div className="aspect-square rounded-full overflow-hidden border-[16px] border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1000" 
                  alt="Danse & Slam"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-red-100 text-red-800 p-6 rounded-3xl shadow-xl max-w-[200px]"
              >
                <p className="text-sm font-serif italic">"Le rythme est une autre forme de code."</p>
              </motion.div>
            </motion.div>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-brand-primary font-bold mb-4 block">Au-delà de l'écran</span>
            <h2 className="text-5xl font-serif mb-8">Danseuse & Slameuse (2018-2019)</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              La discipline de la piste de danse se traduit directement dans la structure de mon code. 
              Chaque mouvement demande de la précision, chaque séquence demande de la fluidité. 
              <br /><br />
              Mon parcours de slameuse à l'Alliance Française m'a appris que la communication est une question de résonance. 
              J'apporte cette capacité narrative à la documentation technique et à la gestion de projet, 
              rendant les idées complexes plus humaines.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-serif text-brand-primary mb-1">10+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Performances</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-brand-primary mb-1">100%</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Rigueur Créative</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-xl font-serif font-bold text-brand-primary mb-2">L'Atelier Digital</div>
          <p className="text-xs text-gray-400">© 2026 Portfolio. Créé avec intention.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Github size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Demos />
        <Toolkit />
        <Education />
        <ArtisticSide />
      </main>
      <Footer />
    </div>
  );
}
