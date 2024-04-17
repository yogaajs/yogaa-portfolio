//  Imports
// ===========================================================

// Libraries
import React from 'react';

// Icons
import { FaTwitter, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


//  Type
// ===========================================================

export interface LinkType {
    text: string;
    Icon: React.ElementType;
    props: {
      href: string;
      target: string;
      rel: string;
    };
}
  
  
//  Constants
// ===========================================================
  
export const twitter: LinkType = {
    text: "Twitter",
    Icon: FaTwitter,
    props: {
      href: "",
      target: "_blank",
      rel: "noopener noreferrer"
    }
}

export const linkedin: LinkType = {
    text: "LinkedIn",
    Icon: FaLinkedin,
    props: {
      href: "",
      target: "_blank",
      rel: "noopener noreferrer"
    }
}

export const telegram: LinkType = {
  text: "Telegram",
  Icon: FaTelegram,
  props: {
    href: "",
    target: "_blank",
    rel: "noopener noreferrer"
  }
}

export const github: LinkType = {
    text: "Github",
    Icon: FaGithub,
    props: {
      href: "",
      target: "_blank",
      rel: "noopener noreferrer"
    }
}
  
export const email: LinkType = {
    text: "contact@yogaa.dev",
    Icon: MdEmail,
    props: {
      href: "mailto:contact@yogaa.dev",
      target: "_blank",
      rel: "noopener noreferrer"
    }
}
  