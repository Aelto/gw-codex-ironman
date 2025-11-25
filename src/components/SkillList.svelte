<script lang="ts">
  import type { SkillsetEntry } from "../stores/builds";
  import { store_compact_icons } from "../stores/compact_icons";
  import SkillIcon from "./SkillIcon.svelte";

  interface Props {
    skills?: SkillsetEntry[];
  }

  let { skills = [] }: Props = $props();
</script>

<div class="skill-list" class:compact={$store_compact_icons}>
  {#each skills as skill}
    <SkillIcon {skill} compact={$store_compact_icons} />
  {/each}
</div>

<style>
  .skill-list {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: flex-start;
  }
</style>
