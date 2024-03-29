/* 
Menu Types:
"menu-default", "menu-sub-hidden", "menu-hidden"
*/
export const defaultMenuType = "menu-sub-hidden";

export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;
export const defaultLocale = "en";
export const localeOptions = [
  { id: "es", name: "Español", direction: "ltr" },
  { id: "en", name: "English", direction: "ltr" },
  { id: "fr", name: "Francais", direction: "ltr" }
];

export const searchPath = "/app/pages/search";
export const servicePath = "https://api.coloredstrategies.com";

/* 
Color Options:
"light.purple", "light.blue", "light.green", "light.orange", "light.red", "dark.purple", "dark.blue", "dark.green", "dark.orange", "dark.red"
*/
export const themeColorStorageKey="__theme_color"
export const isMultiColorActive = false;
export const isDarkSwitchActive = true;
export const defaultColor = "light.blue";
export const defaultDirection = "ltr";
export const themeRadiusStorageKey = "__theme_radius";
export const isDemo = true;