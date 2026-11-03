import { resolveOptions } from "../config/resolve-options";
import type { CompanionOptions } from "../config/types";
import { positionCompanion } from "./position-companion";

export interface CompanionRoot {
  host: HTMLDivElement;
  shadowRoot: ShadowRoot;
}

//* options: CompanionOptions means the entire object has the CompanionOptions type.
//* { option: CompanionOptions } attempts to destructure an object property and is not valid syntax for what we're trying to achieve.

export function createCompanionRoot(
  options: CompanionOptions = {},
): CompanionRoot {
  const resolvedOptions = resolveOptions(options);
  const host = document.createElement("div");
  host.id = "tiny-companion-root";

  positionCompanion({
    host,
    position: resolvedOptions.position,
  });

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
