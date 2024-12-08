import React from 'react';
import { BookOpen, PieChart, Calendar, ClipboardCheck, Users, FileText, Calculator, Building, BarChart } from 'lucide-react';

const services = [
  {
    title: 'Initiation aux États Financiers',
    description: 'Guide pratique et exercices pour comprendre et interpréter vos états financiers.',
    details: [
      'Analyse des ratios financiers clés',
      'Compréhension du bilan et du compte de résultat',
      'Interprétation des flux de trésorerie',
      'Tableaux de bord personnalisés'
    ],
    icon: BookOpen,
    cta: 'Réserver une session',
  },
  {
    title: 'Organisation Comptable TPE',
    description: 'Diagnostic personnalisé et structuration de votre comptabilité.',
    details: [
      'Mise en place de processus comptables efficaces',
      'Optimisation de la gestion des factures',
      'Suivi de trésorerie automatisé',
      'Formation aux outils numériques'
    ],
    icon: PieChart,
    cta: 'Demander un accompagnement',
  },
  {
    title: 'Clôture des Comptes',
    description: 'Assistance étape par étape pour vos clôtures comptables.',
    details: [
      'Révision complète des comptes',
      'Établissement des états financiers',
      'Calcul des provisions',
      'Préparation des annexes légales'
    ],
    icon: Calendar,
    cta: 'Planifier une consultation',
  },
  {
    title: 'Révision des Comptes Annuels',
    description: 'Vérification approfondie pour garantir la conformité de vos comptes.',
    details: [
      'Contrôle des écritures comptables',
      'Validation des procédures fiscales',
      'Optimisation fiscale légale',
      'Recommandations d\'amélioration'
    ],
    icon: ClipboardCheck,
    cta: 'Prendre rendez-vous',
  },
  {
    title: 'Assistance sur Mesure',
    description: 'Solutions adaptées à vos problématiques comptables spécifiques.',
    details: [
      'Accompagnement lors des contrôles fiscaux',
      'Gestion de la relation avec l\'administration',
      'Conseil en gestion d\'entreprise',
      'Support pour les opérations complexes'
    ],
    icon: Users,
    cta: 'Contacter un expert',
  },
  {
    title: 'Création d\'Entreprise',
    description: 'Accompagnement complet pour les créateurs d\'entreprise.',
    details: [
      'Choix de la structure juridique',
      'Business plan et prévisionnel',
      'Formalités administratives',
      'Mise en place de la comptabilité'
    ],
    icon: Building,
    cta: 'Démarrer votre projet',
  },
  {
    title: 'Tableaux de Bord',
    description: 'Outils de pilotage sur mesure pour votre activité.',
    details: [
      'Indicateurs clés de performance',
      'Suivi budgétaire',
      'Analyse des marges',
      'Reporting personnalisé'
    ],
    icon: BarChart,
    cta: 'Découvrir nos solutions',
  },
  {
    title: 'Fiscalité',
    description: 'Optimisation et conformité fiscale pour votre entreprise.',
    details: [
      'Déclarations fiscales',
      'TVA et taxes spécifiques',
      'Crédit d\'impôt recherche',
      'Optimisation fiscale légale'
    ],
    icon: Calculator,
    cta: 'Optimiser votre fiscalité',
  },
];

export function Services() {
  return (
    <div id="services" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Des solutions comptables adaptées à vos besoins
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a href="#contact" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-500">
                {service.cta} <span aria-hidden="true">&rarr;</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}