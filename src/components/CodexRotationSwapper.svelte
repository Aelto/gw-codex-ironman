<script lang="ts">
  import {
    store_codex_rotation,
    type CodexRotation,
  } from "../stores/codex_rotations";

  function previous(e, mode: CodexRotation) {
    e.preventDefault();
    store_codex_rotation.set(mode);
  }

  const title_description =
    "You can define the type of rotation used by the Codex build generator. The default [Fixed] rotation generates a random pool of skills based on your character name & the current outpost you are in. The [Daily] and [Weekly] are like the [Fixed] generation where the character name and the outpost are used, but they also add an either daily or weekly rotation on top of it. This can help in scenarios where an outpost has a particularly difficult pool of skills, or if you're interested in daily pools for areas that you repeat over time like the Fissure of Woe for example.";
</script>

{#if $store_codex_rotation == "fixed"}
  <button
    title={title_description}
    onclick={() => store_codex_rotation.set("daily")}
    oncontextmenu={(e) => previous(e, "weekly")}
  >
    Fixed Codex
  </button>
{/if}
{#if $store_codex_rotation === "daily"}
  <button
    class="daily"
    title={title_description}
    onclick={() => store_codex_rotation.set("weekly")}
    oncontextmenu={(e) => previous(e, "fixed")}
  >
    Daily Codex
  </button>
{/if}
{#if $store_codex_rotation === "weekly"}
  <button
    class="weekly"
    title={title_description}
    onclick={() => store_codex_rotation.set("fixed")}
    oncontextmenu={(e) => previous(e, "daily")}
  >
    Weekly Codex
  </button>
{/if}

<style>
  button {
    box-shadow: 0px 0px 12px rgba(20, 20, 20, 0.1);
  }

  button.daily {
    outline: solid 1px goldenrod;
    box-shadow: 0px 0px 12px rgba(218, 165, 32, 0.4);
    color: goldenrod;
  }

  button.weekly {
    outline: solid 1px mediumpurple;
    box-shadow: 0px 0px 12px rgba(147, 112, 216, 0.4);
    color: mediumpurple;
  }
</style>
