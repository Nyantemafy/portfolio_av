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
import canvaIcon from '../assets/icone/canva-removebg-preview.png';
import powerpointIcon from '../assets/icone/powerpoint-removebg-preview.png';
import capcutIcon from '../assets/icone/capcut-removebg-preview.png';
import openAiIcon from '../assets/icone/openAI-removebg-preview.png';
import deepseekIcon from '../assets/icone/deepseek-removebg-preview.png';
import copilotIcon from '../assets/icone/copilote-removebg-preview.png';
import linkedinIcon from '../assets/icone/linkdin-removebg-preview.png';
import cuaExperienceImage from '../assets/experience/gestionPanneau.png';
import massageByMiExperienceImage from '../assets/experience/massagebymi1.png';
import marketingPosterImage from '../assets/marketingD/Marketing_poster.png';
import posterDesignImage from '../assets/marketingD/Poster_design.png';
import mainTranscriptionVideo from '../assets/Transcription/3D_TikTok_Video_The_scene_depicts_a_young_person_overwhelmed_by_d7VLbUyw.mp4';
import transcriptionAudioVideo from '../assets/Transcription/transcription_audio/FJV4P-w-.mp4';
import transcriptionCaptionsVideo from '../assets/Transcription/transcription_audio/AI captions - FJV4P-w-.mp4.mp4';
import transcriptionText from '../assets/Transcription/transcription_audio/FJV4P-w-.txt?raw';
import organisationEmailBefore from '../assets/organisation/email/1.png';
import organisationEmailLabels from '../assets/organisation/email/2.png';
import organisationEmailAfter from '../assets/organisation/email/3.png';
import organisationSheetBefore from '../assets/organisation/sheet/avant.png';
import organisationSheetAfter from '../assets/organisation/sheet/apres.png';
import organisationNotionOne from '../assets/organisation/notion/1.png';
import organisationNotionTwo from '../assets/organisation/notion/2.png';
import cvPdf from '../assets/cv/CVNyAntemaAssistant.pdf';
import profilePhoto from '../assets/photo/photo.jpeg';
import avatarPhoto from '../assets/photo/avatar.jpeg';

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

interface LightboxMedia {
  src: string;
  type: 'image' | 'video';
  title: string;
}

interface NavbarProps {
  onContactClick: () => void;
}

interface HeroProps {
  onContactClick: () => void;
  onCvClick: () => void;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "CUA (Gestion Publicitaire)",
    period: "Juillet 2025 - Janvier 2026",
    description: "Conception d’une application de gestion de panneaux publicitaires. Création de maquettes et design visuel avec Figma et Canva. Conception de bases de données et rédaction de cahier des charges.",
    role: "Développeuse Freelance",
    tags: ["Figma", "Canva", "Base de données", "Gestion de projet"],
    image: cuaExperienceImage
  },
  {
    title: "Massage by mi",
    period: "Février 2026 - Mars 2026",
    description: "Application de gestion d'employés. Réalisation complète en solo : planification, relation client, conception logique et maquettes, développement et déploiement.",
    role: "Développeuse Freelance",
    tags: ["Fullstack", "UI/UX", "Gestion d'employés", "Déploiement"],
    image: massageByMiExperienceImage
  }
];

const TOOLS_DIGITAL: Tool[] = [
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
  { name: "Canva", icon: canvaIcon },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion" },
  { name: "PowerPoint", icon: powerpointIcon },
  { name: "Google Sheets", icon: "https://cdn.simpleicons.org/googlesheets" },
  { name: "Google Calendar", icon: "https://cdn.simpleicons.org/googlecalendar" },
  { name: "CapCut", icon: capcutIcon },
  { name: "OpenAI", icon: openAiIcon },
  { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic" },
  { name: "Gemini", icon: "https://cdn.simpleicons.org/google" },
  { name: "DeepSeek", icon: deepseekIcon },
  { name: "Copilot", icon: copilotIcon }
];

const SOCIAL_MEDIA: Tool[] = [
  { name: "LinkedIn", icon: linkedinIcon },
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
    image: marketingPosterImage,
    details: {
      context: "Deux créations Canva réalisées pour présenter une idée, capter l'attention et traduire un message en visuel impactant.",
      tools: ["Google Docs", "ChatGPT", "Canva"],
      content: (
        <div className="space-y-6">
          <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
            <h4 className="font-bold text-brand-primary mb-2">Mes démos marketing réalisées avec Canva</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              J'utilise Canva pour transformer une intention marketing en support visuel prêt à être partagé sur le web ou les réseaux sociaux.
              Chaque création cherche à faire ressortir le message, la hiérarchie d'information et l'impact visuel.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Marketing Poster",
                description: "Affiche orientée communication et visibilité, pensée pour attirer rapidement l'œil."
              },
              {
                title: "Poster Design",
                description: "Travail plus graphique centré sur l'équilibre entre design, lisibilité et style."
              }
            ].map((item, index) => {
              const imageSrc = index === 0 ? marketingPosterImage : posterDesignImage;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm cursor-zoom-in"
                  data-lightbox-src={imageSrc}
                  data-lightbox-type="image"
                  data-lightbox-title={item.title}
                >
                  <img
                    src={imageSrc}
                    alt={item.title}
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="p-4">
                    <h5 className="font-bold text-sm text-brand-primary mb-2">{item.title}</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-3">Cliquer pour agrandir</p>
                  </div>
                </div>
              );
            })}
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
      context: "Projet complet de création vidéo et de transcription, depuis la génération du contenu jusqu'au sous-titrage final.",
      tools: ["Luma", "ChatGPT", "TurboScribe", "CapCut"],
      content: (
        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 p-4">
            <h4 className="font-bold text-brand-primary mb-2">Vidéo finale</h4>
            <p className="text-sm text-gray-600 mb-4">
              Vidéo générée avec Luma. Le script et l'image principale ont été créés avec ChatGPT, puis le sous-titrage final a été intégré avec CapCut.
            </p>
            <div
              className="cursor-zoom-in"
              data-lightbox-src={mainTranscriptionVideo}
              data-lightbox-type="video"
              data-lightbox-title="Vidéo finale"
            >
              <video
                src={mainTranscriptionVideo}
                controls
                preload="metadata"
                className="w-full rounded-2xl bg-black aspect-[9/16] object-contain"
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-3">Cliquer sur la vidéo pour l'agrandir</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-brand-primary">Étapes de réalisation</h4>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Étape 1</p>
                <h5 className="font-bold mb-2">Audio simple généré avec Luma</h5>
                <div
                  className="cursor-zoom-in"
                  data-lightbox-src={transcriptionAudioVideo}
                  data-lightbox-type="video"
                  data-lightbox-title="Étape 1 - Audio simple"
                >
                  <video
                    src={transcriptionAudioVideo}
                    controls
                    preload="metadata"
                    className="w-full rounded-xl bg-black"
                  />
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Étape 2</p>
                <h5 className="font-bold mb-2">Transcription brute obtenue avec TurboScribe</h5>
                <div className="rounded-xl bg-white border border-gray-100 p-4 max-h-56 overflow-auto">
                  <pre className="text-xs text-gray-600 whitespace-pre-wrap leading-relaxed font-sans">
                    {transcriptionText}
                  </pre>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Étape 3</p>
                <h5 className="font-bold mb-2">Sous-titrage final réalisé avec CapCut</h5>
                <div
                  className="cursor-zoom-in"
                  data-lightbox-src={transcriptionCaptionsVideo}
                  data-lightbox-type="video"
                  data-lightbox-title="Étape 3 - Sous-titrage final"
                >
                  <video
                    src={transcriptionCaptionsVideo}
                    controls
                    preload="metadata"
                    className="w-full rounded-xl bg-black"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-brand-primary">Valeur apportée</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                <span><strong>Production complète :</strong> idéation, génération, transcription et finition vidéo dans un seul workflow.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                <span><strong>Lisibilité :</strong> passage d'un contenu brut à une vidéo claire, sous-titrée et exploitable pour la diffusion.</span>
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
    image: organisationNotionOne,
    details: {
      context: "Organisation d'emails, structuration de tableaux et planification personnelle avec Notion pour faire gagner du temps et de la clarté.",
      tools: ["Notion", "Google sheet", "Gmail"],
      content: (
        <div className="space-y-6">
          <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
            <h4 className="font-bold text-brand-primary mb-3">Projet : Organisation d’une boîte email personnelle</h4>
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <p><strong>Contexte :</strong> boîte email contenant plus de 1500 messages non triés, mélangeant notifications, emails importants et promotions.</p>
              <p><strong>Problème :</strong> emails non organisés, difficulté à retrouver les informations importantes, perte de temps quotidienne.</p>
              <p><strong>Solution apportée :</strong> création de catégories, tri et archivage des emails, mise en place de filtres automatiques et organisation par priorité.</p>
              <p><strong>Résultats :</strong> inbox simplifiée et structurée, accès rapide aux emails importants, gain de temps estimé à 1 à 2 heures par jour.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-brand-primary">Organisation de la boîte email</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  src: organisationEmailBefore,
                  title: "Avant",
                  description: "Boîte encombrée avec un grand volume d'emails non triés."
                },
                {
                  src: organisationEmailLabels,
                  title: "Mise en place des labels",
                  description: "Création d'un système de catégories pour retrouver plus vite les messages."
                },
                {
                  src: organisationEmailAfter,
                  title: "Après archivage",
                  description: "Inbox nettoyée, messages utiles visibles immédiatement."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm cursor-zoom-in"
                  data-lightbox-src={item.src}
                  data-lightbox-type="image"
                  data-lightbox-title={item.title}
                >
                  <img src={item.src} alt={item.title} className="w-full aspect-[4/3] object-cover" />
                  <div className="p-4">
                    <h5 className="font-bold text-sm text-brand-primary mb-2">{item.title}</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-3">Cliquer pour agrandir</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-brand-primary">Organisation de tableau</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  src: organisationSheetBefore,
                  title: "Sheet avant",
                  description: "Base de travail encore dense, avec une lecture moins immédiate."
                },
                {
                  src: organisationSheetAfter,
                  title: "Sheet après",
                  description: "Informations clarifiées et structure optimisée pour un meilleur suivi."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm cursor-zoom-in"
                  data-lightbox-src={item.src}
                  data-lightbox-type="image"
                  data-lightbox-title={item.title}
                >
                  <img src={item.src} alt={item.title} className="w-full aspect-[16/10] object-cover" />
                  <div className="p-4">
                    <h5 className="font-bold text-sm text-brand-primary mb-2">{item.title}</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-3">Cliquer pour agrandir</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-brand-primary">Ma façon de planifier avec Notion</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              J'utilise Notion pour centraliser mes tâches, suivre les priorités et garder une vue claire sur mes actions quotidiennes et mes livrables.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[organisationNotionOne, organisationNotionTwo].map((src, index) => (
                <div
                  key={src}
                  className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm cursor-zoom-in"
                  data-lightbox-src={src}
                  data-lightbox-type="image"
                  data-lightbox-title={`Vue Notion ${index + 1}`}
                >
                  <img
                    src={src}
                    alt={`Organisation Notion ${index + 1}`}
                    className="w-full aspect-[16/10] object-cover"
                  />
                  <div className="p-4">
                    <h5 className="font-bold text-sm text-brand-primary mb-2">Vue Notion {index + 1}</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Suivi visuel des tâches, priorités et planning personnel dans un espace de travail structuré.
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-3">Cliquer pour agrandir</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  }
];

// --- Components ---

const Navbar = ({ onContactClick }: NavbarProps) => {
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
          onClick={onContactClick}
          className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg shadow-brand-primary/20"
        >
          Me Contacter
        </motion.button>
      </div>
    </nav>
  );
};

const Hero = ({ onContactClick, onCvClick }: HeroProps) => {
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
          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
            Des solutions digitales
            <br />
            <span className="text-brand-primary italic">claires et efficaces</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            Assistante virtuelle organisée, proactive et polyvalente avec une forte
            expertise en outils digitaux, gestion de projet et développement
            d’applications. Capable de gérer des missions administratives,
            marketing et techniques. Expérience en freelance avec gestion directe
            de clients, conception de solutions digitales et utilisation d’outils
            modernes (IA, design, développement). Excellente communication et
            autonomie.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projets"
              whileHover={{ scale: 1.02 }}
              className="bg-brand-primary text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2"
            >
              Découvrir mes projets <ArrowRight size={18} />
            </motion.a>
            <button
              onClick={onCvClick}
              className="px-8 py-4 rounded-xl border border-gray-200 font-medium hover:bg-gray-50 transition-colors"
            >
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
              src={profilePhoto} 
              alt="Profil Professionnel"
              className="rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/5] cursor-zoom-in"
              data-lightbox-src={profilePhoto}
              data-lightbox-type="image"
              data-lightbox-title="Profil Professionnel"
            />
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 w-48 h-48 rounded-3xl overflow-hidden shadow-xl border-8 border-white"
            >
              <img 
                src={avatarPhoto} 
                alt="Côté Créatif"
                className="w-full h-full object-cover cursor-zoom-in"
                data-lightbox-src={avatarPhoto}
                data-lightbox-type="image"
                data-lightbox-title="Côté Créatif"
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif mb-4">Profil Professionnel</h2>
          <p className="text-gray-500 italic">Organisée. Proactive. Leadership.</p>
        </motion.div>
        
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-serif mb-4">Expériences Clés</h2>
          <p className="text-gray-500">Transformer des besoins complexes en solutions élégantes.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div
                className="relative overflow-hidden rounded-3xl aspect-video mb-6 bg-gray-100 cursor-zoom-in"
                data-lightbox-src={project.image}
                data-lightbox-type="image"
                data-lightbox-title={project.title}
              >
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif mb-4">Mes Démos</h2>
          <p className="text-gray-500">Aperçu concret de mes compétences en action.</p>
        </motion.div>

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
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedDemo(null)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X size={24} />
              </button>
              
              <div className="p-8 md:p-12 max-h-[90vh] overflow-y-auto">
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
                  <div
                    onClick={(event) => event.stopPropagation()}
                  >
                    {selectedDemo.details.content}
                  </div>
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
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-serif mb-4">Outils Digitaux & IA</h2>
              <p className="text-gray-500">Maîtrise technique pour une productivité décuplée.</p>
            </motion.div>
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
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-serif mb-4">Réseaux Sociaux & Liens</h2>
              <p className="text-gray-500">Présence digitale et collaboration.</p>
            </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-serif mb-4">Éducation</h2>
          <p className="text-gray-500">Fondations académiques et certifications.</p>
        </motion.div>
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
                  className="w-full h-full object-cover cursor-zoom-in"
                  data-lightbox-src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1000"
                  data-lightbox-type="image"
                  data-lightbox-title="Danse & Slam"
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
            <h2 className="text-5xl font-serif mb-8">Slameuse (2018-2019) & Danseuse actuellement</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              La discipline de la piste de danse se traduit directement dans la structure de mon code. 
              Chaque mouvement demande de la précision, chaque séquence demande de la fluidité. 
              <br /><br />
              Mon parcours de slameuse à l'Alliance Française entre 2018 et 2019 m'a appris que la communication est une question de résonance. 
              J'apporte cette capacité narrative à la documentation technique et à la gestion de projet, 
              rendant les idées complexes plus humaines. La danse reste aujourd'hui une part active de mon équilibre et de ma créativité.
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
  const [fullscreenMedia, setFullscreenMedia] = useState<LightboxMedia | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);

  useEffect(() => {
    if (!fullscreenMedia) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFullscreenMedia(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenMedia]);

  return (
    <div
      className="selection:bg-brand-accent selection:text-white"
      onClickCapture={(event) => {
        const target = event.target as HTMLElement;
        const trigger = target.closest('[data-lightbox-src]') as HTMLElement | null;

        if (!trigger) return;

        event.stopPropagation();
        setFullscreenMedia({
          src: trigger.dataset.lightboxSrc || '',
          type: (trigger.dataset.lightboxType as 'image' | 'video') || 'image',
          title: trigger.dataset.lightboxTitle || 'Aperçu'
        });
      }}
    >
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <main>
        <Hero
          onContactClick={() => setIsContactOpen(true)}
          onCvClick={() => setIsCvOpen(true)}
        />
        <Profile />
        <Experience />
        <Demos />
        <Toolkit />
        <Education />
        <ArtisticSide />
      </main>
      <Footer />

      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-[180] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
              className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              className="relative w-full max-w-xl rounded-[2rem] bg-white shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-5 right-5 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="p-8 md:p-10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-primary font-bold block mb-3">
                  Contact
                </span>
                <h3 className="text-3xl font-serif mb-4">Mes coordonnées</h3>
                <p className="text-sm text-gray-600 mb-8">
                  Vous pouvez me joindre par téléphone ou par email selon ce qui vous convient le mieux.
                </p>

                <div className="space-y-5">
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Téléphone</p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Yas :</strong> 038 58 278 75</p>
                      <p><strong>Orange :</strong> 037 44 265 96</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Email</p>
                    <a
                      href="mailto:antema.fy01@gmail.com"
                      className="text-sm text-brand-primary font-medium hover:underline"
                    >
                      antema.fy01@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCvOpen && (
          <div className="fixed inset-0 z-[190] flex items-center justify-center p-3 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCvOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative w-full max-w-5xl h-[90vh] rounded-[2rem] bg-white shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsCvOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
              >
                <X size={20} />
              </button>
              <div className="px-6 py-4 border-b border-gray-100">
                <p className="text-sm font-bold text-brand-primary">Aperçu du CV</p>
              </div>
              <iframe
                src={cvPdf}
                title="CV Ny Antema Assistant"
                className="w-full h-[calc(90vh-69px)]"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {fullscreenMedia && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFullscreenMedia(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="relative w-full max-w-6xl"
            >
              <button
                onClick={() => setFullscreenMedia(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
              >
                <X size={20} />
              </button>
              <div className="rounded-[2rem] overflow-hidden bg-white shadow-2xl">
                <div className="px-6 py-4 border-b border-gray-100">
                  <p className="text-sm font-bold text-brand-primary">{fullscreenMedia.title}</p>
                </div>
                <div className="bg-black flex items-center justify-center">
                  {fullscreenMedia.type === 'video' ? (
                    <video
                      src={fullscreenMedia.src}
                      controls
                      autoPlay
                      className="w-full max-h-[85vh] object-contain"
                    />
                  ) : (
                    <img
                      src={fullscreenMedia.src}
                      alt={fullscreenMedia.title}
                      className="w-full max-h-[85vh] object-contain"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
