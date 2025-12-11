export type Language = "en" | "hi" | "mr"

export interface Translations {
  // Navigation
  nav: {
    home: string
    analyze: string
    analyzeDocument: string
    lawOfTheDay: string
    compareStates: string
    quiz: string
    findLawyers: string
    privacy: string
    savedCases: string
    chat: string
    lawyers: string
  }
  // Hero Section
  hero: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    uploadButton: string
    demoButton: string
    privacyNote: string
    trustedBy: string
  }
  // CTA Section
  cta: {
    badge: string
    title: string
    subtitle: string
    uploadButton: string
    demoButton: string
    compareButton: string
    lawOfDayButton: string
  }
  // Footer
  footer: {
    tagline: string
    securePrivate: string
    product: string
    legal: string
    support: string
    privacyPolicy: string
    terms: string
    disclaimer: string
    faq: string
    contact: string
    helpCenter: string
    informational: string
    copyright: string
  }
  // Common
  common: {
    loading: string
    error: string
    retry: string
    save: string
    cancel: string
    submit: string
    search: string
    filter: string
    all: string
    learnMore: string
    viewAll: string
    back: string
    next: string
    previous: string
    close: string
    download: string
    share: string
    copy: string
    copied: string
    bookmarked: string
    removed: string
  }
  // Analyze Page
  analyze: {
    title: string
    subtitle: string
    uploadTitle: string
    uploadSubtitle: string
    dragDrop: string
    orBrowse: string
    supportedFormats: string
    analyzing: string
    step1: string
    step2: string
    step3: string
    step4: string
    results: string
    riskLevel: string
    low: string
    medium: string
    high: string
    critical: string
    keyDetails: string
    missingInfo: string
    legalSections: string
    plainEnglish: string
    legalText: string
    stateNotes: string
    timeline: string
    nextSteps: string
    exportPdf: string
    askQuestion: string
  }
  // Compare Page
  compare: {
    title: string
    subtitle: string
    selectSection: string
    state1: string
    state2: string
    compareButton: string
    comparing: string
    penalty: string
    compoundingFee: string
    licenseImpact: string
    vehicleImpact: string
    courtProcedure: string
    stateNotes: string
    keyDifferences: string
    recommendation: string
  }
  // Quiz Page
  quiz: {
    title: string
    subtitle: string
    selectState: string
    beginner: string
    intermediate: string
    scenario: string
    questions: string
    startQuiz: string
    question: string
    of: string
    timeLeft: string
    lifeline: string
    score: string
    correct: string
    incorrect: string
    explanation: string
    legalRef: string
    nextQuestion: string
    viewResults: string
    yourScore: string
    retake: string
    backToQuiz: string
  }
  // Lawyers Page
  lawyers: {
    title: string
    subtitle: string
    searchPlaceholder: string
    filterByState: string
    filterByPractice: string
    filterByFee: string
    verified: string
    available: string
    unavailable: string
    experience: string
    years: string
    languages: string
    practiceAreas: string
    consultationFee: string
    proBono: string
    lowCost: string
    private: string
    contact: string
    viewProfile: string
    disclaimer: string
  }
  // Law of the Day
  lawOfDay: {
    title: string
    subtitle: string
    featured: string
    todaysLaw: string
    penalty: string
    stateVariations: string
    varies: string
    uniform: string
    importantNote: string
    learnMore: string
    getAnother: string
    bookmark: string
    bookmarked: string
    myLibrary: string
    noBookmarks: string
    categories: string
    traffic: string
    ipc: string
    consumer: string
    cyber: string
    civil: string
    property: string
    verifiedSource: string
  }
  // Chat
  chat: {
    title: string
    subtitle: string
    placeholder: string
    send: string
    thinking: string
    suggestedQuestions: string
    disclaimer: string
  }
  // Language
  language: {
    select: string
    english: string
    hindi: string
    marathi: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      analyze: "Analyze",
      analyzeDocument: "Analyze Document",
      lawOfTheDay: "Law of the Day",
      compareStates: "Compare States",
      quiz: "Quiz",
      findLawyers: "Find Lawyers",
      privacy: "Privacy",
      savedCases: "Saved Cases",
      chat: "Chat",
      lawyers: "Lawyers",
    },
    hero: {
      badge: "AI-Powered Legal Assistant",
      title: "Understand Legal Documents",
      titleHighlight: "Instantly",
      subtitle:
        "Upload any legal document and get instant, state-specific explanations in plain English. Your data is never stored.",
      uploadButton: "Upload Document",
      demoButton: "See Demo",
      privacyNote: "Your documents are processed securely and never stored",
      trustedBy: "Trusted by legal professionals across India",
    },
    cta: {
      badge: "Ready to Get Started?",
      title: "Understand Your Legal Documents in Minutes",
      subtitle:
        "Upload any legal document and get instant, state-specific explanations in plain English. Your data is never stored.",
      uploadButton: "Upload Document Now",
      demoButton: "See Demo Analysis",
      compareButton: "Compare Laws Across States",
      lawOfDayButton: "Law of the Day",
    },
    footer: {
      tagline: "Your personal legal explainer. Simple, accurate, state-specific.",
      securePrivate: "100% Secure & Private",
      product: "Product",
      legal: "Legal",
      support: "Support",
      privacyPolicy: "Privacy Policy",
      terms: "Terms of Service",
      disclaimer: "Disclaimer",
      faq: "FAQ",
      contact: "Contact",
      helpCenter: "Help Center",
      informational: "This is an informational tool only. It does not provide legal advice.",
      copyright: "LegalEase AI. All rights reserved.",
    },
    common: {
      loading: "Loading...",
      error: "Something went wrong",
      retry: "Try Again",
      save: "Save",
      cancel: "Cancel",
      submit: "Submit",
      search: "Search",
      filter: "Filter",
      all: "All",
      learnMore: "Learn More",
      viewAll: "View All",
      back: "Back",
      next: "Next",
      previous: "Previous",
      close: "Close",
      download: "Download",
      share: "Share",
      copy: "Copy",
      copied: "Copied!",
      bookmarked: "Bookmarked!",
      removed: "Removed from library",
    },
    analyze: {
      title: "Document Analysis",
      subtitle: "Upload your legal document for instant AI-powered analysis",
      uploadTitle: "Upload Your Document",
      uploadSubtitle: "Drag and drop or click to upload",
      dragDrop: "Drag & drop your document here",
      orBrowse: "or click to browse",
      supportedFormats: "Supported: PDF, JPG, PNG (max 10MB)",
      analyzing: "Analyzing your document...",
      step1: "Extracting text",
      step2: "Identifying legal sections",
      step3: "Analyzing state-specific laws",
      step4: "Generating plain English summary",
      results: "Analysis Results",
      riskLevel: "Risk Level",
      low: "Low",
      medium: "Medium",
      high: "High",
      critical: "Critical",
      keyDetails: "Key Details",
      missingInfo: "Missing Information",
      legalSections: "Legal Sections",
      plainEnglish: "Plain English",
      legalText: "Legal Text",
      stateNotes: "State-Specific Notes",
      timeline: "Legal Timeline",
      nextSteps: "Next Steps",
      exportPdf: "Export PDF",
      askQuestion: "Ask a Question",
    },
    compare: {
      title: "Compare Laws Across States",
      subtitle: "See how the same law differs between Indian states",
      selectSection: "Legal Section",
      state1: "State 1",
      state2: "State 2",
      compareButton: "Compare",
      comparing: "Comparing laws...",
      penalty: "Penalty",
      compoundingFee: "Compounding Fee",
      licenseImpact: "License Impact",
      vehicleImpact: "Vehicle Impact",
      courtProcedure: "Court Procedure",
      stateNotes: "State-Specific Notes",
      keyDifferences: "Key Differences",
      recommendation: "Recommendation",
    },
    quiz: {
      title: "Legal Knowledge Quiz",
      subtitle: "Test your knowledge of Indian laws",
      selectState: "Select State",
      beginner: "Beginner",
      intermediate: "Intermediate",
      scenario: "Scenario",
      questions: "questions",
      startQuiz: "Start Quiz",
      question: "Question",
      of: "of",
      timeLeft: "Time Left",
      lifeline: "50:50 Lifeline",
      score: "Score",
      correct: "Correct",
      incorrect: "Incorrect",
      explanation: "Explanation",
      legalRef: "Legal Reference",
      nextQuestion: "Next Question",
      viewResults: "View Results",
      yourScore: "Your Score",
      retake: "Retake Quiz",
      backToQuiz: "Back to Quizzes",
    },
    lawyers: {
      title: "Find Verified Lawyers",
      subtitle: "Connect with legal professionals in your area",
      searchPlaceholder: "Search by name or specialization...",
      filterByState: "Filter by State",
      filterByPractice: "Practice Area",
      filterByFee: "Fee Type",
      verified: "Verified",
      available: "Available",
      unavailable: "Unavailable",
      experience: "Experience",
      years: "years",
      languages: "Languages",
      practiceAreas: "Practice Areas",
      consultationFee: "Consultation Fee",
      proBono: "Pro Bono",
      lowCost: "Low Cost",
      private: "Private",
      contact: "Contact",
      viewProfile: "View Profile",
      disclaimer: "LegalEase does not provide legal representation. We only facilitate connections.",
    },
    lawOfDay: {
      title: "Law of the Day",
      subtitle: "Learn one new law every day",
      featured: "Featured",
      todaysLaw: "Today's Law",
      penalty: "Penalty",
      stateVariations: "State Variations",
      varies: "Varies by state",
      uniform: "Uniform across India",
      importantNote: "Important Note",
      learnMore: "Learn More",
      getAnother: "Get Another Law",
      bookmark: "Bookmark",
      bookmarked: "Bookmarked",
      myLibrary: "My Library",
      noBookmarks: "No bookmarked laws yet",
      categories: "Categories",
      traffic: "Traffic",
      ipc: "IPC",
      consumer: "Consumer",
      cyber: "Cyber",
      civil: "Civil",
      property: "Property",
      verifiedSource: "Randomized • Verified Legal Source",
    },
    chat: {
      title: "Legal AI Assistant",
      subtitle: "Ask any legal question",
      placeholder: "Type your legal question...",
      send: "Send",
      thinking: "Thinking...",
      suggestedQuestions: "Suggested Questions",
      disclaimer: "This AI provides general information only, not legal advice.",
    },
    language: {
      select: "Language",
      english: "English",
      hindi: "हिंदी",
      marathi: "मराठी",
    },
  },
  hi: {
    nav: {
      home: "होम",
      analyze: "विश्लेषण",
      analyzeDocument: "दस्तावेज़ विश्लेषण",
      lawOfTheDay: "आज का कानून",
      compareStates: "राज्यों की तुलना",
      quiz: "क्विज़",
      findLawyers: "वकील खोजें",
      privacy: "गोपनीयता",
      savedCases: "सहेजे गए केस",
      chat: "चैट",
      lawyers: "वकील",
    },
    hero: {
      badge: "AI-संचालित कानूनी सहायक",
      title: "कानूनी दस्तावेज़ों को समझें",
      titleHighlight: "तुरंत",
      subtitle:
        "कोई भी कानूनी दस्तावेज़ अपलोड करें और सरल हिंदी में तुरंत, राज्य-विशिष्ट स्पष्टीकरण प्राप्त करें। आपका डेटा कभी संग्रहीत नहीं होता।",
      uploadButton: "दस्तावेज़ अपलोड करें",
      demoButton: "डेमो देखें",
      privacyNote: "आपके दस्तावेज़ सुरक्षित रूप से प्रोसेस किए जाते हैं और कभी संग्रहीत नहीं होते",
      trustedBy: "भारत भर के कानूनी पेशेवरों द्वारा विश्वसनीय",
    },
    cta: {
      badge: "शुरू करने के लिए तैयार?",
      title: "मिनटों में अपने कानूनी दस्तावेज़ समझें",
      subtitle: "कोई भी कानूनी दस्तावेज़ अपलोड करें और सरल हिंदी में तुरंत, राज्य-विशिष्ट स्पष्टीकरण प्राप्त करें।",
      uploadButton: "अभी दस्तावेज़ अपलोड करें",
      demoButton: "डेमो विश्लेषण देखें",
      compareButton: "राज्यों में कानूनों की तुलना करें",
      lawOfDayButton: "आज का कानून",
    },
    footer: {
      tagline: "आपका व्यक्तिगत कानूनी व्याख्याकर्ता। सरल, सटीक, राज्य-विशिष्ट।",
      securePrivate: "100% सुरक्षित और निजी",
      product: "उत्पाद",
      legal: "कानूनी",
      support: "सहायता",
      privacyPolicy: "गोपनीयता नीति",
      terms: "सेवा की शर्तें",
      disclaimer: "अस्वीकरण",
      faq: "सामान्य प्रश्न",
      contact: "संपर्क",
      helpCenter: "सहायता केंद्र",
      informational: "यह केवल एक सूचनात्मक उपकरण है। यह कानूनी सलाह प्रदान नहीं करता।",
      copyright: "LegalEase AI. सर्वाधिकार सुरक्षित।",
    },
    common: {
      loading: "लोड हो रहा है...",
      error: "कुछ गलत हो गया",
      retry: "पुनः प्रयास करें",
      save: "सहेजें",
      cancel: "रद्द करें",
      submit: "जमा करें",
      search: "खोजें",
      filter: "फ़िल्टर",
      all: "सभी",
      learnMore: "और जानें",
      viewAll: "सभी देखें",
      back: "वापस",
      next: "अगला",
      previous: "पिछला",
      close: "बंद करें",
      download: "डाउनलोड",
      share: "शेयर करें",
      copy: "कॉपी करें",
      copied: "कॉपी हो गया!",
      bookmarked: "बुकमार्क किया गया!",
      removed: "लाइब्रेरी से हटाया गया",
    },
    analyze: {
      title: "दस्तावेज़ विश्लेषण",
      subtitle: "तुरंत AI-संचालित विश्लेषण के लिए अपना कानूनी दस्तावेज़ अपलोड करें",
      uploadTitle: "अपना दस्तावेज़ अपलोड करें",
      uploadSubtitle: "ड्रैग एंड ड्रॉप करें या अपलोड करने के लिए क्लिक करें",
      dragDrop: "अपना दस्तावेज़ यहां ड्रैग और ड्रॉप करें",
      orBrowse: "या ब्राउज़ करने के लिए क्लिक करें",
      supportedFormats: "समर्थित: PDF, JPG, PNG (अधिकतम 10MB)",
      analyzing: "आपके दस्तावेज़ का विश्लेषण हो रहा है...",
      step1: "टेक्स्ट निकाला जा रहा है",
      step2: "कानूनी अनुभाग पहचाने जा रहे हैं",
      step3: "राज्य-विशिष्ट कानूनों का विश्लेषण हो रहा है",
      step4: "सरल भाषा में सारांश बनाया जा रहा है",
      results: "विश्लेषण परिणाम",
      riskLevel: "जोखिम स्तर",
      low: "कम",
      medium: "मध्यम",
      high: "उच्च",
      critical: "गंभीर",
      keyDetails: "मुख्य विवरण",
      missingInfo: "अनुपलब्ध जानकारी",
      legalSections: "कानूनी धाराएं",
      plainEnglish: "सरल भाषा",
      legalText: "कानूनी पाठ",
      stateNotes: "राज्य-विशिष्ट नोट्स",
      timeline: "कानूनी समयरेखा",
      nextSteps: "अगले कदम",
      exportPdf: "PDF डाउनलोड करें",
      askQuestion: "प्रश्न पूछें",
    },
    compare: {
      title: "राज्यों में कानूनों की तुलना करें",
      subtitle: "देखें कि एक ही कानून भारतीय राज्यों में कैसे भिन्न होता है",
      selectSection: "कानूनी धारा",
      state1: "राज्य 1",
      state2: "राज्य 2",
      compareButton: "तुलना करें",
      comparing: "कानूनों की तुलना हो रही है...",
      penalty: "दंड",
      compoundingFee: "समझौता शुल्क",
      licenseImpact: "लाइसेंस पर प्रभाव",
      vehicleImpact: "वाहन पर प्रभाव",
      courtProcedure: "अदालती प्रक्रिया",
      stateNotes: "राज्य-विशिष्ट नोट्स",
      keyDifferences: "मुख्य अंतर",
      recommendation: "सिफारिश",
    },
    quiz: {
      title: "कानूनी ज्ञान क्विज़",
      subtitle: "भारतीय कानूनों के बारे में अपना ज्ञान परखें",
      selectState: "राज्य चुनें",
      beginner: "प्रारंभिक",
      intermediate: "मध्यम",
      scenario: "परिदृश्य",
      questions: "प्रश्न",
      startQuiz: "क्विज़ शुरू करें",
      question: "प्रश्न",
      of: "में से",
      timeLeft: "शेष समय",
      lifeline: "50:50 लाइफलाइन",
      score: "स्कोर",
      correct: "सही",
      incorrect: "गलत",
      explanation: "व्याख्या",
      legalRef: "कानूनी संदर्भ",
      nextQuestion: "अगला प्रश्न",
      viewResults: "परिणाम देखें",
      yourScore: "आपका स्कोर",
      retake: "फिर से लें",
      backToQuiz: "क्विज़ पर वापस जाएं",
    },
    lawyers: {
      title: "सत्यापित वकील खोजें",
      subtitle: "अपने क्षेत्र में कानूनी पेशेवरों से जुड़ें",
      searchPlaceholder: "नाम या विशेषज्ञता से खोजें...",
      filterByState: "राज्य के अनुसार फ़िल्टर",
      filterByPractice: "प्रैक्टिस क्षेत्र",
      filterByFee: "शुल्क प्रकार",
      verified: "सत्यापित",
      available: "उपलब्ध",
      unavailable: "अनुपलब्ध",
      experience: "अनुभव",
      years: "वर्ष",
      languages: "भाषाएं",
      practiceAreas: "प्रैक्टिस क्षेत्र",
      consultationFee: "परामर्श शुल्क",
      proBono: "निःशुल्क",
      lowCost: "कम लागत",
      private: "निजी",
      contact: "संपर्क करें",
      viewProfile: "प्रोफ़ाइल देखें",
      disclaimer: "LegalEase कानूनी प्रतिनिधित्व प्रदान नहीं करता। हम केवल संपर्क की सुविधा प्रदान करते हैं।",
    },
    lawOfDay: {
      title: "आज का कानून",
      subtitle: "हर दिन एक नया कानून सीखें",
      featured: "विशेष",
      todaysLaw: "आज का कानून",
      penalty: "दंड",
      stateVariations: "राज्य भिन्नताएं",
      varies: "राज्य के अनुसार भिन्न",
      uniform: "पूरे भारत में समान",
      importantNote: "महत्वपूर्ण नोट",
      learnMore: "और जानें",
      getAnother: "दूसरा कानून देखें",
      bookmark: "बुकमार्क",
      bookmarked: "बुकमार्क किया",
      myLibrary: "मेरी लाइब्रेरी",
      noBookmarks: "अभी तक कोई बुकमार्क किया गया कानून नहीं",
      categories: "श्रेणियां",
      traffic: "यातायात",
      ipc: "आईपीसी",
      consumer: "उपभोक्ता",
      cyber: "साइबर",
      civil: "सिविल",
      property: "संपत्ति",
      verifiedSource: "रैंडम • सत्यापित कानूनी स्रोत",
    },
    chat: {
      title: "कानूनी AI सहायक",
      subtitle: "कोई भी कानूनी प्रश्न पूछें",
      placeholder: "अपना कानूनी प्रश्न लिखें...",
      send: "भेजें",
      thinking: "सोच रहा है...",
      suggestedQuestions: "सुझाए गए प्रश्न",
      disclaimer: "यह AI केवल सामान्य जानकारी प्रदान करता है, कानूनी सलाह नहीं।",
    },
    language: {
      select: "भाषा",
      english: "English",
      hindi: "हिंदी",
      marathi: "मराठी",
    },
  },
  mr: {
    nav: {
      home: "मुख्यपृष्ठ",
      analyze: "विश्लेषण",
      analyzeDocument: "दस्तऐवज विश्लेषण",
      lawOfTheDay: "आजचा कायदा",
      compareStates: "राज्यांची तुलना",
      quiz: "क्विझ",
      findLawyers: "वकील शोधा",
      privacy: "गोपनीयता",
      savedCases: "जतन केलेले केस",
      chat: "चॅट",
      lawyers: "वकील",
    },
    hero: {
      badge: "AI-चालित कायदेशीर सहाय्यक",
      title: "कायदेशीर दस्तऐवज समजून घ्या",
      titleHighlight: "त्वरित",
      subtitle:
        "कोणताही कायदेशीर दस्तऐवज अपलोड करा आणि सोप्या मराठीत त्वरित, राज्य-विशिष्ट स्पष्टीकरण मिळवा। तुमचा डेटा कधीही साठवला जात नाही.",
      uploadButton: "दस्तऐवज अपलोड करा",
      demoButton: "डेमो पहा",
      privacyNote: "तुमचे दस्तऐवज सुरक्षितपणे प्रक्रिया केले जातात आणि कधीही साठवले जात नाहीत",
      trustedBy: "भारतभरातील कायदेशीर व्यावसायिकांचा विश्वास",
    },
    cta: {
      badge: "सुरू करण्यास तयार?",
      title: "मिनिटांत तुमचे कायदेशीर दस्तऐवज समजून घ्या",
      subtitle: "कोणताही कायदेशीर दस्तऐवज अपलोड करा आणि सोप्या मराठीत त्वरित, राज्य-विशिष्ट स्पष्टीकरण मिळवा।",
      uploadButton: "आता दस्तऐवज अपलोड करा",
      demoButton: "डेमो विश्लेषण पहा",
      compareButton: "राज्यांमधील कायद्यांची तुलना करा",
      lawOfDayButton: "आजचा कायदा",
    },
    footer: {
      tagline: "तुमचा वैयक्तिक कायदेशीर स्पष्टीकरणकर्ता. सोपे, अचूक, राज्य-विशिष्ट.",
      securePrivate: "100% सुरक्षित आणि खाजगी",
      product: "उत्पादन",
      legal: "कायदेशीर",
      support: "सहाय्य",
      privacyPolicy: "गोपनीयता धोरण",
      terms: "सेवा अटी",
      disclaimer: "अस्वीकरण",
      faq: "वारंवार विचारले जाणारे प्रश्न",
      contact: "संपर्क",
      helpCenter: "सहाय्य केंद्र",
      informational: "हे केवळ माहितीपूर्ण साधन आहे. हे कायदेशीर सल्ला देत नाही.",
      copyright: "LegalEase AI. सर्व हक्क राखीव.",
    },
    common: {
      loading: "लोड होत आहे...",
      error: "काहीतरी चूक झाली",
      retry: "पुन्हा प्रयत्न करा",
      save: "जतन करा",
      cancel: "रद्द करा",
      submit: "सबमिट करा",
      search: "शोधा",
      filter: "फिल्टर",
      all: "सर्व",
      learnMore: "अधिक जाणून घ्या",
      viewAll: "सर्व पहा",
      back: "मागे",
      next: "पुढे",
      previous: "मागील",
      close: "बंद करा",
      download: "डाउनलोड",
      share: "शेअर करा",
      copy: "कॉपी करा",
      copied: "कॉपी झाले!",
      bookmarked: "बुकमार्क केले!",
      removed: "लायब्ररीतून काढले",
    },
    analyze: {
      title: "दस्तऐवज विश्लेषण",
      subtitle: "त्वरित AI-चालित विश्लेषणासाठी तुमचा कायदेशीर दस्तऐवज अपलोड करा",
      uploadTitle: "तुमचा दस्तऐवज अपलोड करा",
      uploadSubtitle: "ड्रॅग अँड ड्रॉप करा किंवा अपलोड करण्यासाठी क्लिक करा",
      dragDrop: "तुमचा दस्तऐवज येथे ड्रॅग आणि ड्रॉप करा",
      orBrowse: "किंवा ब्राउझ करण्यासाठी क्लिक करा",
      supportedFormats: "समर्थित: PDF, JPG, PNG (कमाल 10MB)",
      analyzing: "तुमच्या दस्तऐवजाचे विश्लेषण होत आहे...",
      step1: "मजकूर काढला जात आहे",
      step2: "कायदेशीर विभाग ओळखले जात आहेत",
      step3: "राज्य-विशिष्ट कायद्यांचे विश्लेषण होत आहे",
      step4: "सोप्या भाषेत सारांश तयार होत आहे",
      results: "विश्लेषण निकाल",
      riskLevel: "धोका पातळी",
      low: "कमी",
      medium: "मध्यम",
      high: "उच्च",
      critical: "गंभीर",
      keyDetails: "मुख्य तपशील",
      missingInfo: "अनुपलब्ध माहिती",
      legalSections: "कायदेशीर कलमे",
      plainEnglish: "सोपी भाषा",
      legalText: "कायदेशीर मजकूर",
      stateNotes: "राज्य-विशिष्ट नोट्स",
      timeline: "कायदेशीर टाइमलाइन",
      nextSteps: "पुढील पावले",
      exportPdf: "PDF डाउनलोड करा",
      askQuestion: "प्रश्न विचारा",
    },
    compare: {
      title: "राज्यांमधील कायद्यांची तुलना करा",
      subtitle: "एकच कायदा भारतीय राज्यांमध्ये कसा वेगळा आहे ते पहा",
      selectSection: "कायदेशीर कलम",
      state1: "राज्य 1",
      state2: "राज्य 2",
      compareButton: "तुलना करा",
      comparing: "कायद्यांची तुलना होत आहे...",
      penalty: "दंड",
      compoundingFee: "तडजोड शुल्क",
      licenseImpact: "परवान्यावर परिणाम",
      vehicleImpact: "वाहनावर परिणाम",
      courtProcedure: "न्यायालयीन प्रक्रिया",
      stateNotes: "राज्य-विशिष्ट नोट्स",
      keyDifferences: "मुख्य फरक",
      recommendation: "शिफारस",
    },
    quiz: {
      title: "कायदेशीर ज्ञान क्विझ",
      subtitle: "भारतीय कायद्यांबद्दल तुमचे ज्ञान तपासा",
      selectState: "राज्य निवडा",
      beginner: "प्रारंभिक",
      intermediate: "मध्यम",
      scenario: "परिस्थिती",
      questions: "प्रश्न",
      startQuiz: "क्विझ सुरू करा",
      question: "प्रश्न",
      of: "पैकी",
      timeLeft: "उरलेला वेळ",
      lifeline: "50:50 लाइफलाइन",
      score: "गुण",
      correct: "बरोबर",
      incorrect: "चूक",
      explanation: "स्पष्टीकरण",
      legalRef: "कायदेशीर संदर्भ",
      nextQuestion: "पुढचा प्रश्न",
      viewResults: "निकाल पहा",
      yourScore: "तुमचे गुण",
      retake: "पुन्हा घ्या",
      backToQuiz: "क्विझवर परत जा",
    },
    lawyers: {
      title: "सत्यापित वकील शोधा",
      subtitle: "तुमच्या परिसरातील कायदेशीर व्यावसायिकांशी जोडले जा",
      searchPlaceholder: "नाव किंवा विशेषतेने शोधा...",
      filterByState: "राज्यानुसार फिल्टर",
      filterByPractice: "प्रॅक्टिस क्षेत्र",
      filterByFee: "शुल्क प्रकार",
      verified: "सत्यापित",
      available: "उपलब्ध",
      unavailable: "अनुपलब्ध",
      experience: "अनुभव",
      years: "वर्षे",
      languages: "भाषा",
      practiceAreas: "प्रॅक्टिस क्षेत्रे",
      consultationFee: "सल्ला शुल्क",
      proBono: "विनामूल्य",
      lowCost: "कमी खर्च",
      private: "खाजगी",
      contact: "संपर्क करा",
      viewProfile: "प्रोफाइल पहा",
      disclaimer: "LegalEase कायदेशीर प्रतिनिधित्व देत नाही. आम्ही फक्त संपर्क सुलभ करतो.",
    },
    lawOfDay: {
      title: "आजचा कायदा",
      subtitle: "दररोज एक नवीन कायदा शिका",
      featured: "विशेष",
      todaysLaw: "आजचा कायदा",
      penalty: "दंड",
      stateVariations: "राज्य भिन्नता",
      varies: "राज्यानुसार बदलते",
      uniform: "संपूर्ण भारतात समान",
      importantNote: "महत्त्वाची टीप",
      learnMore: "अधिक जाणून घ्या",
      getAnother: "दुसरा कायदा पहा",
      bookmark: "बुकमार्क",
      bookmarked: "बुकमार्क केले",
      myLibrary: "माझी लायब्ररी",
      noBookmarks: "अजून कोणताही बुकमार्क केलेला कायदा नाही",
      categories: "श्रेण्या",
      traffic: "वाहतूक",
      ipc: "आयपीसी",
      consumer: "ग्राहक",
      cyber: "सायबर",
      civil: "दिवाणी",
      property: "मालमत्ता",
      verifiedSource: "यादृच्छिक • सत्यापित कायदेशीर स्रोत",
    },
    chat: {
      title: "कायदेशीर AI सहाय्यक",
      subtitle: "कोणताही कायदेशीर प्रश्न विचारा",
      placeholder: "तुमचा कायदेशीर प्रश्न लिहा...",
      send: "पाठवा",
      thinking: "विचार करत आहे...",
      suggestedQuestions: "सुचवलेले प्रश्न",
      disclaimer: "हा AI केवळ सामान्य माहिती देतो, कायदेशीर सल्ला नाही.",
    },
    language: {
      select: "भाषा",
      english: "English",
      hindi: "हिंदी",
      marathi: "मराठी",
    },
  },
}

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.en
}
