import { Colors } from "configs";
import { AVATAR } from "images/Avatar";
import { IMAGE } from "images/Image";
import { Tasks } from "type/tasks";
import { condition } from "type/condition";
import Routes from "./Routes";
import { ICON } from "images/Icon";

export const phonesAreaCodes = [
  {
    id: 0,
    img: IMAGE.flag,
    name: "America",
    code: "+1",
  },
  {
    id: 1,
    img: IMAGE.flag,
    name: "Afghanistan",
    code: "+93",
  },
  {
    id: 2,
    img: IMAGE.flag,
    name: "Albania",
    code: "+355",
  },
  {
    id: 3,
    img: IMAGE.flag,
    name: "Algeria",
    code: "+213",
  },
  {
    id: 4,
    img: IMAGE.flag,
    name: "American Samoa",
    code: "+1-684",
  },
  {
    id: 5,
    img: IMAGE.flag,
    name: "Andorra",
    code: "+376",
  },
  {
    id: 6,
    img: IMAGE.flag,
    name: "Angola",
    code: "+244",
  },
  {
    id: 7,
    img: IMAGE.flag,
    name: "Anguilla",
    code: "+1-264",
  },
];

export const CATEGORY_LIST_EXAMPLE = [
  {
    id: 0,
    name: "Select",
  },
  {
    id: 1,
    name: "Category 1",
  },
  {
    id: 2,
    name: "Category 2",
  },
  {
    id: 3,
    name: "Category 3",
  },
  {
    id: 4,
    name: "Category 4",
  },
  {
    id: 5,
    name: "Category 5",
  },
  {
    id: 6,
    name: "Category 6",
  },
  {
    id: 7,
    name: "Category 7",
  },
  {
    id: 8,
    name: "Category 8",
  },
  {
    id: 9,
    name: "Category 9",
  },
];

export const ONBOARDING = [
  {
    id: 1,
    image: IMAGE.img1,
    description: "Access thousands of trusted Doctors instantly!",
  },
  {
    id: 2,
    image: IMAGE.img2,
    description: "Asking doctor a medical query has never been so easy!",
  },
  {
    id: 3,
    image: IMAGE.img3,
    description: "Book an online in-person appointment with a Doctor",
  },
  {
    id: 4,
    image: IMAGE.img4,
    description: "Consult Doctors via Video/Audio and Live chat",
  },
];
export const RELATIONSHIP = [
  {
    id: 0,
    name: "Wife",
  },
  {
    id: 1,
    name: "Daughter",
  },
];

export const GENDER = [
  {
    id: 0,
    name: "Male",
  },
  {
    id: 1,
    name: "Female",
  },
];

export const CURRENT_MY_RECORD_CONDITION = [
  {
    id: 0,
    name: "Flu & Cold",
    date: "Last updated: Jan 02, 2020 by Apple Health",
    description: "I have a runny or stuffy nose",
  },
  {
    id: 1,
    name: "Muscle Pain",
    date: "Last updated: Jan 02, 2020 by Apple Health",
    description:
      "Neck pain, upper back pain, and lower back pain, generally affecting one side of the body or one side of the body much more thanthe other.",
  },
];
export const PAST_MY_RECORD_CONDITION = [];

export const DOCTOR_PROFILE = {
  id: 0,
  avatar: AVATAR.wallace,
  name: "Dr. Martin Wallace",
  faculty: "Allergy & Immunology",
  address: "Temple Hills, MD 20748",
  rate: 4.8,
  review: 1387,
  online: true,
  patients: 1523,
  savedLives: 423,
  helpedPeople: 423200,
  thanksFor: 24200,
};

export const ABOUT = {
  information:
    "Dr. Martin Wallace is Board Certified in Allergy and Immunology and Pediatrics and a South Jersey Top Doc. With over 23 years' private practice experience...",
  images: [IMAGE.map, IMAGE.map],
  address: "102 Centre Boulevard Suite B\nSaint Albans, NY 11412",
  phoneNumber: "481-766-6767",
  insurancePlans: ["Aetna", "AmeriHealth", "BlueCross BlueShield", "Cigna"],
  specialities: [
    { icon: "allergies", title: "Allergy And Immunology" },
    { icon: "heart", title: "Cardiology" },
  ],
  licensed: "New York",
  workExperience: "23 years",
  language: ["English", "Spanish", "French"],
  imageSchool: IMAGE.bostonUniversity,
  medicalSchool: "Boston University School of Medicine",
  establishSchool: "1985",
  education: ["FCPS", " MBBS", "Clinical Medicine"],
  certification: `MD '06`,
  awards: [
    { award: "Medicine Award Winners", year: "1990" },
    { award: "AMA Scientific Achievement Award", year: "2001" },
    { award: "APUA Leadership Award", year: "2016" },
  ],
};

export const REVIEWS = {
  content: [
    {
      circleColor: Colors.TealBlue,
      percentage: 86,
      percent: 96,
      title: "Recommend",
    },
    {
      circleColor: Colors.DodgerBlue,
      percentage: 80,
      percent: 92,
      title: "Start on Time",
    },
    {
      circleColor: Colors.Orange,
      percentage: 80,
      percent: 4.8,
      title: "Rating",
    },
  ],
  rating: 4.8,
  reviews: 1387,
  review: [
    {
      avatar: AVATAR.avatar9,
      name: "Myra Douglas",
      rate: "5.0",
      date: "Jan 05, 2020",
      description:
        "Dr. Martin Wallace provides answers that are inspring and sensible. I know that but what lifestyle and food I need to know that?",
    },
    {
      avatar: AVATAR.avatar10,
      name: "Nancy Beck",
      rate: 4.9,
      date: "Jan 02, 2020",
      description:
        "I found the answers provided by Dr. Martin Wallace to be knowledge, caring, inspring, well-reasoned and professional.",
    },
  ],
};

export const MODAL_CARE_SERVICES = [
  {
    icon: "message",
    color: Colors.TiffanyBlue,
    title: "Send Message",
    description:
      "Send multiple messages/attachments. Get first response within 4 hours.",
    amount: 45,
  },
  {
    icon: "video",
    color: Colors.DodgerBlue,
    title: "Video/Voice/Live Chat",
    description: "30 minutes call durations.Get first response within 30 mins.",
    amount: 45,
  },
  {
    icon: "appointmentActive",
    color: Colors.BlueCrayola,
    title: "Online Appointment",
    description:
      "Check available time and schedule an online appointment with doctor and consult via call. ",
    amount: 45,
  },
];

export const VISIT_TIME = [
  {
    day: "sun",
    times: [],
  },
  {
    day: "mon",
    times: ["08:00 AM - 12:00 PM", "02:00 PM - 21:00 PM"],
  },
  {
    day: "tue",
    times: ["08:00 AM - 12:00 PM", "02:00 PM - 21:00 PM"],
  },
  {
    day: "wed",
    times: ["08:00 AM - 12:00 PM", "02:00 PM - 21:00 PM"],
  },
  {
    day: "thu",
    times: ["08:00 AM - 12:00 PM", "02:00 PM - 21:00 PM"],
  },
  {
    day: "fri",
    times: ["08:00 AM - 12:00 PM", "02:00 PM - 21:00 PM"],
  },
];

export const HEALTH_FEED_DATA = [
  {
    id: 0,
    subTitle: "Health Tip",
    title: "Quitting smoking",
    name: "Dr.Sarah Conner",
    avatar: AVATAR.sarah,
    image: IMAGE.cigarette,
    action: "shared",
    thanks: 12500,
    shares: 1200,
    quantity: "Integrative Medicine",
    shareOn: "Air Pollotion",
    subDescription:
      "Quitting smoking is the process of discontinuing the use of inhaled tobacco products.",
    description:
      "Quitting smoking is the process of discontinuing the use of inhaled tobacco products.\n\nInteresting Fact: Smoking is the number one cause of preventable death in the United States.",
  },
  {
    id: 1,
    subTitle: "Health Tip",
    title: "Quitting smoking",
    name: "Dr.Sarah Conner",
    avatar: AVATAR.sarah,
    image: IMAGE.cigarette,
    action: "shared",
    thanks: 12500,
    shares: 1200,
    quantity: "Integrative Medicine",
    shareOn: "Air Pollotion",
    subDescription:
      "Quitting smoking is the process of discontinuing the use of inhaled tobacco products.",
    description:
      "Quitting smoking is the process of discontinuing the use of inhaled tobacco products.\n\nInteresting Fact: Smoking is the number one cause of preventable death in the United States.",
  },
];

export const FILTER_INSIGHTS = [
  { id: 0, title: "Answers" },
  { id: 1, title: "Tips" },
  { id: 2, title: "Topics" },
  { id: 3, title: "Health" },
];

export const IN_NETWORK = [
  {
    id: 0,
    avatar: AVATAR.doctor5,
    name: "Dr. John Bevan",
    faculty: "Pathology",
    address: "Temple Hills, MD 20748",
    rating: 4.8,
    review: 141,
    online: true,
    appointment: true,
    message: true,
    video: true,
  },
  {
    id: 1,
    avatar: AVATAR.doctor3,
    name: "Dr. John Smith",
    faculty: "Surgery",
    address: "Torrance, CA 90505",
    rating: 4.8,
    review: 141,
    online: true,
    appointment: true,
    video: true,
  },
  {
    id: 2,
    avatar: AVATAR.doctor3,
    name: "Dr. Johnny Williams",
    faculty: "Family Medicine",
    address: "Leominster, MA 01453",
    rating: 4.8,
    review: 141,
    online: true,
    appointment: true,
    message: true,
    video: true,
  },
];
export const categoryInFollowTopic = [
  {
    id: 1,
    title: "Abortion",
  },
  {
    id: 2,
    title: "Accidents, Radiation",
  },
  {
    id: 3,
    title: "Addictive behaviours",
  },
  {
    id: 4,
    title: "Adolescent pregnancy",
  },
  {
    id: 5,
    title: "Ageing",
  },
  {
    id: 6,
    title: "Air pollution",
  },
  {
    id: 7,
    title: "Single",
  },
  {
    id: 8,
    title: "Hungry",
  },
  {
    id: 9,
    title: "Fat",
  },
  {
    id: 10,
    title: "Body shaming",
  },
];
export const TodayTaskFakeData: Array<Tasks> = [
  {
    id: 0,
    content: "Talk to a doctor in Dentistry",
    note: "Caring for Your Toodler",
    decription:
      "Ask your health query to our experienced Dentists online and receive instant medical advice and second opinion.",
    frequency: "2x a year",
    start_date: "As soon as the Health Guide begins",
    end_date: "Never",
    check: false,
  },
  {
    id: 1,
    content: "Read and sing to your child to grow verbal skills",
    note: "Caring for Your Toodler",
    decription:
      "Ask your health query to our experienced Dentists online and receive instant medical advice and second opinion.",
    frequency: "2x a year",
    start_date: "As soon as the Health Guide begins",
    end_date: "Never",
    check: false,
  },
  {
    id: 2,
    content: "Talk to a doctor in Dentistry",
    note: "Caring for Your Toodler",
    decription:
      "Ask your health query to our experienced Dentists online and receive instant medical advice and second opinion.",
    frequency: "2x a year",
    start_date: "As soon as the Health Guide begins",
    end_date: "Never",
    check: false,
  },
  {
    id: 3,
    content: "Get influenza vaccine each fall",
    note: "Getting Vaccinated",
    decription:
      "Ask your health query to our experienced Dentists online and receive instant medical advice and second opinion.",
    frequency: "2x a year",
    start_date: "As soon as the Health Guide begins",
    end_date: "Never",
    check: false,
  },
  {
    id: 4,
    content:
      "As an adult, get tetanus vaccine every 10 years, and Tdap vaccine once",
    note: "Getting Vaccinated",
    decription:
      "Ask your health query to our experienced Dentists online and receive instant medical advice and second opinion.",
    frequency: "2x a year",
    start_date: "As soon as the Health Guide begins",
    end_date: "Never",
    check: true,
  },
  {
    id: 5,
    content: "Keep immunizations up to date",
    note: "Caring for Your Toodler",
    decription:
      "Ask your health query to our experienced Dentists online and receive instant medical advice and second opinion.",
    frequency: "2x a year",
    start_date: "As soon as the Health Guide begins",
    end_date: "Never",
    check: true,
  },
  {
    id: 6,
    content: "Talk to a doctor in Dentistry",
    note: "Caring for Your Toodler",
    decription:
      "Ask your health query to our experienced Dentists online and receive instant medical advice and second opinion.",
    frequency: "2x a year",
    start_date: "As soon as the Health Guide begins",
    end_date: "Never",
    check: true,
  },
  {
    id: 7,
    content: "Talk to a doctor in Dentistry",
    note: "Caring for Your Toodler",
    decription:
      "Ask your health query to our experienced Dentists online and receive instant medical advice and second opinion.",
    frequency: "2x a year",
    start_date: "As soon as the Health Guide begins",
    end_date: "Never",
    check: true,
  },
];
export const DATA_PERSON = [
  {
    id: 0,
    firstName: "Lưu",
    lastName: "Vượng",
    relationshipToYou: "friend",
    birthday: "10-08-1999",
    isAdd: false,
    check: true,
  },
  {
    id: 1,
    firstName: "Hòa",
    lastName: "Vũ",
    relationshipToYou: "friend",
    birthday: "10-08-1999",
    isAdd: false,
    check: false,
  },
  {
    id: 2,
    firstName: "Sydney",
    lastName: "Shelton",
    relationshipToYou: "friend",
    birthday: "10-08-1999",
    isAdd: true,
    check: false,
  },
];
export const DATA_ADDITION = [
  {
    id: 1,
    title: "Do you have any previous diagnosed conditions?",
    conditions: [],
    check: false,
  },
  {
    id: 2,
    title: "Do you take any medications?",
    conditions: [],
    check: false,
  },
  {
    id: 3,
    title: "Do you have any allergies?",
    conditions: [],
    check: false,
  },
];

export const MY_PLUS_FEATURES = [
  {
    id: 0,
    img: IMAGE.consultMange,
    title: "Consults History",
    //  route: Routes.HealthQuestion,
  },
  {
    id: 1,
    img: IMAGE.myQuestion,
    title: "My Question",
    route: Routes.MyQuestion,
  },
  {
    id: 2,
    img: IMAGE.healthGuide,
    title: "Health Guide",
    route: Routes.HealthGuide,
  },
  {
    id: 3,
    img: IMAGE.careTeam,
    title: "Care Team",
    route: Routes.MyCareTeam,
  },
  {
    id: 4,
    img: IMAGE.lovedOne,
    title: "Family Medical Records",
    route: Routes.FamilyRecord,
  },
  {
    id: 5,
    img: IMAGE.medicineReminder,
    title: "Medication Reminder",
  },
];
export const DATA_CONDITION = [
  {
    id: 1,
    name: "Flu vs. Cold",
    isNow: true,
    note: "She has is yesterday",
    date: "",
  },
  {
    id: 2,
    name: "Flu shot Pregnacy",
    isNow: true,
    note: "She has is yesterday",
    date: "",
  },
  {
    id: 3,
    name: "Flu Shot Pregnancy Side Effects",
    isNow: true,
    note: "She has is yesterday",
    date: "",
  },
  {
    id: 4,
    name: "Flu Stomach (Gastroenteritis (Stomach Flu))",
    isNow: true,
    note: "She has is yesterday",
    date: "",
  },
  {
    id: 5,
    name: "Flu Swine (Swine Flu)",
    isNow: true,
    note: "She has is yesterday",
    date: "",
  },
  {
    id: 6,
    name: "Flu Vaccination",
    isNow: true,
    note: "She has is yesterday",
    date: "",
  },
  {
    id: 7,
    name: "Fluorescent Antinuclear Antibody",
    isNow: true,
    note: "She has is yesterday",
    date: "",
  },
  {
    id: 8,
    name: "Ronaldo delima",
    isNow: true,
    note: "She has is yesterday",
    date: "",
  },
  {
    id: 9,
    name: "Lionel Messi",
    isNow: true,
    note: "She has is yesterday",
    date: "",
  },
  {
    id: 10,
    name: "Kevin De Bruyne",
    isNow: true,
    note: "She has is yesterday",
    date: "",
  },
];
export const DATA_SUGGEST_SIMILAR_QUESTION = [
  {
    id: 1,
    title:
      "If my child is having difficulty breathing, could this be pulmonary embolism?",
    numberAnswer: 124,
  },
  {
    id: 2,
    title: "Child rapid breathing and cough when in city. Asthma?",
    numberAnswer: 4,
  },
  {
    id: 3,
    title: "My child has noisy breathing and cold sx's. Might it be asthma?",
    numberAnswer: 12,
  },
  {
    id: 4,
    title:
      "Chronic cough, hard time breathing body hurts chills...do i hv the flu. ..i wirk in child care?",
    numberAnswer: 2,
  },
  {
    id: 5,
    title: "How do you think viruss Corona?",
    numberAnswer: 1,
  },
];

export const MY_QUESTION = [
  {
    id: 0,
    subTitle: "Ask for Nora",
    date: "Posted 05:02 PM Jun 05, 2020",
    question: `Late falling of milk teeth on a child,resulting in two rows of milk and permanent teeth at the same time,what could help?`,
    numberOfAnswers: 12,
    doctor: {
      name: "Martin Wallace",
      avatar: AVATAR.avatar11,
    },
    image: IMAGE.img6,
    answer: `The small particles and acidic chemicals in air pollution are very irritating for our respiratory systems...`,
  },
  {
    id: 1,
    subTitle: "Ask for Nora",
    question: `Asbestos - are there case where a person got sick or suffered ill effects shortly after exposure? I think im sick but all test neg.`,
    numberOfAnswers: 5,
    doctor: {
      name: "Martin Wallace",
      avatar: AVATAR.avatar2,
    },
    image: IMAGE.img6,
    answer: `Always use your own pen at the doctor's office and not the pen 100's of infected patients touched...`,
  },
];
export const DATA_SPECIALITY = [
  {
    id: 0,
    icon: ICON.allergies,
    name: "hello everyone",
    doctorAvailable: 12,
  },
  {
    id: 1,
    icon: ICON.allergies,
    name: "Allergy & Immunology",
    doctorAvailable: 12,
  },
  {
    id: 2,
    icon: ICON.vaccination,
    name: "Anesthesiology",
    doctorAvailable: 11,
  },
  {
    id: 3,
    icon: ICON.cardiology,
    name: "Cardiology",
    doctorAvailable: 10,
  },
  {
    id: 4,
    icon: ICON.deficiency,
    name: "Deficiency",
    doctorAvailable: 12,
  },
  {
    id: 5,
    icon: ICON.dermatology,
    name: "Dermatology",
    doctorAvailable: 4,
  },
  {
    id: 6,
    icon: ICON.disability,
    name: "Disability",
    doctorAvailable: 3,
  },
  {
    id: 7,
    icon: ICON.emergencyWhite,
    name: "Emergency",
    doctorAvailable: 2,
  },
  {
    id: 8,
    icon: ICON.recordWhite,
    name: "Endocrinology",
    doctorAvailable: 15,
  },
];

export const MY_QUESTION_DETAILS = [
  {
    id: 0,
    doctor: {
      name: "Sandra Klevins",
      faculty: "Medical Genetics",
      rate: 4.8,
      numberOfReviews: 753,
      avatar: AVATAR.avatar11,
    },
    image: IMAGE.img7,
    answer: `Always use your own pen at the doctor's office and not the pen 100's of infected patients touched.`,
    doctorsAgreed: [AVATAR.avatar1, , AVATAR.avatar2, AVATAR.avatar3],
    numberAgreed: 125,
    numberThanks: 125,
    thanked: true,
  },
  {
    id: 1,
    doctor: {
      name: "Sandra Klevins",
      faculty: "Internal Medicine",
      rate: 4.8,
      numberOfReviews: 753,
      avatar: AVATAR.avatar3,
    },
    answer: `If you're sick, limit touching of other people's work environments (phones, keyboards, mouses).`,
    doctorsAgreed: [AVATAR.avatar1, , AVATAR.avatar2],
    numberAgreed: 4,
    numberThanks: 24,
    thanked: false,
  },
];
export const RELATED_TOPIC = [
  {
    id: 0,
    name: "Rash",
  },
  {
    id: 1,
    name: "Dentistry",
  },
  {
    id: 2,
    name: "Child",
  },
  {
    id: 3,
    name: "Children",
  },
  {
    id: 4,
    name: "Child",
  },
  {
    id: 5,
    name: "Dentistry",
  },
  { if: 6, name: "Flu" },
];

export const RELATED_QUESTIONS = [
  {
    id: 0,
    question: `My 8 year old child's milk tooth is moving but not falling off. What can I do?`,
    numberAnswered: 5,
  },
  {
    id: 1,
    question: `My 1 yr old daughter passing soft mucus stools. frequency increased from 1 to 4 times a day. no fever. eating wel...`,
    numberAnswered: 2,
  },
  {
    id: 2,
    question: `How big of a problem is baby bottle tooth decay? We don't give anything to our baby in a bottle other than milk a...`,
    numberAnswered: 8,
  },
  {
    id: 3,
    question: `Why is it when i'm sick, it gets worse @ night.Wether it's flu or cold?`,
    numberAnswered: 5,
  },
  {
    id: 4,
    question: `Why is it when i'm sick, it gets worse @ night.Wether it's flu or cold?`,
    numberAnswered: 5,
  },
];

export const HEALTH_GUIDE = [
  {
    id: 0,
    recommend: true,
    image: IMAGE.img8,
    avatar: AVATAR.wallace,
    title: "Being A Healthy Man",
    name: "Dr. Joanna Banks ",
    action: " shared",
    quantity: "543 enrolled",
    faculty: "Family Medicine",
    category: "Healthy",
    gender: "male",
    age: 18,
    content: [
      {
        description:
          "Get blood test for HIV / AIDS up to age 65 and if high risk",
        frequency: "Yearly",
      },
      {
        description:
          "Get DTaP (whooping cough) vaccine, plus tetanus shots every 10 years",
        frequency: "Once",
      },
      {
        description:
          "Get the human papillomavirus (HPV) vaccine (three shots) before age 27",
        frequency: "Once",
      },
      {
        description:
          "Get chicken pox (varicella) vaccine if you haven't already or are immune",
        frequency: "Yearly",
      },
    ],
  },
  {
    id: 1,
    image: IMAGE.img9,
    avatar: AVATAR.wallace,
    action: " shared",
    recommend: true,
    title: "Getting Flat Abs",
    name: "Dr. Viola Hernandez ",
    quantity: "543 enrolled",
    faculty: "Family Medicine",
    category: "Healthy",
    gender: "female",
    age: 18,
    content: [
      {
        description:
          "Get blood test for HIV / AIDS up to age 65 and if high risk",
        frequency: "Yearly",
      },
      {
        description:
          "Get DTaP (whooping cough) vaccine, plus tetanus shots every 10 years",
        frequency: "Once",
      },
      {
        description:
          "Get the human papillomavirus (HPV) vaccine (three shots) before age 27",
        frequency: "Once",
      },
      {
        description:
          "Get chicken pox (varicella) vaccine if you haven't already or are immune",
        frequency: "Yearly",
      },
    ],
  },
];

export const FAMILY_RECORD = [
  {
    id: 0,
    avatar: AVATAR.avatar1,
    name: "Kevin",
    description: "Main Account",
    lastUpdate: "05:02 PM Jun 04, 2020",
  },
  {
    id: 1,
    avatar: AVATAR.avatar2,
    name: "Nora",
    description: "Daughter, 4 years old",
    lastUpdate: "05:02 PM Jun 04, 2020",
  },
];

export const PROFILE = [
  {
    id: 0,
    avatar: AVATAR.avatar2,
    name: "Nora Shelton",
    progress: 78,
  },
  {
    id: 1,
    avatar: AVATAR.avatar12,
    name: "Nora Shelton",
    progress: 100,
  },
  {
    id: 2,
    avatar: AVATAR.avatar13,
    name: "Nora Shelton",
    progress: 100,
  },
];

export const FEATURE_CATEGORY = [
  {
    id: 0,
    icon: ICON.additionalInformation,
    name: "Basic Information",
    route: Routes.MyRecordBasicInformation,
  },
  {
    id: 1,
    icon: ICON.healthMetric,
    name: "Health Metrics",
    route: Routes.MyRecordHealthMetric,
  },
  {
    id: 2,
    icon: ICON.condition,
    name: "Conditions & Symptoms",
    route: Routes.MyRecordCondition,
    number: "2",
  },
  {
    id: 3,
    icon: ICON.clinicVital,
    name: "Clinical Vitals",
    route: "",
    number: "2",
  },

  {
    id: 4,
    icon: ICON.allergies,
    name: "Allergies",
    route: "",
    number: "2",
  },
  {
    id: 5,
    icon: ICON.vaccination,
    name: "Immunization",
    route: "",
    number: "2",
  },
  {
    id: 6,
    icon: ICON.labTest,
    name: "Lab Results",
    route: "",
    number: "2",
  },
  {
    id: 7,
    icon: ICON.medication,
    name: "Medications",
    route: "",
    number: "2",
  },
  {
    id: 8,
    icon: ICON.procedure,
    name: "Procedures",
    route: "",
    number: "2",
  },
];

export const TAKER = [
  {
    id: 0,
    name: "You",
  },
  {
    id: 1,
    name: "Nora",
  },
];

export const LIST_HEALTH_DATA = [
  {
    id: 0,
    img: IMAGE.appleHealth,
    name: "Apple Health",
    comp: "Apple Inc.",
    time: "Last update: 16:48 PM Jan, 4 2020",
  },
  {
    id: 1,
    img: IMAGE.fitbitHeart,
    name: "Fitbit Health",
    comp: "",
    time: "Last update: 16:48 PM Jan, 4 2020",
  },
];

export const FOLLOWING_QUESTIONS = [
  {
    id: 0,
    member: "A Menber asked :",
    question: `Late falling of milk teeth on a child,resulting in two rows of milk and permanent teeth at the same time,what could help?`,
    numberOfAnswers: 12,
    doctor: {
      name: "Martin Wallace",
      avatar: AVATAR.avatar11,
    },
    image: IMAGE.industry,
    answer: `The small particles and acidic chemicals in air pollution are very irritating for our respiratory systems...`,
  },
  {
    id: 1,
    question: `Asbestos - are there case where a person got sick or suffered ill effects shortly after exposure? I think im sick but all test neg.`,
    numberOfAnswers: 5,
    doctor: {
      name: "Martin Wallace",
      avatar: AVATAR.avatar2,
    },
    image: IMAGE.light,
    answer: `Always use your own pen at the doctor's office and not the pen 100's of infected patients touched...`,
  },
  {
    id: 2,
    question: `Flu - are there case where a person got sick or suffered ill effects shortly after exposure? I think im sick but all test neg.`,
    numberOfAnswers: 5,
    doctor: {
      name: "Martin Wallace",
      avatar: AVATAR.avatar2,
    },
    image: IMAGE.light,
    answer: `Always use your own pen at the doctor's office and not the pen 100's of infected patients touched...`,
  },
];

export const FOLLOWING_QUESTION_DETAILS = [
  {
    id: 0,
    doctor: {
      name: "Sandra Klevins",
      faculty: "Medical Genetics",
      rate: 4.8,
      numberOfReviews: 753,
      avatar: AVATAR.avatar11,
    },
    image: IMAGE.img7,
    answer: `Always use your own pen at the doctor's office and not the pen 100's of infected patients touched.`,
    doctorsAgreed: [AVATAR.avatar1, , AVATAR.avatar2, AVATAR.avatar3],
    numberAgreed: 125,
    numberThanks: 125,
    thanked: true,
  },
  {
    id: 1,
    doctor: {
      name: "Sandra Klevins",
      faculty: "Internal Medicine",
      rate: 4.8,
      numberOfReviews: 753,
      avatar: AVATAR.avatar3,
    },
    image: IMAGE.childDrink,
    answer: `If you're sick, limit touching of other people's work environments (phones, keyboards, mouses).`,
    doctorsAgreed: [AVATAR.avatar1, , AVATAR.avatar2],
    numberAgreed: 4,
    numberThanks: 24,
    thanked: false,
  },
  {
    id: 2,
    doctor: {
      name: "Sandra Klevins",
      faculty: "Internal Medicine",
      rate: 4.8,
      numberOfReviews: 753,
      avatar: AVATAR.avatar3,
    },
    image: IMAGE.img7,
    answer: `If you're sick, limit touching of other people's work environments (phones, keyboards, mouses).`,
    doctorsAgreed: [AVATAR.avatar1, , AVATAR.avatar2],
    numberAgreed: 4,
    numberThanks: 24,
    thanked: false,
  },
];

export const DOCTOR_AGREE_LIST = [
  {
    id: 0,
    name: "Sandra Klevins",
    faculty: "Internal Medicine",
    rating: 4.8,
    avatar: AVATAR.doctor1,
    feedback: 753,
  },
  {
    id: 1,
    name: "Beatrice Buchanan",
    faculty: "Emergency Medicine",
    rating: 4.8,
    avatar: AVATAR.doctor2,
    feedback: 753,
  },
  {
    id: 2,
    name: "Rosie Copeland",
    faculty: "Preventive Medicine",
    rating: 4.8,
    avatar: AVATAR.doctor3,
    feedback: 753,
  },
  {
    id: 3,
    name: "Douglas Loves",
    faculty: "Internal Medicine",
    rating: 4.8,
    avatar: AVATAR.doctor4,
    feedback: 753,
  },
  {
    id: 4,
    name: "Sandra Klevins",
    faculty: "Internal Medicine",
    rating: 4.8,
    avatar: AVATAR.doctor5,
    feedback: 753,
  },
  {
    id: 5,
    name: "Beatrice Buchanan",
    faculty: "Preventive Medicine",
    rating: 4.8,
    avatar: AVATAR.doctor6,
    feedback: 753,
  },
];
export const FOLLOWING_TOPIC = [
  {
    id: 0,
    doctor: {
      avatar: AVATAR.doctor1,
      name: "Sarah Conner",
      faculty: "Integrative Medicine",
    },
    img: IMAGE.cigarret,
    topic: "Swine Flu",
    topicType: "Health Tip",
    topicName: "Quitting smoking",
    category: "Air Polution",
    action: "shared",
    detail:
      "Quitting smoking is the process of discontinuing the use of inhaledtobacco products.",
    numberOfThanks: "125",
    numberOfShares: "13",
  },
  {
    id: 1,
    doctor: {
      avatar: AVATAR.doctor2,
      name: "Madge Oliver",
      faculty: "Integrative Medicine",
    },
    img: IMAGE.industry,
    topic: "Flu shot (Immunization)",
    topicType: "Health Question",
    topicName:
      "How can air pollution effect health? What are the health effects of air pollution?",
    numberOfAnswers: 12,
    action: "answered",
    detail:
      "The small particles and acidic chemicals in air pollution are very irritating for our respiratory systems...",
    thanks: 0,
    shares: 0,
  },
  {
    id: 2,
    doctor: {
      avatar: AVATAR.doctor3,
      name: "Gerald Pearson",
      faculty: "Integrative Medicine",
    },
    img: IMAGE.light,
    topic: "Air Pollution",
    topicType: "Health Article",
    topicName: "Air Pollution: Everything You Need to Know",
    action: "shared",
    detail:
      "How smog, soot, greenhouse gases, and other top air pollutants are affecting the planet—and your health.",
    link: "www.nrdc.org",
    thanks: 36,
    shares: "",
  },
];

export const FOLLOWING_TOPIC_HEADER = [
  {
    id: 0,
    doctor: {
      avatar: AVATAR.doctor1,
      name: "Jesse Arnold",
      faculty: "Integrative Medicine",
    },
    img: IMAGE.chimney,
    topicName: "Air Pollution",
    detail:
      "Air pollution is the introduction of chemicals and other materials into the atmosphere that cause harm to living organisms and the natural environment.",
  },
  {
    id: 1,
    doctor: {
      name: "Jesse Arnold",
      avatar: AVATAR.doctor2,
      faculty: "",
    },
    img: IMAGE.cigarret,
    topicName: "",
  },
  {
    id: 2,
    doctor: {
      avatar: AVATAR.doctor3,
      name: "Jesse Arnold",
      faculty: "",
    },
    img: IMAGE.light,
    topicName: "",
  },
  {
    id: 3,
    doctor: {
      name: "Jesse Arnold",
      avatar: AVATAR.doctor4,
      faculty: "",
    },
    img: IMAGE.rocket,
    topicName: "",
  },
];
export const TOPIC_DETAILS_BUTTON = [
  { id: 0, icon: ICON.additionalInformation, name: "Overview" },
  {
    id: 1,
    icon: ICON.condition,
    name: "Conditions & Symptoms",
    route: Routes.HealthFeedTopicDetailCondition,
  },
  { id: 2, icon: ICON.medication, name: "Medications" },
  { id: 3, icon: ICON.procedure, name: "Procedures" },
  { id: 4, icon: ICON.healthGuide, name: "Health Guide" },
];
export const HEALTH_FEED_CONDITION_AND_SYMTOMS = [
  { id: 0, title: "Muscle Pain", isFollow: false },
  { id: 1, title: "Heart diseasesn", isFollow: false },
  { id: 2, title: "Asthma", isFollow: false },
  {
    id: 3,
    title: "Low back pain, better with bending forward",
    isFollow: false,
  },
];

export const DATA_SPECIALITIES = [
  { id: 0, name: "Biostatistician" },
  { id: 2, name: "Bio-Chemics" },
  { id: 3, name: "Cardiology" },
  { id: 4, name: "Air Pollution" },
  { id: 5, name: "Chikenpox" },
  { id: 6, name: "Flu" },
];
export const DATA_CONDITION_SEARCH = [
  { id: 0, name: "Biotinidase Deficiency" },
  { id: 1, name: "Antibiotic Associated Diarrhea " },
  { id: 2, name: "Biotinidase Deficiency" },
  { id: 3, name: "Biotinidase Deficiency" },
  { id: 4, name: "Biotinidase Deficiency" },
  { id: 5, name: "Biotinidase Deficiency" },
];
export const DATA_DOCTOR = [
  {
    id: 0,
    doctor: {
      avatar: AVATAR.doctor1,
      name: "Bessie Schneider",
      rating: 4.2,
      numberOfReviews: 1222,
      address: "",
    },
  },
  {
    id: 1,
    doctor: {
      avatar: AVATAR.doctor1,
      name: "Bessie Schneider",
      rating: 4.2,
      numberOfReviews: 1222,
      address: "",
    },
  },

  {
    id: 2,
    doctor: {
      avatar: AVATAR.doctor1,
      name: "Bessie Schneider",
      rating: 4.2,
      numberOfReviews: 1222,
      address: "",
    },
  },
  {
    id: 3,
    doctor: {
      avatar: AVATAR.doctor1,
      name: "Bessie Schneider",
      rating: 4.2,
      numberOfReviews: 1222,
      address: "",
    },
  },
  {
    id: 4,
    doctor: {
      avatar: AVATAR.doctor1,
      name: "Bessie Schneider",
      rating: 4.2,
      numberOfReviews: 1222,
      address: "",
    },
  },
  {
    id: 5,
    doctor: {
      avatar: AVATAR.doctor1,
      name: "Bessie Schneider",
      rating: 4.2,
      numberOfReviews: 1222,
      address: "",
    },
  },
  {
    id: 6,
    doctor: {
      avatar: AVATAR.doctor1,
      name: "Bessie Schneider",
      rating: 4.2,
      numberOfReviews: 1222,
      address: "",
    },
  },
];
export const SEARCH_HISTORY_DATA = [
  { id: 0, key: "Flu" },
  { id: 1, key: "Air pollution" },
  { id: 2, key: "Chickenpox" },
  { id: 3, key: "Cardiology" },
];

export const TOP_SPECIALITIES = [
  { id: 0, name: "Cardiology", icon: ICON.cardiology },
  { id: 1, name: "Anesthesiology", icon: ICON.vaccination },
];
export const SEARCH_SPECIAL_BUTTON = [
  {
    id: 0,
    name: "Doctors",
    icon: ICON.doctor,
    route: Routes.SearchSpecialDoctor,
  },
  {
    id: 1,
    name: "Conditions & Symptoms",
    icon: ICON.condition,
    route: Routes.SearchSpecialCondition,
  },
  {
    id: 2,
    name: "Medications",
    icon: ICON.medication,
    route: Routes.SearchSpecialMedication,
  },
  {
    id: 3,
    name: "Procedures",
    icon: ICON.procedure,
    route: Routes.Search,
  },
  {
    id: 4,
    name: "Hospitals",
    icon: ICON.hospital,
    route: Routes.SearchSpecialHospitals,
  },
];

export const DATA_LIST = [
  {
    id: 0,
    img: IMAGE.light,
    name: "Flu",
    description:
      "Influenza (also known as “flu”) is a contagious respiratory illness caused by influenza viruses. It can cause mild to severe illness…",
  },
  {
    id: 1,
    img: IMAGE.chimney,
    name: "Air Pollution",
    description: "",
  },
];

export const HEALTH_TIPS_DATA = [
  {
    id: 0,
    tipName: "Flu & Cold",
    doctor: { name: "Jonathan Peters", avatar: AVATAR.doctor1 },
    img: IMAGE.industry,
    numberOfThanks: 123,
    numberOfShares: 12,
    detail:
      "Do's And Don'ts: Flu / cold tip: boil freshly sliced, ginger root in water until tea is tan. Add 3 tbsp of honey. Sip.",
  },
  {
    id: 1,
    tipName: "Caring for Your Baby",
    doctor: { name: "Maurice Watson", avatar: AVATAR.doctor2 },
    img: IMAGE.light,
    numberOfThanks: 123,
    numberOfShares: 12,
    detail:
      "Do's And Don'ts: Flu / cold tip: boil freshly sliced, ginger root in water until tea is tan. Add 3 tbsp of honey. Sip.",
  },
  {
    id: 2,
    tipName: "Flu",
    doctor: { name: "Sarah Corner", avatar: AVATAR.doctor3 },
    img: IMAGE.chimney,
    numberOfThanks: 123,
    numberOfShares: 12,
    detail:
      "Do's And Don'ts: Flu / cold tip: boil freshly sliced, ginger root in water until tea is tan. Add 3 tbsp of honey. Sip.",
  },
];
export const Alphabet = [
  { id: 0, char: "A" },
  { id: 1, char: "B" },
  { id: 2, char: "C" },
  { id: 3, char: "D" },
  { id: 4, char: "E" },
  { id: 5, char: "F" },
  { id: 6, char: "G" },
  { id: 7, char: "H" },
  { id: 8, char: "I" },
  { id: 9, char: "J" },
  { id: 10, char: "K" },
  { id: 11, char: "L" },
  { id: 12, char: "M" },
  { id: 13, char: "N" },
  { id: 14, char: "O" },
  { id: 15, char: "P" },
  { id: 16, char: "Q" },
  { id: 17, char: "R" },
  { id: 18, char: "S" },
  { id: 19, char: "T" },
  { id: 20, char: "U" },
  { id: 21, char: "V" },
  { id: 22, char: "W" },
  { id: 23, char: "X" },
  { id: 24, char: "Y" },
  { id: 25, char: "Z" },
];

export const ALL_HOSPITAL = [
  {
    id: 0,
    distance: 2,
    avatar: IMAGE.mountSinai,
    img: IMAGE.hospital,
    name: "Mount Sinai St. Luke’s Hospital Breast Center",
    address: "217 Grand St, NY 10013",
    rating: 4.6,
    numberOfReviews: 1222,
    phone: "+ 1 212-523-5222",
    numberOfBeds: 125,
    services: [
      { id: 0, name: "Angioplasy" },
      { id: 1, name: "Breast Cancer Screening" },
      { id: 2, name: "Cardiac Cath Lab" },
      { id: 3, name: "Emergency Department" },
      { id: 4, name: "General Medical Surgical" },
      { id: 5, name: "HIV- AIDS Services" },
    ],
    website: "www.slrsurgery.org",
    type: "Nongoverment , Not-for-profit",
    system: "Continuum Health Partners",
    jcaho: true,
  },
  {
    id: 1,
    distance: 0.5,
    avatar: IMAGE.westEnd,
    img: "",
    name: "West End Pediatrics",
    address: "2 5th Ave Suite 8, NY 10011",
    rating: 4.6,
    numberOfReviews: 1222,
    phone: "",
    numberOfBeds: 125,
    services: [{ id: 0, name: "" }],
    website: "",
    type: "",
    system: "",
    jcaho: true,
  },
  {
    id: 2,
    distance: 1,
    avatar: IMAGE.nyp,
    img: "",
    name: "Student Health Center - New York University",
    address: "726 Broadway, NY 10003",
    rating: 4.6,
    numberOfReviews: 1222,
    phone: "",
    numberOfBeds: 125,
    services: [{ id: 0, name: "" }],
    website: "",
    type: "",
    system: "",
    jcaho: true,
  },
  {
    id: 3,
    distance: 1.5,
    avatar: IMAGE.rmh,
    img: "",
    name: "Rate My Hospital",
    address: "2 5th Ave Suite 8, NY 10011",
    rating: 4.6,
    numberOfReviews: 1222,
    phone: "",
    numberOfBeds: 125,
    services: [{ id: 0, name: "" }],
    website: "",
    type: "",
    system: "",
    jcaho: true,
  },
];
export const ALL_CONDITION = [
  { id: 0, name: "Chickenpox", isFollow: true, numberOfNotifications: 1 },
  { id: 1, name: "Flu & Cold", isFollow: true, numberOfNotifications: 2 },
  { id: 2, name: "Muscle Pain", isFollow: true, numberOfNotifications: 1 },
  { id: 3, name: "Abdominal aortic aneurysm", isFollow: false },
  { id: 4, name: "Acne ", isFollow: false },
  { id: 5, name: "Acute cholecystitis ", isFollow: false },
  { id: 6, name: "Binge eating ", isFollow: false },
  { id: 7, name: "Bipolar disorder ", isFollow: false },
  { id: 8, name: "Bladder cancer ", isFollow: false },
  { id: 9, name: "DBowel cancer ", isFollow: false },
];

export const ALL_MEDICATION = [
  {
    id: 0,
    name: "Chickenpox",
    doctor: {
      name: "Russell Chavez",
      avatar: AVATAR.avatar1,
      faculty: "Integrative Medicine",
    },
    img: IMAGE.industry,
    detail:
      "Amoxicillin is used to treat many different types of infection caused by bacteria, such as tonsillitis, bronchitis, pneumonia, gonorrhea, and infections of the ear, nose, throat, skin…",
  },
  {
    id: 1,
    name: "B Sample Medication",
    doctor: {
      name: "Russell Chavez",
      avatar: AVATAR.avatar2,
      faculty: "Integrative Medicine",
    },
    img: IMAGE.industry,
    detail:
      "Amoxicillin is used to treat many different types of infection caused by bacteria, such as tonsillitis, bronchitis, pneumonia, gonorrhea, and infections of the ear, nose, throat, skin…",
  },
  {
    id: 2,
    name: "A - Sample Medication",
    doctor: {
      name: "Russell Chavez",
      avatar: AVATAR.avatar3,
      faculty: "Integrative Medicine",
    },
    img: IMAGE.industry,
    detail:
      "Amoxicillin is used to treat many different types of infection caused by bacteria, such as tonsillitis, bronchitis, pneumonia, gonorrhea, and infections of the ear, nose, throat, skin…",
  },
];

export const MEDICATION_DETAIL_BUTTON = [
  { id: 0, icon: ICON.additionalInformation, name: "Overview" },
  {
    id: 1,
    icon: ICON.accountActive,
    name: "Uses for",
  },
  { id: 2, icon: ICON.sideEffect, name: "Side Effect" },
  { id: 3, icon: ICON.healthGuide, name: "Health Guide" },
];

export const ALL_ALLERGIES = [
  { id: 0, name: "Allergies 1" },
  { id: 1, name: "Allergies 2" },
  { id: 2, name: "Allergies 3" },
  { id: 3, name: "Allergies 4" },
  { id: 4, name: "Allergies 5" },
  { id: 5, name: "Allergies 6" },
  { id: 6, name: "Allergies 7" },
];

export const FILE_EXAMPLES = [
  {
    id: 0,
    image: IMAGE.chickenpox,
    name: "Redness on the back A long sample tex to test the screen view ",
    date: "Uploaded Jan 03, 2020",
    size: "34KB",
  },
  {
    id: 1,
    image: IMAGE.cardiology,
    name: "Redness on the back ",
    date: "Uploaded Jan 03, 2020",
    size: "34KB",
  },
  {
    id: 2,
    image: IMAGE.chickenpox,
    name: "Redness on the back ",
    date: "Uploaded Jan 03, 2020",
    size: "34KB",
  },
  {
    id: 3,
    image: IMAGE.childDrink,
    name: "Redness on the back ",
    date: "Uploaded Jan 03, 2020",
    size: "34KB",
  },
  {
    id: 4,
    image: IMAGE.chickenpox,
    name: "Redness on the back ",
    date: "Uploaded Jan 03, 2020",
    size: "34KB",
  },
];

export const CHAT_EXAMPLE = [
  {
    id: 0,
    detail: "Hello. How’r you?",
    time: "9:40 AM",
    date: "",
    isYour: false,
  },
  {
    id: 1,
    detail: "Hi Doctor. I’m fine. Thanks",
    time: "9:40 AM",
    date: "",
    isYour: true,
  },
  {
    id: 2,
    detail: "My daughter is 4 years old and she didn’t well  from 2 days ago.",
    time: "9:40 AM",
    date: "",
    isYour: true,
  },
  {
    id: 3,
    detail: "Does she has others symptoms?",
    time: "9:40 AM",
    date: "",
    isYour: false,
  },
  {
    id: 4,
    detail: "She didn’t eat well since 1 week",
    time: "9:40 AM",
    date: "",
    isYour: true,
  },
  { id: 5, detail: "", time: "", date: "", isYour: true },
  { id: 6, attachImg: IMAGE.healthGuide, time: "", date: "", isYour: true },
  { id: 7, attachImg: IMAGE.chickenpox, time: "", date: "", isYour: false },
];

export const VISIT_TIME_LIST = [
  { id: 0, timeFrom: "03:30 PM", timeTo: "04:00 PM" },
  { id: 1, timeFrom: "04:30 PM", timeTo: "05:00 PM" },
  { id: 2, timeFrom: "05:30 PM", timeTo: "06:00 PM" },
  { id: 3, timeFrom: "06:30 PM", timeTo: "07:00 PM" },
  { id: 4, timeFrom: "07:30 PM", timeTo: "08:00 PM" },
  { id: 5, timeFrom: "08:30 PM", timeTo: "09:00 PM" },
];
