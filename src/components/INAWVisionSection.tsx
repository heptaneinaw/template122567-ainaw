import React, { useRef, useEffect, useState } from "react";

const INAWVisionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const updateScrollProgress = () => {
      if (!sectionRef.current || !cardsContainerRef.current || !isIntersecting) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollProgress = Math.max(0, -rect.top / (sectionHeight - window.innerHeight));
      
      // Calculate which card should be active based on scroll progress
      const cardIndex = Math.min(2, Math.floor(scrollProgress * 3));
      setActiveCardIndex(cardIndex);
      
      ticking.current = false;
    };

    const handleScroll = () => {
      lastScrollY.current = window.scrollY;
      if (!ticking.current) {
        requestAnimationFrame(updateScrollProgress);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isIntersecting]);

  const isFirstCardVisible = activeCardIndex === 0 && isIntersecting;
  const isSecondCardVisible = activeCardIndex === 1 && isIntersecting;
  const isThirdCardVisible = activeCardIndex === 2 && isIntersecting;

  const cardStyle = {
    transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
  };

  return (
    <div ref={sectionRef} style={{ height: '300vh' }} className="relative -mt-20" id="inaw-vision">
      <div ref={cardsContainerRef} className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        
        {/* First Card - INAW Marketplace Vision */}
        <div 
          className="absolute inset-4 rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant"
          style={{
            ...cardStyle,
            transform: isFirstCardVisible ? 'translateY(0px) scale(1)' : 'translateY(50px) scale(0.95)',
            opacity: isFirstCardVisible ? 1 : 0,
            backgroundImage: "url('background-section1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="h-full p-6 sm:p-8 flex flex-col justify-between text-white">
            <div className="flex items-center">
              <div className="pulse-chip">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">1</span>
                <span>Vision</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                Die Zukunft der digitalen Werbung
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl">
                INAW verwandelt bestehende Displays und neue transparente LED-Installationen in einen intelligenten, programmatischen Werbemarktplatz.
              </p>
            </div>
          </div>
        </div>

        {/* Second Card - Technology Focus */}
        <div 
          className="absolute inset-4 rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant"
          style={{
            ...cardStyle,
            transform: isSecondCardVisible ? 'translateY(0px) scale(1)' : 'translateY(50px) scale(0.95)',
            opacity: isSecondCardVisible ? 1 : 0,
            backgroundImage: "url('background-section2.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="h-full p-6 sm:p-8 flex flex-col justify-between text-white">
            <div className="flex items-center">
              <div className="pulse-chip">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">2</span>
                <span>Technologie</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                Transparente LED-Filme &amp; SMD-Displays
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl">
                Modernste Hardware aus China kombiniert mit intelligenter Software für maximale Effizienz und Rentabilität.
              </p>
            </div>
          </div>
        </div>

        {/* Third Card - Marketplace Model */}
        <div 
          className="absolute inset-4 rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant"
          style={{
            ...cardStyle,
            transform: isThirdCardVisible ? 'translateY(0px) scale(1)' : 'translateY(50px) scale(0.95)',
            opacity: isThirdCardVisible ? 1 : 0,
            backgroundImage: "url('background-section3.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="h-full p-6 sm:p-8 flex flex-col justify-between text-white">
            <div className="flex items-center">
              <div className="pulse-chip">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">3</span>
                <span>Marktplatz</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                Programmatisch &amp; On-Demand
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl">
                Wie Uber für Werbeflächen - flexible Buchung, Echtzeitoptimierung und maximale Auslastung für alle Beteiligten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default INAWVisionSection;
