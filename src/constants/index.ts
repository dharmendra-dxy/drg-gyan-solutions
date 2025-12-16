import {
  CreditCard,
  Megaphone,
  Zap,
  Settings,
  Layers,
  Wrench,
  ShieldCheck,
  Package,
  BarChart3,
} from "lucide-react";

export const MODAL_DELAY = 60 * 1000;

/* 
-------------------------------------------
Services Data
-------------------------------------------
*/
export const services = [
  {
    title: "Production and Assembly",
    description:
      "Details on production processes, assembly, capacity, and product types.",
    icon: Settings,
  },
  {
    title: "Custom Manufacturing",
    description:
      "Custom product creation with design and customization options.",
    icon: Layers,
  },
  {
    title: "Quality Control",
    description:
      "Procedures and systems in place to ensure high product quality.",
    icon: Wrench,
  },
  {
    title: "Technology and Innovation",
    description:
      "Details on the latest manufacturing technologies and innovations.",
    icon: ShieldCheck,
  },
  {
    title: "Packaging and Logistics",
    description:
      "Packaging and logistics for shipping to customers and distributors.",
    icon: Package,
  },
  {
    title: "Consulting Market Research",
    description:
      "Services to help companies understand market needs and strategy.",
    icon: BarChart3,
  },
];

/* 
-------------------------------------------
Features Data
-------------------------------------------
*/
export interface Features {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

export const features: Features[] = [
  {
    icon: Zap,
    title: "Move fast with your sales processes",
    description:
      "Elevate sales efficiency, identify course sales opportunities, and convert more learners",
    features: [
      "Sales Execution & Automation",
      "Sales Tracking & Performance",
      "Sales Process Designer",
      "Sales Reporting",
      "Field Force Automation",
    ],
  },
  {
    icon: Megaphone,
    title: "Get the word out with your marketing",
    description:
      "Attract right learners, hyper-personalize engagements based on insights, and optimize enrollment marketing spends",
    features: [
      "Lead Capture & Centralization",
      "Marketing Automation",
      "Workflow Automation",
      "Advanced Campaign Management",
      "Raw Data Management",
    ],
  },
  {
    icon: CreditCard,
    title: "Make fee payments faster and easier",
    description:
      "Run discount and scholarship campaigns, generate payment links, and track sales campaign effectiveness",
    features: [
      "Extensive Fee Workflows",
      "Payment Link Generation",
      "Payment Settlement in Multiple Accounts",
      "Reconciliation & Settlement Reports",
    ],
  },
];

/* 
-------------------------------------------
Details Data
-------------------------------------------
*/

export interface Details {
  title: string;
  heading: string;
  description: string;
  features?: string[];
  imgUrl: string;
}

export const detailsData: Details[] = [
  {
    title: "Thesis & Dissertation",
    heading: "Thesis & Dissertation Writing (M.Tech & PhD)",
    description:
      "Centralize learner inquiries from various channels all while ensuring zero lead leakage and eliminating duplicate leads. Monitor the lead source performances and get actionable insights into the leads in the pipeline.",
    features: [
      "Topic selection & problem formulation",
      "Literature review (IEEE / Springer / Elsevier sources)",
      "Methodology & system design",
      "Implementation & result analysis",
      "MATLAB / Python / NS2 / NS3 / IoT / AI-ML support",
      "Thesis formatting as per university guidelines",
      "Plagiarism reduction & proofreading",
      "Viva preparation & PPT support",
    ],
    imgUrl: "/landing-page/details-6.png",
  },
  {
    title: "Research Paper",
    heading:
      "Research Paper Writing & Publication in SCI, Scopus & UGC Journals",
    description:
      "Distribute leads among the right sales reps based on course, location, availability, language, or performance record. Prioritize sales efforts whenever a learner shows high intent, and nurture them down the enrollment funnel",
    features: [
      "Research paper drafting (IEEE / Springer format)",
      "Journal selection based on indexing & impact factor",
      "Plagiarism check & grammar correction",
      "Paper restructuring as per reviewer comments",
      "Fast-track publication options",
      "Conference paper & journal paper support",
    ],
        imgUrl: "/landing-page/details-4.jpeg",

  },
  {
    title: "Patent",
    heading: "Patent Design, Drafting & Filing Support",
    description:
      "Connect, communicate, and convert more with a powerful set of innovative solutions to boost student engagement and drive enrollment growth.",
    features: [
      "Patent idea evaluation & novelty search",
      "Patent specification drafting (Provisional & Complete)",
      "Flow diagrams & technical drawings",
      "Patent claims writing",
      "Indian patent filing support",
      "Assistance for academic & startup patents",
    ],
    imgUrl: "/landing-page/details-7.png",
  },
];
