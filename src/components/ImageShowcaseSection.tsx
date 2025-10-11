import React, { useState, useEffect } from "react";
import doohShowcase from "@/assets/dooh-showcase.jpg";
import doohDisplay1 from "@/assets/dooh-display-1.jpg";
import doohDisplay2 from "@/assets/dooh-display-2.jpg";

const panels = [
  {
    image: doohShowcase,
    title: "Next Generation DOOH",
    description: "Mit modernster Technologie und intelligenter Automatisierung verwandelt INAW bestehende und neue Displayflächen in profitable, dynamische Werbeplattformen für maximale Reichweite und Umsatzoptimierung."
  },
  {
    image: doohDisplay1,
    title: "Programmatische Echtzeit-Buchung",
    description: "Buchen Sie Werbeflächen in Echtzeit mit präzisem Targeting nach Standort, Zeit und Zielgruppe. Flexibel, transparent und so einfach wie eine Uber-Fahrt zu bestellen."
  },
  {
    image: doohDisplay2,
    title: "Maximale Reichweite & ROI",
    description: "Erreichen Sie Ihre Zielgruppe genau dort, wo sie sich aufhält. Mit datengetriebenen Insights und dynamischer Ausspielung maximieren Sie die Wirkung jeder Kampagne."
  }
];

const ImageShowcaseSection = () => {
  const [activePanel, setActivePanel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePanel((prev) => (prev + 1) % panels.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Die Zukunft der programmatischen DOOH-Werbung
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Unsere fortschrittliche Plattform revolutioniert die Art und Weise, wie digitale Werbeflächen 
            genutzt und monetarisiert werden - intelligent, automatisiert und hocheffizient.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {panels.map((panel, index) => (
            <div
              key={index}
              className={`rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant transition-all duration-700 ${
                activePanel === index 
                  ? 'opacity-100 relative z-10' 
                  : 'opacity-0 absolute inset-0 z-0'
              }`}
            >
              <div className="w-full">
                <img 
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-white p-4 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">{panel.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {panel.description}
                </p>
              </div>
            </div>
          ))}
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {panels.map((_, index) => (
              <button
                key={index}
                onClick={() => setActivePanel(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activePanel === index 
                    ? 'bg-pulse-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Panel ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
