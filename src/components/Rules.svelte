<script>
  import { InputFocusState, store_input_focus } from "../stores/input_focus";
</script>

<section class="rules">
  <h1>Rules</h1>

  <p>
    Similar to the <a href="https://wiki.guildwars.com/wiki/Codex_Arena"
      >Codex Arena</a>
    where players have a limited skill pool available to them everyday, you must
    complete the campaigns with a set of skills that varies as you progress.
  </p>

  <p>
    Two variants of the mode are available. Both revolving around having a
    limited skill pool in order to put your build-crafting capabilities to the
    test, the outposts replace the daily rotation you'd usually see in the Codex
    Arena:
  </p>

  <hr />

  <div class="cells">
    <div class="row split">
      <h3>Regular</h3>
      <h3>Ironman</h3>
    </div>
    <div class="row split">
      <p>Pick the character of your choice.</p>
      <p>
        Create a fresh character using the <a
          href="https://wiki.guildwars.com/wiki/User:Hazedesunna/Ironman"
          >Ironman rules</a>
        of your choice.
      </p>
    </div>

    <div class="row center">
      <i>
        Before leaving an outpost or a city into an explorable area you must
        ensure your skillbar contains only skills from the offered skill pool
        of:
      </i>
    </div>
    <div class="row split">
      <p>
        the outpost <u>you're currently in</u>.
      </p>
      <p>
        the <u>last outpost you unlocked.</u>
      </p>
    </div>
    <div class="row split">
      <p>
        <i>No death penalty</i>
      </p>
      <p>On death: you must drop all of your coins to the ground.</p>
    </div>
    <div class="row center">
      Specify the size of your group in the right panel. The henchmen, unlike
      players & heroes, result in harsher punishments due to their uncontrolled
      builds
    </div>
    <div class="row center">
      <p>
        You can buy any skill that is offered by skill merchants, even those
        unlocked skills the merchant wouldn't offer on a fresh account
      </p>
    </div>
    <div class="row center">
      <p>You cannot buy crafting materials from the trader</p>
    </div>

    <div class="row center">
      You cannot use consumables or anything that comes from your bank account
    </div>
  </div>

  <hr />

  <p>
    If using heroes, they must use one of the pre-generated builds for the
    region of the outpost you used for your own build.
  </p>

  <ul>
    <li>
      select the profession of your hero in the hero builds section under the
      skillbar
    </li>
    <li>select one of the listed builds for the hero</li>
  </ul>

  <hr />

  <p>Start by entering your character name</p>

  <button on:click={() => store_input_focus.set(InputFocusState.CharacterName)}
    >Start</button>
</section>

<style>
  .rules {
    position: relative;
    background-color: white;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
  }

  .rules::before {
    content: "";
    position: absolute;
    top: -200px;
    left: 0;
    width: 100%;
    height: 400px;
    transform: skewY(-8deg);
    background-color: white;
    box-shadow: 0 -20px 45px 0px rgba(20, 20, 20, 0.2);
    z-index: -1;
  }

  .rules h1 {
    text-align: center;
  }

  .rules > p {
    max-width: 450px;
  }

  .rules > .cells {
    max-width: 850px;
  }

  .rules .cells .row {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .rules .cells .row h3 {
    text-align: center;
  }

  .rules .cells .row.split {
    justify-content: space-evenly;
  }

  .rules .cells .row.split > * {
    flex-grow: 1;
    width: 50%;
    padding: 1em;
  }

  .rules .cells .row.split > * + * {
    border-left: solid 1px whitesmoke;
  }

  .rules .cells .row.center {
    max-width: 450px;
    text-align: center;
    margin: auto;
  }

  hr {
    margin: 2em 0;
    opacity: 0;
  }

  section.rules {
    padding-bottom: 10em;
  }
</style>
