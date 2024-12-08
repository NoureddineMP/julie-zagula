import React from 'react';

export function Privacy() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Politique de Confidentialité</h1>
        
        <div className="mt-8 prose prose-blue">
          <h2>Protection des données personnelles</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), nous nous engageons à protéger la confidentialité des données personnelles que vous nous transmettez.
          </p>

          <h2>Données collectées</h2>
          <p>
            Les données personnelles collectées via notre formulaire de contact sont :
          </p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone (facultatif)</li>
            <li>Nom de l'entreprise</li>
            <li>Poste occupé</li>
          </ul>

          <h2>Utilisation des données</h2>
          <p>
            Ces informations sont utilisées uniquement dans le cadre de :
          </p>
          <ul>
            <li>La réponse à vos demandes de contact</li>
            <li>L'envoi d'informations relatives à nos services</li>
            <li>La gestion de la relation client</li>
          </ul>

          <h2>Conservation des données</h2>
          <p>
            Vos données sont conservées pendant une durée de 3 ans à compter de notre dernier contact.
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données personnelles. Pour exercer ces droits, vous pouvez nous contacter par email à contact@juliezagula.fr.
          </p>
        </div>
      </div>
    </div>
  );
}