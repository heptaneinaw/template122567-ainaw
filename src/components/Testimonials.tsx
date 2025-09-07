
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "INAW hat die LED-Displays unseres Einkaufszentrums in eine Einnahmequelle verwandelt, von der wir nie wussten, dass sie existiert. Wir verdienen jetzt 40% mehr mit unseren Bildschirmen und helfen lokalen Unternehmen bei der dynamischen Eigenwerbung.",
  author: "David Park",
  role: "Immobilienmanager, MetroCenter Mall",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "Die Installation der transparenten LED-Folie war nahtlos, und wir lieben es, wie wir sie für unsere eigenen Promotionen nutzen können, während wir zusätzliche Einnahmen durch gezielte Werbung erzielen. Unsere Kunden sind engagierter denn je.",
  author: "Maria Gonzalez",
  role: "Inhaberin, Urban Café Kette",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "INAWs programmatische Plattform hat Werbung so viel einfacher gemacht. Wir können bestimmte Standorte und Zeiten mit unseren Fitness-Kampagnen ansprechen und erreichen genau die richtige Zielgruppe, wenn sie am ehesten handeln wird.",
  author: "Alex Thompson",
  role: "Marketing-Direktor, FitLife Gyms",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "Als regionaler Werbetreibender gibt uns INAWs Marktplatz Zugang zu Premium-Display-Inventar, das wir uns einzeln nie leisten könnten. Die Targeting-Fähigkeiten sind unglaublich für lokale Kampagnen.",
  author: "Jennifer Kim",
  role: "Brand Managerin, Lokale Einzelhandelsgruppe",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Referenzen</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">Was andere sagen</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
