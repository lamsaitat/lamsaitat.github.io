export interface MetricItem {
  value: string;
  label: string;
  detail: string;
  accent: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  role: string;
  type?: string;
  period: string;
  summary?: string;
  highlights: string[];
  tags: string[];
  relatedProjectIds: string[];
}

export interface PortfolioProject {
  id: string;
  name: string;
  company: string;
  location: string;
  period: string;
  platforms: string[];
  category: 'fintech' | 'govtech' | 'media' | 'consumer';
  featured: boolean;
  tagline: string;
  description: string;
  features?: string[];
  achievements?: string[];
  links: { label: string; url: string }[];
  images: string[];
  metrics?: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export interface AwardItem {
  title: string;
  project: string;
  year: string;
  description: string;
  link?: string;
}

export const profileData = {
  name: 'Sai Tat (Kelvin) Lam',
  resumeName: 'Sai Tat Lam (Kelvin)',
  title: 'Senior Software Engineer',
  subtitle: 'iOS, SwiftUI & Mobile Systems Architecture',
  yearsExperience: '15+ Years',
  publicLocation: 'Sydney, Australia',
  privateContact: {
    address: '49 Appletree Dr, Cherrybrook NSW 2126',
    phone: '0410 338 506',
  },
  // Stored as char codes so the plain email string never appears in the HTML or compiled JS bundle
  emailParts: {
    u: [108, 97, 109, 115, 97, 105, 116, 97, 116],
    d: [103, 109, 97, 105, 108, 46, 99, 111, 109],
  },
  linkedin: 'https://www.linkedin.com/in/lamsaitat/',
  summary:
    'Senior Mobile & iOS Software Engineer with 15+ years of experience architecting, leading, and shipping mission-critical consumer, enterprise, and government applications. Proven track record modernising flagship banking and digital identity systems used by millions of Australians, driving multi-million-dollar cost savings, and mentoring next-generation engineering talent.',
  resumeSummary:
    'Senior mobile developer with 15+ years of iOS and mobile development who has led and co-developed multiple award-winning apps for both consumer and enterprise purposes with cutting-edge technologies to deliver quality software that is easily maintained.',

  metrics: [
    {
      value: '$4M / yr',
      label: 'Annual Licensing Saved',
      detail:
        'Led the foundational SwiftUI rebuild of CommBiz iOS—the app facilitating payroll for 1/3 of the Australian workforce.',
      accent: 'from-emerald-400 to-teal-500',
    },
    {
      value: '1.2★ → 4.1★',
      label: 'App Store Rating Uplift',
      detail:
        'Transformed CommBiz iOS user experience and reliability through modern SwiftUI architecture, UX alignment, and automated CI/CD gates.',
      accent: 'from-amber-400 to-orange-500',
    },
    {
      value: '3M+ Users',
      label: 'NSW Digital Driver Licence',
      detail:
        '600,000+ adoptions in week one and >53% adoption across all NSW driver licence holders (#2 in Apple App Store Utilities).',
      accent: 'from-sky-400 to-blue-500',
    },
    {
      value: '$650k+ Saved',
      label: 'Fraud Prevented (6 Mos)',
      detail:
        'Digitised CBA corporate cards into the CommBank iOS app (7M+ users), preventing over $650,000 in fraudulent transactions (Jan–Jul 2023).',
      accent: 'from-purple-400 to-indigo-500',
    },
  ] as MetricItem[],

  education: {
    institution: 'University of New South Wales (UNSW)',
    location: 'Sydney, Australia',
    degree: 'Bachelor of Science in Computer Science',
    major: 'Major in Computer Science and Computer Game Design & Construction',
    period: '2007 – 2010',
  },

  skills: [
    {
      category: 'iOS & Apple Ecosystem',
      description: 'Deep native mastery from iOS 3.2 to modern Swift 6 & SwiftUI',
      skills: [
        'Swift (2, 3, 4, 5, 6)',
        'SwiftUI',
        'Objective-C',
        'Xcode',
        'tvOS',
        'UIKit & Quartz Core',
        'Apple Universal Search',
        'Swift Package Manager (SPM)',
        'Tuist',
        'CocoaPods',
      ],
    },
    {
      category: 'Architecture, Testing & DevOps',
      description: 'Production-grade modular systems, test tooling & release automation',
      skills: [
        'Modular App Architecture',
        'XCTest / TDD / BDD',
        'Vapor (Swift Mock/Test Tooling)',
        'CI / CD Pipelines & PR Gates',
        'Git',
        'AWS',
        'Python 3',
        'API Contract Design',
        'Security Hardening (MitM / Sideloading)',
      ],
    },
    {
      category: 'Cross-Platform, Android & Web',
      description: 'Full-spectrum mobile & polyglot product engineering',
      skills: [
        'React Native',
        'TypeScript / JavaScript',
        'Node.js',
        'Jest / Detox',
        'Android (Java / Android Studio)',
        'IntelliJ IDEA / VS Code',
        'Google IMA SDK',
        'Adobe Omniture Analytics',
      ],
    },
    {
      category: 'Leadership & Engineering Practices',
      description: 'Technical mentorship, product incubation & agile delivery',
      skills: [
        'System Design & Technical Leadership',
        'Graduate & Junior Engineer Mentorship',
        'Interactive Prototyping & Impact Analysis',
        'Scrum / Kanban / Extreme Programming (XP)',
        'JIRA / Confluence',
        'Cross-Functional UX & Backend Alignment',
      ],
    },
  ] as SkillGroup[],

  awards: [
    {
      title: 'Recognised by Apple Internally for Universal Search Integration',
      project: 'tenplay (Network Ten)',
      year: '2017–2018',
      description:
        'Recognised by Apple as one of the smoothest integrations of the Apple Universal Search framework and Apple TV app ecosystem.',
    },
    {
      title: 'Featured Exhibitor — Dublin Web Summit',
      project: 'JIKU Digital Publishing Platform',
      year: '2014',
      description:
        'Designed and architected the software foundation of the JIKU iOS client framework showcased at Dublin Web Summit 2014.',
    },
    {
      title: 'Winner — Medical Category, Australian Mobile Awards',
      project: 'NPS Medicines List',
      year: '2011',
      description:
        'Awarded Winner in the Medical Category at the 2011 Australian Mobile Awards and reached #1 Top Free Medical App on the Australian App Store.',
      link: 'http://bit.ly/28KEop7',
    },
    {
      title: 'Finalist — Field Services, Australian Mobile Awards',
      project: 'Hilton Surfers Paradise iPad Concierge',
      year: '2011',
      description:
        'Selected as a Finalist in the Field Services category at the 2011 Australian Mobile Awards.',
      link: 'http://bit.ly/28JYn1T',
    },
  ] as AwardItem[],

  experiences: [
    {
      id: 'cba',
      company: 'Commonwealth Bank',
      location: 'Sydney, Australia',
      role: 'Senior Engineer (iOS)',
      period: 'August 2021 – Present',
      summary:
        'Foundational technical leader on the CommBiz Mobile Rebuild and senior iOS engineer delivering high-impact business banking capabilities in the flagship CommBank app.',
      highlights: [
        'Foundational member of the "CommBiz Mobile Rebuild" project—an initiative to modernise the core business banking app that facilitates payroll for 1/3 of the entire Australian workforce.',
        'Led full SwiftUI development, system architecture, API contract design, and DevOps CI/CD pipelines to deliver the first production release ahead of a critical deadline, saving $4 million annually in licensing costs and de-risking legacy third-party dependencies.',
        'Drove the CommBiz App Store rating from 1.2 stars to 4.1 stars by collaborating closely with UX and engineering platform standards across iOS and Android.',
        'Ported and modernised dev and unit-testing tooling in Swift using officially endorsed frameworks including Vapor, enabling automated CI/CD PR merge gates for consistent, reliable test coverage.',
        'Digitised CBA corporate cards into the flagship CommBank iOS app (7M+ users), preventing over $650,000 in potential fraudulent transactions between Jan 2023 and Jul 2023.',
        'Digitised Business Banking Smart Terminals and Capital Growth Accounts in the CommBank app, contributing directly to the bank’s strategic goal of NPS +30 over 3 years.',
        'Partnered with backend engineers to architect and deliver a traffic-shaping solution that significantly alleviated high-TPS stress on a legacy downstream service.',
        'Incubate squad-level ideas into viable products through impact analysis and interactive prototyping; mentored 3 graduate engineers to permanent Software Engineer promotions (2022–2024).',
      ],
      tags: ['Swift 6', 'SwiftUI', 'Vapor', 'CI/CD', 'Modular Architecture', 'XCTest / TDD', 'Mentorship'],
      relatedProjectIds: ['commbiz-ios', 'commbank-ios'],
    },
    {
      id: 'service-nsw',
      company: 'Service NSW',
      location: 'Sydney, Australia',
      role: 'Senior Product Engineer',
      period: 'August 2019 – August 2021',
      summary:
        'Engineered and scaled the state-wide NSW Digital Driver Licence and generic Digital Credentials architecture inside the official Service NSW mobile app.',
      highlights: [
        'Developed and launched the NSW Digital Driver Licence (DDL) into production, achieving over 600,000 adoptions within the first week and over 3 million opt-ins (>53% of all 6 million NSW drivers), propelling the app to #2 in Utilities on the Apple App Store.',
        'Refactored and evolved the Digital Driver Licence architecture into a generic, extensible Digital Licence framework, dramatically reducing engineering effort required to ship the Digital Photo Card and subsequent credentials (RSA/RCG, Working with Children Check, Fishing & Boat Licences).',
        'Regularly facilitated and regulated engineering and Agile rituals to sustain high team velocity, code quality, and psychological safety.',
        'Mentored junior and intern engineers across technical craftsmanship, university studies, and career progression.',
      ],
      tags: ['iOS', 'React Native', 'TypeScript', 'Digital Identity', 'Clean Architecture', 'Agile Leadership'],
      relatedProjectIds: ['service-nsw-app'],
    },
    {
      id: 'network-ten',
      company: 'Network Ten',
      location: 'Sydney, Australia',
      role: 'iOS Developer',
      period: 'October 2016 – October 2018',
      summary:
        'Delivered native streaming, Live TV, and tvOS experiences for millions of Australian viewers on the tenplay platform.',
      highlights: [
        'Maintained and evolved the tenplay iOS and tvOS apps serving millions of downloads and tens of thousands of daily active users across catch-up VOD and 24/7 Live TV streaming.',
        'Engineered major UX and platform features including Live TV streaming for iOS and tvOS, AirPlay, and Google Chromecast integration.',
        'Conducted routine architecture and code reviews with API and backend teams to optimise SDK integrations—recognised internally by Apple as one of the smoothest integrations of Apple Universal Search and the Apple TV app.',
      ],
      tags: ['Swift', 'Objective-C', 'tvOS', 'AVFoundation', 'Chromecast', 'Apple Universal Search', 'Google IMA'],
      relatedProjectIds: ['tenplay-ios', 'tenplay-tvos'],
    },
    {
      id: 'objective-corp',
      company: 'Objective Corporation',
      location: 'Sydney, Australia',
      role: 'Contract iOS Developer',
      type: 'Contract',
      period: 'June 2016 – September 2016',
      highlights: [
        'Implemented key UX and navigation enhancements for Objective Connect on iPhone and iPad, enabling enterprise and government users to organise and browse encrypted documents offline.',
        'Identified and remediated critical mobile security vulnerabilities that would otherwise have exposed the app to Man-in-the-Middle (MitM) and sideloading attacks.',
      ],
      tags: ['iOS', 'Enterprise Security', 'Local Encryption', 'MitM Hardening'],
      relatedProjectIds: ['objective-connect'],
    },
    {
      id: 'sakura-sky',
      company: 'Sakura Sky ( & Jiku.io )',
      location: 'Sydney, Australia',
      role: 'Software Engineer',
      period: 'February 2013 – May 2016',
      highlights: [
        'Built the initial proof-of-concept 2D rich-content digital magazine browser that formed the technical foundation of the JIKU digital publishing platform.',
        'Designed and architected the JIKU iOS client framework exhibited at the Dublin Web Summit 2014.',
        'Refactored the JIKU project hierarchy and build automation so new white-label themed client apps could be configured and deployed in under 2 hours.',
        'Spearheaded internal pre-sales prototypes (Sports Video MRSS curation) and full end-to-end client apps including Mynder (babysitter booking with integrated video calling) and SongFit (beat-matched fitness trainer).',
      ],
      tags: ['iOS', 'Framework Architecture', 'White-Label Automation', 'AVFoundation', 'WebRTC / Video'],
      relatedProjectIds: ['jiku-client', 'mynder-ios', 'songfit', 'sports-video-prototype'],
    },
    {
      id: 'loverly',
      company: 'Lover.ly',
      location: 'New York, USA',
      role: 'Contract iOS Developer',
      type: 'Contract',
      period: 'January 2013 – February 2013',
      highlights: [
        'Inherited the Lover.ly iOS wedding social network & visual discovery codebase from a previous developer, stabilised the architecture, and delivered the production release on schedule for the company’s business launch.',
      ],
      tags: ['iOS', 'Objective-C', 'Social Discovery', 'Rapid Turnaround'],
      relatedProjectIds: ['loverly-wedding'],
    },
    {
      id: 'bilue',
      company: 'Bilue',
      location: 'Sydney, Australia',
      role: 'Contract iOS Developer',
      type: 'Contract',
      period: 'December 2012 – January 2013',
      highlights: [
        'Co-developed the Excel NAPLAN-Style Tests iPad educational framework and delivered the release on schedule.',
        'Refactored interface and target configurations to support multi-target deployment (Year 3 & Year 5 editions) with custom content and themes from a single maintainable codebase.',
      ],
      tags: ['iOS (iPad)', 'Multi-Target Architecture', 'EdTech'],
      relatedProjectIds: ['excel-naplan'],
    },
    {
      id: 'gomeeki',
      company: 'Gomeeki',
      location: 'Sydney, Australia',
      role: 'Mobile Developer',
      period: 'May 2012 – December 2012',
      highlights: [
        'Managed a cross-functional team of 4 iOS developers and designers delivering end-to-end mobile apps for high-profile clients including ASX (featured on Apple Australia’s website), ABC, Penguin, Aussie Farmers Direct, and Eagle Boys Pizza.',
        'Optimised the "Best of Gary & George" codebase to cut memory footprint by 50%, enabling smooth performance on older iOS hardware.',
      ],
      tags: ['Team Leadership', 'Memory Optimisation', 'Real-Time Market Data', 'CoreLocation'],
      relatedProjectIds: ['asx-iphone', 'eagle-boys'],
    },
    {
      id: 'wonderfactory',
      company: 'The WonderFactory',
      location: 'New York, USA',
      role: 'Contract iOS Developer',
      type: 'Contract',
      period: 'September 2011 – August 2012',
      highlights: [
        'Co-developed App Store-featured iPad applications in a 3-developer team for major US brands including AARP and "1,000 Places To See Before You Die" (featured on the US iPad App Store front page under "What’s Hot?").',
        'Reduced application download size by 20% by rendering visual assets procedurally via Quartz Core and the Three20 framework.',
      ],
      tags: ['iPadOS / iOS', 'Quartz Core', 'Three20', 'REST APIs', 'Offline Reading'],
      relatedProjectIds: ['1000-places', 'aarp-ipad'],
    },
    {
      id: 'creative-licence',
      company: 'Creative Licence Digital',
      location: 'Sydney, Australia',
      role: 'Software Developer',
      period: 'July 2010 – July 2011',
      highlights: [
        'Designed and developed the award-winning NPS Medicines List iPhone app—Winner of the 2011 Australian Mobile Awards (Medical) and #1 Top Free Medical App on the Australian App Store.',
        'Co-developed the Hilton Surfers Paradise iPad virtual concierge app synced with an internal CMS and analytics engine—Finalist in the 2011 Australian Mobile Awards (Field Services).',
      ],
      tags: ['iOS', 'CMS Sync', 'Local Notifications', 'Healthcare & Hospitality'],
      relatedProjectIds: ['nps-medicines', 'hilton-surfers-paradise'],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: 'commbiz-ios',
      name: 'CommBiz iOS App (Complete SwiftUI Rebuild)',
      company: 'Commonwealth Bank',
      location: 'Sydney, Australia',
      period: '2021 – Present',
      platforms: ['iOS', 'SwiftUI', 'Swift 6', 'Vapor CI/CD'],
      category: 'fintech',
      featured: true,
      tagline:
        'Modernising the mission-critical business banking app that facilitates payroll for 1/3 of the Australian workforce.',
      description:
        'Pay, track & approve business banking on the go: instant account search, balances & transaction history at a glance, and top-of-screen urgent payment authorisations.',
      achievements: [
        'Led foundational development from system design and API contracts to project scaffolding and CI/CD pipeline enablement using a 100% SwiftUI approach.',
        'Delivered the rebuilt production app ahead of a critical deadline, saving Business Banking $4 million in annual licensing costs and eliminating high-risk legacy 3rd-party dependencies.',
        'Ported and modernised dev and unit-testing tooling in Swift and Vapor, enabling automated PR merge gates for thorough, deterministic testing.',
        'Partnered closely with UX to align with iOS and Android platform guidelines—driving the App Store rating from 1.2 stars to 4.1 stars.',
        'Mentored 3 graduate engineers to permanent Software Engineer promotions.',
      ],
      metrics: ['$4M/yr Saved', '1.2★ → 4.1★ Rating', '1/3 AU Workforce Payroll'],
      links: [
        {
          label: 'App Store',
          url: 'https://apps.apple.com/au/app/commbiz/id606702405',
        },
      ],
      images: ['images/portfolio/image15.png'],
    },
    {
      id: 'commbank-ios',
      name: 'CommBank iOS App (Business Banking & Corporate Cards)',
      company: 'Commonwealth Bank',
      location: 'Sydney, Australia',
      period: '2018 – Present',
      platforms: ['iOS', 'Swift', 'Enterprise Banking'],
      category: 'fintech',
      featured: true,
      tagline:
        'Empowering 7M+ Australians and business owners with digital corporate cards, Smart terminal management, and fraud protection.',
      description:
        'Australia’s leading banking app serving over 7 million customers with PayID/BPAY payments, Spend Tracker, Cash Flow View, CallerCheck, NameCheck, and integrated Business Banking tools.',
      achievements: [
        'Digitised CBA corporate cards into the CommBank iOS app, preventing over $650,000 in potential fraudulent transactions within 6 months (Jan–Jul 2023).',
        'Digitised Business Banking Smart Terminals and Capital Growth Accounts directly into the CommBank app, supporting the bank’s strategic goal of NPS +30 in 3 years.',
        'Collaborated with backend engineers to design and ship a traffic-mitigation solution that relieved high-TPS bottlenecks on a legacy downstream service.',
        'Building customer & revenue insights capabilities to help business customers align strategies with their cash flow and customer behaviour.',
      ],
      metrics: ['7M+ Users', '$650k+ Fraud Prevented', 'NPS +30 Driver'],
      links: [
        {
          label: 'App Store',
          url: 'https://apps.apple.com/au/app/commbank/id310251202',
        },
      ],
      images: ['images/portfolio/image29.png'],
    },
    {
      id: 'service-nsw-app',
      name: 'Service NSW (Digital Driver Licence & Credentials)',
      company: 'Service NSW',
      location: 'Sydney, Australia',
      period: '2018 – 2021',
      platforms: ['iOS', 'Android', 'React Native'],
      category: 'govtech',
      featured: true,
      tagline:
        'State-wide digital identity wallet powering the NSW Digital Driver Licence for over 3 million citizens.',
      description:
        'The official Service NSW mobile app providing citizens with instant access to Digital Driver Licences, Digital Photo Cards, RSA/RCG Competency Cards, Working with Children Checks, Fishing & Boat Licences, and vehicle registrations.',
      achievements: [
        'Over 600,000 NSW drivers adopted the Digital Driver Licence within the first week of launch.',
        'Surpassed 3 million opt-ins (>53% adoption rate across all NSW driver licence holders).',
        'Refactored the Digital Driver Licence codebase into a reusable generic Digital Licence architecture, accelerating the delivery of the Digital Photo Card.',
        'Ranked #2 in Utilities on the Apple App Store.',
      ],
      metrics: ['3M+ Opt-Ins', '600k+ Week 1', '#2 Utilities App Store'],
      links: [
        {
          label: 'App Store',
          url: 'https://apps.apple.com/au/app/service-nsw/id577283433',
        },
      ],
      images: ['images/portfolio/image10.png', 'images/portfolio/image5.png'],
    },
    {
      id: 'tenplay-ios',
      name: 'tenplay iOS & tvOS Streaming Suite',
      company: 'Network Ten',
      location: 'Sydney, Australia',
      period: '2016 – 2018',
      platforms: ['iOS', 'tvOS', 'AirPlay & Chromecast'],
      category: 'media',
      featured: true,
      tagline:
        'Catch-up VOD and 24/7 Live TV streaming across iPhone, iPad, and Apple TV with Apple-recognised Universal Search.',
      description:
        'Network Ten’s flagship catch-up and live streaming experience for MasterChef, Australian Survivor, Neighbours, and live sport—featuring seamless AirPlay, Chromecast, and native tvOS leanback navigation.',
      achievements: [
        'Maintained and scaled both tenplay iOS and tenplay tvOS apps serving millions of downloads and tens of thousands of daily active viewers.',
        'Shipped Live TV streaming across iOS and tvOS alongside Chromecast integration.',
        'Recognised internally by Apple for delivering one of the smoothest integrations of the Apple Universal Search framework and Apple TV app.',
      ],
      metrics: ['Millions of Downloads', 'Apple Recognised', 'iOS + tvOS'],
      links: [
        {
          label: 'App Store',
          url: 'https://itunes.apple.com/au/app/tenplay/id409289742?mt=8',
        },
      ],
      images: [
        'images/portfolio/image24.jpg',
        'images/portfolio/image8.jpg',
        'images/portfolio/image2.jpg',
        'images/portfolio/image22.png',
      ],
    },
    {
      id: 'jiku-client',
      name: 'JIKU Digital Publishing Platform',
      company: 'Jiku.io / Sakura Sky',
      location: 'Sydney, Australia',
      period: '2014 – 2016',
      platforms: ['iOS', 'Android', 'Framework Architecture'],
      category: 'media',
      featured: true,
      tagline:
        '2D rich-media digital publishing & shoppable magazine framework showcased at Dublin Web Summit 2014.',
      description:
        'A native front-end publishing engine combining lightweight web content payloads with a fluid 2D native look-and-feel and integrated e-commerce capabilities (such as Shopify).',
      achievements: [
        'Built the original 2D rich-content browser proof-of-concept and architected the core JIKU iOS client framework.',
        'Exhibited internationally at Dublin Web Summit 2014.',
        'Re-engineered the project hierarchy and build tooling so white-label themed client builds could be generated and deployed in under 2 hours.',
      ],
      metrics: ['Dublin Web Summit 2014', '<2hr White-Label Builds'],
      links: [],
      images: ['images/portfolio/image6.png', 'images/portfolio/image35.png'],
    },
    {
      id: 'objective-connect',
      name: 'Objective Connect (Enterprise Secure Workspace)',
      company: 'Objective Corporation',
      location: 'Sydney, Australia',
      period: '2016',
      platforms: ['iOS (iPhone & iPad)', 'Security & Encryption'],
      category: 'fintech',
      featured: true,
      tagline:
        'Encrypted offline document management for government & enterprise workspaces, hardened against MitM & sideloading.',
      description:
        'Companion iPhone and iPad app enabling Objective Connect users to securely view, organise, and upload sensitive documents with local encryption for protected offline access.',
      achievements: [
        'Delivered UX and navigation enhancements for rapid document organisation on mobile.',
        'Identified and remediated critical security flaws to protect enterprise users against Man-in-the-Middle (MitM) and sideloading attacks.',
      ],
      metrics: ['Local Encryption', 'MitM & Sideloading Hardened'],
      links: [
        {
          label: 'App Store',
          url: 'https://itunes.apple.com/au/app/objective-connect-for-iphone/id1073807718?mt=8',
        },
      ],
      images: [
        'images/portfolio/image16.jpg',
        'images/portfolio/image30.jpg',
        'images/portfolio/image25.jpg',
      ],
    },
    {
      id: 'mynder-ios',
      name: 'Mynder iOS (On-Demand Babysitter Booking)',
      company: 'Sakura Sky',
      location: 'Sydney, Australia',
      period: '2014 – 2015',
      platforms: ['iOS', 'Video Calling'],
      category: 'consumer',
      featured: false,
      tagline: 'Sydney-based babysitter marketplace with postcode search and in-app video interviewing.',
      description:
        'Allows parents and babysitters to request and respond to bookings in a few taps, search available sitters by postcode, and conduct live in-app video interviews prior to booked sessions.',
      links: [
        {
          label: 'App Store',
          url: 'https://itunes.apple.com/au/app/mynder-book-babysitters-easily/id929640837?mt=8',
        },
      ],
      images: ['images/portfolio/image26.png', 'images/portfolio/image3.png'],
    },
    {
      id: 'sports-video-prototype',
      name: 'Sports Video Curation Prototype',
      company: 'Sakura Sky',
      location: 'Sydney, Australia',
      period: '2014 – 2015',
      platforms: ['iOS', 'MRSS Video Streaming'],
      category: 'media',
      featured: false,
      tagline: 'Multi-feed MRSS sports video aggregation and curated channel playback prototype.',
      description:
        'Pre-sales interactive prototype built to showcase automated curation of sports video channels and smooth remote video playback from multiple MRSS feeds.',
      links: [],
      images: [
        'images/portfolio/image13.png',
        'images/portfolio/image33.png',
        'images/portfolio/image34.png',
      ],
    },
    {
      id: 'songfit',
      name: 'SongFit (Beat-Matched Audio Fitness Trainer)',
      company: 'Sakura Sky',
      location: 'Sydney, Australia',
      period: '2013 – 2014',
      platforms: ['iOS', 'Android', 'GPS & Audio'],
      category: 'consumer',
      featured: false,
      tagline: 'Personal fitness trainer combining beat-matched music packs with voiceover coaching and GPS workout analytics.',
      description:
        'Delivers specially formulated training packs featuring music tracks beat-matched with coaching voiceovers alongside workout duration and GPS route tracking.',
      links: [
        {
          label: 'App Store',
          url: 'https://itunes.apple.com/au/app/songfit/id587176581?mt=8',
        },
      ],
      images: [
        'images/portfolio/image20.jpg',
        'images/portfolio/image14.jpg',
        'images/portfolio/image31.jpg',
      ],
    },
    {
      id: 'loverly-wedding',
      name: 'Lover.ly Weddings',
      company: 'Lover.ly',
      location: 'New York, USA',
      period: '2013',
      platforms: ['iOS (iPhone)'],
      category: 'consumer',
      featured: false,
      tagline: 'Visual wedding discovery & social bookmarking app delivered for US startup launch.',
      description:
        'Social discovery app allowing users to search wedding inspiration by tags, upload photos, and curate visual bundles. Inherited and shipped on schedule to enable the client’s business launch.',
      links: [
        {
          label: 'App Store',
          url: 'https://itunes.apple.com/us/app/loverly-weddings/id619474897?mt=8',
        },
      ],
      images: ['images/portfolio/image1.jpg', 'images/portfolio/image18.jpg'],
    },
    {
      id: 'excel-naplan',
      name: 'Excel Press NAPLAN-Style Sample Tests (Year 3 & Year 5)',
      company: 'Bilue',
      location: 'Sydney, Australia',
      period: '2012 – 2013',
      platforms: ['iOS (iPad)', 'Multi-Target Framework'],
      category: 'consumer',
      featured: false,
      tagline: 'Gamified iPad assessment suite built on a single multi-target white-label architecture.',
      description:
        'Educational iPad platform for Year 3 and Year 5 students to practice for NAPLAN assessments with level-based multiple choice, text entry, star rewards, and parental progress tracking.',
      links: [
        {
          label: 'Year 3 App',
          url: 'https://itunes.apple.com/au/app/excel-naplan*-style-year-3/id608806012?mt=8',
        },
      ],
      images: [
        'images/portfolio/image12.png',
        'images/portfolio/image21.png',
        'images/portfolio/image32.png',
        'images/portfolio/image19.png',
      ],
    },
    {
      id: 'asx-iphone',
      name: 'ASX iPhone v1.4 (Australian Securities Exchange)',
      company: 'Gomeeki',
      location: 'Sydney, Australia',
      period: '2012',
      platforms: ['iOS (iPhone)', 'Push Notifications'],
      category: 'fintech',
      featured: false,
      tagline: 'Live Australian stock-exchange market data & watchlists—featured on Apple Australia’s website.',
      description:
        'Real-time ASX market data, interactive charts, company watchlists, and instant company announcements via Push Notifications. Featured on Apple Australia’s official website as a recommended app.',
      achievements: [
        'Featured on the official Australian Apple website as a recommended third-party app.',
      ],
      links: [
        {
          label: 'App Store',
          url: 'https://itunes.apple.com/au/app/asx/id425091286?mt=8',
        },
      ],
      images: ['images/portfolio/image9.gif'],
    },
    {
      id: 'eagle-boys',
      name: 'Eagle Boys Pizza iPhone v1.0',
      company: 'Gomeeki',
      location: 'Sydney, Australia',
      period: '2012',
      platforms: ['iOS (iPhone)', 'GPS Ordering'],
      category: 'consumer',
      featured: false,
      tagline: 'Native GPS-powered mobile ordering experience for Australia & New Zealand.',
      description:
        'Provided customers across Australia and New Zealand with a fast native iOS ordering experience using GPS store location and custom menu configuration.',
      links: [
        {
          label: 'App Store',
          url: 'https://itunes.apple.com/au/app/eagle-boys/id557825764?mt=8',
        },
      ],
      images: ['images/portfolio/image4.jpg', 'images/portfolio/image17.jpg'],
    },
    {
      id: '1000-places',
      name: '1,000 Places To See Before You Die (iPad)',
      company: 'The WonderFactory',
      location: 'New York, USA',
      period: '2011 – 2012',
      platforms: ['iOS (iPad)', 'Quartz Core'],
      category: 'media',
      featured: false,
      tagline: 'Featured in "What’s Hot?" on the US iPad App Store front page; download size reduced by 20%.',
      description:
        'Native iPad adaptation of the bestselling travel book featuring interactive global discovery, user voting/commenting, and "Visited / Want to Go" travel lists.',
      achievements: [
        'Featured on the front page of the US iPad App Store under "What’s Hot?".',
        'Reduced download size by 20% using Quartz Core and the Three20 framework.',
      ],
      links: [
        {
          label: 'App Store',
          url: 'http://itunes.apple.com/au/app/1000-places-to-see-before/id479543504?mt=8',
        },
      ],
      images: ['images/portfolio/image28.jpg'],
    },
    {
      id: 'aarp-ipad',
      name: 'AARP Magazine & Member Portal (iPad)',
      company: 'The WonderFactory',
      location: 'New York, USA',
      period: '2011 – 2012',
      platforms: ['iOS (iPad)', 'Live Radio & REST'],
      category: 'media',
      featured: false,
      tagline: 'Native iPad transformation of AARP with offline reading, postcode job search, and live radio streaming.',
      description:
        'Delivered live REST feeds of AARP articles, recipes, videos, and member benefits with offline bookmarking, location-based job/volunteer search, and live streaming radio.',
      links: [],
      images: ['images/portfolio/image7.png'],
    },
    {
      id: 'nps-medicines',
      name: 'NPS Medicines List',
      company: 'Creative Licence Digital',
      location: 'Sydney, Australia',
      period: '2010 – 2011',
      platforms: ['iOS (iPhone)', 'Healthcare'],
      category: 'consumer',
      featured: false,
      tagline: 'Winner of the 2011 Australian Mobile Awards (Medical) & #1 Top Free Medical App in Australia.',
      description:
        'Designed and developed for the elderly and caretakers to track medication history, active prescriptions, and scheduled dosage reminders.',
      achievements: [
        'Winner — Medical Category, 2011 Australian Mobile Awards.',
        '#1 Top Free App in Medical on the Australian App Store.',
      ],
      links: [
        {
          label: 'App Store',
          url: 'http://itunes.apple.com/au/app/medicines-list/id440111671?mt=8',
        },
      ],
      images: ['images/portfolio/image27.png'],
    },
    {
      id: 'hilton-surfers-paradise',
      name: 'Hilton Surfers Paradise Virtual Concierge',
      company: 'Creative Licence Digital',
      location: 'Sydney, Australia',
      period: '2010 – 2011',
      platforms: ['iOS (iPad)', 'CMS & Analytics'],
      category: 'consumer',
      featured: false,
      tagline: '2011 Australian Mobile Awards Finalist (Field Services) — iPad guest concierge synced with Hilton CMS.',
      description:
        'Interactive iPad directory of venues, dining, and activities for Hilton Surfers Paradise guests with CMS sync and analytics reporting to tailor exclusive guest deals.',
      achievements: [
        'Finalist — Field Services Category, 2011 Australian Mobile Awards.',
      ],
      links: [],
      images: ['images/portfolio/image23.png', 'images/portfolio/image11.png'],
    },
  ] as PortfolioProject[],
};

export function getDecodedEmailParts(): { user: string; domain: string } {
  const user = String.fromCharCode(...profileData.emailParts.u);
  const domain = String.fromCharCode(...profileData.emailParts.d);
  return { user, domain };
}

export function getDecodedEmail(): string {
  const { user, domain } = getDecodedEmailParts();
  return [user, domain].join(String.fromCharCode(64));
}


