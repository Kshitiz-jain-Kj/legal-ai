// Curated verified lawyers database for LegalEase AI
// All entries are flagged as verified for demo purposes

export interface Lawyer {
  id: string
  name: string
  firm: string
  photo: string
  practiceAreas: string[]
  yearsExperience: number
  state: string
  city: string
  languages: string[]
  feeType: "pro-bono" | "low-cost" | "private"
  feeRange?: string
  rating: number
  reviewCount: number
  bio: string
  email: string
  phone: string
  officeHours: string
  verified: boolean
  verifiedDate: string
  verifiedBy: string
  availability: "available" | "busy" | "unavailable"
  specializations: string[]
}

export const PRACTICE_AREAS = [
  "Traffic Law",
  "Criminal Defense",
  "Consumer Rights",
  "Family Law",
  "Property Law",
  "Cybercrime",
  "Civil Litigation",
  "Labour Law",
  "Corporate Law",
  "Immigration",
] as const

export const STATES = ["Maharashtra", "Delhi"] as const

export const LANGUAGES = ["English", "Hindi", "Marathi", "Punjabi", "Gujarati"] as const

export const FEE_TYPES = [
  { value: "pro-bono", label: "Pro Bono (Free)", description: "Free legal aid for eligible cases" },
  { value: "low-cost", label: "Low Cost", description: "Affordable rates for common citizens" },
  { value: "private", label: "Private Practice", description: "Standard professional fees" },
] as const

export const lawyersDatabase: Lawyer[] = [
  // Maharashtra Lawyers
  {
    id: "mh-001",
    name: "Adv. Priya Sharma",
    firm: "Sharma & Associates",
    photo: "/indian-female-lawyer-professional-headshot.jpg",
    practiceAreas: ["Traffic Law", "Criminal Defense", "Consumer Rights"],
    yearsExperience: 12,
    state: "Maharashtra",
    city: "Mumbai",
    languages: ["English", "Hindi", "Marathi"],
    feeType: "low-cost",
    feeRange: "₹2,000 - ₹10,000",
    rating: 4.8,
    reviewCount: 156,
    bio: "Specializing in motor vehicle cases and traffic violations for over a decade. Successfully handled 500+ challan disputes and accident claims. Known for client-friendly approach and clear communication.",
    email: "priya.sharma@legalease-demo.com",
    phone: "+91-9876543210",
    officeHours: "Mon-Sat: 10:00 AM - 6:00 PM",
    verified: true,
    verifiedDate: "2024-01-15",
    verifiedBy: "LegalEase Admin",
    availability: "available",
    specializations: ["Challan Disputes", "Accident Claims", "License Issues"],
  },
  {
    id: "mh-002",
    name: "Adv. Rajesh Kulkarni",
    firm: "Mumbai Legal Aid Society",
    photo: "/indian-male-lawyer-senior-professional.jpg",
    practiceAreas: ["Criminal Defense", "Civil Litigation", "Family Law"],
    yearsExperience: 25,
    state: "Maharashtra",
    city: "Mumbai",
    languages: ["English", "Hindi", "Marathi"],
    feeType: "pro-bono",
    rating: 4.9,
    reviewCount: 312,
    bio: "Senior advocate providing free legal aid to underprivileged communities. Former public prosecutor with extensive courtroom experience. Passionate about access to justice for all.",
    email: "rajesh.kulkarni@legalease-demo.com",
    phone: "+91-9876543211",
    officeHours: "Mon-Fri: 9:00 AM - 5:00 PM",
    verified: true,
    verifiedDate: "2024-02-20",
    verifiedBy: "LegalEase Admin",
    availability: "available",
    specializations: ["Legal Aid", "Bail Applications", "Criminal Appeals"],
  },
  {
    id: "mh-003",
    name: "Adv. Neha Deshmukh",
    firm: "Deshmukh Legal Consultants",
    photo: "/indian-female-lawyer-young-professional.jpg",
    practiceAreas: ["Cybercrime", "Consumer Rights", "Corporate Law"],
    yearsExperience: 8,
    state: "Maharashtra",
    city: "Pune",
    languages: ["English", "Hindi", "Marathi"],
    feeType: "private",
    feeRange: "₹5,000 - ₹25,000",
    rating: 4.7,
    reviewCount: 89,
    bio: "Tech-savvy lawyer specializing in cybercrime and digital fraud cases. Expert in IT Act provisions and online consumer disputes. Regular speaker at cyber safety workshops.",
    email: "neha.deshmukh@legalease-demo.com",
    phone: "+91-9876543212",
    officeHours: "Mon-Sat: 11:00 AM - 7:00 PM",
    verified: true,
    verifiedDate: "2024-03-10",
    verifiedBy: "LegalEase Admin",
    availability: "busy",
    specializations: ["Online Fraud", "Data Privacy", "E-commerce Disputes"],
  },
  {
    id: "mh-004",
    name: "Adv. Suresh Patil",
    firm: "Patil & Partners",
    photo: "/indian-male-lawyer-middle-aged-professional.jpg",
    practiceAreas: ["Property Law", "Civil Litigation", "Family Law"],
    yearsExperience: 18,
    state: "Maharashtra",
    city: "Nagpur",
    languages: ["English", "Hindi", "Marathi"],
    feeType: "low-cost",
    feeRange: "₹3,000 - ₹15,000",
    rating: 4.6,
    reviewCount: 203,
    bio: "Experienced in property disputes, land acquisition matters, and family settlements. Strong track record in High Court appeals. Known for meticulous documentation and research.",
    email: "suresh.patil@legalease-demo.com",
    phone: "+91-9876543213",
    officeHours: "Mon-Sat: 9:30 AM - 5:30 PM",
    verified: true,
    verifiedDate: "2024-01-25",
    verifiedBy: "LegalEase Admin",
    availability: "available",
    specializations: ["Land Disputes", "Title Verification", "Inheritance"],
  },
  {
    id: "mh-005",
    name: "Adv. Anjali Mehta",
    firm: "Women's Legal Cell",
    photo: "/indian-female-lawyer-experienced-professional.jpg",
    practiceAreas: ["Family Law", "Criminal Defense", "Consumer Rights"],
    yearsExperience: 15,
    state: "Maharashtra",
    city: "Mumbai",
    languages: ["English", "Hindi", "Marathi", "Gujarati"],
    feeType: "pro-bono",
    rating: 4.9,
    reviewCount: 278,
    bio: "Dedicated to women's rights and domestic violence cases. Runs a free legal clinic every Saturday. Awarded 'Legal Aid Champion' by Maharashtra State Bar Council in 2023.",
    email: "anjali.mehta@legalease-demo.com",
    phone: "+91-9876543214",
    officeHours: "Mon-Sat: 10:00 AM - 6:00 PM",
    verified: true,
    verifiedDate: "2024-02-05",
    verifiedBy: "LegalEase Admin",
    availability: "available",
    specializations: ["Domestic Violence", "Divorce", "Maintenance"],
  },
  // Delhi Lawyers
  {
    id: "dl-001",
    name: "Adv. Vikram Singh",
    firm: "Singh & Associates",
    photo: "/indian-male-lawyer-professional-suit.jpg",
    practiceAreas: ["Traffic Law", "Criminal Defense", "Civil Litigation"],
    yearsExperience: 20,
    state: "Delhi",
    city: "New Delhi",
    languages: ["English", "Hindi", "Punjabi"],
    feeType: "private",
    feeRange: "₹10,000 - ₹50,000",
    rating: 4.8,
    reviewCount: 445,
    bio: "Senior advocate practicing at Delhi High Court. Expertise in motor accident claims and traffic tribunal matters. Former member of Delhi Bar Council ethics committee.",
    email: "vikram.singh@legalease-demo.com",
    phone: "+91-9876543215",
    officeHours: "Mon-Fri: 10:00 AM - 6:00 PM",
    verified: true,
    verifiedDate: "2024-01-10",
    verifiedBy: "LegalEase Admin",
    availability: "available",
    specializations: ["High Court Practice", "MACT Claims", "Traffic Tribunals"],
  },
  {
    id: "dl-002",
    name: "Adv. Meera Kapoor",
    firm: "Delhi Legal Aid Services",
    photo: "/indian-female-lawyer-professional-formal.jpg",
    practiceAreas: ["Criminal Defense", "Consumer Rights", "Labour Law"],
    yearsExperience: 10,
    state: "Delhi",
    city: "New Delhi",
    languages: ["English", "Hindi"],
    feeType: "pro-bono",
    rating: 4.7,
    reviewCount: 167,
    bio: "Committed to providing free legal assistance to marginalized communities. Specializes in wrongful termination and consumer fraud cases. Volunteer at multiple NGOs.",
    email: "meera.kapoor@legalease-demo.com",
    phone: "+91-9876543216",
    officeHours: "Mon-Sat: 9:00 AM - 5:00 PM",
    verified: true,
    verifiedDate: "2024-03-01",
    verifiedBy: "LegalEase Admin",
    availability: "busy",
    specializations: ["Labour Disputes", "Consumer Forum", "Free Legal Aid"],
  },
  {
    id: "dl-003",
    name: "Adv. Amit Verma",
    firm: "Verma Legal Solutions",
    photo: "/indian-male-lawyer-young-professional.jpg",
    practiceAreas: ["Cybercrime", "Corporate Law", "Consumer Rights"],
    yearsExperience: 7,
    state: "Delhi",
    city: "Gurugram",
    languages: ["English", "Hindi"],
    feeType: "low-cost",
    feeRange: "₹4,000 - ₹20,000",
    rating: 4.5,
    reviewCount: 76,
    bio: "Young and dynamic lawyer focusing on cyber law and startup legal compliance. Handles online defamation, hacking complaints, and digital contract disputes.",
    email: "amit.verma@legalease-demo.com",
    phone: "+91-9876543217",
    officeHours: "Mon-Sat: 11:00 AM - 8:00 PM",
    verified: true,
    verifiedDate: "2024-02-28",
    verifiedBy: "LegalEase Admin",
    availability: "available",
    specializations: ["Cyber Fraud", "Startup Legal", "Online Defamation"],
  },
  {
    id: "dl-004",
    name: "Adv. Sunita Rani",
    firm: "District Legal Services Authority",
    photo: "/indian-female-lawyer-government-official.jpg",
    practiceAreas: ["Family Law", "Property Law", "Civil Litigation"],
    yearsExperience: 22,
    state: "Delhi",
    city: "New Delhi",
    languages: ["English", "Hindi", "Punjabi"],
    feeType: "pro-bono",
    rating: 4.8,
    reviewCount: 389,
    bio: "Panel lawyer with DLSA providing free legal services. Expert in family court matters and property disputes. Conducts regular legal awareness camps in rural Delhi.",
    email: "sunita.rani@legalease-demo.com",
    phone: "+91-9876543218",
    officeHours: "Mon-Fri: 10:00 AM - 4:00 PM",
    verified: true,
    verifiedDate: "2024-01-20",
    verifiedBy: "LegalEase Admin",
    availability: "available",
    specializations: ["DLSA Panel", "Family Disputes", "Lok Adalat"],
  },
  {
    id: "dl-005",
    name: "Adv. Rohit Malhotra",
    firm: "Malhotra & Co.",
    photo: "/indian-male-lawyer-senior-advocate.jpg",
    practiceAreas: ["Traffic Law", "Criminal Defense", "Immigration"],
    yearsExperience: 16,
    state: "Delhi",
    city: "New Delhi",
    languages: ["English", "Hindi", "Punjabi"],
    feeType: "private",
    feeRange: "₹8,000 - ₹40,000",
    rating: 4.6,
    reviewCount: 234,
    bio: "Well-established practice handling traffic violations, DUI cases, and immigration matters. Strong network with traffic police and transport authorities. High success rate in license restoration cases.",
    email: "rohit.malhotra@legalease-demo.com",
    phone: "+91-9876543219",
    officeHours: "Mon-Sat: 10:00 AM - 7:00 PM",
    verified: true,
    verifiedDate: "2024-02-15",
    verifiedBy: "LegalEase Admin",
    availability: "available",
    specializations: ["DUI Defense", "License Issues", "Visa Problems"],
  },
]

export function getLawyerById(id: string): Lawyer | undefined {
  return lawyersDatabase.find((l) => l.id === id)
}

export function filterLawyers(filters: {
  state?: string
  practiceArea?: string
  feeType?: string
  language?: string
}): Lawyer[] {
  return lawyersDatabase.filter((lawyer) => {
    if (filters.state && lawyer.state !== filters.state) return false
    if (filters.practiceArea && !lawyer.practiceAreas.includes(filters.practiceArea)) return false
    if (filters.feeType && lawyer.feeType !== filters.feeType) return false
    if (filters.language && !lawyer.languages.includes(filters.language)) return false
    return true
  })
}
