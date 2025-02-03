// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Seattle",
    scale: "F",
  },
  clock: {
    format: "hh:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://google.com",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Home",
      background_url: "src/img/banners/cbg-01.gif",
      categories: [
        {
          name: "",
          links: [
            {
              name: "Youtube",
              url: "https://youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "Reddit",
              url: "https://reddit.com",
              icon: "brand-reddit",
              icon_color: palette.flamingo,
            },
            {
              name: "Twitch",
              url: "https://twitch.tv",
              icon: "brand-twitch",
              icon_color: palette.mauve,
            },
            {
              name: "Crunchyroll",
              url: "https://crunchyroll.com",
              icon: "brand-funimation",
              icon_color: palette.rosewater,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "Gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "Calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "Sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.red,
            },
            {
              name: "Drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "Server",
      background_url: "src/img/banners/cbg-07.gif",
      categories: [
        {
          name: "Management",
          links: [
            {
              name: "Unraid",
              url: "",
              icon: "server",
              icon_color: palette.red,
            },
            {
              name: "Router",
              url: "unifi.ui.com",
              icon: "router",
              icon_color: palette.flamingo,
            },
            {
              name: "Modem",
              url: "",
              icon: "route",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "DVR",
          links: [
            {
              name: "Sonarr",
              url: "",
              icon: "device-tv",
              icon_color: palette.blue,
            },
            {
              name: "Radarr",
              url: "",
              icon: "movie",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "Download",
          links: [
            {
              name: "Deluge",
              url: "",
              icon: "droplet",
              icon_color: palette.sapphire,
            },
            {
              name: "Radarr",
              url: "",
              icon: "news",
              icon_color: palette.maroon,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
