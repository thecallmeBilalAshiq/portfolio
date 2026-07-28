export const projectCategories = [
  { key: 'all', label: 'All Projects' },
  { key: 'freelance', label: 'Freelance & Client' },
  { key: 'ai', label: 'AI & Machine Learning' },
  { key: 'web', label: 'Web & Full-Stack' },
  { key: 'security', label: 'Security & Privacy' }
];

export const projectsData = [
  {
    id: 'comfort-studio-uk',
    title: 'Comfort Studio UK - Furniture Store',
    subtitle: 'High-end furniture & interior design custom shopping platform',
    description: 'Full-stack e-commerce web app for UK client, with responsive UI, SEO optimization, secure authentication, admin dashboard, and order management.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=380&fit=crop',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'Firebase', 'PostgreSQL', 'Freelance'],
    categories: ['freelance', 'web'],
    demoUrl: 'https://comfortstudio.co.uk',
    githubUrl: 'https://comfortstudio.co.uk',
    badge: 'Client Project',
    featured: true,

    heroBanner: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=500&fit=crop',
    problemStatement: 'UK clients needed an ultra-responsive, mobile-optimized luxury online store with dynamic product variations and dynamic fabric customization.',
    solution: 'Built a high-performance e-commerce platform integrated with Supabase and custom order workflows.',
    features: [
      'Responsive luxury UI design & dynamic mobile navbar',
      'Dynamic fabric & finish selector preview modal',
      'Admin management dashboard for products and orders',
      'Custom SEO optimization and meta tags'
    ],
    architectureDiagram: 'Next.js Frontend -> Supabase API -> PostgreSQL DB',
    challenges: 'Optimizing high-resolution furniture image delivery across UK broadband networks.',
    lessonsLearned: 'Mastering e-commerce cart state caching and responsive luxury brand UI/UX patterns.'
  },
  {
    id: 'career-proserve',
    title: 'Career ProServe - Recruitment & B2B Platform',
    subtitle: 'Enterprise job application & mystery shopper management platform',
    description: 'Developed a full-stack corporate/executive recruitment platform for CEO/Founder featuring job postings, future jobs, training management, mystery shopper services, admin dashboard, role-based access, and CSV/Excel reporting.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=380&fit=crop',
    tags: ['Next.js', 'Cloudinary', 'PostgreSQL', 'Supabase', 'Freelance'],
    categories: ['freelance', 'web'],
    demoUrl: 'https://careerproserve.vercel.app',
    githubUrl: 'https://careerproserve.vercel.app',
    badge: 'Enterprise Platform',
    featured: true,

    heroBanner: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&h=500&fit=crop',
    problemStatement: 'Managing candidate pools, mystery shopper reports, and corporate training signups via legacy spreadsheets created data silos and processing delays.',
    solution: 'Designed an integrated corporate portal featuring status workflows, filtered data views, and multi-format Excel export.',
    features: [
      'Interactive Admin Dashboard with Accepted/Rejected status controls',
      'Excel & CSV reporting generation across applicant modules',
      'Role-based security access & Cloudinary document uploads',
      'High-contrast executive light-mode interface'
    ],
    architectureDiagram: 'Next.js App -> Cloudinary Storage -> Supabase Postgres',
    challenges: 'Implementing robust role-based access control and persistent status state sync across admin sessions.',
    lessonsLearned: 'Building enterprise-ready data tables with seamless search, sort, and batch export capabilities.'
  },
  {
    id: 'mashoor-fabrics',
    title: 'Mashoor Fabrics - E-Commerce Store',
    subtitle: 'Full-scale online clothing store with automated inventory sync',
    description: 'Built a full-scale online clothing store (paid freelance project) with catalog, shopping cart, checkout, order tracking, payment integration, real-time inventory management, and custom SEO optimizations.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=380&fit=crop',
    tags: ['WordPress', 'WooCommerce', 'E-Commerce', 'Freelance Project', 'SEO'],
    categories: ['freelance', 'web'],
    demoUrl: 'https://mashoorfabrics.com',
    githubUrl: 'https://mashoorfabrics.com',
    badge: 'E-Commerce Store',
    featured: true,

    heroBanner: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop',
    problemStatement: 'Traditional textile retailers lacked digital payment gateways and dynamic inventory stock management.',
    solution: 'Custom WooCommerce architecture with real-time stock sync and localized checkout gateways.',
    features: [
      'Custom textile product gallery & variation swatches',
      'Integrated payment gateways and localized shipping rules',
      'Real-time inventory stock management & order alerts',
      'On-page SEO optimization for local search engines'
    ],
    architectureDiagram: 'WooCommerce Core -> Payment Gateway API -> Client Browser',
    challenges: 'Configuring custom shipping cost matrices for nationwide textile deliveries.',
    lessonsLearned: 'Optimizing high-traffic checkout flows and database query caching in e-commerce.'
  },
  {
    id: 'neurohire',
    title: 'NeuroHire - AI based Proctoring & Hiring System',
    subtitle: 'Autonomous candidate matching & computer vision proctoring engine',
    description: 'AI-powered hiring system with automated job posting, CV parsing, candidate scoring, and online tests with webcam head/eye tracking and post-hiring training modules.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=380&fit=crop',
    tags: ['MERN', 'Next.js', 'Python (AI)', 'Computer Vision', 'CV Parsing'],
    categories: ['ai', 'web'],
    demoUrl: 'https://neurohireofficial-zeta.vercel.app/',
    githubUrl: 'https://neurohireofficial-zeta.vercel.app/',
    dateBadge: 'Aug 2025 – July 2026',
    badge: 'Featured AI Project',
    featured: true,

    heroBanner: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=500&fit=crop',
    problemStatement: 'Remote technical screening suffers from high proctoring overhead and manual resume screening biases.',
    solution: 'Integrated PyTorch computer vision tracking with automated resume parsing and candidate ranking.',
    features: [
      'Automated PDF & DOCX Resume Parsing with OCR extraction',
      'Real-time webcam head pose & eye gaze gaze tracking proctoring',
      'AI interview simulator with automated scoring engine',
      'Recruiter Dashboard with exportable candidate analytics'
    ],
    architectureDiagram: 'Next.js Client -> Python OpenCV/PyTorch Service -> MERN Backend Database',
    challenges: 'Optimizing real-time gaze detection FPS without taxing candidate web browser hardware.',
    lessonsLearned: 'Fine-tuning computer vision model thresholds for browser WebRTC streams.'
  },
  {
    id: 'neurosecure',
    title: 'NeuroSecure - Physical Privacy System',
    subtitle: 'AI-powered shoulder surfing & unauthorized screen viewer detection',
    description: 'An AI-powered physical privacy protection system using Python, OpenCV, YOLO, and MediaPipe to detect shoulder surfing and unauthorized screen viewing in real time.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=380&fit=crop',
    tags: ['Python', 'OpenCV', 'YOLO', 'MediaPipe', 'Real-Time AI'],
    categories: ['security', 'ai'],
    demoUrl: 'https://incomparable-wisp-91385a.netlify.app/',
    githubUrl: 'https://incomparable-wisp-91385a.netlify.app/',
    badge: 'Privacy Security',
    featured: true,

    heroBanner: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=500&fit=crop',
    problemStatement: 'Sensitive financial and technical screens are vulnerable to unauthorized over-the-shoulder visual eavesdropping.',
    solution: 'Deployed lightweight YOLO & MediaPipe pose detectors to automatically blur screens when multiple faces are detected.',
    features: [
      'Instant screen blur trigger upon multi-face detection',
      'Real-time webcam video stream spatial distance scoring',
      'Custom threat confidence threshold dashboard',
      'Zero-cloud local device inference for maximum privacy'
    ],
    architectureDiagram: 'Webcam Stream -> OpenCV Frame Capture -> MediaPipe / YOLO -> Screen Blur Trigger',
    challenges: 'Eliminating false-positive triggers from background poster portraits.',
    lessonsLearned: 'Implementing head pose orientation angle filters to distinguish onlookers from active users.'
  },
  {
    id: 'viewtoverse',
    title: 'ViewToVerse - Image Captioning System',
    subtitle: 'Seq2Seq ResNet50 + LSTM neural captioning model trained on Flickr30k',
    description: 'A Seq2Seq image captioning system using ResNet50 feature extraction. Deployed LSTM decoder trained on Flickr30k dataset, achieving BLEU-4 score of 0.64.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=380&fit=crop',
    tags: ['PyTorch', 'ResNet50', 'LSTM', 'Seq2Seq', 'Flickr30k'],
    categories: ['ai'],
    demoUrl: 'https://huggingface.co/spaces/methebilalashiq/storyteller_image_caption_generator',
    githubUrl: 'https://huggingface.co/spaces/methebilalashiq/storyteller_image_caption_generator',
    badge: 'HuggingFace Deployed',
    featured: false,

    heroBanner: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=500&fit=crop',
    problemStatement: 'Generating natural, grammatically coherent English captions for high-complexity unlabelled photographs.',
    solution: 'Combined a pre-trained ResNet50 CNN encoder with a attention-based LSTM text decoder.',
    features: [
      'ResNet50 visual feature vector extraction layer',
      'LSTM decoder with word embedding lookup tables',
      'Interactive Gradio web demo deployed on HuggingFace Spaces',
      'Achieved competitive BLEU-4 validation score of 0.64'
    ],
    architectureDiagram: 'Input Image -> ResNet50 Encoder -> Feature Vector -> LSTM Decoder -> Output Caption',
    challenges: 'Managing sequence padding and vocabulary coverage across large text corpora.',
    lessonsLearned: 'Deep understanding of encoder-decoder neural network architectures and BLEU evaluation metrics.'
  },
  {
    id: 'urdu-chatbot',
    title: 'Urdu Conversational Chatbot',
    subtitle: 'Low-resource NLP Transformer with Multi-Head Attention',
    description: 'Built a Transformer-based Urdu chatbot with custom preprocessing and modeling for low-resource NLP. Trained in PyTorch and deployed with RTL support using Gradio on Hugging Face Spaces.',
    image: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?w=600&h=380&fit=crop',
    tags: ['Multi-Head Attention', 'Transformer', 'PyTorch', 'Gradio', 'Hugging Face'],
    categories: ['ai'],
    demoUrl: 'https://medium.com/@methebilalashiq/urdu-conversational-chatbot-transformer-with-multi-head-attention-21c939c3881c',
    githubUrl: 'https://medium.com/@methebilalashiq/urdu-conversational-chatbot-transformer-with-multi-head-attention-21c939c3881c',
    badge: 'NLP Research',
    featured: false,

    heroBanner: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?w=1200&h=500&fit=crop',
    problemStatement: 'Low-resource languages like Urdu lack high-quality pre-trained conversational models and right-to-left UI interfaces.',
    solution: 'Designed a ground-up multi-head attention Transformer trained on curated conversational Urdu datasets.',
    features: [
      'Custom BPE tokenization tuned for Urdu script dynamics',
      'Multi-head self-attention encoder-decoder PyTorch architecture',
      'RTL (Right-To-Left) responsive Gradio web interface',
      'Published engineering writeup on Medium'
    ],
    architectureDiagram: 'Urdu Text -> BPE Tokenizer -> Transformer Encoder/Decoder -> Gradio Output',
    challenges: 'Handling script normalization, diacritics removal, and vocabulary sparseness.',
    lessonsLearned: 'Building custom multi-head attention layers and publishing technical AI research articles.'
  },
  {
    id: 'rag-diagnostic',
    title: 'RAG for Diagnostic Reasoning',
    subtitle: 'Clinical Notes Reasoning System using MIMIC-IV-Ext-Direct',
    description: 'A RAG-based diagnostic system on clinical notes using the MIMIC-IV-Ext-Direct dataset. Integrated FAISS-powered search with a Flan-T5 model and deployed via Gradio interface.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=380&fit=crop',
    tags: ['RAG', 'FAISS', 'Flan-T5', 'Gradio', 'MIMIC-IV'],
    categories: ['ai'],
    demoUrl: 'https://colab.research.google.com/drive/1U80EqNr8c_4gPB-uZbISr2e1ukDxPeGM?usp=sharing',
    githubUrl: 'https://colab.research.google.com/drive/1U80EqNr8c_4gPB-uZbISr2e1ukDxPeGM?usp=sharing',
    badge: 'Healthcare AI',
    featured: false,

    heroBanner: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=500&fit=crop',
    problemStatement: 'Extracting precise clinical diagnostic signals from unstructured hospital electronic health records (EHR).',
    solution: 'Engineered a Retrieval-Augmented Generation (RAG) pipeline coupling FAISS vector index with Google Flan-T5 model.',
    features: [
      'Vector indexing of MIMIC-IV clinical notes with FAISS',
      'Flan-T5 LLM context-conditioned diagnostic generation',
      'Colab Notebook & Gradio interface deployment',
      'Hallucination reduction through strict medical context grounding'
    ],
    architectureDiagram: 'Clinical Query -> FAISS Similarity Search -> Relevant Notes -> Flan-T5 LLM -> Diagnosis',
    challenges: 'Handling noisy medical abbreviations and protecting sensitive patient EHR schemas.',
    lessonsLearned: 'Mastering RAG chunking strategies, vector similarity metrics, and LLM prompt engineering.'
  },
  {
    id: 'phishing-hunter',
    title: 'Phishing Hunter – AI & Security',
    subtitle: 'GPT-2 URL Classification for Phishing & Defacement Detection',
    description: 'Developed an Information Security project using GPT-2 to classify URLs as benign, defacement, or phishing. Fine-tuned model with custom tokenization and tokens for accurate URL classification.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=380&fit=crop',
    tags: ['GPT-2', 'NLP', 'URL Classification', 'Security'],
    categories: ['security', 'ai'],
    demoUrl: 'https://github.com/thecallmeBilalAshiq/Phishing-Hunter',
    githubUrl: 'https://github.com/thecallmeBilalAshiq/Phishing-Hunter',
    badge: 'InfoSec AI',
    featured: false,

    heroBanner: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=500&fit=crop',
    problemStatement: 'Cybercriminals create obfuscated phishing URLs that evade traditional rule-based web firewall filters.',
    solution: 'Fine-tuned a GPT-2 transformer decoder model on structural character sequences of malicious web links.',
    features: [
      'Character-level tokenization for URL structure analysis',
      'Multi-class classification (Benign, Malware, Phishing, Defacement)',
      'High accuracy evaluation metrics on benchmark security datasets',
      'Open-source GitHub repository release'
    ],
    architectureDiagram: 'Target URL -> Character Tokenizer -> GPT-2 Transformer -> Risk Category Class',
    challenges: 'Training transformers on highly variable length URL strings without overfitting.',
    lessonsLearned: 'Fine-tuning transformer models for cybersecurity classification tasks.'
  },
  {
    id: 'food-point',
    title: 'Food Point Front-End UI/UX',
    subtitle: 'Modern food ordering application prototype designed in Figma',
    description: 'Designed a user-friendly and modern food ordering application prototype in Figma with a clean layout, intuitive navigation, and beautiful interface elements.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=380&fit=crop',
    tags: ['Figma', 'UI/UX Design', 'Prototyping', 'Wireframing'],
    categories: ['web'],
    demoUrl: 'https://www.figma.com/proto/RkTfVWt9YvhO9O8GN4plJz/Chomsky-Chaska-Point?node-id=1-293&p=f&t=tepRk9sPaQAeJFtU-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A293',
    githubUrl: 'https://www.figma.com/proto/RkTfVWt9YvhO9O8GN4plJz/Chomsky-Chaska-Point?node-id=1-293&p=f&t=tepRk9sPaQAeJFtU-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A293',
    badge: 'UI/UX Design',
    featured: false,

    heroBanner: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=500&fit=crop',
    problemStatement: 'Food delivery applications often clutter navigation menus, frustrating hungry users.',
    solution: 'Created a high-fidelity interactive Figma prototype prioritizing speed, clear imagery, and micro-interactions.',
    features: [
      'Interactive Figma flow prototype with working screen transitions',
      'Mobile-first responsive wireframes and layout system',
      'Custom icon set & high-contrast food item cards',
      'Design system design tokens for colors & typography'
    ],
    architectureDiagram: 'Figma Wireframes -> Component Design System -> Interactive Prototype Flow',
    challenges: 'Designing smooth animated menu drawer interactions in Figma.',
    lessonsLearned: 'User-centered design principles, spatial layout design systems, and rapid prototyping.'
  }
];
