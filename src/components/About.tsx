import React from 'react';
import { Award, Users, TrendingUp, Heart, Target, Shield } from 'lucide-react';

const values = [
  {
    title: 'Proximité',
    description: 'Un accompagnement personnalisé et une disponibilité constante pour nos clients.',
    icon: Heart,
  },
  {
    title: 'Excellence',
    description: 'Une expertise technique pointue et une formation continue pour des conseils pertinents.',
    icon: Award,
  },
  {
    title: 'Engagement',
    description: 'Un investissement total dans la réussite de nos clients et le respect de nos engagements.',
    icon: Target,
  },
  {
    title: 'Confidentialité',
    description: 'Une garantie absolue de confidentialité pour toutes les informations de nos clients.',
    icon: Shield,
  },
];

export function About() {
  return (
    <div id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              À propos de Julie Zagula
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Experte-comptable diplômée et passionnée, je m'engage depuis plus de 15 ans à transformer la comptabilité en un véritable outil de pilotage pour votre entreprise. Mon parcours m'a permis d'acquérir une expertise solide dans l'accompagnement des TPE/PME et des créateurs d'entreprise.
            </p>
            
            <p className="mt-4 max-w-3xl text-lg text-gray-500">
              Basée à Lampertheim, près de Strasbourg, je mets mon expertise au service des entrepreneurs de la région Grand Est, avec une approche moderne et personnalisée de l'expertise comptable.
            </p>

            <div className="mt-12 space-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Expertise reconnue</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Plus de 15 ans d'expérience en comptabilité et gestion d'entreprise, membre de l'Ordre des Experts-Comptables
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Accompagnement personnalisé</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Une approche sur mesure adaptée aux besoins spécifiques de chaque entreprise
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Vision stratégique</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Transformation de vos données comptables en insights stratégiques pour piloter votre entreprise
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-xl"
              src="/julie-zagula.jpg"
              alt="Julie Zagula, Expert-comptable"
            />
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Nos Valeurs
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="flex items-center justify-center">
                  <value.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{value.title}</h3>
                <p className="mt-2 text-base text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}