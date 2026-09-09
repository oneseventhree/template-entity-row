import { browserId } from "./browser_id";
import { getHass } from "./hass";

interface RenderTemplateResult {
  result: unknown;
}

export function hasTemplate(value: unknown): boolean {
  if (typeof value !== "string") return false;
  return value.includes("{{") || value.includes("{%") || value.includes("{#");
}

export async function subscribeTemplate(
  template: string,
  variables: Record<string, unknown>,
  callback: (value: unknown) => void
): Promise<() => Promise<void>> {
  const hs = await getHass();
  const unsubscribe = await hs.connection.subscribeMessage(
    (message: RenderTemplateResult) => callback(message.result),
    {
      type: "render_template",
      template,
      variables: {
        user: hs.user?.name ?? "",
        browser: browserId(),
        hash: location.hash.substring(1),
        ...variables,
      },
    }
  );
  return unsubscribe;
}
