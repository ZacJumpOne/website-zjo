export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqsData: FaqItem[] = [
  {
    question: "¿Qué es Zero Jump One?",
    answer: "Zero Jump One es una empresa de desarrollo de software especializada en soluciones personalizadas para negocios. Con más de 25 años de experiencia creando sistemas robustos y eficientes para el control integral de tu negocio.",
    category: "General"
  },
  {
    question: "¿Qué tipos de soluciones ofrecen?",
    answer: "Ofrecemos soluciones modulares incluyendo: ERP, Control de Inventario, Punto de Venta (POS), Facturación Electrónica, Control de Producción, y Desarrollo a la Medida. Cada solución se adapta a las necesidades específicas de tu industria.",
    category: "Servicios"
  },
  {
    question: "¿Cómo inicio con Zero Jump One?",
    answer: "Puedes contactarnos al (33) 1749-0079 o escribir a proyectos@zerojumpone.com. Nuestro equipo te realizará un análisis sin costo para determinar las mejores soluciones para tu negocio.",
    category: "Contacto"
  },
  {
    question: "¿Ofrecen soporte técnico?",
    answer: "Sí, todas nuestras soluciones incluyen soporte técnico continuo. Nuestro equipo está disponible para resolver cualquier duda o problema que se presente durante el uso del sistema.",
    category: "Soporte"
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer: "Utilizamos tecnologías modernas y probadas adaptadas a tus necesidades. Nuestro equipo tiene experiencia en múltiples lenguajes y frameworks, siempre eligiendo la mejor opción para cada proyecto específico.",
    category: "Técnico"
  },
  {
    question: "¿Tienen experiencia en mi industria?",
    answer: "Hemos trabajado con múltiples industrias incluyendo retail, boutique, producción, construcción y desarrollo a la medida. Nuestro enfoque de adaptabilidad nos permite adaptar nuestras soluciones a prácticamente cualquier sector.",
    category: "General"
  },
  {
    question: "¿Cuánto tiempo toma la implementación?",
    answer: "El tiempo de implementación varía según la complejidad del proyecto. Nuestra metodología SCRUM permite entregas por sprint (iteraciones por semana), facilitando un desarrollo ágil y adaptativo a tus necesidades.",
    category: "Proyecto"
  },
  {
    question: "¿Qué es CMMI y por qué es importante?",
    answer: "CMMI (Capability Maturity Model Integration) es un modelo de madurez de capacidades que certifica la calidad de los procesos de desarrollo de software. Garantiza metodologías probadas y resultados confiables.",
    category: "Calidad"
  }
];