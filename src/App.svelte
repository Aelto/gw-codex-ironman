<script lang="ts">
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Rules from "./components/Rules.svelte";
  import SkillsetDisplay from "./components/SkillsetDisplay.svelte";
  import SuggestedOutposts from "./components/SuggestedOutposts.svelte";
  import WikiIframe from "./components/WikiIframe.svelte";
  import store_skillset, { refreshBuildsStore } from "./stores/builds";
  import { store_campaign } from "./stores/campaign";
  import {
    store_character_name,
    store_primary_profession,
    store_secondary_profession,
  } from "./stores/character";
  import { store_outposts, store_selected_outpost } from "./stores/outposts";
  import {
    refreshSkillpacks,
    store_selected_skillpacks,
  } from "./stores/skillpacks";
  import background from "./background.webp";
  import { store_henchmen_count } from "./stores/henchmen";
  import { store_compact_icons } from "./stores/compact_icons";
  import { getUrlFromStores, pushHistoryState } from "./history";
  import GroupSelector from "./components/henchmen-selector/GroupSelector.svelte";
  import { store_players_count } from "./stores/players_count";
  import { get } from "svelte/store";
  import { store_hardmode } from "./stores/hardmode";
  import Skillbar from "./components/skillbar/Skillbar.svelte";
  import Notifications from "./components/Notifications.svelte";
  import { notify_info } from "./stores/notifications";
  import HeroBuilds from "./components/hero-builds/HeroBuilds.svelte";

  $: primary_skillset = $store_skillset.get($store_primary_profession);
  $: secondary_skillset =
    $store_secondary_profession !== "none"
      ? $store_skillset.get($store_secondary_profession)
      : null;

  $: can_display_skillsets =
    ((Boolean(primary_skillset) && primary_skillset.size) ||
      (Boolean(secondary_skillset) && secondary_skillset.size)) &&
    Boolean($store_selected_outpost);

  store_character_name.subscribe(refreshStuff);
  store_primary_profession.subscribe(refreshStuff);
  store_secondary_profession.subscribe(refreshStuff);
  store_campaign.subscribe(refreshStuff);
  store_selected_outpost.subscribe(refreshStuff);
  store_henchmen_count.subscribe(refreshStuff);
  store_players_count.subscribe(refreshStuff);
  store_hardmode.subscribe(refreshStuff);

  store_selected_skillpacks.subscribe(refreshBuildsStore);

  function refreshStuff() {
    refreshSkillpacks();
    refreshBuildsStore();

    pushHistoryState({
      campaign: get(store_campaign),
      outpost_link: get(store_selected_outpost).link,
    });
  }

  function copyUrl() {
    const url = getUrlFromStores();

    navigator.clipboard.writeText(url);
    notify_info("Preview link copied.");
  }
</script>

<Header />
<Notifications />

{#if can_display_skillsets}
  <div class="skillsets">
    <div class="options">
      <input
        type="checkbox"
        name="hard-mode"
        id="hard-mode"
        bind:checked={$store_hardmode} />
      <label for="hard-mode">{$store_hardmode ? "Hard" : "Normal"}</label>

      <input
        type="checkbox"
        name="compact-mode"
        id="compact-mode"
        bind:checked={$store_compact_icons} />
      <label for="compact-mode"
        >{$store_compact_icons ? "Compact" : "Large"} icons</label>

      <button on:click={copyUrl}
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      </button>
    </div>

    {#if $store_selected_outpost && $store_selected_outpost.name}
      <select
        class="outpost-name"
        name="outpost"
        bind:value={$store_selected_outpost}>
        {#each $store_outposts as region}
          <optgroup label={region.name}>
            {#each region.outposts as outpost}
              <option class="outpost-option" value={outpost}
                >{outpost.name}</option>
            {/each}
          </optgroup>
        {/each}
      </select>
      <!-- <a
        href={`https://wiki.guildwars.com${$store_selected_outpost.link}`}
        target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a> -->
      <SuggestedOutposts />
    {/if}

    <div class="inner">
      <SkillsetDisplay
        profession={$store_primary_profession}
        skillset={primary_skillset} />

      {#if $store_secondary_profession !== "none"}
        <SkillsetDisplay
          profession={$store_secondary_profession}
          skillset={secondary_skillset} />
      {/if}
    </div>

    <GroupSelector />

    <Skillbar />
    <HeroBuilds />

    <img src={background} alt="" class="background" />
  </div>
{/if}

<Rules />
<WikiIframe />
<Footer />

<style>
  .background {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0.2;

    animation-name: appear;
    animation-duration: 0.6s;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 0.2;
    }
  }

  .outpost-name {
    text-align: center;
    text-decoration: underline;
    margin: 0;
    padding: 0;
    font-size: 3em;
    background: transparent;
  }

  .outpost-name * {
    font-size: 1rem;
    background: white;
  }

  .outpost-name + a {
    display: inline;
  }

  .skillsets {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    animation-name: grow;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
    padding-top: 2em;
  }

  @keyframes grow {
    from {
      max-height: 0%;
    }

    to {
      max-height: 100%;
    }
  }

  .skillsets .inner {
    margin: auto;
    position: relative;
    display: flex;
    max-width: 1250px;
  }

  .skillsets .options {
    display: flex;
    width: calc(100% - 2em);
    justify-content: flex-end;
    padding: 0 1em;
  }

  .skillsets .options > * + * {
    margin-left: 1em;
  }

  #compact-mode,
  #hard-mode {
    display: none;
  }

  #compact-mode + label,
  #hard-mode + label {
    box-shadow: 0px 0px 12px rgba(20, 20, 20, 0.1);
  }

  #hard-mode:checked + label {
    outline: solid 1px goldenrod;
    box-shadow: 0px 0px 12px rgba(218, 165, 32, 0.4);
    color: goldenrod;
  }
</style>
