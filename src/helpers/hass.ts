export async function hassBaseElement(): Promise<any> {
  await Promise.race([
    customElements.whenDefined("home-assistant"),
    customElements.whenDefined("hc-main"),
  ]);

  const tag = customElements.get("home-assistant")
    ? "home-assistant"
    : "hc-main";

  let element = document.querySelector(tag) as any;
  while (!element) {
    await new Promise((resolve) => window.setTimeout(resolve, 100));
    element = document.querySelector(tag) as any;
  }
  return element;
}

export async function getHass(): Promise<any> {
  const base = await hassBaseElement();
  while (!base.hass) {
    await new Promise((resolve) => window.setTimeout(resolve, 100));
  }
  return base.hass;
}
