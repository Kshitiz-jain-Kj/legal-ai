export interface LawEntry {
  id: string
  name: string
  shortTitle: string
  category: "traffic" | "ipc" | "consumer" | "cybercrime" | "civil" | "property"
  plainExplanation: string
  penalties: string[]
  stateVariations: {
    varies: boolean
    details?: string
  }
  icon: string
  tags: string[]
  source: string
  relatedSections?: string[]
  importantNotes?: string[]
}

export const lawsDatabase: LawEntry[] = [
  // Traffic Laws
  {
    id: "mv-act-184",
    name: "Section 184 — Dangerous Driving",
    shortTitle: "Dangerous Driving",
    category: "traffic",
    plainExplanation:
      "This law punishes drivers who drive recklessly or at speeds that endanger others. It covers overspeeding, racing, jumping red lights, and any driving that puts public safety at risk. The law aims to ensure road safety for everyone.",
    penalties: [
      "First offense: Fine between Rs. 1,000 to Rs. 5,000",
      "Repeat offense: Fine up to Rs. 10,000 and/or imprisonment up to 2 years",
      "License suspension possible for serious violations",
      "Vehicle impoundment in extreme cases",
    ],
    stateVariations: {
      varies: true,
      details:
        "While the base penalty is central, states like Maharashtra and Delhi have higher enforcement rates. Karnataka has additional provisions for drunk dangerous driving.",
    },
    icon: "🚗",
    tags: ["driving", "road safety", "speeding", "traffic"],
    source: "Motor Vehicles Act, 2019",
    relatedSections: ["Section 185 (Drunk Driving)", "Section 279 IPC (Rash Driving)"],
    importantNotes: [
      "Police can impound your vehicle on the spot",
      "Insurance claims may be rejected if you were driving dangerously",
    ],
  },
  {
    id: "mv-act-185",
    name: "Section 185 — Drunk Driving",
    shortTitle: "Drunk Driving",
    category: "traffic",
    plainExplanation:
      "Driving under the influence of alcohol or drugs is strictly prohibited. If your blood alcohol level exceeds 30mg per 100ml of blood (0.03% BAC), you can be prosecuted. This law protects everyone on the road from impaired drivers.",
    penalties: [
      "First offense: Rs. 10,000 fine and/or 6 months imprisonment",
      "Repeat offense: Rs. 15,000 fine and/or 2 years imprisonment",
      "License suspension for minimum 3 months",
      "Mandatory breath analyzer test; refusal is punishable",
    ],
    stateVariations: {
      varies: true,
      details:
        "Delhi and Maharashtra have zero tolerance enforcement campaigns. Some states have lower de-facto tolerance for commercial vehicle drivers.",
    },
    icon: "🍺",
    tags: ["alcohol", "DUI", "driving", "traffic"],
    source: "Motor Vehicles Act, 2019",
    relatedSections: ["Section 184 (Dangerous Driving)", "Section 304A IPC (Causing Death by Negligence)"],
    importantNotes: [
      "Even medication that causes drowsiness can lead to prosecution",
      "Your vehicle can be impounded immediately",
    ],
  },
  {
    id: "mv-act-181",
    name: "Section 181 — Driving Without License",
    shortTitle: "No License",
    category: "traffic",
    plainExplanation:
      "You must have a valid driving license to operate any motor vehicle on public roads. This includes having the correct class of license for the vehicle type (motorcycle, car, commercial vehicle, etc.).",
    penalties: [
      "First offense: Rs. 5,000 fine",
      "Repeat offense: Rs. 10,000 fine and/or community service",
      "If driving without ever having a license: Vehicle seizure possible",
      "Additional charges if involved in an accident",
    ],
    stateVariations: {
      varies: false,
      details: "Penalty is uniform across all states as per central MV Act, 2019.",
    },
    icon: "🪪",
    tags: ["license", "driving", "documents", "traffic"],
    source: "Motor Vehicles Act, 2019",
    relatedSections: ["Section 3 (Necessity of Driving License)", "Section 4 (Age Limit)"],
    importantNotes: [
      "Learner's license holders must display 'L' sign and cannot drive alone",
      "Digital driving license on DigiLocker is valid",
    ],
  },
  {
    id: "mv-act-194d",
    name: "Section 194D — Not Wearing Helmet",
    shortTitle: "No Helmet",
    category: "traffic",
    plainExplanation:
      "All two-wheeler riders and pillion passengers must wear ISI-marked helmets while riding on public roads. This law has saved countless lives by reducing head injuries in accidents.",
    penalties: [
      "Fine of Rs. 1,000",
      "License disqualification for 3 months",
      "Repeated violations can lead to permanent license cancellation",
    ],
    stateVariations: {
      varies: true,
      details:
        "Some states exempt Sikh riders wearing turbans. Enforcement varies significantly between urban and rural areas.",
    },
    icon: "⛑️",
    tags: ["helmet", "two-wheeler", "safety", "traffic"],
    source: "Motor Vehicles Act, 2019",
    relatedSections: ["Section 129 (Protective Headgear)"],
    importantNotes: [
      "Only ISI-marked helmets are legally valid",
      "Pillion riders must also wear helmets",
      "Children below 4 years are not allowed on motorcycles",
    ],
  },
  {
    id: "mv-act-194b",
    name: "Section 194B — Not Wearing Seatbelt",
    shortTitle: "No Seatbelt",
    category: "traffic",
    plainExplanation:
      "All occupants of a motor vehicle must wear seatbelts while the vehicle is in motion. This simple act can reduce the risk of fatal injury by up to 50% in car accidents.",
    penalties: [
      "Fine of Rs. 1,000 for driver and each passenger not wearing seatbelt",
      "Repeated violations may affect insurance claims",
    ],
    stateVariations: {
      varies: false,
      details: "Uniform penalty across India. Some states have stricter enforcement in urban areas.",
    },
    icon: "🔒",
    tags: ["seatbelt", "car", "safety", "traffic"],
    source: "Motor Vehicles Act, 2019",
    relatedSections: ["Section 138 (Safety Measures)"],
    importantNotes: [
      "Rear seat passengers must also wear seatbelts",
      "Children under 14 should use age-appropriate car seats",
    ],
  },
  {
    id: "mv-act-196",
    name: "Section 196 — Driving Without Insurance",
    shortTitle: "No Insurance",
    category: "traffic",
    plainExplanation:
      "Every motor vehicle must have valid third-party insurance at minimum. This ensures that accident victims can receive compensation even if the driver cannot pay. Driving without insurance puts everyone at financial risk.",
    penalties: [
      "First offense: Rs. 2,000 fine and/or 3 months imprisonment",
      "Repeat offense: Rs. 4,000 fine and/or 3 months imprisonment",
      "Vehicle can be impounded",
      "Personal liability for all damages in case of accident",
    ],
    stateVariations: {
      varies: false,
      details: "Uniform penalty across India. Insurance rates may vary by state.",
    },
    icon: "📋",
    tags: ["insurance", "documents", "vehicle", "traffic"],
    source: "Motor Vehicles Act, 2019",
    relatedSections: ["Section 146 (Insurance Requirement)", "Chapter XI (Insurance)"],
    importantNotes: [
      "Third-party insurance is legally mandatory; comprehensive is optional",
      "Insurance must be renewed before expiry to maintain coverage",
    ],
  },
  // IPC Sections
  {
    id: "ipc-279",
    name: "IPC Section 279 — Rash Driving on Public Way",
    shortTitle: "Rash Driving",
    category: "ipc",
    plainExplanation:
      "This criminal law punishes anyone who drives any vehicle or rides any animal on a public road so rashly or negligently as to endanger human life. It's more serious than a traffic violation and can result in imprisonment.",
    penalties: [
      "Imprisonment up to 6 months",
      "Fine up to Rs. 1,000",
      "Or both imprisonment and fine",
      "Can be combined with other charges if injury/death occurs",
    ],
    stateVariations: {
      varies: false,
      details: "IPC is central legislation applicable uniformly across India.",
    },
    icon: "⚠️",
    tags: ["criminal", "driving", "negligence", "rash driving"],
    source: "Indian Penal Code, 1860",
    relatedSections: [
      "Section 304A (Death by Negligence)",
      "Section 337 (Causing Hurt)",
      "Section 338 (Grievous Hurt)",
    ],
    importantNotes: [
      "This is a criminal offense that goes on your record",
      "Non-bailable if combined with causing injury",
      "Being replaced by BNS Section 281 in new criminal code",
    ],
  },
  {
    id: "ipc-304a",
    name: "IPC Section 304A — Death by Negligence",
    shortTitle: "Death by Negligence",
    category: "ipc",
    plainExplanation:
      "This section applies when someone's negligent or rash act causes another person's death, without intention to kill. Common in accident cases where the driver wasn't careful. It's not murder, but it's a serious criminal offense.",
    penalties: [
      "Imprisonment up to 2 years",
      "Fine (amount decided by court)",
      "Or both imprisonment and fine",
      "Compensation to victim's family through MACT",
    ],
    stateVariations: {
      varies: false,
      details: "IPC is central legislation. However, courts in different states may have varying sentencing patterns.",
    },
    icon: "💔",
    tags: ["death", "negligence", "criminal", "accident"],
    source: "Indian Penal Code, 1860",
    relatedSections: ["Section 279 (Rash Driving)", "Section 302 (Murder)", "Section 299 (Culpable Homicide)"],
    importantNotes: [
      "This is a bailable offense",
      "Family can also file civil suit for compensation",
      "Being replaced by BNS Section 106 in new criminal code",
    ],
  },
  {
    id: "ipc-323",
    name: "IPC Section 323 — Voluntarily Causing Hurt",
    shortTitle: "Causing Hurt",
    category: "ipc",
    plainExplanation:
      "If you intentionally cause bodily pain, disease, or illness to another person, you can be punished under this section. It's commonly used in road rage cases, fights, and domestic disputes.",
    penalties: [
      "Imprisonment up to 1 year",
      "Fine up to Rs. 1,000",
      "Or both imprisonment and fine",
      "Compoundable offense (can be settled)",
    ],
    stateVariations: {
      varies: false,
      details: "IPC is central legislation applicable uniformly across India.",
    },
    icon: "👊",
    tags: ["hurt", "assault", "criminal", "violence"],
    source: "Indian Penal Code, 1860",
    relatedSections: ["Section 324 (Hurt with Weapon)", "Section 325 (Grievous Hurt)", "Section 351 (Assault)"],
    importantNotes: [
      "This is a compoundable offense - can be settled with victim's consent",
      "Medical certificate is important evidence",
      "Being replaced by BNS Section 115 in new criminal code",
    ],
  },
  {
    id: "ipc-420",
    name: "IPC Section 420 — Cheating and Dishonestly Inducing Delivery",
    shortTitle: "Cheating/Fraud",
    category: "ipc",
    plainExplanation:
      "This famous section covers fraud and cheating. If someone deceives you and takes your money or property, or tricks you into doing something that causes you harm, they can be prosecuted under this section.",
    penalties: [
      "Imprisonment up to 7 years",
      "Fine (amount decided by court)",
      "Both imprisonment and fine possible",
      "Non-bailable offense",
    ],
    stateVariations: {
      varies: false,
      details: "IPC is central legislation. Enforcement and investigation efficiency may vary by state.",
    },
    icon: "🎭",
    tags: ["fraud", "cheating", "criminal", "financial crime"],
    source: "Indian Penal Code, 1860",
    relatedSections: ["Section 415 (Definition of Cheating)", "Section 417 (Punishment for Cheating)"],
    importantNotes: [
      "Very commonly misused for civil disputes",
      "Requires proof of intention to deceive from the beginning",
      "Being replaced by BNS Section 318 in new criminal code",
    ],
  },
  {
    id: "ipc-506",
    name: "IPC Section 506 — Criminal Intimidation",
    shortTitle: "Criminal Intimidation",
    category: "ipc",
    plainExplanation:
      "If someone threatens you with injury to your person, reputation, or property to make you do something or stop you from doing something, it's criminal intimidation. Threats don't have to be physical - they can be about harming your reputation too.",
    penalties: [
      "Simple intimidation: Up to 2 years imprisonment and/or fine",
      "Serious threats (death, grievous hurt, fire, etc.): Up to 7 years imprisonment",
    ],
    stateVariations: {
      varies: false,
      details: "IPC is central legislation applicable uniformly across India.",
    },
    icon: "😨",
    tags: ["threat", "intimidation", "criminal", "harassment"],
    source: "Indian Penal Code, 1860",
    relatedSections: ["Section 503 (Definition)", "Section 507 (Anonymous Threat)"],
    importantNotes: [
      "Written threats including messages/emails are covered",
      "Anonymous threatening calls are separately punishable",
      "Being replaced by BNS Section 351 in new criminal code",
    ],
  },
  // Consumer Rights
  {
    id: "consumer-2019-general",
    name: "Consumer Protection Act, 2019 — Consumer Rights",
    shortTitle: "Consumer Rights",
    category: "consumer",
    plainExplanation:
      "This law protects you when you buy goods or services. If a product is defective, service is poor, or you're misled by advertising, you can file a complaint. The law covers both offline and online purchases.",
    penalties: [
      "Replacement or refund of defective product",
      "Compensation for loss or injury suffered",
      "Punitive damages for misleading advertisements",
      "Imprisonment for repeat offenders and manufacturers",
    ],
    stateVariations: {
      varies: false,
      details:
        "Central legislation with District, State, and National Consumer Forums. Forum jurisdiction depends on claim amount.",
    },
    icon: "🛒",
    tags: ["consumer", "shopping", "refund", "rights"],
    source: "Consumer Protection Act, 2019",
    relatedSections: ["Section 2(7) - Definition of Consumer", "Section 34 - District Commission"],
    importantNotes: [
      "Complaints can be filed online at e-daakhil.nic.in",
      "No lawyer needed for cases up to Rs. 5 lakh",
      "E-commerce platforms are also liable under this act",
    ],
  },
  {
    id: "consumer-unfair-trade",
    name: "Section 2(47) — Unfair Trade Practice",
    shortTitle: "Unfair Trade",
    category: "consumer",
    plainExplanation:
      "Businesses cannot use false or misleading representations about their products or services. This includes fake discounts, hidden charges, bait-and-switch tactics, and not honoring warranties.",
    penalties: [
      "Cease and desist orders against the business",
      "Compensation to affected consumers",
      "Corrective advertising at business's expense",
      "Heavy fines for repeat violations",
    ],
    stateVariations: {
      varies: false,
      details: "Central legislation applicable uniformly across India.",
    },
    icon: "⚖️",
    tags: ["consumer", "fraud", "advertising", "business"],
    source: "Consumer Protection Act, 2019",
    relatedSections: ["Section 2(1) - Misleading Advertisement", "Section 89 - Penalty"],
    importantNotes: [
      "Screenshots and receipts are valid evidence",
      "Class action suits possible for widespread harm",
      "CCPA can impose penalties up to Rs. 50 lakh",
    ],
  },
  // Cybercrime
  {
    id: "it-act-66",
    name: "IT Act Section 66 — Computer Related Offenses",
    shortTitle: "Computer Crimes",
    category: "cybercrime",
    plainExplanation:
      "This section covers hacking and unauthorized access to computer systems. If someone breaks into your email, social media, or any computer system without permission, or destroys/alters data, they can be prosecuted.",
    penalties: [
      "Imprisonment up to 3 years",
      "Fine up to Rs. 5 lakh",
      "Or both imprisonment and fine",
      "Additional charges possible under IPC",
    ],
    stateVariations: {
      varies: false,
      details: "IT Act is central legislation applicable uniformly across India.",
    },
    icon: "💻",
    tags: ["cyber", "hacking", "computer", "digital"],
    source: "Information Technology Act, 2000",
    relatedSections: ["Section 43 (Damage to Computer)", "Section 66C (Identity Theft)"],
    importantNotes: [
      "Complaint can be filed at cybercrime.gov.in",
      "Preserve evidence - don't delete messages/emails",
      "Password sharing doesn't give permanent authorization",
    ],
  },
  {
    id: "it-act-66c",
    name: "IT Act Section 66C — Identity Theft",
    shortTitle: "Identity Theft",
    category: "cybercrime",
    plainExplanation:
      "Using someone else's electronic signature, password, or unique identification (like Aadhaar, PAN) fraudulently is identity theft. This includes using someone's stolen credentials to access their accounts or impersonate them online.",
    penalties: [
      "Imprisonment up to 3 years",
      "Fine up to Rs. 1 lakh",
      "Both imprisonment and fine possible",
      "Victim compensation additionally",
    ],
    stateVariations: {
      varies: false,
      details: "IT Act is central legislation applicable uniformly across India.",
    },
    icon: "🎭",
    tags: ["identity", "theft", "cyber", "fraud"],
    source: "Information Technology Act, 2000",
    relatedSections: ["Section 66D (Cheating by Personation)", "Section 43 (Unauthorized Access)"],
    importantNotes: [
      "Report immediately to bank if financial details compromised",
      "File FIR and cyber complaint both",
      "Monitor your credit reports after identity theft",
    ],
  },
  {
    id: "it-act-66d",
    name: "IT Act Section 66D — Cheating by Personation",
    shortTitle: "Online Impersonation",
    category: "cybercrime",
    plainExplanation:
      "Creating fake profiles or impersonating someone online to cheat others is a serious crime. This covers fake social media accounts, phishing emails pretending to be from banks, and any online deception using false identity.",
    penalties: ["Imprisonment up to 3 years", "Fine up to Rs. 1 lakh", "Both imprisonment and fine possible"],
    stateVariations: {
      varies: false,
      details: "IT Act is central legislation applicable uniformly across India.",
    },
    icon: "👤",
    tags: ["impersonation", "fake profile", "cyber", "phishing"],
    source: "Information Technology Act, 2000",
    relatedSections: ["Section 66C (Identity Theft)", "IPC Section 419 (Cheating by Personation)"],
    importantNotes: [
      "Take screenshots before the fake profile is deleted",
      "Report to the platform and police both",
      "Banks never ask for OTP - any such request is fraud",
    ],
  },
  {
    id: "it-act-67",
    name: "IT Act Section 67 — Publishing Obscene Material",
    shortTitle: "Obscene Content Online",
    category: "cybercrime",
    plainExplanation:
      "Publishing, transmitting, or causing to be published any obscene material in electronic form is punishable. This includes sharing explicit content without consent, revenge porn, and distributing pornographic material.",
    penalties: [
      "First offense: Up to 3 years imprisonment and Rs. 5 lakh fine",
      "Second offense: Up to 5 years imprisonment and Rs. 10 lakh fine",
      "Child pornography: Up to 7 years (Section 67B)",
    ],
    stateVariations: {
      varies: false,
      details: "IT Act is central legislation applicable uniformly across India.",
    },
    icon: "🚫",
    tags: ["obscene", "pornography", "cyber", "content"],
    source: "Information Technology Act, 2000",
    relatedSections: ["Section 67A (Sexually Explicit Material)", "Section 67B (Child Pornography)"],
    importantNotes: [
      "Non-consensual intimate images are separately punishable",
      "Even forwarding such content is an offense",
      "Victims can request immediate removal from platforms",
    ],
  },
  // Civil/Property
  {
    id: "rent-control-general",
    name: "Rent Control Laws — Tenant Protection",
    shortTitle: "Tenant Rights",
    category: "property",
    plainExplanation:
      "These laws protect tenants from arbitrary eviction and excessive rent increases. Landlords must follow proper procedures and cannot evict without valid reasons like non-payment of rent or personal need for the property.",
    penalties: [
      "Illegal eviction: Tenant can be restored possession",
      "Harassment: Compensation to tenant",
      "Rent overcharging: Excess amount recoverable",
      "Criminal charges for using force in eviction",
    ],
    stateVariations: {
      varies: true,
      details:
        "Rent control is a state subject. Maharashtra, Delhi, Karnataka have different laws. Model Tenancy Act 2021 is being adopted by some states.",
    },
    icon: "🏠",
    tags: ["rent", "tenant", "property", "housing"],
    source: "State Rent Control Acts / Model Tenancy Act, 2021",
    relatedSections: ["Maharashtra Rent Control Act", "Delhi Rent Control Act", "Model Tenancy Act 2021"],
    importantNotes: [
      "Always have a written rent agreement",
      "Rent receipts are important evidence",
      "11-month agreements don't avoid rent control applicability",
    ],
  },
  {
    id: "property-registration",
    name: "Registration Act Section 17 — Property Registration",
    shortTitle: "Property Registration",
    category: "property",
    plainExplanation:
      "Any document that transfers property worth more than Rs. 100, or creates/takes away any right to property, must be registered. Unregistered property documents are not valid as evidence of ownership.",
    penalties: [
      "Unregistered documents inadmissible as evidence",
      "Loss of legal rights over property",
      "Stamp duty penalty up to 10 times if evaded",
      "Criminal prosecution for fraudulent documents",
    ],
    stateVariations: {
      varies: true,
      details: "Stamp duty rates vary significantly by state. Registration fees also differ.",
    },
    icon: "📜",
    tags: ["property", "registration", "documents", "real estate"],
    source: "Registration Act, 1908",
    relatedSections: ["Indian Stamp Act", "Transfer of Property Act"],
    importantNotes: [
      "Register within 4 months of execution",
      "Both parties must be present with witnesses",
      "Verify property title before purchase",
    ],
  },
  {
    id: "crpc-125",
    name: "CrPC Section 125 — Maintenance Rights",
    shortTitle: "Maintenance Rights",
    category: "civil",
    plainExplanation:
      "If you're a wife, child, or elderly parent who cannot maintain yourself, and your spouse/child neglects you, you can apply to the court for maintenance. This ensures basic living expenses are provided.",
    penalties: [
      "Court can order monthly maintenance payment",
      "Failure to pay: Imprisonment up to 1 month",
      "Arrears can be recovered as fine",
      "Interim maintenance during case proceedings",
    ],
    stateVariations: {
      varies: false,
      details: "CrPC is central legislation. Maintenance amounts vary based on income and local living costs.",
    },
    icon: "👨‍👩‍👧",
    tags: ["maintenance", "family", "divorce", "support"],
    source: "Code of Criminal Procedure, 1973",
    relatedSections: ["Section 126 (Procedure)", "Hindu Adoption and Maintenance Act"],
    importantNotes: [
      "Can be filed even without divorce",
      "Children entitled until age 18 (25 if studying)",
      "Being replaced by BNSS Section 144 in new criminal code",
    ],
  },
  {
    id: "domestic-violence-act",
    name: "Protection of Women from Domestic Violence Act, 2005",
    shortTitle: "Domestic Violence",
    category: "civil",
    plainExplanation:
      "This law protects women from physical, emotional, sexual, and economic abuse in domestic relationships. It provides quick remedies including protection orders, residence rights, and monetary relief without requiring criminal prosecution.",
    penalties: [
      "Protection order against abuser",
      "Right to reside in shared household",
      "Monetary relief for expenses and losses",
      "Custody of children",
      "Breach of protection order: 1 year imprisonment",
    ],
    stateVariations: {
      varies: false,
      details: "Central legislation applicable uniformly. Each district has Protection Officers and designated courts.",
    },
    icon: "🛡️",
    tags: ["domestic violence", "women", "protection", "family"],
    source: "Protection of Women from Domestic Violence Act, 2005",
    relatedSections: ["IPC Section 498A", "Dowry Prohibition Act"],
    importantNotes: [
      "Live-in partners can also file complaints",
      "Free legal aid available from District Legal Services Authority",
      "Complaints can be filed with Protection Officer, not just police",
    ],
  },
]

// Get law of the day based on date (deterministic selection)
export function getLawOfTheDay(): LawEntry {
  const today = new Date()
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24),
  )
  const index = dayOfYear % lawsDatabase.length
  return lawsDatabase[index]
}

// Get random law (for demo mode)
export function getRandomLaw(excludeId?: string): LawEntry {
  let filtered = lawsDatabase
  if (excludeId) {
    filtered = lawsDatabase.filter((law) => law.id !== excludeId)
  }
  const randomIndex = Math.floor(Math.random() * filtered.length)
  return filtered[randomIndex]
}

// Get laws by category
export function getLawsByCategory(category: LawEntry["category"]): LawEntry[] {
  return lawsDatabase.filter((law) => law.category === category)
}

// Get all categories with counts
export function getCategoryCounts(): Record<string, number> {
  return lawsDatabase.reduce(
    (acc, law) => {
      acc[law.category] = (acc[law.category] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )
}
