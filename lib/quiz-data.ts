export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  reference: {
    act: string
    section: string
    source: string
  }
  difficulty: "beginner" | "intermediate" | "scenario"
}

export interface QuizPack {
  id: string
  title: string
  description: string
  difficulty: "beginner" | "intermediate" | "scenario"
  state: string
  questionsCount: number
  estimatedTime: string
  icon: string
  color: string
}

export interface QuizResult {
  packId: string
  state: string
  score: number
  totalQuestions: number
  completedAt: string
  answers: {
    questionId: string
    selectedAnswer: number
    isCorrect: boolean
  }[]
}

// Quiz packs for Maharashtra and Delhi
export const quizPacks: QuizPack[] = [
  // Maharashtra Packs
  {
    id: "mh-beginner",
    title: "Traffic Laws Basics",
    description: "Learn the fundamentals of Motor Vehicles Act and traffic rules in Maharashtra",
    difficulty: "beginner",
    state: "Maharashtra",
    questionsCount: 10,
    estimatedTime: "5 mins",
    icon: "🚗",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "mh-intermediate",
    title: "IPC & Criminal Sections",
    description: "Understand common IPC sections and their applications in Maharashtra",
    difficulty: "intermediate",
    state: "Maharashtra",
    questionsCount: 10,
    estimatedTime: "8 mins",
    icon: "⚖️",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "mh-scenario",
    title: "Real-Life Legal Scenarios",
    description: "Apply your knowledge to realistic legal situations in Maharashtra",
    difficulty: "scenario",
    state: "Maharashtra",
    questionsCount: 10,
    estimatedTime: "10 mins",
    icon: "🎯",
    color: "from-orange-500 to-amber-500",
  },
  // Delhi Packs
  {
    id: "dl-beginner",
    title: "Traffic Laws Basics",
    description: "Learn the fundamentals of Motor Vehicles Act and traffic rules in Delhi",
    difficulty: "beginner",
    state: "Delhi",
    questionsCount: 10,
    estimatedTime: "5 mins",
    icon: "🚗",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "dl-intermediate",
    title: "IPC & Criminal Sections",
    description: "Understand common IPC sections and their applications in Delhi",
    difficulty: "intermediate",
    state: "Delhi",
    questionsCount: 10,
    estimatedTime: "8 mins",
    icon: "⚖️",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "dl-scenario",
    title: "Real-Life Legal Scenarios",
    description: "Apply your knowledge to realistic legal situations in Delhi",
    difficulty: "scenario",
    state: "Delhi",
    questionsCount: 10,
    estimatedTime: "10 mins",
    icon: "🎯",
    color: "from-orange-500 to-amber-500",
  },
]

// Sample questions for Maharashtra - Beginner
export const quizQuestions: Record<string, QuizQuestion[]> = {
  "mh-beginner": [
    {
      id: "mh-b-1",
      question:
        "What is the penalty for driving without a valid license in Maharashtra under the Motor Vehicles Act, 2019?",
      options: ["Rs. 1,000 fine", "Rs. 5,000 fine", "Rs. 2,000 fine", "Rs. 500 fine"],
      correctAnswer: 1,
      explanation:
        "Under Section 181 of the Motor Vehicles Act, 2019, driving without a valid license attracts a fine of Rs. 5,000. This is applicable across Maharashtra and is a significant increase from the previous Rs. 500 fine.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 181",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "beginner",
    },
    {
      id: "mh-b-2",
      question: "What is the legal blood alcohol limit for driving in Maharashtra?",
      options: [
        "0.05% BAC",
        "0.03% BAC (30 mg per 100 ml of blood)",
        "0.08% BAC",
        "Zero tolerance - no alcohol allowed",
      ],
      correctAnswer: 1,
      explanation:
        "In India, including Maharashtra, the legal blood alcohol limit is 0.03% BAC (30 mg of alcohol per 100 ml of blood). Exceeding this limit while driving is a punishable offense under Section 185 of the MV Act.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 185",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "beginner",
    },
    {
      id: "mh-b-3",
      question: "What is the penalty for not wearing a seatbelt in Maharashtra?",
      options: ["Rs. 100", "Rs. 500", "Rs. 1,000", "Rs. 2,000"],
      correctAnswer: 2,
      explanation:
        "Under Section 194B of the Motor Vehicles Act, 2019, not wearing a seatbelt attracts a fine of Rs. 1,000. This applies to both the driver and passengers.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 194B",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "beginner",
    },
    {
      id: "mh-b-4",
      question: "At what age can a person apply for a learner's license for a motorcycle in Maharashtra?",
      options: ["15 years", "16 years", "18 years", "21 years"],
      correctAnswer: 1,
      explanation:
        "A person can apply for a learner's license for a motorcycle without gear (up to 50cc) at 16 years of age. For motorcycles with gear, the minimum age is 18 years.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 4",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "beginner",
    },
    {
      id: "mh-b-5",
      question: "What is the penalty for using a mobile phone while driving in Maharashtra?",
      options: ["Rs. 500", "Rs. 1,000", "Rs. 1,500", "Rs. 5,000"],
      correctAnswer: 2,
      explanation:
        "Using a mobile phone while driving attracts a penalty of Rs. 1,500 under Section 184 of the MV Act, 2019. Repeated offenses can lead to license suspension.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 184",
        source: "Maharashtra State Rules",
      },
      difficulty: "beginner",
    },
    {
      id: "mh-b-6",
      question: "What is the penalty for driving without vehicle insurance in Maharashtra?",
      options: ["Rs. 1,000", "Rs. 2,000 or 3 months imprisonment", "Rs. 5,000", "Rs. 500"],
      correctAnswer: 1,
      explanation:
        "Under Section 196 of the MV Act, driving without valid insurance is punishable with a fine of Rs. 2,000 and/or imprisonment up to 3 months for first offense. For repeat offenses, it's Rs. 4,000.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 196",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "beginner",
    },
    {
      id: "mh-b-7",
      question: "What is the validity period of a permanent driving license in Maharashtra?",
      options: ["10 years", "15 years", "20 years or until age 50", "Lifetime"],
      correctAnswer: 2,
      explanation:
        "A permanent driving license in India is valid for 20 years from the date of issue or until the holder attains the age of 50, whichever is earlier. After 50, it needs renewal every 5 years.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 14",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "beginner",
    },
    {
      id: "mh-b-8",
      question: "What is the penalty for riding a two-wheeler without a helmet in Maharashtra?",
      options: ["Rs. 500", "Rs. 1,000 and 3-month license disqualification", "Rs. 100", "Rs. 2,000"],
      correctAnswer: 1,
      explanation:
        "Under Section 194D of the MV Act, 2019, riding without a helmet attracts Rs. 1,000 fine and 3-month disqualification from holding the license.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 194D",
        source: "Maharashtra State Rules",
      },
      difficulty: "beginner",
    },
    {
      id: "mh-b-9",
      question: "What document is NOT mandatory to carry while driving in Maharashtra?",
      options: ["Driving License", "Vehicle Registration Certificate", "PAN Card", "Insurance Certificate"],
      correctAnswer: 2,
      explanation:
        "While driving, you must carry your Driving License, Registration Certificate (RC), Insurance, and Pollution Under Control (PUC) certificate. PAN Card is not a mandatory driving document.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 130",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "beginner",
    },
    {
      id: "mh-b-10",
      question: "What is the penalty for jumping a red light in Maharashtra?",
      options: ["Rs. 500", "Rs. 1,000", "Rs. 1,000 to Rs. 5,000", "Rs. 100"],
      correctAnswer: 2,
      explanation:
        "Under Section 184 of the MV Act, 2019, jumping a red light is considered dangerous driving and attracts a penalty ranging from Rs. 1,000 to Rs. 5,000 depending on the severity.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 184",
        source: "Maharashtra State Rules",
      },
      difficulty: "beginner",
    },
  ],
  "mh-intermediate": [
    {
      id: "mh-i-1",
      question: "Under which IPC section is 'causing death by negligence' punishable?",
      options: ["Section 302", "Section 304A", "Section 307", "Section 323"],
      correctAnswer: 1,
      explanation:
        "IPC Section 304A deals with causing death by negligence, which includes death caused by rash or negligent driving. It's punishable with imprisonment up to 2 years, or fine, or both.",
      reference: {
        act: "Indian Penal Code, 1860",
        section: "Section 304A",
        source: "Central Legislation",
      },
      difficulty: "intermediate",
    },
    {
      id: "mh-i-2",
      question: "What is the punishment for hit and run causing death under the MV Act, 2019?",
      options: [
        "Rs. 50,000 fine only",
        "Up to 2 years imprisonment or Rs. 1 lakh fine",
        "Up to 10 years imprisonment",
        "Life imprisonment",
      ],
      correctAnswer: 2,
      explanation:
        "Under Section 161 read with Section 134 of the MV Act, 2019, hit and run causing death can lead to imprisonment up to 10 years. The central government also provides compensation to victims.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 161",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "intermediate",
    },
    {
      id: "mh-i-3",
      question: "Under which IPC section can dangerous driving causing hurt be prosecuted?",
      options: ["Section 279 and 337", "Section 302", "Section 420", "Section 498A"],
      correctAnswer: 0,
      explanation:
        "IPC Section 279 (rash driving on public way) along with Section 337 (causing hurt by act endangering life) are commonly used for dangerous driving cases causing injury.",
      reference: {
        act: "Indian Penal Code, 1860",
        section: "Section 279, 337",
        source: "Central Legislation",
      },
      difficulty: "intermediate",
    },
    {
      id: "mh-i-4",
      question: "What is the compensation amount for death in a motor vehicle accident under the MV Act, 2019?",
      options: [
        "Rs. 50,000",
        "Rs. 2 lakh for hit and run, Rs. 5 lakh for third party",
        "Rs. 10 lakh fixed",
        "Decided by court only",
      ],
      correctAnswer: 1,
      explanation:
        "The MV Act, 2019 provides Rs. 2 lakh compensation for death in hit-and-run cases and the minimum compensation for third-party accident death is Rs. 5 lakh.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 164",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "intermediate",
    },
    {
      id: "mh-i-5",
      question: "Under which section can a minor driving a vehicle be prosecuted, and who else is liable?",
      options: [
        "Only the minor under Section 181",
        "Guardian/owner under Section 199A, vehicle can be seized",
        "Only the RTO",
        "No prosecution possible for minors",
      ],
      correctAnswer: 1,
      explanation:
        "Under Section 199A of MV Act, 2019, if a minor drives a vehicle, the guardian or owner is liable with Rs. 25,000 fine and 3 years imprisonment. The vehicle registration can also be cancelled.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 199A",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "intermediate",
    },
    {
      id: "mh-i-6",
      question: "What is IPC Section 323 about?",
      options: ["Murder", "Voluntarily causing hurt", "Theft", "Cheating"],
      correctAnswer: 1,
      explanation:
        "IPC Section 323 deals with punishment for voluntarily causing hurt. It's punishable with imprisonment up to 1 year, or fine up to Rs. 1,000, or both. Often applied in road rage cases.",
      reference: {
        act: "Indian Penal Code, 1860",
        section: "Section 323",
        source: "Central Legislation",
      },
      difficulty: "intermediate",
    },
    {
      id: "mh-i-7",
      question: "What does Section 177 of the MV Act deal with?",
      options: [
        "Drunk driving",
        "General provision for punishment of offenses",
        "Racing on public roads",
        "Vehicle theft",
      ],
      correctAnswer: 1,
      explanation:
        "Section 177 is the general provision that prescribes penalties for traffic offenses where no specific punishment is mentioned. The fine is Rs. 500 for first offense and Rs. 1,500 for subsequent offenses.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 177",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "intermediate",
    },
    {
      id: "mh-i-8",
      question: "What is the punishment for racing or speed trials on public roads?",
      options: [
        "Rs. 1,000 fine",
        "Rs. 5,000 fine and/or 1 month to 1 year imprisonment",
        "Vehicle confiscation only",
        "Warning only",
      ],
      correctAnswer: 1,
      explanation:
        "Under Section 189 of MV Act, 2019, racing on public roads is punishable with Rs. 5,000 fine and imprisonment from 1 month to 1 year. Organizing such races is separately punishable.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 189",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "intermediate",
    },
    {
      id: "mh-i-9",
      question: "What is the procedure if a person dies in a motor vehicle accident?",
      options: [
        "Only inform police",
        "FIR under IPC 304A, MV Act claim can be filed in MACT",
        "Civil suit only",
        "No legal recourse available",
      ],
      correctAnswer: 1,
      explanation:
        "In case of death, an FIR is registered under IPC 304A (negligence) and relevant MV Act sections. The victim's family can file for compensation in Motor Accident Claims Tribunal (MACT).",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Chapter XI",
        source: "MACT Rules",
      },
      difficulty: "intermediate",
    },
    {
      id: "mh-i-10",
      question: "What is the time limit to file a claim in MACT for motor accident compensation?",
      options: ["6 months", "1 year", "No time limit (can be condoned)", "3 years"],
      correctAnswer: 2,
      explanation:
        "While claims should ideally be filed within 6 months, the MACT has the power to condone delay and entertain claims filed late if there is reasonable cause for the delay.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 166",
        source: "MACT Rules",
      },
      difficulty: "intermediate",
    },
  ],
  "mh-scenario": [
    {
      id: "mh-s-1",
      question:
        "Ravi was driving and accidentally hit a pedestrian who suffered minor injuries. What should Ravi do immediately?",
      options: [
        "Drive away to avoid complications",
        "Stop, provide reasonable medical assistance, and report to nearest police station within 24 hours",
        "Wait at the spot until police arrives",
        "Only exchange contact details and leave",
      ],
      correctAnswer: 1,
      explanation:
        "Under Section 134 of MV Act, the driver must stop, provide reasonable medical assistance to the injured, and report the accident to the nearest police station within 24 hours. Leaving the scene (hit and run) is a serious offense.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 134",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "scenario",
    },
    {
      id: "mh-s-2",
      question:
        "Priya received a challan for overspeeding through an e-challan system. She believes it's incorrect. What can she do?",
      options: [
        "Ignore it as e-challans are not enforceable",
        "Contest it at the designated traffic court within 60 days",
        "Pay only 50% as negotiation",
        "File RTI to cancel it",
      ],
      correctAnswer: 1,
      explanation:
        "E-challans are legally enforceable. If you believe it's incorrect, you can contest it at the designated traffic court within 60 days. You can present evidence like dashcam footage or vehicle tracking data.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 206",
        source: "Maharashtra Motor Vehicles Rules",
      },
      difficulty: "scenario",
    },
    {
      id: "mh-s-3",
      question: "Amit lent his car to his friend who was drunk. His friend caused an accident. Is Amit liable?",
      options: [
        "No, only the driver is liable",
        "Yes, owner can be held liable for permitting an unfit person to drive",
        "Only if Amit knew his friend would drink",
        "Liability only if it's a company-owned vehicle",
      ],
      correctAnswer: 1,
      explanation:
        "Under Section 180 of MV Act, permitting an unfit person (including intoxicated person) to drive makes the owner liable. Amit can face charges for abetment if he knew or should have known about the friend's condition.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 180",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "scenario",
    },
    {
      id: "mh-s-4",
      question:
        "Sunita's husband died in a truck accident. The truck driver fled the scene. What compensation can she claim?",
      options: [
        "No compensation as driver fled",
        "Rs. 2 lakh from Solatium Scheme for hit and run, plus claim against vehicle owner/insurance",
        "Only insurance claim possible",
        "Must catch the driver first",
      ],
      correctAnswer: 1,
      explanation:
        "In hit and run cases, the victim's family can claim Rs. 2 lakh from the Hit and Run Compensation Scheme (Solatium Fund). Additionally, if the vehicle is identified later, they can claim from the vehicle's insurance.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 161, 164",
        source: "Solatium Scheme",
      },
      difficulty: "scenario",
    },
    {
      id: "mh-s-5",
      question:
        "Karan, 17, took his father's car without permission and caused an accident. What are the legal consequences?",
      options: [
        "Only Karan will be punished",
        "Karan tried as juvenile, father faces Rs. 25,000 fine and possible imprisonment, vehicle registration can be cancelled",
        "Only fine for the father",
        "Insurance will cover everything",
      ],
      correctAnswer: 1,
      explanation:
        "Under Section 199A, when a minor causes an accident, the guardian/owner faces Rs. 25,000 fine and up to 3 years imprisonment. The minor is dealt with under Juvenile Justice Act. Vehicle registration can be cancelled for 12 months.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 199A",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "scenario",
    },
    {
      id: "mh-s-6",
      question:
        "During a routine check, police found that Meera's car PUC certificate expired 2 days ago. What penalty applies?",
      options: [
        "Only warning for first time",
        "Rs. 10,000 fine under MV Act",
        "Rs. 500 fine",
        "Vehicle seized permanently",
      ],
      correctAnswer: 1,
      explanation:
        "Under Section 190(2) of MV Act, 2019, driving without valid PUC certificate attracts a fine of Rs. 10,000. This is a significant increase from the previous Rs. 1,000 fine to emphasize environmental compliance.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 190(2)",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "scenario",
    },
    {
      id: "mh-s-7",
      question:
        "Raj's vehicle was towed by traffic police for illegal parking. The towing damaged his car. What are his rights?",
      options: [
        "No recourse as parking was illegal",
        "Can claim compensation for damage, illegal parking fine still applies",
        "Must pay double fine for damage",
        "Can refuse to pay towing charges",
      ],
      correctAnswer: 1,
      explanation:
        "While the fine for illegal parking is valid, if the towing process damages the vehicle, the owner can claim compensation. The towing agency is responsible for safe handling of vehicles.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 127",
        source: "Maharashtra Motor Vehicles Rules",
      },
      difficulty: "scenario",
    },
    {
      id: "mh-s-8",
      question:
        "An ambulance with siren is stuck in traffic. Other vehicles are not giving way. What legal obligation do drivers have?",
      options: [
        "No legal obligation, traffic rules apply",
        "Must give way; failing to do so is punishable with Rs. 10,000 fine",
        "Only suggestion, not mandatory",
        "Only police vehicles get right of way",
      ],
      correctAnswer: 1,
      explanation:
        "Under Section 194E of MV Act, 2019, failing to give way to emergency vehicles (ambulance, fire brigade) is punishable with Rs. 10,000 fine. This is a new provision to ensure emergency vehicles can operate effectively.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 194E",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "scenario",
    },
    {
      id: "mh-s-9",
      question: "Vikram was stopped by police who demanded to see his documents. He has DigiLocker. Is that valid?",
      options: [
        "No, original documents mandatory",
        "Yes, DigiLocker documents are legally valid as per IT Act and MV Act",
        "Only for license, not RC",
        "Depends on the officer",
      ],
      correctAnswer: 1,
      explanation:
        "Documents stored in DigiLocker (including DL, RC, Insurance) are legally valid as per IT Act 2000 and MV Act amendments. They have the same legal sanctity as original documents.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 130",
        source: "IT Act 2000, MoRTH Notification",
      },
      difficulty: "scenario",
    },
    {
      id: "mh-s-10",
      question:
        "Neha's car was in an accident with an uninsured vehicle. The uninsured driver has no money to pay compensation. What can Neha do?",
      options: [
        "No compensation possible",
        "Claim from her own insurance if she has comprehensive policy, then subrogate against driver",
        "Government will pay",
        "Only criminal case possible",
      ],
      correctAnswer: 1,
      explanation:
        "If Neha has comprehensive insurance with own damage cover, she can claim from her insurer. The insurer then has the right of subrogation to recover from the uninsured driver. She can also file civil suit against the driver.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 149, 163",
        source: "Insurance Regulations",
      },
      difficulty: "scenario",
    },
  ],
  "dl-beginner": [
    {
      id: "dl-b-1",
      question: "What is the penalty for driving without a valid license in Delhi?",
      options: ["Rs. 1,000", "Rs. 5,000", "Rs. 2,500", "Rs. 500"],
      correctAnswer: 1,
      explanation:
        "Under Section 181 of the Motor Vehicles Act, 2019, driving without a valid license in Delhi attracts a fine of Rs. 5,000. Delhi strictly enforces this provision.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 181",
        source: "Delhi Motor Vehicles Rules",
      },
      difficulty: "beginner",
    },
    {
      id: "dl-b-2",
      question: "What is the odd-even rule in Delhi?",
      options: [
        "Vehicles can only run on odd or even dates based on last digit",
        "Traffic rule for alternate lane usage",
        "Parking rule for residential areas",
        "Speed limit variation rule",
      ],
      correctAnswer: 0,
      explanation:
        "Delhi's odd-even scheme restricts vehicles based on the last digit of registration number. Odd-numbered vehicles run on odd dates, even-numbered on even dates. It's implemented during high pollution periods.",
      reference: {
        act: "GRAP (Graded Response Action Plan)",
        section: "Stage III, IV measures",
        source: "Delhi Government Notification",
      },
      difficulty: "beginner",
    },
    {
      id: "dl-b-3",
      question: "What is the fine for parking in a no-parking zone in Delhi?",
      options: ["Rs. 100", "Rs. 500", "Rs. 500 (LMV) to Rs. 1,500 (HMV), plus towing charges", "Rs. 2,000"],
      correctAnswer: 2,
      explanation:
        "Under MV Act and Delhi traffic rules, parking violations attract Rs. 500 for light motor vehicles and Rs. 1,500 for heavy vehicles. Additional towing charges of Rs. 550-850 may apply.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 177",
        source: "Delhi Traffic Rules",
      },
      difficulty: "beginner",
    },
    {
      id: "dl-b-4",
      question: "What are the permitted auto-rickshaw colors in Delhi?",
      options: ["Any color", "Yellow and black", "Green and yellow (CNG autos)", "White only"],
      correctAnswer: 2,
      explanation:
        "In Delhi, auto-rickshaws must be green and yellow colored, indicating they run on CNG (Compressed Natural Gas) as mandated by the Supreme Court for reducing pollution.",
      reference: {
        act: "Delhi Motor Vehicles Rules",
        section: "Rule 233",
        source: "Supreme Court Directive 1998",
      },
      difficulty: "beginner",
    },
    {
      id: "dl-b-5",
      question: "At what age can you get a permanent driving license for a car in Delhi?",
      options: ["16 years", "18 years", "21 years", "20 years"],
      correctAnswer: 1,
      explanation:
        "The minimum age for getting a permanent driving license for a car (LMV) in Delhi is 18 years. For transport vehicles, it's 20 years with additional requirements.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 4",
        source: "Central Motor Vehicles Rules",
      },
      difficulty: "beginner",
    },
    {
      id: "dl-b-6",
      question: "What is the speed limit for cars on Delhi Ring Road?",
      options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
      correctAnswer: 2,
      explanation:
        "The speed limit on Delhi Ring Road for cars is 70 km/h. Different limits apply for different vehicle categories and road sections.",
      reference: {
        act: "Delhi Traffic Rules",
        section: "Chapter 4",
        source: "Delhi Traffic Police",
      },
      difficulty: "beginner",
    },
    {
      id: "dl-b-7",
      question: "Is honking prohibited in certain areas of Delhi?",
      options: [
        "No restrictions on honking",
        "Yes, in silence zones like hospitals, schools, courts",
        "Only during night",
        "Only for two-wheelers",
      ],
      correctAnswer: 1,
      explanation:
        "Honking is prohibited in silence zones (100m around hospitals, schools, courts). Unnecessary honking anywhere can attract Rs. 1,000 fine under the Noise Pollution Rules and MV Act.",
      reference: {
        act: "Noise Pollution Rules, 2000",
        section: "Rule 5",
        source: "DPCC Notification",
      },
      difficulty: "beginner",
    },
    {
      id: "dl-b-8",
      question: "What color beacon lights are reserved for emergency vehicles in Delhi?",
      options: [
        "Any color beacon is allowed",
        "Red and blue for specific vehicles only",
        "Only white beacons allowed for all",
        "Yellow for all vehicles",
      ],
      correctAnswer: 1,
      explanation:
        "Red beacons are banned for VIP vehicles since 2017. Blue beacons are reserved for emergency vehicles (ambulance, fire, police). Amber/yellow can be used by construction vehicles.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 52",
        source: "Central Government Notification 2017",
      },
      difficulty: "beginner",
    },
    {
      id: "dl-b-9",
      question: "What is the fine for not having a valid PUC certificate in Delhi?",
      options: ["Rs. 1,000", "Rs. 5,000", "Rs. 10,000", "Rs. 500"],
      correctAnswer: 2,
      explanation:
        "Under Section 190(2) of MV Act, 2019, operating a vehicle without valid PUC attracts Rs. 10,000 fine. Delhi enforces this strictly due to high pollution levels.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 190(2)",
        source: "Delhi Motor Vehicles Rules",
      },
      difficulty: "beginner",
    },
    {
      id: "dl-b-10",
      question: "Can vehicles older than 15 years (petrol) or 10 years (diesel) ply in Delhi?",
      options: [
        "Yes, with special permit",
        "No, they are banned from Delhi NCR",
        "Only with green tax",
        "Only during non-peak hours",
      ],
      correctAnswer: 1,
      explanation:
        "As per NGT and Supreme Court orders, diesel vehicles older than 10 years and petrol vehicles older than 15 years are banned from operating in Delhi NCR to curb pollution.",
      reference: {
        act: "NGT Order 2015",
        section: "SC Order MC Mehta Case",
        source: "National Green Tribunal",
      },
      difficulty: "beginner",
    },
  ],
  "dl-intermediate": [
    {
      id: "dl-i-1",
      question: "Under which section is 'rash driving on public way' punishable in Delhi?",
      options: ["IPC Section 279", "IPC Section 302", "IPC Section 420", "IPC Section 304"],
      correctAnswer: 0,
      explanation:
        "IPC Section 279 specifically deals with rash driving or riding on a public way. It's punishable with imprisonment up to 6 months, or fine up to Rs. 1,000, or both.",
      reference: {
        act: "Indian Penal Code, 1860",
        section: "Section 279",
        source: "Central Legislation",
      },
      difficulty: "intermediate",
    },
    {
      id: "dl-i-2",
      question: "What is the punishment for drunk driving (first offense) in Delhi?",
      options: [
        "Rs. 2,000 fine only",
        "Rs. 10,000 fine and/or 6 months imprisonment, license suspension",
        "Warning only",
        "Rs. 5,000 fine only",
      ],
      correctAnswer: 1,
      explanation:
        "Under Section 185 of MV Act, 2019, first offense of drunk driving attracts Rs. 10,000 fine and/or 6 months imprisonment. For repeat offense within 2 years, it's Rs. 15,000 and/or 2 years imprisonment.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 185",
        source: "Delhi Motor Vehicles Rules",
      },
      difficulty: "intermediate",
    },
    {
      id: "dl-i-3",
      question: "What powers do Delhi Traffic Police have regarding vehicle impounding?",
      options: [
        "Can impound for any offense",
        "Can impound for specific serious violations and overloading, must give receipt",
        "Cannot impound, only fine",
        "Only courts can order impounding",
      ],
      correctAnswer: 1,
      explanation:
        "Under Section 206 and 207 of MV Act, traffic police can impound vehicles for serious violations, drunk driving, and overloading. They must provide a receipt and the vehicle must be released on furnishing documents/bail.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 206, 207",
        source: "Delhi Traffic Police Manual",
      },
      difficulty: "intermediate",
    },
    {
      id: "dl-i-4",
      question: "What is the role of MACT (Motor Accident Claims Tribunal) in Delhi?",
      options: [
        "Criminal court for traffic offenses",
        "Quasi-judicial body for compensation claims in motor accidents",
        "Licensing authority",
        "Appeals court",
      ],
      correctAnswer: 1,
      explanation:
        "MACT is a quasi-judicial body that adjudicates compensation claims arising from motor accidents. It can award compensation for death, injury, and property damage based on principles of tort law.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Chapter XI",
        source: "MACT Delhi",
      },
      difficulty: "intermediate",
    },
    {
      id: "dl-i-5",
      question: "What is the 'Golden Hour' scheme in Delhi for accident victims?",
      options: [
        "Rush hour traffic management",
        "First hour treatment is free; Good Samaritans protected from legal harassment",
        "Special parking hours",
        "Peak fine collection time",
      ],
      correctAnswer: 1,
      explanation:
        "Golden Hour scheme mandates that accident victims receive free treatment in the first hour. Good Samaritans who help are protected under Section 134A from legal harassment and repeated questioning.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 134A, 162",
        source: "Good Samaritan Guidelines",
      },
      difficulty: "intermediate",
    },
    {
      id: "dl-i-6",
      question: "Under BNS (Bharatiya Nyaya Sanhita) 2023, which section replaces IPC 304A for death by negligence?",
      options: ["Section 104", "Section 106", "Section 302", "Section 279"],
      correctAnswer: 1,
      explanation:
        "BNS Section 106 deals with causing death by negligence, replacing IPC 304A. The punishment can extend to 5 years for death caused by rash or negligent act, increased from 2 years under IPC.",
      reference: {
        act: "Bharatiya Nyaya Sanhita, 2023",
        section: "Section 106",
        source: "Central Legislation (effective July 2024)",
      },
      difficulty: "intermediate",
    },
    {
      id: "dl-i-7",
      question: "What is the procedure for compounding of traffic offenses in Delhi?",
      options: [
        "All offenses can be compounded",
        "Specified offenses can be compounded by paying fine; serious offenses require court appearance",
        "No compounding allowed",
        "Only at police station",
      ],
      correctAnswer: 1,
      explanation:
        "Under Section 200 of MV Act, certain offenses can be compounded by paying prescribed fines. Serious offenses like drunk driving, racing, and causing death cannot be compounded and require court appearance.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 200",
        source: "Delhi Motor Vehicles Rules",
      },
      difficulty: "intermediate",
    },
    {
      id: "dl-i-8",
      question: "What is Delhi's policy on electric vehicle registration?",
      options: [
        "Same process as petrol vehicles",
        "Exempted from registration fee, road tax waived under EV policy",
        "Higher registration fee",
        "Registration not required",
      ],
      correctAnswer: 1,
      explanation:
        "Under Delhi EV Policy 2020, electric vehicles are exempted from registration fees and road tax. Additional purchase incentives of up to Rs. 1.5 lakh are also provided.",
      reference: {
        act: "Delhi EV Policy, 2020",
        section: "Incentive Scheme",
        source: "Delhi Transport Department",
      },
      difficulty: "intermediate",
    },
    {
      id: "dl-i-9",
      question: "What are the powers of Civil Defence Volunteers in traffic management in Delhi?",
      options: [
        "Same as police officers",
        "Can assist in traffic management, issue advisories, but cannot issue challans",
        "Can arrest violators",
        "No official powers",
      ],
      correctAnswer: 1,
      explanation:
        "Civil Defence Volunteers in Delhi assist traffic police in managing traffic flow and giving directions. They cannot issue challans or make arrests - only sworn police officers can do so.",
      reference: {
        act: "Delhi Police Act",
        section: "Traffic Management",
        source: "Delhi Traffic Police",
      },
      difficulty: "intermediate",
    },
    {
      id: "dl-i-10",
      question: "What is the legal status of dash cam footage in Delhi traffic cases?",
      options: [
        "Not admissible as evidence",
        "Admissible as electronic evidence under IT Act and Indian Evidence Act",
        "Only police footage valid",
        "Requires certification from RTO",
      ],
      correctAnswer: 1,
      explanation:
        "Dash cam footage is admissible as electronic evidence under Section 65B of Indian Evidence Act (now BSA Section 63). It can be used to contest challans or support insurance claims.",
      reference: {
        act: "Bharatiya Sakshya Adhiniyam, 2023",
        section: "Section 63",
        source: "Central Legislation",
      },
      difficulty: "intermediate",
    },
  ],
  "dl-scenario": [
    {
      id: "dl-s-1",
      question:
        "Ankit was stopped at a Delhi traffic checkpoint. The officer asked for his papers and also demanded a bribe. What should Ankit do?",
      options: [
        "Pay to avoid trouble",
        "Note officer's name/badge, pay official fine with receipt, report to Anti-Corruption helpline 1031",
        "Argue with the officer",
        "Drive away",
      ],
      correctAnswer: 1,
      explanation:
        "Never pay bribes. Note the officer's details, insist on official challan with receipt, and report corruption to Delhi Traffic Police helpline 25844444 or Anti-Corruption helpline 1031. You can also use the Traffic Police app.",
      reference: {
        act: "Prevention of Corruption Act",
        section: "Section 7",
        source: "Delhi Traffic Police Helpline",
      },
      difficulty: "scenario",
    },
    {
      id: "dl-s-2",
      question:
        "During Delhi's odd-even restrictions, Seema (a single woman) needs to drive her even-numbered car on an odd date for office. Is she exempt?",
      options: [
        "No exemptions for anyone",
        "Yes, single women driving alone are exempt under the scheme",
        "Only with special pass",
        "Can drive but must pay fine",
      ],
      correctAnswer: 1,
      explanation:
        "Delhi's odd-even scheme exempts women driving alone, vehicles with school children, emergency vehicles, EVs, CNG vehicles, and vehicles of disabled persons. Seema qualifies for the women's exemption.",
      reference: {
        act: "Delhi Odd-Even Scheme",
        section: "Exemption Categories",
        source: "Delhi Government Notification",
      },
      difficulty: "scenario",
    },
    {
      id: "dl-s-3",
      question:
        "Mohit's 12-year-old diesel car's registration was cancelled by Delhi Transport Department. What are his options?",
      options: [
        "Continue driving as registration is just paperwork",
        "Re-register in another state and use in Delhi",
        "Scrap vehicle under Vehicle Scrappage Policy for benefits, or sell outside NCR",
        "Appeal to Supreme Court",
      ],
      correctAnswer: 2,
      explanation:
        "Diesel vehicles older than 10 years cannot be re-registered in NCR. Mohit can scrap under the Vehicle Scrappage Policy (5% rebate on new vehicle) or sell to someone outside NCR. Driving banned vehicle attracts Rs. 10,000 fine.",
      reference: {
        act: "Vehicle Scrappage Policy, 2021",
        section: "NGT Order",
        source: "Ministry of Road Transport",
      },
      difficulty: "scenario",
    },
    {
      id: "dl-s-4",
      question:
        "Deepa witnessed a hit-and-run in Delhi. She helped the injured person and gave her contact to police. Now police is repeatedly calling her. What are her rights?",
      options: [
        "Must attend every summons",
        "Protected under Good Samaritan Law - cannot be detained, max 1 statement, can decline repeated questioning",
        "No special rights as witness",
        "Should hire a lawyer immediately",
      ],
      correctAnswer: 1,
      explanation:
        "Under Good Samaritan Guidelines (Section 134A, MV Act), Deepa is protected. She can give a single statement, cannot be compelled to appear repeatedly, and cannot be detained. Her identity disclosure is her choice in court.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 134A",
        source: "Good Samaritan Guidelines 2015",
      },
      difficulty: "scenario",
    },
    {
      id: "dl-s-5",
      question:
        "Rahul ordered a cab via app in Delhi. During the ride, the driver drove rashly and Rahul was injured in an accident. Who is liable?",
      options: [
        "Only the driver",
        "Driver and aggregator (app company) can both be held liable",
        "Only the cab owner",
        "Rahul himself for choosing the cab",
      ],
      correctAnswer: 1,
      explanation:
        "Under MV Act 2019 amendments, aggregators (Uber, Ola) are also responsible for driver conduct. Rahul can claim against driver's insurance, aggregator's insurance, and file complaint with Transport Department against the aggregator's license.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 93",
        source: "Aggregator Guidelines",
      },
      difficulty: "scenario",
    },
    {
      id: "dl-s-6",
      question:
        "Police issued e-challan to Kavita's vehicle for a violation that happened when her vehicle was parked and she was not present. What can she do?",
      options: [
        "Must pay as challan is final",
        "Contest within 60 days with evidence (CCTV, parking receipt, etc.)",
        "Ignore the challan",
        "Transfer vehicle to avoid fine",
      ],
      correctAnswer: 1,
      explanation:
        "E-challans can be contested within 60 days before the designated authority. Kavita should gather evidence like parking receipts, CCTV footage, or witness statements and file an appeal. Wrong challans can be cancelled.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 206",
        source: "Delhi Traffic Rules",
      },
      difficulty: "scenario",
    },
    {
      id: "dl-s-7",
      question:
        "Arun is a delivery executive whose bike was seized for expired insurance. His earnings depend on the bike. What is the release procedure?",
      options: [
        "Bike released only after court case",
        "Pay fine of Rs. 2,000, get insurance, submit documents for release within 7 days",
        "Bike auctioned after 30 days",
        "Must buy new bike",
      ],
      correctAnswer: 1,
      explanation:
        "For insurance violations, Arun must pay Rs. 2,000 fine, get valid insurance immediately, and submit documents to the impounding authority. Vehicle must be released within 7 days of completing formalities.",
      reference: {
        act: "Motor Vehicles Act, 2019",
        section: "Section 196, 207",
        source: "Delhi Traffic Police",
      },
      difficulty: "scenario",
    },
    {
      id: "dl-s-8",
      question:
        "Prashant received multiple challans for violations he didn't commit - his vehicle number was cloned. What should he do?",
      options: [
        "Pay all challans to clear record",
        "File FIR for number plate cloning, file affidavit, contest challans with police report",
        "Change vehicle number",
        "Sell the vehicle",
      ],
      correctAnswer: 1,
      explanation:
        "Number plate cloning is an offense under IPC/BNS (forgery). Prashant should file FIR, get certified copy, file affidavit declaring cloning, and contest each challan with police report. RTO can issue new registration number.",
      reference: {
        act: "IPC Section 468/BNS 340",
        section: "Forgery",
        source: "Delhi Police",
      },
      difficulty: "scenario",
    },
    {
      id: "dl-s-9",
      question:
        "During a pollution emergency (GRAP Stage IV), Meghna needs to use her petrol car for a medical emergency. Is she allowed?",
      options: [
        "No private vehicles allowed under any circumstance",
        "Medical emergencies are exempt; carry proof of medical appointment/emergency",
        "Must use only public transport",
        "Only EVs allowed",
      ],
      correctAnswer: 1,
      explanation:
        "Even during GRAP Stage IV restrictions, medical emergencies are exempted. Meghna should carry hospital appointment letter, prescription, or emergency documents. BS-VI vehicles may also be exempt in some stages.",
      reference: {
        act: "GRAP (Graded Response Action Plan)",
        section: "Stage IV Exemptions",
        source: "CAQM Notification",
      },
      difficulty: "scenario",
    },
    {
      id: "dl-s-10",
      question:
        "Vijay's car was damaged in a pothole accident on a Delhi road. Can he claim compensation from the government?",
      options: [
        "No, road conditions are not government's liability",
        "Yes, can file claim against PWD/MCD under tort law; document evidence immediately",
        "Only if hospitalized",
        "Insurance will cover everything",
      ],
      correctAnswer: 1,
      explanation:
        "Government bodies responsible for road maintenance (PWD, MCD) can be held liable for accidents due to poor road conditions. Vijay should photograph the pothole, get FIR copy, medical reports, and file claim in civil court or consumer forum.",
      reference: {
        act: "Law of Torts",
        section: "Government Negligence",
        source: "PWD/MCD Liability",
      },
      difficulty: "scenario",
    },
  ],
}

// Badges based on quiz performance
export const badges = [
  { id: "first-quiz", name: "First Steps", description: "Complete your first quiz", icon: "🎯", requirement: 1 },
  {
    id: "perfect-score",
    name: "Legal Eagle",
    description: "Score 100% in any quiz",
    icon: "🦅",
    requirement: "perfect",
  },
  { id: "streak-3", name: "Consistent Learner", description: "Complete 3 quizzes", icon: "🔥", requirement: 3 },
  {
    id: "all-beginner",
    name: "Foundation Built",
    description: "Complete all beginner quizzes",
    icon: "🏗️",
    requirement: "all-beginner",
  },
  {
    id: "scenario-master",
    name: "Scenario Master",
    description: "Complete all scenario quizzes",
    icon: "🎭",
    requirement: "all-scenario",
  },
  {
    id: "multi-state",
    name: "Pan-India Expert",
    description: "Complete quizzes in 2+ states",
    icon: "🗺️",
    requirement: "multi-state",
  },
]
