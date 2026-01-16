export interface Event {
  id: string;
  name: string;
  category: string;
  categorySlug: 'competitions' | 'hackathons' | 'workshops';
  description: string;
  longDescription: string;
  rules: string[];
  date: string;
  time: string;
  venue: string;
  duration: string;
  teamSize: string;
  registrationFee: string;
  prizes: {
    first: string;
    second: string;
    third?: string;
  };
  coordinator: {
    name: string;
    phone: string;
    email: string;
  };
  variant: 'fire' | 'ice';
  icon: string;
}

export const competitions: Event[] = [
  {
    id: 'code-blaze',
    name: 'Code Blaze',
    category: 'Competitive Coding',
    categorySlug: 'competitions',
    description: 'Competitive programming challenge to test your algorithmic skills.',
    longDescription: 'Code Blaze is an intense competitive programming contest where participants solve complex algorithmic problems under time pressure. Test your problem-solving skills, data structure knowledge, and coding speed against the best minds from colleges across the nation.',
    rules: [
      'Solo participation only',
      'Duration: 2 hours',
      'Any programming language allowed (C, C++, Java, Python)',
      'Internet access is strictly prohibited during the contest',
      'Pre-written code templates are not allowed',
      'Participants must bring their own laptops',
      'Plagiarism will lead to immediate disqualification',
      'Judges decision is final'
    ],
    date: 'Feb 15, 2026',
    time: '10:00 AM - 12:00 PM',
    venue: 'IT Lab 1',
    duration: '2 hours',
    teamSize: 'Individual',
    registrationFee: '₹100',
    prizes: {
      first: '₹5,000 + Certificate',
      second: '₹3,000 + Certificate',
      third: '₹1,500 + Certificate'
    },
    coordinator: { name: 'Arun Kumar', phone: '+91 98765 43210', email: 'arun.k@smvec.ac.in' },
    variant: 'fire',
    icon: '🔥',
  },
  {
    id: 'debug-inferno',
    name: 'Debug Inferno',
    category: 'Debugging',
    categorySlug: 'competitions',
    description: 'Find and fix bugs in complex code snippets within the time limit.',
    longDescription: 'Debug Inferno challenges participants to identify and fix bugs in pre-written code. From syntax errors to logical flaws, race against time to debug programs across multiple languages and difficulty levels.',
    rules: [
      'Solo event',
      'Duration: 90 minutes',
      'Languages: C, Python, Java',
      'No external resources or internet access',
      'Partial scoring for partially fixed bugs',
      'Participants must document fixes',
      'Laptops will be provided'
    ],
    date: 'Feb 15, 2026',
    time: '3:30 PM - 5:00 PM',
    venue: 'IT Lab 3',
    duration: '90 minutes',
    teamSize: 'Individual',
    registrationFee: '₹80',
    prizes: {
      first: '₹3,000 + Certificate',
      second: '₹2,000 + Certificate',
      third: '₹1,000 + Certificate'
    },
    coordinator: { name: 'Karthik Raj', phone: '+91 98765 43214', email: 'karthik.r@smvec.ac.in' },
    variant: 'fire',
    icon: '🐛',
  },
  {
    id: 'tech-quiz',
    name: 'Tech Quiz',
    category: 'Quiz',
    categorySlug: 'competitions',
    description: 'Test your knowledge across technology, science, and current affairs.',
    longDescription: 'Tech Quiz is a multi-round quiz competition covering technology, programming, science, and current affairs. From buzzer rounds to rapid fire, showcase your technical knowledge and quick thinking.',
    rules: [
      'Team of 2 members',
      'Multiple rounds including prelims, semis, and finals',
      'Buzzer round in finals',
      'No gadgets allowed',
      'Negative marking in some rounds',
      'Time limits per question',
      'Tie-breaker rules apply'
    ],
    date: 'Feb 15, 2026',
    time: '2:00 PM - 4:00 PM',
    venue: 'Auditorium',
    duration: '2 hours',
    teamSize: 'Team of 2',
    registrationFee: '₹100 per team',
    prizes: {
      first: '₹4,000 + Certificate',
      second: '₹2,500 + Certificate',
      third: '₹1,500 + Certificate'
    },
    coordinator: { name: 'Ravi Krishnan', phone: '+91 98765 43212', email: 'ravi.k@smvec.ac.in' },
    variant: 'fire',
    icon: '⚡',
  },
  {
    id: 'paper-glacier',
    name: 'Paper Glacier',
    category: 'Paper Presentation',
    categorySlug: 'competitions',
    description: 'Present your research paper on emerging technologies.',
    longDescription: 'Paper Glacier provides a platform for aspiring researchers to present their papers on cutting-edge technologies. From AI to blockchain, showcase your research to industry experts and academicians.',
    rules: [
      'Team of 2 members maximum',
      'Presentation duration: 10 minutes + 5 min Q&A',
      'IEEE format mandatory for paper submission',
      'Submit abstract before the event',
      'PPT must be submitted 24 hours prior',
      'Topics: AI/ML, Blockchain, IoT, Cloud Computing, Cybersecurity',
      'Plagiarism will lead to disqualification'
    ],
    date: 'Feb 15, 2026',
    time: '10:30 AM - 1:00 PM',
    venue: 'Conference Room',
    duration: '2.5 hours',
    teamSize: 'Team of 1-2',
    registrationFee: '₹150 per team',
    prizes: {
      first: '₹5,000 + Certificate + Publication Opportunity',
      second: '₹3,000 + Certificate',
      third: '₹2,000 + Certificate'
    },
    coordinator: { name: 'Divya Menon', phone: '+91 98765 43215', email: 'divya.m@smvec.ac.in' },
    variant: 'ice',
    icon: '📄',
  },
  {
    id: 'ui-ux-freeze',
    name: 'UI/UX Freeze',
    category: 'Design',
    categorySlug: 'competitions',
    description: 'Design challenge focused on creating intuitive and beautiful interfaces.',
    longDescription: 'UI/UX Freeze is a design competition where participants create stunning user interfaces and user experiences. Given a problem statement, design a solution that is both beautiful and functional.',
    rules: [
      'Solo or Duo participation',
      'Duration: 4 hours',
      'Tools allowed: Figma, Adobe XD, Sketch',
      'Theme announced on spot',
      'Prototype must be interactive',
      'Submission in specified format only',
      'Judged on creativity, usability, and aesthetics'
    ],
    date: 'Feb 15, 2026',
    time: '11:00 AM - 3:00 PM',
    venue: 'IT Lab 2',
    duration: '4 hours',
    teamSize: 'Individual or Team of 2',
    registrationFee: '₹120',
    prizes: {
      first: '₹4,000 + Certificate + Internship Opportunity',
      second: '₹2,500 + Certificate',
      third: '₹1,500 + Certificate'
    },
    coordinator: { name: 'Sneha Patel', phone: '+91 98765 43213', email: 'sneha.p@smvec.ac.in' },
    variant: 'ice',
    icon: '🎨',
  },
  {
    id: 'circuit-storm',
    name: 'Circuit Storm',
    category: 'Hardware',
    categorySlug: 'competitions',
    description: 'Design and build electronic circuits to solve given problems.',
    longDescription: 'Circuit Storm challenges participants to design and implement electronic circuits. From basic logic gates to complex microcontroller-based solutions, prove your hardware prowess.',
    rules: [
      'Team of 2-3 members',
      'Duration: 3 hours',
      'Components will be provided',
      'Breadboard implementation required',
      'Must demonstrate working circuit',
      'Circuit diagrams must be submitted',
      'Safety guidelines must be followed'
    ],
    date: 'Feb 16, 2026',
    time: '10:00 AM - 1:00 PM',
    venue: 'Electronics Lab',
    duration: '3 hours',
    teamSize: 'Team of 2-3',
    registrationFee: '₹150 per team',
    prizes: {
      first: '₹4,500 + Certificate + Hardware Kit',
      second: '₹3,000 + Certificate',
      third: '₹1,500 + Certificate'
    },
    coordinator: { name: 'Vikram Singh', phone: '+91 98765 43216', email: 'vikram.s@smvec.ac.in' },
    variant: 'fire',
    icon: '⚡',
  },
];

export const hackathons: Event[] = [
  {
    id: 'frost-hack',
    name: 'Frost Hack',
    category: '24-Hour Hackathon',
    categorySlug: 'hackathons',
    description: '24-hour hackathon to build innovative solutions for real-world problems.',
    longDescription: 'Frost Hack is the flagship 24-hour hackathon of XPLOITS 26. Teams work overnight to build innovative solutions addressing real-world challenges. With mentorship from industry experts, this is your chance to turn ideas into reality.',
    rules: [
      'Team of 3-4 members',
      'Theme revealed at the start of hackathon',
      'All frameworks and technologies allowed',
      'Working prototype required for final submission',
      'Code must be written during the event only',
      'Regular checkpoint submissions required',
      'Teams can use open-source libraries',
      'Final pitch: 5 minutes + 3 min Q&A'
    ],
    date: 'Feb 15-16, 2026',
    time: 'Starts 9:00 AM Feb 15, Ends 9:00 AM Feb 16',
    venue: 'Seminar Hall',
    duration: '24 hours',
    teamSize: 'Team of 3-4',
    registrationFee: '₹400 per team',
    prizes: {
      first: '₹15,000 + Trophies + Internship Offers',
      second: '₹10,000 + Trophies + Certificates',
      third: '₹5,000 + Certificates'
    },
    coordinator: { name: 'Priya Sharma', phone: '+91 98765 43211', email: 'priya.s@smvec.ac.in' },
    variant: 'ice',
    icon: '❄️',
  },
  {
    id: 'blaze-sprint',
    name: 'Blaze Sprint',
    category: '6-Hour Hackathon',
    categorySlug: 'hackathons',
    description: 'Fast-paced 6-hour hackathon for quick problem solving and rapid prototyping.',
    longDescription: 'Blaze Sprint is a high-intensity 6-hour hackathon designed for those who thrive under pressure. Build a minimum viable product in just 6 hours and impress the judges with your speed and innovation.',
    rules: [
      'Team of 2-3 members',
      'Problem statement given at start',
      'Web/Mobile/Desktop solutions accepted',
      'Must have functional demo',
      'Use of boilerplate code allowed',
      'Presentation: 3 minutes',
      'Judged on innovation, execution, and presentation'
    ],
    date: 'Feb 16, 2026',
    time: '10:00 AM - 4:00 PM',
    venue: 'IT Lab 1 & 2',
    duration: '6 hours',
    teamSize: 'Team of 2-3',
    registrationFee: '₹200 per team',
    prizes: {
      first: '₹7,000 + Certificates + Goodies',
      second: '₹4,000 + Certificates',
      third: '₹2,000 + Certificates'
    },
    coordinator: { name: 'Rahul Verma', phone: '+91 98765 43217', email: 'rahul.v@smvec.ac.in' },
    variant: 'fire',
    icon: '🚀',
  },
  {
    id: 'ai-ml-hack',
    name: 'AI/ML Hack',
    category: 'AI/ML Hackathon',
    categorySlug: 'hackathons',
    description: 'Build intelligent solutions using machine learning and artificial intelligence.',
    longDescription: 'AI/ML Hack focuses exclusively on artificial intelligence and machine learning solutions. From NLP to computer vision, build models that can make a real impact. Pre-trained models are allowed with proper attribution.',
    rules: [
      'Team of 2-4 members',
      'Duration: 12 hours',
      'Dataset will be provided',
      'Pre-trained models allowed with attribution',
      'Must explain model architecture',
      'Jupyter notebooks must be submitted',
      'Cloud GPU access provided'
    ],
    date: 'Feb 15, 2026',
    time: '8:00 AM - 8:00 PM',
    venue: 'AI Lab',
    duration: '12 hours',
    teamSize: 'Team of 2-4',
    registrationFee: '₹300 per team',
    prizes: {
      first: '₹10,000 + Certificate + Cloud Credits',
      second: '₹6,000 + Certificate',
      third: '₹3,000 + Certificate'
    },
    coordinator: { name: 'Dr. Meena Kumari', phone: '+91 98765 43218', email: 'meena.k@smvec.ac.in' },
    variant: 'ice',
    icon: '🤖',
  },
  {
    id: 'cyber-hunt',
    name: 'Cyber Hunt',
    category: 'CTF Competition',
    categorySlug: 'hackathons',
    description: 'Capture The Flag cybersecurity competition to test your hacking skills.',
    longDescription: 'Cyber Hunt is an exciting Capture The Flag (CTF) competition. Solve challenges across web exploitation, cryptography, reverse engineering, and forensics to capture flags and climb the leaderboard.',
    rules: [
      'Team of 2-3 members',
      'Duration: 8 hours',
      'Multiple challenge categories',
      'Internet access allowed for research only',
      'No attacking other teams',
      'Flag format will be specified',
      'Dynamic scoring based on solves'
    ],
    date: 'Feb 16, 2026',
    time: '9:00 AM - 5:00 PM',
    venue: 'Cyber Security Lab',
    duration: '8 hours',
    teamSize: 'Team of 2-3',
    registrationFee: '₹250 per team',
    prizes: {
      first: '₹8,000 + Certificate + Security Tools License',
      second: '₹5,000 + Certificate',
      third: '₹2,500 + Certificate'
    },
    coordinator: { name: 'Arjun Nair', phone: '+91 98765 43219', email: 'arjun.n@smvec.ac.in' },
    variant: 'fire',
    icon: '🔐',
  },
];

export const workshops: Event[] = [
  {
    id: 'web3-workshop',
    name: 'Web3 & Blockchain',
    category: 'Workshop',
    categorySlug: 'workshops',
    description: 'Hands-on workshop on blockchain development and Web3 technologies.',
    longDescription: 'Dive into the world of decentralized applications with our Web3 & Blockchain workshop. Learn about smart contracts, DeFi, NFTs, and build your first dApp on Ethereum.',
    rules: [
      'Individual participation',
      'Laptop with MetaMask installed required',
      'Basic JavaScript knowledge recommended',
      'Workshop materials will be provided',
      'Certificate on completion',
      'Hands-on coding sessions included'
    ],
    date: 'Feb 15, 2026',
    time: '9:00 AM - 1:00 PM',
    venue: 'IT Lab 4',
    duration: '4 hours',
    teamSize: 'Individual',
    registrationFee: '₹200',
    prizes: {
      first: 'Certificate of Completion',
      second: 'Workshop Materials & Resources',
    },
    coordinator: { name: 'Nitin Gupta', phone: '+91 98765 43220', email: 'nitin.g@smvec.ac.in' },
    variant: 'ice',
    icon: '🔗',
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing Masterclass',
    category: 'Workshop',
    categorySlug: 'workshops',
    description: 'Learn AWS and cloud deployment from industry experts.',
    longDescription: 'Master cloud computing with hands-on AWS training. Deploy applications, manage databases, and understand serverless architecture. Perfect for beginners and intermediate developers.',
    rules: [
      'Individual participation',
      'AWS Free Tier account required',
      'Basic programming knowledge needed',
      'Follow along with instructor',
      'Q&A sessions included',
      'Certificate on completion'
    ],
    date: 'Feb 15, 2026',
    time: '2:00 PM - 6:00 PM',
    venue: 'Seminar Hall B',
    duration: '4 hours',
    teamSize: 'Individual',
    registrationFee: '₹250',
    prizes: {
      first: 'AWS Credits Worth $50',
      second: 'Certificate of Completion',
    },
    coordinator: { name: 'Sanjay Kumar', phone: '+91 98765 43221', email: 'sanjay.k@smvec.ac.in' },
    variant: 'fire',
    icon: '☁️',
  },
  {
    id: 'flutter-workshop',
    name: 'Flutter App Development',
    category: 'Workshop',
    categorySlug: 'workshops',
    description: 'Build cross-platform mobile apps with Flutter framework.',
    longDescription: 'Learn to build beautiful, natively compiled applications for mobile from a single codebase. This workshop covers Flutter basics, widgets, state management, and deploying your first app.',
    rules: [
      'Individual participation',
      'Flutter SDK pre-installed recommended',
      'Android Studio or VS Code required',
      'Android/iOS device for testing (optional)',
      'Follow coding exercises',
      'Build a complete app by end of workshop'
    ],
    date: 'Feb 16, 2026',
    time: '9:00 AM - 2:00 PM',
    venue: 'IT Lab 2',
    duration: '5 hours',
    teamSize: 'Individual',
    registrationFee: '₹200',
    prizes: {
      first: 'Certificate + App Store Publishing Guide',
      second: 'Workshop Resources',
    },
    coordinator: { name: 'Anjali Sharma', phone: '+91 98765 43222', email: 'anjali.s@smvec.ac.in' },
    variant: 'ice',
    icon: '📱',
  },
  {
    id: 'ethical-hacking',
    name: 'Ethical Hacking Bootcamp',
    category: 'Workshop',
    categorySlug: 'workshops',
    description: 'Learn penetration testing and security assessment techniques.',
    longDescription: 'Get started with ethical hacking in this intensive bootcamp. Learn reconnaissance, vulnerability assessment, exploitation techniques, and how to write professional security reports.',
    rules: [
      'Individual participation',
      'Kali Linux VM required',
      'Minimum 8GB RAM recommended',
      'Follow ethical guidelines strictly',
      'Practice only on provided targets',
      'Certificate on completion'
    ],
    date: 'Feb 16, 2026',
    time: '10:00 AM - 4:00 PM',
    venue: 'Cyber Security Lab',
    duration: '6 hours',
    teamSize: 'Individual',
    registrationFee: '₹300',
    prizes: {
      first: 'Certificate + Ethical Hacker Badge',
      second: 'Security Tools & Resources',
    },
    coordinator: { name: 'Rajesh Menon', phone: '+91 98765 43223', email: 'rajesh.m@smvec.ac.in' },
    variant: 'fire',
    icon: '🛡️',
  },
  {
    id: 'data-science',
    name: 'Data Science with Python',
    category: 'Workshop',
    categorySlug: 'workshops',
    description: 'Master data analysis, visualization, and basic ML with Python.',
    longDescription: 'From Pandas to Scikit-learn, learn the complete data science pipeline. This workshop covers data cleaning, exploratory analysis, visualization with Matplotlib/Seaborn, and building your first ML model.',
    rules: [
      'Individual participation',
      'Python 3.x installed required',
      'Jupyter Notebook setup recommended',
      'Basic Python knowledge preferred',
      'Dataset will be provided',
      'Complete mini-project during workshop'
    ],
    date: 'Feb 15, 2026',
    time: '9:00 AM - 3:00 PM',
    venue: 'AI Lab',
    duration: '6 hours',
    teamSize: 'Individual',
    registrationFee: '₹250',
    prizes: {
      first: 'Certificate + Kaggle Starter Kit',
      second: 'Data Science Resources Bundle',
    },
    coordinator: { name: 'Dr. Lakshmi Priya', phone: '+91 98765 43224', email: 'lakshmi.p@smvec.ac.in' },
    variant: 'ice',
    icon: '📊',
  },
];

export const allEvents: Event[] = [...competitions, ...hackathons, ...workshops];

export const getEventBySlug = (slug: string): Event | undefined => {
  return allEvents.find(event => event.id === slug);
};

export const getEventsByCategory = (category: 'competitions' | 'hackathons' | 'workshops'): Event[] => {
  switch (category) {
    case 'competitions':
      return competitions;
    case 'hackathons':
      return hackathons;
    case 'workshops':
      return workshops;
    default:
      return [];
  }
};
