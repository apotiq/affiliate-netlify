import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://thegiftingnook.netlify.app/",
    title: "The Gifting Nook",
    description:
      "Thoughtful gift ideas and cozy finds for every season: holiday gift guides, self-care favorites, and home scents.",
    author: "The Gifting Nook",
    profile: "https://thegiftingnook.netlify.app/about/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Jakarta",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
        editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "mail", url: "mailto:yourmail@gmail.com" },
  ],
  shareLinks: [
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
