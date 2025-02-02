import Molarmind from '../assets/projects/molarmind.png';
import Molar from '../assets/projects/molar.png';
import Galaxy from '../assets/projects/Galaxy.png';

export interface Project {
    title: string;
    slug: string;
    description: string;
    thumbnail: string;
    fullDescription: string;
    images: string[];
}


export const projects: Project[] = [
    {
        title: "MolarMind AI",
        slug: "molarmind-ai",
        description:
            "An advanced AI-powered dental diagnostic platform leveraging cutting-edge technologies for unprecedented diagnostic capabilities.",
        thumbnail: Molarmind,
        fullDescription: `MolarMind is an advanced AI-powered dental diagnostic platform leveraging cutting-edge technologies to transform healthcare professional workflows. By integrating LangChain, custom YOLO object detection, and Google Gemini 1.5 API, the platform provides unprecedented diagnostic capabilities.
  
  Key features include:
  - <strong>Vector embedding</strong> of medical databases
  - <strong>Intelligent chatbot</strong> for clinical queries
  - <strong>AI-powered dental image analysis</strong>
  - <strong>Automated comprehensive diagnostic reporting</strong>
  - <strong>HIPAA-compliant</strong> data management
  
  The system can detect subtle dental abnormalities with exceptional precision, offering insights that traditional diagnostic methods might miss.
          challenges: Developing a medical AI diagnostic tool presented multifaceted technical challenges:
  - Training YOLO model to recognize <strong>minute dental anomalies</strong>
  - Collecting and annotating <strong>30,000+ specialized medical images</strong>
  - Implementing rigorous <strong>model validation processes</strong>
  - Ensuring <strong>absolute precision</strong> in medical image interpretation
  - Maintaining <strong>strict HIPAA compliance</strong>
  - Optimizing AI performance across diverse dental imaging conditions
  
  Each challenge required intensive collaboration with dental professionals and continuous algorithmic refinement.
          journey: MolarMind emerged from a <strong>personal mission to revolutionize dental diagnostics</strong>. What began as a late-night prototype quickly transformed into a powerful platform through relentless innovation and collaboration.
  
  Breakthrough moments included:
  - First successful anomaly detection
  - Integration of advanced machine learning techniques
  - Validation from early-adopting dental practices
  - Recognition of AI's potential to enhance diagnostic accuracy
  
  The project transcended technical development, becoming a testament to technology's power in healthcare.`,
        images: [Molarmind, "/images/molarmind2.png", "/images/molarmind3.png"]

    },
    {
        title: "Galaxy Family Dental",
        slug: "galaxy-family-dental",
        description:
            "A sophisticated web solution integrating advanced SEO strategies, responsive design, and comprehensive digital marketing optimization.",
        thumbnail: Galaxy,
        fullDescription: `Galaxy Family Dental's digital platform represents a sophisticated web solution integrating advanced SEO strategies, responsive design, and comprehensive digital marketing optimization.
  
  Core platform capabilities:
  - <strong>Custom content management system</strong>
  - Advanced SEO pre-rendering techniques
  - Real-time Google Analytics integration
  - <strong>Responsive, mobile-first design</strong>
  - Performance-optimized web architecture
  
  The platform delivers enhanced online visibility and user engagement for dental practice digital presence.,
          challenges: Developing a high-performance dental practice website involved overcoming significant technical obstacles:
  - Implementing <strong>pixel-perfect responsive design</strong>
  - Achieving <strong>sub-100ms page load times</strong>
  - Creating advanced SEO crawling strategies
  - Developing <strong>flexible content management architecture</strong>
  - Ensuring cross-device compatibility
  - Optimizing search engine visibility
  
  Each challenge required innovative technical solutions and meticulous implementation.,
          journey: The Galaxy Family Dental project evolved through <strong>strategic digital transformation</strong>, turning a traditional web presence into a powerful marketing tool.
  
  Key milestones included:
  - Initial digital strategy development
  - User experience research
  - Iterative design refinement
  - Performance optimization techniques
  - Successful digital marketing integration
  
  The project demonstrated how thoughtful technology can revolutionize business digital strategies.`,
        images: [Galaxy, "/images/galaxy2.png", "/images/galaxy3.png"]
    },
    {
        title: "MolarMind Mobile",
        slug: "molarmind-mobile",
        description:
            "A cutting-edge mobile application that delivers advanced dental diagnostic capabilities through edge computing and mobile AI technologies.",
        thumbnail: Molar,
        fullDescription: `MolarMind Mobile delivers advanced dental diagnostic capabilities through a cutting-edge mobile application, leveraging edge computing and mobile AI technologies.
  
  Key technological innovations:
  - <strong>On-device machine learning inference</strong>
  - Real-time dental image analysis
  - Adaptive model quantization
  - Distributed computing principles
  - Seamless data synchronization
  
  The application enables healthcare professionals to perform complex diagnostic tasks directly from mobile devices.,
          challenges: Translating complex AI models to mobile platforms presented unprecedented computational challenges:
  - Reducing model size by <strong>70% while maintaining 95% accuracy</strong>
  - Developing adaptive inference pipelines
  - Implementing <strong>cross-device computational strategies</strong>
  - Ensuring consistent performance across varied mobile hardware
  - Managing computational resource allocation
  - Maintaining high-accuracy diagnostic capabilities
  
  Each challenge required innovative edge computing and machine learning techniques.,
          journey: The mobile development journey represented a <strong>mission to democratize advanced diagnostic technologies</strong> through mobile platforms.
  
  Significant achievements included:
  - Breakthrough in mobile AI implementation
  - Successful edge computing strategies
  - Dynamic resource allocation techniques
  - Validation from healthcare professionals
  
  The project demonstrated mobile technology's potential in transforming medical diagnostics.`,
        images: [Molar, "/images/molar2.png", "/images/molar3.png"]
    },
];