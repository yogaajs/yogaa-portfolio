//  Type
// ===========================================================

export interface LinkType {
    type: string;
    title: string;
    description: string;
    skills: string[];
    video: string;
}
  
  
  //  Constants
  // ===========================================================
  
  export const projects: LinkType[] = [
    {
        type: "Web3.0",
        title: "Decentralized applications",
        description: "Decentralized applications (dApps) for blockchain ecosystems, featuring intuitive user interfaces to ensure a seamless experience for beginners and advanced users alike.",
        skills: [],
        video: "/assets/projects/dapp.mp4"
    },
    {
        type: "Landing",
        title: "Enhance your reach",
        description: "Engaging landing pages that enhance user interaction and conversion rates, optimized for clarity and user experience, effectively highlighting key features and benefits.",
        skills: [],
        video: "/assets/projects/landing.mp4"
    },
    {
        type: "You",
        title: "Your aspirations",
        description: "I create tailored applications, platforms, and bots designed to unlock your aspirations, offering a full suite of features. My experience ensures a seamless user experience, regardless of your needs and expertise.",
        skills: [],
        video: "/assets/projects/web2.mp4"
    }
];
