import { DEFAULT_OPTIONS } from "./default";
import type { CompanionOptions } from "./types";

export function resolveOptions(
  options: CompanionOptions = {},
): Required<CompanionOptions> {
  // ! Remember the important rule: when properties have the same key, the later object wins.
  return {
    ...DEFAULT_OPTIONS,
    ...options,
  };
}
