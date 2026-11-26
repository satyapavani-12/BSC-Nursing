export type Level = 'core' | 'support';

export interface ChapterStub {
  slug: string;
  title: string;
  level: Level;
}

export interface Subject {
  slug: string;
  code: string;
  title: string;
  semester: number;
  year: number;
  credits: string;
  exam: 'University' | 'College';
  blurb: string;
  chapters: ChapterStub[];
}

/** "slug | Title | core" — one chapter per line. */
function parse(template: string): ChapterStub[] {
  return template
    .trim()
    .split('\n')
    .map((line) => {
      const [slug, title, level] = line.split('|').map((part) => part.trim());
      return { slug, title, level: level === 'support' ? 'support' : 'core' };
    });
}

export const SEMESTERS = [
  { n: 1, year: 1, name: 'Foundations of Nursing', focus: 'Anatomy, physiology, psychology, sociology and basic nursing care.' },
  { n: 2, year: 1, name: 'Basic Sciences & Nursing Foundation', focus: 'Biochemistry, nutrition, nursing procedures and health informatics.' },
  { n: 3, year: 2, name: 'Adult Health Nursing Begins', focus: 'Microbiology, infection control, pharmacology, pathology and medical-surgical nursing.' },
  { n: 4, year: 2, name: 'Adult Health II & Professional Foundations', focus: 'Advanced medical-surgical nursing, genetics, prescribing and ethics.' },
  { n: 5, year: 3, name: 'Child, Mental Health & Community', focus: 'Paediatric, psychiatric and community nursing plus teaching skills.' },
  { n: 6, year: 3, name: 'Advanced Specialties', focus: 'Midwifery, mental health, child health and nursing management.' },
  { n: 7, year: 4, name: 'Community, Research & Midwifery II', focus: 'Community programmes, research, statistics and complex midwifery.' },
  { n: 8, year: 4, name: 'Internship', focus: 'Full-time supervised practice and competency assessment.' },
];

export const YEARS = [
  { n: 1, title: 'First Year', tagline: 'Build the base', semesters: [1, 2] },
  { n: 2, title: 'Second Year', tagline: 'Medical-surgical core', semesters: [3, 4] },
  { n: 3, title: 'Third Year', tagline: 'Specialties', semesters: [5, 6] },
  { n: 4, title: 'Final Year', tagline: 'Practice & research', semesters: [7, 8] },
];

export const subjects: Subject[] = [
  // ---------------- SEMESTER 1 ----------------
  {
    slug: 'applied-anatomy',
    code: 'ANAT 105',
    title: 'Applied Anatomy',
    semester: 1,
    year: 1,
    credits: '3 T',
    exam: 'University',
    blurb: 'Structure of the human body, system by system, with nursing application.',
    chapters: parse(`
anatomical-terms|Introduction to Anatomical Terms & Body Organisation|core
respiratory-system|Respiratory System|core
digestive-system|Digestive System|core
circulatory-system|Circulatory & Lymphatic System|core
endocrine-system|Endocrine System|core
sensory-organs|Sensory Organs|core
musculoskeletal-system|Musculoskeletal System|core
renal-system|Renal System|core
reproductive-system|Reproductive System|core
nervous-system|Nervous System|core
`),
  },
  {
    slug: 'applied-physiology',
    code: 'PHYS 110',
    title: 'Applied Physiology',
    semester: 1,
    year: 1,
    credits: '3 T',
    exam: 'University',
    blurb: 'How the body works — functions, normal values and what goes wrong.',
    chapters: parse(`
general-physiology|General Physiology & Cell Physiology|core
respiratory-physiology|Respiratory System|core
digestive-physiology|Digestive System|core
circulatory-physiology|Circulatory & Lymphatic System|core
blood|Blood|core
endocrine-physiology|Endocrine System|support
special-senses|Special Senses|support
musculoskeletal-physiology|Musculoskeletal System|support
renal-physiology|Renal System|core
reproductive-nervous|Reproductive System & Nervous System|core
`),
  },
  {
    slug: 'applied-sociology',
    code: 'SOCI 115',
    title: 'Applied Sociology',
    semester: 1,
    year: 1,
    credits: '3 T',
    exam: 'University',
    blurb: 'Society, culture and family — and how they shape health and nursing.',
    chapters: parse(`
introduction|Introduction to Sociology|core
social-structure|Social Structure|core
culture|Culture|core
family-marriage|Family & Marriage|core
social-stratification|Social Stratification|support
social-organisation|Social Organisation & Disorganisation|support
clinical-sociology|Clinical Sociology|support
`),
  },
  {
    slug: 'applied-psychology',
    code: 'PSYC 120',
    title: 'Applied Psychology',
    semester: 1,
    year: 1,
    credits: '3 T',
    exam: 'University',
    blurb: 'Behaviour, mind, development and communication skills for nurses.',
    chapters: parse(`
introduction|Introduction to Psychology|core
biological-basis|Biological Basis of Behaviour|core
mental-health-hygiene|Mental Health & Mental Hygiene|core
developmental-psychology|Developmental Psychology|core
personality|Personality|core
cognitive-processes|Cognitive Processes|core
motivation-emotion|Motivation & Emotional Processes|core
psychological-assessment|Psychological Assessment & Tests|support
soft-skills|Application of Soft Skills|support
self-empowerment|Self-Empowerment|support
`),
  },
  {
    slug: 'communicative-english',
    code: 'ENGL 101',
    title: 'Communicative English',
    semester: 1,
    year: 1,
    credits: '2 T',
    exam: 'College',
    blurb: 'Speak, read and write clear professional English for patient care.',
    chapters: parse(`
communication|What is Communication?|core
lsrw|Listening, Speaking, Reading, Writing & Grammar|core
listening|Attentive Listening|support
speaking|Speaking & Effective Conversation|core
reading|Reading Skills|support
writing|Writing Skills|core
integrated-skills|Integrated LSRW Skills|support
`),
  },
  {
    slug: 'nursing-foundation-i',
    code: 'N-NF (I) 125',
    title: 'Nursing Foundation I',
    semester: 1,
    year: 1,
    credits: '6 T + 2 L + 2 C',
    exam: 'University',
    blurb: 'Health, the profession and first clinical skills, including First Aid.',
    chapters: parse(`
health-and-illness|Health & Illness|core
health-care-delivery|Health Care Delivery Systems|core
history-of-nursing|History of Nursing & Nursing as a Profession|core
communication|Communication & Nurse–Patient Relationship|core
documentation|Documentation & Reporting|core
vital-signs|Vital Signs|core
equipment-linen|Equipment & Linen|support
infection-control|Infection Control & Asepsis|core
comfort-rest-sleep-pain|Comfort, Rest, Sleep & Pain|core
safety-first-aid|Promoting Safety in Health Care + First Aid|core
`),
  },

  // ---------------- SEMESTER 2 ----------------
  {
    slug: 'applied-biochemistry',
    code: 'BIOC 135',
    title: 'Applied Biochemistry',
    semester: 2,
    year: 1,
    credits: '2 T',
    exam: 'University',
    blurb: 'Chemistry of the body: sugars, fats, proteins and diagnostic tests.',
    chapters: parse(`
carbohydrates|Carbohydrates|core
lipids|Lipids|core
proteins|Proteins|core
clinical-enzymology|Clinical Enzymology|support
acid-base-balance|Acid–Base Balance|core
heme-catabolism|Heme Catabolism & Jaundice|core
organ-function-tests|Organ Function Tests|support
immunochemistry|Immunochemistry|support
`),
  },
  {
    slug: 'applied-nutrition',
    code: 'NUTR 140',
    title: 'Applied Nutrition & Dietetics',
    semester: 2,
    year: 1,
    credits: '3 T',
    exam: 'University',
    blurb: 'Nutrients, balanced diets, deficiency diseases and therapeutic diets.',
    chapters: parse(`
introduction|Introduction to Nutrition|core
carbohydrates|Carbohydrates|core
proteins|Proteins|core
fats|Fats|core
vitamins|Vitamins|core
minerals|Minerals|core
balanced-diet|Balanced Diet & Meal Planning|core
deficiency-disorders|Nutritional Deficiency Disorders|core
therapeutic-diets|Therapeutic Diets|core
cookery-preservation|Cookery Rules & Food Preservation|support
nutrition-assessment|Nutrition Assessment & Education|support
national-nutrition-programs|National Nutrition Programmes|support
food-safety|Food Safety|support
`),
  },
  {
    slug: 'nursing-foundation-ii',
    code: 'N-NF (II) 125',
    title: 'Nursing Foundation II',
    semester: 2,
    year: 1,
    credits: '6 T + 3 L + 4 C',
    exam: 'University',
    blurb: 'Nursing process and every core procedure — assessment to medication.',
    chapters: parse(`
health-assessment|Health Assessment|core
nursing-process|The Nursing Process|core
nutritional-needs|Nutritional Needs|core
hygiene|Hygiene & Pressure Ulcer Care|core
elimination|Elimination Needs|core
diagnostic-testing|Diagnostic Testing|core
oxygenation|Oxygenation Needs|core
fluid-electrolyte|Fluid, Electrolyte & Acid–Base Balance|core
medication-administration|Administration of Medications|core
sensory-needs|Sensory Needs|support
terminal-care|Care of the Terminally Ill, Death & Dying|core
self-concept|Self-Concept|support
sexuality|Sexuality|support
stress-adaptation|Stress & Adaptation|core
cultural-diversity|Cultural Diversity|support
nursing-theories|Nursing Theories|support
`),
  },
  {
    slug: 'health-informatics',
    code: 'HNIT 145',
    title: 'Health / Nursing Informatics & Technology',
    semester: 2,
    year: 1,
    credits: '2 T + 1 L',
    exam: 'College',
    blurb: 'Computers, electronic records, patient safety and digital health.',
    chapters: parse(`
computers-in-nursing|Computers in Nursing Practice|core
health-informatics|Principles of Health Informatics|core
health-information-systems|Health Information Systems|support
electronic-records|Electronic Health Records|core
patient-safety|Patient Safety & Clinical Risk|core
clinical-decision-support|Clinical Knowledge & Decision Support|support
ehealth|eHealth & the Internet|support
information-management|Information in Healthcare Management|support
information-law|Information Law & Governance|support
quality-ebp|Quality & Evidence-Based Practice|support
`),
  },

  // ---------------- SEMESTER 3 ----------------
  {
    slug: 'applied-microbiology',
    code: 'MICR 201',
    title: 'Applied Microbiology & Infection Control',
    semester: 3,
    year: 2,
    credits: '2 T + 1 L',
    exam: 'University',
    blurb: 'Microbes, immunity, hospital infection prevention and patient safety.',
    chapters: parse(`
introduction|Introduction to Microbiology|core
general-characteristics|General Characteristics of Microbes|core
pathogenic-organisms|Pathogenic Organisms|core
immunity-immunization|Immunity & Immunization|core
hospital-acquired-infections|Hospital-Acquired Infections|core
isolation-ppe|Isolation Precautions & PPE|core
hand-hygiene|Hand Hygiene|core
disinfection-sterilisation|Disinfection & Sterilisation|core
specimen-collection|Specimen Collection|core
biomedical-waste|Biomedical Waste Management|core
antibiotic-stewardship|Antibiotic Stewardship & AMR|support
patient-safety-indicators|Patient Safety Indicators|core
ipsg|International Patient Safety Goals|core
safety-protocols|Safety Protocols & Emergency Codes|support
`),
  },
  {
    slug: 'pharmacology-i',
    code: 'PHAR (I) 205',
    title: 'Pharmacology I',
    semester: 3,
    year: 2,
    credits: '1 T',
    exam: 'University',
    blurb: 'How drugs work and the drugs used for common body systems.',
    chapters: parse(`
general-pharmacology|General Pharmacology|core
antiseptics-disinfectants|Antiseptics & Disinfectants|core
gi-drugs|Drugs Acting on the GI System|core
respiratory-drugs|Drugs Acting on the Respiratory System|core
cardiovascular-drugs|Cardiovascular & Blood Drugs|core
endocrine-drugs|Endocrine Drugs|core
skin-drugs|Integumentary Drugs|support
antimicrobials|Antimicrobial & Antitubercular Drugs|core
`),
  },
  {
    slug: 'pathology-i',
    code: 'PATH (I) 210',
    title: 'Pathology I',
    semester: 3,
    year: 2,
    credits: '1 T',
    exam: 'University',
    blurb: 'Cell injury, inflammation, tumours and basic lab diagnosis.',
    chapters: parse(`
general-pathology|General Pathology|core
systemic-pathology|Systemic Pathology|core
haematology-blood-bank|Haematological Tests & Blood Bank|core
`),
  },
  {
    slug: 'adult-health-nursing-i',
    code: 'N-AHN (I) 215',
    title: 'Adult Health Nursing I',
    semester: 3,
    year: 2,
    credits: '7 T + 1 L + 6 C',
    exam: 'University',
    blurb: 'Medical-surgical nursing with integrated pathophysiology and BCLS.',
    chapters: parse(`
introduction-perioperative|Introduction & Perioperative Care|core
intraoperative-care|Intraoperative Care|core
common-symptoms|Common Signs & Symptoms: Shock, Pain, Fluids|core
respiratory-disorders|Respiratory Disorders|core
digestive-disorders|Digestive Disorders|core
cardiovascular-disorders|Cardiovascular Disorders|core
blood-disorders|Blood Disorders|core
endocrine-disorders|Endocrine Disorders|core
skin-disorders|Integumentary Disorders|support
musculoskeletal-disorders|Musculoskeletal Disorders|core
communicable-diseases|Communicable Diseases|core
`),
  },

  // ---------------- SEMESTER 4 ----------------
  {
    slug: 'pharmacology-ii',
    code: 'PHAR (II) 205',
    title: 'Pharmacology II',
    semester: 4,
    year: 2,
    credits: '3 T',
    exam: 'University',
    blurb: 'ENT, urinary, neuro and obstetric drugs plus safe prescribing.',
    chapters: parse(`
ent-eye-drugs|ENT, Eye & Mouth Drugs|support
urinary-drugs|Drugs Acting on the Urinary System|core
nervous-system-drugs|Drugs Acting on the Nervous System|core
reproductive-hormone-drugs|Hormones, Contraception & MTP|core
obstetric-drugs|Drugs in Pregnancy, Labour & Postnatal Period|core
emergency-drugs|Emergency Drugs, Antidotes & Anticancer Drugs|core
alternative-medicine|Alternative Systems of Medicine|support
prescribing|Fundamentals of Prescribing|core
`),
  },
  {
    slug: 'pathology-ii-genetics',
    code: 'PATH (II) 210',
    title: 'Pathology II & Genetics',
    semester: 4,
    year: 2,
    credits: '1 T',
    exam: 'University',
    blurb: 'Organ pathology, clinical tests and the genetics behind disease.',
    chapters: parse(`
renal-reproductive-pathology|Renal, Reproductive & Breast Pathology|core
cns-pathology|CNS & Special Pathology|core
clinical-pathology|Clinical Pathology|core
genetics-basics|Principles of Genetics|core
genetic-services|Genetic Testing, Counselling & Ethics|support
`),
  },
  {
    slug: 'adult-health-nursing-ii',
    code: 'N-AHN (II) 225',
    title: 'Adult Health Nursing II',
    semester: 4,
    year: 2,
    credits: '7 T + 1 L + 6 C',
    exam: 'University',
    blurb: 'ENT, eye, renal, neuro, oncology, emergency and geriatric nursing.',
    chapters: parse(`
ent-disorders|ENT Disorders|core
eye-disorders|Eye Disorders|core
renal-urinary-disorders|Kidney & Urinary Disorders|core
male-reproductive|Male Reproductive Disorders|support
burns-reconstructive|Burns, Reconstructive & Cosmetic Surgery|core
neurological-disorders|Neurological Disorders|core
immunological-disorders|Immunological Disorders & HIV/AIDS|core
oncology|Oncological Conditions|core
emergency-disaster|Emergency & Disaster Nursing|core
geriatric-nursing|Geriatric Nursing|core
palliative-care|Palliative Care|core
`),
  },
  {
    slug: 'professionalism',
    code: 'PROF 230',
    title: 'Professionalism, Values & Ethics',
    semester: 4,
    year: 2,
    credits: '1 T',
    exam: 'College',
    blurb: 'Professional values, bioethics and the law that guides nursing.',
    chapters: parse(`
professionalism|Professionalism in Nursing|core
professional-values|Professional Values|core
ethics-bioethics|Ethics & Bioethics|core
`),
  },

  // ---------------- SEMESTER 5 ----------------
  {
    slug: 'child-health-nursing-i',
    code: 'N-CHN (I) 301',
    title: 'Child Health Nursing I',
    semester: 5,
    year: 3,
    credits: '3 T + 1 L + 2 C',
    exam: 'University',
    blurb: 'Healthy growth, newborn care, IMNCI and childhood emergencies.',
    chapters: parse(`
introduction|Introduction to Child Health Nursing|core
healthy-child|The Healthy Child: Growth & Development|core
neonate-care|Care of the Neonate (ENBC)|core
imnci|Integrated Management of Childhood Illness|core
childhood-diseases|Common Childhood Diseases|core
childhood-emergencies|Childhood Emergencies & PLS|core
`),
  },
  {
    slug: 'mental-health-nursing-i',
    code: 'N-MHN (I) 305',
    title: 'Mental Health Nursing I',
    semester: 5,
    year: 3,
    credits: '3 T + 1 C',
    exam: 'University',
    blurb: 'Mental health concepts, assessment, therapies and major disorders.',
    chapters: parse(`
introduction|Introduction to Mental Health Nursing|core
concepts-principles|Principles & Concepts of Mental Health Nursing|core
assessment|Mental Health Assessment|core
therapeutic-communication|Therapeutic Communication & Relationship|core
treatment-modalities|Treatment Modalities & Therapies|core
schizophrenia|Schizophrenia & Psychotic Disorders|core
mood-disorders|Mood Disorders|core
neurotic-disorders|Neurotic, Stress & Somatoform Disorders|core
`),
  },
  {
    slug: 'community-health-nursing-i',
    code: 'N-COMH (I) 310',
    title: 'Community Health Nursing I',
    semester: 5,
    year: 3,
    credits: '5 T + 2 C',
    exam: 'University',
    blurb: 'Health care in the community, epidemiology and national programmes.',
    chapters: parse(`
concepts|Concepts of Community Health Nursing|core
health-planning|Health Planning & Delivery System|core
environmental-health|Environmental Health & Sanitation|core
nutrition-education|Nutrition Assessment & Education|support
health-education|Communication & Health Education|core
chn-approaches|Community Health Nursing Approaches & Home Visits|core
family-health-nursing|Family Health Nursing|core
epidemiology|Epidemiology|core
national-health-programs|National Health Programmes|core
occupational-geriatric-mental-health|Occupational, Geriatric & Mental Health|support
`),
  },
  {
    slug: 'educational-technology',
    code: 'EDUC 315',
    title: 'Educational Technology / Nursing Education',
    semester: 5,
    year: 3,
    credits: '2 T + 1 L',
    exam: 'University',
    blurb: 'How to teach, plan lessons, use media and evaluate students.',
    chapters: parse(`
foundations|Foundations of Education|core
assessment-planning|Assessment, Curriculum & Planning|core
classroom-teaching|Classroom & Skill-Lab Teaching|core
clinical-teaching|Clinical Teaching|core
teaching-media|Teaching Media & Technology|core
evaluation|Assessment & Evaluation|core
guidance-counselling|Guidance & Counselling|support
ethics-ebt|Ethics & Evidence-Based Teaching|support
`),
  },
  {
    slug: 'forensic-nursing',
    code: 'N-FORN 320',
    title: 'Forensic Nursing & Indian Laws',
    semester: 5,
    year: 3,
    credits: '1 T',
    exam: 'College',
    blurb: 'Evidence, victim care, the forensic team and the Indian legal system.',
    chapters: parse(`
forensic-science|Forensic Science & Violence|core
forensic-nursing|Forensic Nursing|core
forensic-team|Forensic Team & Evidence Preservation|core
constitution-rights|Indian Constitution & Rights|support
indian-laws|Indian Judicial System & Laws|core
`),
  },

  // ---------------- SEMESTER 6 ----------------
  {
    slug: 'child-health-nursing-ii',
    code: 'N-CHN (II) 301',
    title: 'Child Health Nursing II',
    semester: 6,
    year: 3,
    credits: '2 T + 1 C',
    exam: 'University',
    blurb: 'Childhood diseases, behaviour problems and care of challenged children.',
    chapters: parse(`
orthopaedic-eye-ent-skin|Orthopaedic, Eye, ENT & Skin Disorders|core
communicable-diseases|Communicable Diseases in Children|core
behavioural-problems|Behavioural & Social Problems|core
challenged-children|Care of Challenged Children|support
`),
  },
  {
    slug: 'mental-health-nursing-ii',
    code: 'N-MHN (II) 305',
    title: 'Mental Health Nursing II',
    semester: 6,
    year: 3,
    credits: '2 T + 2 C',
    exam: 'University',
    blurb: 'Addiction, personality disorders, psychiatric emergencies and law.',
    chapters: parse(`
substance-use|Substance Use Disorders|core
personality-sexual|Personality & Sexual Disorders|core
childhood-adolescent|Childhood & Adolescent Disorders|core
organic-brain|Organic Brain Disorders|core
psychiatric-emergencies|Psychiatric Emergencies & Crisis|core
mental-health-law|Legal Issues & MHCA 2017|core
community-mental-health|Community Mental Health Nursing|core
`),
  },
  {
    slug: 'nursing-management',
    code: 'NMLE 330',
    title: 'Nursing Management & Leadership',
    semester: 6,
    year: 3,
    credits: '3 T + 1 C',
    exam: 'University',
    blurb: 'Run a ward: planning, staffing, leadership, quality and safety.',
    chapters: parse(`
health-care-nursing-services|Health Care & Nursing Services in India|core
management-basics|Management Basics for Nurses|core
planning|Planning Nursing Services|core
organising|Organising & Hospital Administration|core
staffing|Staffing & Scheduling|core
directing|Directing & Supervision|core
leadership|Leadership & Change|core
controlling|Controlling & Quality Assurance|core
organisational-behaviour|Organisational Behaviour & Human Relations|support
quality-safety|Quality, Audit & Patient Safety|core
`),
  },
  {
    slug: 'obg-nursing-i',
    code: 'N-MIDW (I) 335',
    title: 'Midwifery / OBG Nursing I',
    semester: 6,
    year: 3,
    credits: '3 T + 1 L + 3 C',
    exam: 'University',
    blurb: 'Normal pregnancy, labour, birth, postpartum care and family planning.',
    chapters: parse(`
introduction|Introduction & Reproductive Health|core
anatomy-physiology-conception|Reproductive Anatomy, Conception & Fetal Development|core
antenatal-care|Antenatal Care|core
labour|Normal Labour & Intrapartum Care|core
postpartum-care|Postpartum Care|core
newborn-care|Care of the Normal Newborn|core
family-welfare|Family Welfare & Contraception|core
`),
  },

  // ---------------- SEMESTER 7 ----------------
  {
    slug: 'community-health-nursing-ii',
    code: 'N-COMH (II) 401',
    title: 'Community Health Nursing II',
    semester: 7,
    year: 4,
    credits: '5 T + 2 C',
    exam: 'University',
    blurb: 'National programmes, demography, occupational and geriatric health.',
    chapters: parse(`
national-health-programs|National Health Programmes|core
mch-services|Maternal & Child Health Services|core
demography-surveillance|Demography, Surveillance & Vital Statistics|core
population-control|Population & Family Welfare|core
occupational-health|Occupational Health|core
geriatric-health|Geriatric Health Care|core
mental-health-community|Mental Health in the Community|support
hmis|Health Management Information System|core
health-services-management|Managing Community Health Services|core
school-health-disaster|School Health, Disaster & New Initiatives|support
`),
  },
  {
    slug: 'nursing-research',
    code: 'NRST 405',
    title: 'Nursing Research & Statistics',
    semester: 7,
    year: 4,
    credits: '2 T + 2 L (project)',
    exam: 'University',
    blurb: 'From research question to report — plus the statistics you need.',
    chapters: parse(`
research-process|Research & the Research Process|core
research-problem|Research Problem, Objectives & Hypotheses|core
literature-review|Review of Literature|core
designs|Research Approaches & Designs|core
sampling-data|Sampling & Data Collection|core
data-analysis|Analysis & Interpretation of Data|core
statistics|Introduction to Statistics|core
communication-utilisation|Communicating & Using Research|core
`),
  },
  {
    slug: 'obg-nursing-ii',
    code: 'N-MIDW (II) 410',
    title: 'Midwifery / OBG Nursing II',
    semester: 7,
    year: 4,
    credits: '3 T + 1 L + 4 C',
    exam: 'University',
    blurb: 'High-risk pregnancy, obstetric emergencies and gynaecological care.',
    chapters: parse(`
abnormal-pregnancy|Recognition & Management of Abnormal Pregnancy|core
abnormal-labour|Abnormal Labour & Obstetric Emergencies|core
postnatal-complications|Postnatal Complications|core
high-risk-newborn|High-Risk Newborn|core
gynae-disorders|Gynaecological Disorders & Operations|core
`),
  },

  // ---------------- SEMESTER 8 ----------------
  {
    slug: 'internship',
    code: 'INTE 415–435',
    title: 'Internship (Intensive Practicum)',
    semester: 8,
    year: 4,
    credits: '12 P',
    exam: 'University',
    blurb: '22 weeks of supervised practice ending in competency assessment.',
    chapters: parse(`
community|Community Health Nursing Internship (4 weeks)|core
adult|Adult Health Nursing Internship (6 weeks)|core
child|Child Health Nursing Internship (4 weeks)|core
mental-health|Mental Health Nursing Internship (4 weeks)|core
midwifery|Midwifery Internship (4 weeks)|core
`),
  },
];

export const subjectBySlug = new Map(subjects.map((s) => [s.slug, s]));

export function subjectsForSemester(n: number): Subject[] {
  return subjects.filter((s) => s.semester === n);
}

export function yearOfSemester(n: number): number {
  return Math.ceil(n / 2);
}

export function chapterCount(subject: Subject): number {
  return subject.chapters.length;
}

/** URL helpers */
export const yearPath = (year: number) => `/year/${year}/`;
export const semPath = (semester: number) => `/sem/${semester}/`;
export const subjectPath = (subject: Subject) => `/sem/${subject.semester}/${subject.slug}/`;
export const chapterPath = (semester: number, subjectSlug: string, chapterSlug: string) =>
  `/sem/${semester}/${subjectSlug}/${chapterSlug}/`;

/** "sem-1/applied-anatomy/respiratory-system" → parts */
export function parseChapterId(id: string) {
  const [semFolder, subject, ...rest] = id.split('/');
  return {
    semester: Number(semFolder.replace(/^sem-/, '')),
    subjectSlug: subject,
    slug: rest.join('/'),
  };
}
