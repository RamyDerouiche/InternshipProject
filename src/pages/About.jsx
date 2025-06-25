import React from "react";

function About() {
  return (
    <section id="about" className="about section-bg">
      <div className="container">

        {/* Section Title */}
        <div className="section-title">
          <h2>A Propos</h2>
          <p>Révéler le plein potentiel de votre équipe grâce à l’assignation intelligente</p>
        </div>

        {/* Subtext */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10">
            <p className="text-center">
              SmartAssign est conçu pour résoudre les problèmes de répartition déséquilibrée des tâches,
              le manque de visibilité sur les affectations, et le temps perdu à les gérer manuellement.
              Notre solution offre une plateforme intuitive, collaborative et puissante.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="icon-box">
              <div className="icon"></div>
              <h4>Planification des Besoins</h4>
              <p>
                Nous identifions les rôles, les contraintes de charge,
                et les types de tâches à automatiser pour une meilleure répartition.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="icon-box">
              <div className="icon"></div>
              <h4>Configuration de la Plateforme</h4>
              <p>
                Nous personnalisons SmartAssign pour refléter la structure de votre entreprise,
                vos équipes et vos priorités.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="icon-box">
              <div className="icon"></div>
              <h4>Tests & Simulation</h4>
              <p>
                Des assignations simulées permettent d’évaluer l'équité,
                la charge de travail, et l'efficacité de l’algorithme.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="icon-box">
              <div className="icon"></div>
              <h4>Lancement & Suivi</h4>
              <p>
                Le système est mis en production. Des tableaux de bord permettent aux managers
                de suivre la performance en temps réel.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="row mt-5">
          <div className="col-md-4">
            <ul>
              <li>Attribution équitable et intelligente selon les rôles et charges de travail</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li>Suivi en temps réel des goulots d’étranglement et responsabilités</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li>Productivité améliorée grâce à l’automatisation et aux suggestions</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
export default About;
