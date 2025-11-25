import { canStore } from ".";
import type { CodexRotation } from "../stores/codex_rotations";

const KEY = "CODEX_ROTATION";

export function setCodexRotationLs(rotation: CodexRotation) {
  if (!canStore()) {
    return;
  }

  localStorage.setItem(KEY, rotation);
}

export function getCodexRotationLs(): CodexRotation {
  return (localStorage.getItem(KEY) as CodexRotation) || "fixed";
}
