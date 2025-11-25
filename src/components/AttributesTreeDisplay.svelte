<script lang="ts">
  import type { AttributesSkillset } from "../game/attributegen";
  import type { Profession, SecondaryProfession } from "../game/professions";
  import HeroSkillbar from "./hero-builds/HeroSkillbar.svelte";

  interface Props {
    profession?: Profession;
    secondary_profession?: SecondaryProfession;
    tree?: AttributesSkillset;
  }

  let { profession = "warrior", secondary_profession = "none", tree = {
    attributes: new Map(),
    suggested_bars: [],
  } }: Props = $props();

  let attributes = $derived(Array.from(tree.attributes.entries())
    .map(([name, attrs]) => [name.replaceAll("-", " "), attrs])
    .sort(([_, a], [__, b]) => Number(b) - Number(a)));

  let suggested_bars = $derived(tree.suggested_bars);
</script>

<div class="attributes-tree">
  <h2>
    {profession}
    {#if secondary_profession !== "none"}
      / {secondary_profession}
    {/if}
  </h2>

  <div class="attributes">
    {#each attributes as attributes}
      {@const name = attributes[0]}
      {@const level = attributes[1]}

      <div class="attribute">
        <span class="name">{name}</span>
        <span class="level">{level}</span>
      </div>
    {/each}
  </div>

  <div class="skillbars">
    {#each suggested_bars as skillbar}
      <HeroSkillbar
        attributes={tree.attributes}
        {profession}
        {secondary_profession}
        build={skillbar}
      />
    {/each}
  </div>
</div>

<style>
  .attributes-tree {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5em;
    padding-top: 5em;
  }

  h2 {
    text-transform: capitalize;
    font-size: 3em;
    margin: 0;
    padding: 0;
  }

  .attribute {
    display: inline-block;
    padding: 1em;
    margin: 1em;
    background-color: white;
    border-radius: 6px;
  }

  .attribute .name {
    font-weight: bold;
    text-transform: capitalize;
  }
</style>
