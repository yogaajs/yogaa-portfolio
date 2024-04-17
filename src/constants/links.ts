//  Type
// ===========================================================

export interface LinkType {
  text: string;
  props: {
    href: string;
    target: string;
    rel: string;
  };
}


//  Constants
// ===========================================================

export const buy: LinkType = {
  text: "Buy",
  props: {
    href: "",
    target: "_blank",
    rel: "noopener noreferrer"
  }
}

export const join: LinkType = {
  text: "Join Us",
  props: {
    href: "https://t.me/basedtroll_portal",
    target: "_blank",
    rel: "noopener noreferrer"
  }
}

export const dexscreener: LinkType = {
  text: "Dexscreener",
  props: {
    href: "",
    target: "_blank",
    rel: "noopener noreferrer"
  }
}

export const dextools: LinkType = {
  text: "Dextools",
  props: {
    href: "",
    target: "_blank",
    rel: "noopener noreferrer"
  }
}

export const twitter: LinkType = {
  text: "Twitter",
  props: {
    href: "https://twitter.com/BasedTroll_wtf",
    target: "_blank",
    rel: "noopener noreferrer"
  }
}

export const telegram: LinkType = {
  text: "Telegram",
  props: {
    href: "https://t.me/basedtroll_portal",
    target: "_blank",
    rel: "noopener noreferrer"
  }
}

export const docs: LinkType = {
  text: "Docs",
  props: {
    href: "",
    target: "_blank",
    rel: "noopener noreferrer"
  }
}
