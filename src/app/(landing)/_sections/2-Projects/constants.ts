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
        description: "I develop decentralized applications (dApps) for Web3 and blockchain ecosystems, specializing in platforms that enable users to interact with digital assets, including NFTs. My dApps are designed with intuitive user interfaces, ensuring a seamless experience for both beginners and advanced users.",
        skills: ['React', 'Next.js', 'Viem', 'Ether.js', 'Web3.js', 'Wagmi', '...'],
        video: "/assets/projects/dapp.mp4"
    },
    {
        type: "Landing",
        title: "Unique User Experience",
        description: "I create engaging landing pages tailored for products, groups, or services, enhancing user interaction and conversion rates. My designs are optimized for clarity and effectiveness, ensuring a smooth user experience while highlighting key features and benefits to boost engagement.",
        skills: ['...', 'Figma', 'Database', 'Mail', 'Tailwind'],
        video: "/assets/projects/landing.mp4"
    },
    {
        type: "Web2.0",
        title: "Your aspirations",
        description: "I create platforms designed to unlock the potential of your aspirations, offering a full suite of features such as a reservation system, transparent payment processing, automatic GPS detection... Whatever your desires! Whether you manage transportation, accommodation, or other services, my expertise ensures a seamless start-to-end user experience!",
        skills: ['React', 'Firebase', 'Google API', 'Spotify API', 'Stripe', '...'],
        video: "/assets/projects/web2.mp4"
    }
];
