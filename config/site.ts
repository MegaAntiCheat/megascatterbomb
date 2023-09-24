export const siteConfig = {
  name: "Megascatterbomb",
  description: "Home of MegaAntiCheat",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "Media",
      href: "/media",
    },
  ],
  links: {
    docs: "/docs",
    github: "https://github.com/MegaAntiCheat",
    twitter: "https://twitter.com/megaanticheat",
  },
};

export type SiteConfig = typeof siteConfig;
