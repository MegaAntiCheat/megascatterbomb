export const siteConfig = {
  description: "Home of MegaAntiCheat",
  links: {
    docs: "/docs",
    github: "https://github.com/MegaAntiCheat",
    twitter: null,
    // twitter: "https://twitter.com/megaanticheat", // TODO: Set up Twitter
  },
  mainNav: [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/docs",
      title: "Docs",
    },
    {
      href: "/media",
      title: "Media",
    },
  ],
  name: "Megascatterbomb",
};

export type SiteConfig = typeof siteConfig;
