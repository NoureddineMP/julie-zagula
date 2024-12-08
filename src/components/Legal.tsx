import React from 'react';

export function Legal() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Mentions Légales</h1>
        
        <div className="mt-8 prose prose-blue">
          <h2>Informations légales</h2>
          <p>
            Cabinet Julie Zagula<br />
            1 Rue des Comptables<br />
            67450 Lampertheim<br />
            Tél : 03 88 00 00 00<br />
            Email : contact@juliezagula.fr
          </p>

          <h3>Expert-comptable</h3>
          <p>
            Julie Zagula<br />
            Inscrite à l'Ordre des Experts-Comptables de la région Grand Est<br />
            SIRET : XX XXX XXX XXX XXX
          </p>

          <h2>Hébergement</h2>
          <p>[Informations de l'hébergeur]</p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Les informations contenues sur ce site sont aussi précises que possible et le site remis régulièrement à jour, mais peut toutefois contenir des inexactitudes ou des omissions.
          </p>
        </div>
      </div>
    </div>
  );
}