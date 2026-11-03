import type { CompanionPosition } from "../config/types";

type PositionCompanionProps = {
  host: HTMLDivElement;
  position: CompanionPosition;
};

function resetPosition(host: HTMLDivElement): void {
  host.style.top = "";
  host.style.bottom = "";
  host.style.left = "";
  host.style.right = "";
}

export function positionCompanion({
  host,
  position,
}: PositionCompanionProps): void {
  host.style.position = "fixed";

  // * This value is the maximum positive signed 32-bit integer commonly used by browsers for CSS z-index.
  host.style.zIndex = "2147483647";
  resetPosition(host);

  switch (position) {
    case "bottom-right":
      host.style.right = "16px";
      host.style.bottom = "16px";
      break;
    case "bottom-left":
      host.style.left = "16px";
      host.style.bottom = "16px";
      break;
    case "top-left":
      host.style.left = "16px";
      host.style.top = "16px";
      break;
    case "top-right":
      host.style.right = "16px";
      host.style.top = "16px";
      break;
  }
}
