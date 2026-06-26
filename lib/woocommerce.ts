import { Service, FAQItem } from "./types";
import { isProductionEnv, hasWooCommerceConfig } from "./utils";

// Static database of masajes extracted exactly from the PDF masajes.pdf
// This is used for compilation safety and local development fallback.
export const fallbackServices: Service[] = [
  {
    id: "fb-relajante",
    title: "Masaje Relajante",
    slug: "masaje-relajante",
    shortDescription: "Consiste en pases suaves y un ritmo lento. Se enfoca en brindar una relajación profunda y aliviar problemas musculares leves.",
    description: "Consiste en pases suaves, ritmo lento se enfoca en brindar una relajación, así como una mejoría en problemas musculares leves.",
    price: "1200", // Base price for 60 min
    duration: "60/90/120",
    image: "/imagenes/descarga.jpg",
    categories: ["Relajación"],
    featured: true,
    bookingUrl: "https://wa.me/5215614379653?text=Hola,%20quiero%20reservar%20un%20Masaje%20Relajante",
    benefits: [
      "Alivio del estrés diario",
      "Mejoría en tensiones musculares leves",
      "Promueve un descanso profundo",
      "Estimula la circulación sanguínea",
    ]
  },
  {
    id: "fb-descontracturante",
    title: "Masaje Descontracturante",
    slug: "masaje-descontracturante",
    shortDescription: "Masaje de presión media a alta enfocado en penetrar las fibras musculares profundas para disolver contracturas severas.",
    description: "Requiere el uso de manos, antebrazos y codo la presión del masaje es de media a alta y su función principal es llegar a las principales fibras musculares para eliminar contracturas.",
    price: "1200",
    duration: "60/90/120",
    image: "/imagenes/descarga (1).jpg",
    categories: ["Terapéutico"],
    featured: true,
    bookingUrl: "https://wa.me/5215614379653?text=Hola,%20quiero%20reservar%20un%20Masaje%20Descontracturante",
    benefits: [
      "Eliminación de contracturas musculares",
      "Liberación de puntos gatillo",
      "Aumento del rango de movimiento",
      "Alivio de dolores crónicos por mala postura",
    ]
  },
  {
    id: "fb-deportivo",
    title: "Masaje Deportivo",
    slug: "masaje-deportivo",
    shortDescription: "Diseñado para atletas de todos los niveles. Se concentra en necesidades musculares específicas con ritmos constantes y presión media-profunda.",
    description: "Dirigido a deportistas de cualquier intensidad, el terapeuta se centra en necesidades específicas de cada cliente el ritmo del masaje es constante presión de media a profunda.",
    price: "1200",
    duration: "60/90/120",
    image: "/imagenes/masaje-deportivo.png",
    categories: ["Deportivo"],
    featured: false,
    bookingUrl: "https://wa.me/5215614379653?text=Hola,%20quiero%20reservar%20un%20Masaje%20Deportivo",
    benefits: [
      "Mejora del rendimiento muscular",
      "Aceleración de la recuperación post-entrenamiento",
      "Prevención de lesiones por sobrecarga",
      "Aumento de la elasticidad de tejidos",
    ]
  },
  {
    id: "fb-prenatal",
    title: "Masaje Prenatal",
    slug: "masaje-prenatal",
    shortDescription: "Alivio y relajación ideal para futuras mamás, con técnicas suaves que reducen inflamaciones y dolores de espalda.",
    description: "El masaje ideal para una nueva mamá, ritmo lento pases suaves que ayudan a la inflamación and dolores musculares.",
    price: "1200",
    duration: "60/90/120",
    image: "/imagenes/masaje-prenatal.png",
    categories: ["Relajación", "Maternidad"],
    featured: false,
    bookingUrl: "https://wa.me/5215614379653?text=Hola,%20quiero%20reservar%20un%20Masaje%20Prenatal",
    benefits: [
      "Alivio de tensión lumbar e inflamación en piernas",
      "Reducción de hormonas del estrés",
      "Mejora de la calidad del sueño",
      "Posicionamiento seguro para madre y bebé",
    ]
  },
  {
    id: "fb-piedras-calientes",
    title: "Piedras Calientes",
    slug: "piedras-calientes",
    shortDescription: "Experiencia sumamente relajante mediante piedras volcánicas a temperaturas controladas dispuestas sobre canales energéticos.",
    description: "Consiste en la aplicación de piedras de diferentes tamaños a distintas temperaturas sobre la piel a un ritmo lento siendo su principal función relajar.",
    price: "1590", // Only 90 min
    duration: "90",
    image: "/imagenes/masaje-de-piedras-calientes.png",
    categories: ["Especialidades"],
    featured: true,
    bookingUrl: "https://wa.me/5215614379653?text=Hola,%20quiero%20reservar%20un%20Masaje%20de%20Piedras%20Calientes",
    benefits: [
      "Relajación muscular térmica profunda",
      "Reducción notable de la ansiedad y el estrés",
      "Eliminación de toxinas por sudoración y calor",
      "Efecto sedativo del sistema nervioso",
    ]
  },
  {
    id: "fb-drenaje",
    title: "Drenaje Linfático",
    slug: "drenaje-linfatico",
    shortDescription: "Movimientos rítmicos muy suaves y armónicos para depurar toxinas del organismo y mejorar la circulación linfática.",
    description: "Movimientos lentos y armónicos su principal función es depurar el organismo su y mejorar la circulación.",
    price: "1200",
    duration: "60/90/120",
    image: "/imagenes/descarga (4).jpg",
    categories: ["Terapéutico", "Salud"],
    featured: false,
    bookingUrl: "https://wa.me/5215614379653?text=Hola,%20quiero%20reservar%20un%20Drenaje%20Linfático",
    benefits: [
      "Depuración del sistema linfático",
      "Reducción de retención de líquidos e hinchazón",
      "Fortalece el sistema inmunológico",
      "Mejora la salud y textura de la piel",
    ]
  },
  {
    id: "fb-ventosas",
    title: "Masaje con Ventosas",
    slug: "masaje-con-ventosas",
    shortDescription: "Técnica de presión media con pases precisos y ventosas de vidrio para descontracturar fibras y mejorar la circulación.",
    description: "Técnica de masaje de presión media con pases precisos para descontracturar fibras musculares, acompañada de ventosas de vidrio aplicadas mediante calor controlado. Ayuda a aliviar tensiones, mejorar la circulación, favorecer la recuperación muscular y brindar una profunda sensación de bienestar y relajación.",
    price: "1300",
    duration: "60",
    image: "/imagenes/masaje-de-ventosas.png",
    categories: ["Terapéutico", "Relajación"],
    featured: true,
    bookingUrl: "https://wa.me/5215614379653?text=Hola,%20quiero%20reservar%20un%20Masaje%20con%20Ventosas",
    benefits: [
      "Alivio de tensiones musculares profundas",
      "Mejora de la circulación sanguínea",
      "Favorece la recuperación muscular rápida",
      "Sensación de bienestar y relajación profunda"
    ]
  },
  {
    id: "fb-post-quirurgica",
    title: "Terapia Post Quirúrgica",
    slug: "terapia-post-quirurgica",
    shortDescription: "Protocolo integral postoperatorio: drenaje linfático, ultrasonido, radiofrecuencia y vendaje para acelerar la cicatrización.",
    description: "Después de una cirugía de remodelación corporal, gran parte del resultado final depende de una adecuada rehabilitación postoperatoria. Nuestro protocolo está diseñado para favorecer una recuperación segura, reducir la inflamación y optimizar los resultados obtenidos. Incluye drenaje linfático manual, ultrasonido terapéutico (USG), presoterapia, radiofrecuencia, curaciones y aplicación de vendaje kinesiológico, herramientas que ayudan a acelerar la recuperación, mejorar la cicatrización y definir mejor los contornos corporales.",
    price: "1300",
    duration: "60",
    image: "/imagenes/terapia-post-quirurgica.png",
    categories: ["Terapéutico", "Rehabilitación"],
    featured: true,
    bookingUrl: "https://wa.me/5215614379653?text=Hola,%20quiero%20reservar%20una%20Terapia%20Post%20Quirúrgica",
    benefits: [
      "Reducción de inflamación y edemas",
      "Aceleración de la cicatrización interna",
      "Definición mejorada de contornos corporales",
      "Prevención de fibrosis tisular"
    ]
  },
  {
    id: "fb-consulta-fisioterapia",
    title: "Consulta Fisioterapia",
    slug: "consulta-fisioterapia",
    shortDescription: "Rehabilitación a domicilio personalizada para mejorar movilidad, aliviar dolor y acelerar la recuperación física.",
    description: "Recupera tu bienestar sin salir de casa. Aplicamos múltiples técnicas de rehabilitación enfocadas en mejorar la movilidad, fortalecer músculos y articulaciones, aliviar molestias y acelerar los procesos de recuperación. Cada sesión se adapta a tus necesidades específicas, ayudándote a recuperar funcionalidad, disminuir el dolor y mejorar tu calidad de vida de manera segura y profesional.",
    price: "1000",
    duration: "60",
    image: "/imagenes/consulta-fisioterapia.png",
    categories: ["Fisioterapia", "Rehabilitación"],
    featured: false,
    bookingUrl: "https://wa.me/5215614379653?text=Hola,%20quiero%20reservar%20una%20Consulta%20de%20Fisioterapia",
    benefits: [
      "Evaluación y tratamiento personalizado",
      "Mejora de la movilidad articular",
      "Fortalecimiento de músculos clave",
      "Disminución del dolor de manera profesional"
    ]
  },
  {
    id: "fb-yoga-facial",
    title: "Yoga Facial",
    slug: "yoga-facial",
    shortDescription: "Estimulación y tonificación de músculos faciales para definir contornos, drenar líquidos y rejuvenecer la piel.",
    description: "Técnica natural enfocada en estimular y movilizar los músculos del rostro mediante maniobras específicas que ayudan a tonificar la piel, favorecer el drenaje de líquidos retenidos y mejorar la circulación facial. Contribuye a definir los contornos del rostro, mejorar su apariencia, brindar mayor luminosidad y promover una sensación de frescura y rejuvenecimiento de forma relajante y no invasiva.",
    price: "700",
    duration: "40",
    image: "/imagenes/yoga-facial.png",
    categories: ["Estética", "Relajación"],
    featured: false,
    bookingUrl: "https://wa.me/5215614379653?text=Hola,%20quiero%20reservar%20una%20sesión%20de%20Yoga%20Facial",
    benefits: [
      "Tonificación natural de la piel del rostro",
      "Drenaje de líquidos retenidos y desinflamación",
      "Estimulación de la circulación facial",
      "Mayor luminosidad y frescura rejuvenecedora"
    ]
  },
  {
    id: "fb-reflexologia-podal",
    title: "Reflexología Podal",
    slug: "reflexologia-podal",
    shortDescription: "Estimulación de puntos reflexológicos en pies para equilibrar el organismo, reducir estrés y mejorar circulación.",
    description: "Terapia basada en la estimulación de puntos específicos ubicados en las plantas de los pies, los cuales están relacionados con diferentes órganos y sistemas del cuerpo. A través de técnicas de presión controlada, ayuda a promover el equilibrio general, favorecer la relajación y estimular los procesos naturales de bienestar. Sus beneficios pueden reflejarse en todo el organismo, contribuyendo a disminuir el estrés, mejorar la circulación y generar una agradable sensación de armonía y descanso.",
    price: "900",
    duration: "50",
    image: "/imagenes/reflexologia-podal.png",
    categories: ["Terapéutico", "Relajación"],
    featured: false,
    bookingUrl: "https://wa.me/5215614379653?text=Hola,%20quiero%20reservar%20una%20sesión%20de%20Reflexología%20Podal",
    benefits: [
      "Disminución del estrés y la tensión mental",
      "Estimulación de procesos naturales de bienestar",
      "Mejora de la circulación en extremidades",
      "Genera agradable armonía y descanso"
    ]
  }
];

// FAQs extracted exactly from preguntas frec.pdf
export const fallbackFAQs: FAQItem[] = [
  {
    id: 1,
    question: "¿CÓMO AGENDO MI MASAJE?",
    answer: "Es muy sencillo, descarga nuestra app de tu tienda de aplicaciones o de nuestro sitio web y sigue los pasos para seleccionar tu masaje, no te preocupes por nada nosotros llevamos lo necesario para crear el spa en tu casa.",
    category: "booking"
  },
  {
    id: 2,
    question: "¿QUÉ TIPOS DE MASAJES OFRECEN?",
    answer: "Contamos con 4 diferentes técnicas cada una especializada para cada una de tus necesidades (Relajante, Descontracturante, Deportivo, Drenaje Linfático, Prenatal y Piedras Calientes). De igual manera tenemos duraciones distintas vamos de 60 min, 90min y por ultimo 120 min.",
    category: "booking"
  },
  {
    id: 3,
    question: "¿QUIÉN SERÁ MI TERAPEUTA?",
    answer: "Todos nuestros terapeutas están certificados y cuentan con un mínimo de 5 años de experiencia en las 4 técnicas con las que contamos, puedes estar seguro de estar en manos de un profesional.",
    category: "therapists"
  },
  {
    id: 4,
    question: "¿CÓMO ESTAR SEGURO DE PERMITIR LA ENTRADA A MI CASA POR UNO DE SUS TERAPEUTAS?",
    answer: "Pensando en tu seguridad, y en la de nuestro equipo tenemos diseñado un filtro para entrar a nuestro equipo que consta de pruebas psicológicas al mismo tiempo algunas pruebas toxicológicas para tu completa confianza.",
    category: "safety"
  },
  {
    id: 5,
    question: "¿PUEDO ELEGIR A UN TERAPEUTA EN ESPECIAL?",
    answer: "Claro sabemos que en tu experiencia con nosotros puedes encontrar un terapeuta en específico que sea de tu preferencia, puedes solicitarlo directamente en nuestra app en la parte de comentarios, sin embargo te recomendamos tener una o más opciones para que siempre encuentres disponibilidad.",
    category: "therapists"
  },
  {
    id: 6,
    question: "¿QUIÉN PUEDE RECIBIR UN MASAJE? (CONTRAINDICACIONES)",
    answer: "Aunque nuestros masajes son completamente relajantes y no involucramos ningún factor invasivo, tenemos que contarte algunas contraindicaciones que debes tomar en cuenta antes de reservar: Catarro o gripe o cualquier síntoma relacionado al COVID-19; Durante los primeros tres meses del embarazo; En intervenciones quirúrgicas de menos de 6 meses; Enfermedades infecciosas de la piel, dermatitis alérgica o quemaduras; Enfermedades vasculares; Inflamaciones agudas; Fibrosis y enfermedades musculares degenerativas; Cánceres en general; Enfermedades agudas del sistema nervioso; o cualquier otra condición médica que tu terapeuta considere como riesgosa.",
    category: "health"
  }
];

function applyProductionGuard(services: Service[]): Service[] {
  // Production pricing guard disabled per user request to display PDF prices by default
  return services;
}

// WooCommerce REST API Fetching Layer
export async function getServices(): Promise<Service[]> {
  const hasConfig = hasWooCommerceConfig();
  
  if (!hasConfig) {
    // If not configured, safely return protected fallback data for compilation/preview
    return applyProductionGuard(fallbackServices);
  }

  const url = process.env.NEXT_PUBLIC_WOOCOMMERCE_URL;
  const consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY;
  const consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET;

  try {
    const authString = btoa(`${consumerKey}:${consumerSecret}`);
    const response = await fetch(`${url}/wp-json/wc/v3/products?status=publish&per_page=50`, {
      headers: {
        "Authorization": `Basic ${authString}`,
        "Content-Type": "application/json"
      },
      next: { revalidate: 3600 } // ISR every 1 hour
    });

    if (!response.ok) {
      throw new Error(`WooCommerce API error: ${response.statusText}`);
    }

    const products = await response.json();
    
    // Map WooCommerce products to our Service interface
    const mappedServices: Service[] = products.map((prod: any) => {
      // Find duration in attributes, if any
      const durationAttr = prod.attributes?.find((attr: any) => 
        attr.name.toLowerCase() === "duración" || attr.name.toLowerCase() === "duration"
      );
      const durationVal = durationAttr ? durationAttr.options.join("/") : "60/90/120";

      // Extra benefits from WooCommerce product tags or set defaults
      const tags = prod.tags?.map((t: any) => t.name) || [];
      const benefits = tags.length > 0 ? tags : [
        "Terapeuta profesional certificado",
        "Servicio directo en tu ubicación",
        "Equipo spa completo incluido",
        "Experiencia personalizada"
      ];

      return {
        id: prod.id,
        title: prod.name,
        slug: prod.slug,
        shortDescription: prod.short_description?.replace(/<[^>]*>/g, "") || "",
        description: prod.description?.replace(/<[^>]*>/g, "") || "",
        price: prod.price || "",
        duration: durationVal,
        image: prod.images?.[0]?.src || "/imagenes/descarga.jpg",
        categories: prod.categories?.map((c: any) => c.name) || ["Masajes"],
        featured: prod.featured || false,
        bookingUrl: prod.external_url || prod.permalink || "",
        benefits: benefits,
      };
    });

    return mappedServices;
  } catch (error) {
    console.error("Failed to fetch services from WooCommerce, falling back to static:", error);
    return applyProductionGuard(fallbackServices);
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getServices();
  const service = services.find(s => s.slug === slug);
  return service || null;
}
