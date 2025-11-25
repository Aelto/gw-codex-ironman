import { writable } from "svelte/store";
import {
  setCodexRotationLs,
  getCodexRotationLs,
} from "../localstorage/codex_rotations";
import type { Seed } from "../game/rng";

export type CodexRotation = "fixed" | "daily" | "weekly";

export const store_codex_rotation = writable<CodexRotation>(
  getCodexRotationLs()
);

store_codex_rotation.subscribe(setCodexRotationLs);

export function codexRotationToSeed(rotation: CodexRotation): Seed {
  if (rotation == "fixed") {
    return "";
  }

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const weeks = days * 7;

  const now = new Date();

  if (rotation == "daily") {
    const days_count = Math.floor(now.valueOf() / days);
    return `CR(daily:${days_count})`;
  }

  const weeks_count = Math.floor(now.valueOf() / weeks);
  return `CR(weekly:${weeks_count})`;
}
