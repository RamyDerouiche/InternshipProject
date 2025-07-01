import React from 'react';
import './HowWeWork.css';


function HowWeWork() {
  return (
    <section id="how-we-work" className="how-we-work section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Comment nous travaillons</h2>
        <p>Cette méthode combine planification stratégique, personnalisation de la plateforme et suivi en temps réel pour une gestion des taches fluide et efficace.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="steps-5">
          <div className="process-container">

            {/* Process Item 01 */}
            <div className="process-item" data-aos="fade-up" data-aos-delay="200">
              <div className="content">
                <span className="step-number">01</span>
                <div className="card-body">
                  <div className="step-icon">
                    <i className="bi bi-pencil-square"></i>
                  </div>
                  <div className="step-content">
                    <h3>Planification des Besoins</h3>
                    <p>Nous identifions les roles, les contraintes de charge et les types de taches a automatiser pour une meilleure repartition.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Item 02 */}
            <div className="process-item" data-aos="fade-up" data-aos-delay="300">
              <div className="content">
                <span className="step-number">02</span>
                <div className="card-body">
                  <div className="step-icon">
                    <i className="bi bi-gear"></i>
                  </div>
                  <div className="step-content">
                    <h3>Configuration de la Plateforme</h3>
                    <p>Nous personnalisons SmartAssign pour relflèter la structure de votre entreprise, vos équipes et vos priorités.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Item 03 */}
            <div className="process-item" data-aos="fade-up" data-aos-delay="400">
              <div className="content">
                <span className="step-number">03</span>
                <div className="card-body">
                  <div className="step-icon">
                    <i className="bi bi-search"></i>
                  </div>
                  <div className="step-content">
                    <h3>Test et Simulation</h3>
                    <p>Des assignations silmulée permettent d'évaluer l'équité, la charge de travail, et l'efficacité de l'algorithme.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Item 04 */}
            <div className="process-item" data-aos="fade-up" data-aos-delay="500">
              <div className="content">
                <span className="step-number">04</span>
                <div className="card-body">
                  <div className="step-icon">
                    <i className="bi bi-rocket-takeoff"></i>
                  </div>
                  <div className="step-content">
                    <h3>Lanchement et Suivi</h3>
                    <p>Le systéme est mis en production. Des tableaux de bords permettent aux managers de suivre la performance en temps réel.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
export default HowWeWork();