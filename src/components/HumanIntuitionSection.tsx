
import React, { useRef } from "react";

const HumanIntuitionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-gray-50" id="inaw-advantages" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="pulse-chip mb-4">
              <span>INAW Vorteile</span>
            </div>
            <h2 className="section-title mb-6">Mehr als nur Werbeflächen - ein intelligentes Ökosystem</h2>
            <p className="text-lg text-gray-700 mb-6">
              INAW geht über traditionelle Werbeflächen hinaus und schafft ein adaptives, 
              lernendes System, das sich kontinuierlich optimiert. Unsere Plattform ermöglicht 
              natürliche Interaktionen zwischen Werbetreibenden und Zielgruppen wie nie zuvor.
            </p>
            <ul className="space-y-4">
              {[
                "Lernt aus Kampagnendaten und optimiert automatisch die Performance über die Zeit",
                "Antizipiert Werbebedürfnisse basierend auf Standortdaten und Publikumsanalysen", 
                "Passt sich an verändernde Umgebungen ohne manuelle Umprogrammierung an",
                "Trifft intelligente Entscheidungen mit nuanciertem Verständnis für Zielgruppenpräferenzen"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 text-pulse-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanIntuitionSection;
