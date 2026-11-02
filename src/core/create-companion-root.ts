export interface CompanionRoot {
  host: HTMLDivElement;
  shadowRoot: ShadowRoot;
}

export function createCompanionRoot(): CompanionRoot {
  const host = document.createElement("div");
  host.id = "tiny-companion-root";

  host.style.position = "fixed";
  host.style.right = "16px";
  host.style.bottom = "16px";
  host.style.zIndex = "2147483647";

  // * The browser's attachShadow() method creates a Shadow DOM tree attached to an element.

  // * open	JavaScript can access the Shadow Root through host.shadowRoot

  // ! Important: Shadow DOM is a styling and DOM encapsulation mechanism, not a security boundary.

  const shadowRoot = host.attachShadow({ mode: "open" });
  document.body.appendChild(host);

  return {
    /**
     * host: Allows us to position, inspect, or eventually remove the companion.
     *
     * shadowRoot: Allows other modules to add the companion's HTML and styles inside the isolated DOM.
     */
    host,
    shadowRoot,
  };
}
