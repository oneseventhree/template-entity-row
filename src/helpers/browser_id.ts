const ID_STORAGE_KEY = "browser_mod-browser-id";

export function browserId(): string {
  if (document.querySelector("hc-main")) return "CAST";
  return localStorage.getItem(ID_STORAGE_KEY) ?? "";
}
