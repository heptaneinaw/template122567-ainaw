
import React from "react";
import doohShowcase from "@/assets/dooh-showcase.jpg";

const ImageShowcaseSection = () => {
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
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src={doohShowcase}
              alt="Futuristische programmatische DOOH-Werbeplattform mit vernetzten LED-Displays" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Next Generation DOOH</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Mit modernster Technologie und intelligenter Automatisierung verwandelt INAW bestehende 
              und neue Displayflächen in profitable, dynamische Werbeplattformen für maximale Reichweite 
              und Umsatzoptimierung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
