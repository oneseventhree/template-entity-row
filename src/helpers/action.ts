export function bindActionHandler(
  element: Element | null,
  options: Record<string, boolean> = {}
): void {
  if (!element) return;

  void customElements.whenDefined("long-press").then(() => {
    const longPress = document.body.querySelector("long-press") as any;
    longPress?.bind?.(element);
  });

  void customElements.whenDefined("action-handler").then(() => {
    const actionHandler = document.body.querySelector("action-handler") as any;
    actionHandler?.bind?.(element, options);
  });
}
