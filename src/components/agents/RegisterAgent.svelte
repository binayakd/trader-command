<script>
  import { getFactions } from "$lib/client";
  import { onMount } from "svelte";
  import AgentList from "./AgentList.svelte";

  let factionInfo;
  let selectedFaction;
  // export let form

  onMount(async () => {
    const resp = await getFactions();
    factionInfo = resp.content.data;
    console.log(factionInfo);
    selectedFaction = factionInfo[0];
  });

  async function handleSubmit(event) {
    const data = {};
    const formData = new FormData(this);
    formData.forEach((value, key) => (data[key] = value));
    console.log(selectedFaction);
    console.log(data);
  }
</script>

<svelte:component this={AgentList} />

<div class="sub-section terminal-card">
  <header>Register</header>
  <div>
    <form method="POST" on:submit|preventDefault={handleSubmit}>
      <!-- <form method="POST" action="#"> -->
      <fieldset>
        <legend> Register </legend>

        <div class="form-group">
          <label for="faction">Faction:</label>
          {#if factionInfo}
            <select id="faction" name="faction" bind:value={selectedFaction}>
              {#each factionInfo as faction}
                <option value={faction}>{faction.name}</option>
              {/each}
            </select>
          {:else}
            loading options...
          {/if}
        </div>

        <div class="form-group">
          <label for="symbol">Agent Symbol</label>
          <input id="symbol" name="symbol" type="text" required />
        </div>

        <div class="form-group">
          <label for="email">Email (optional)</label>
          <input id="email" name="email" type="email" />
        </div>

        <div class="form-group">
          <button
            id="submit"
            class="btn btn-default"
            type="submit"
            name="submit">Register</button
          >
        </div>
      </fieldset>
    </form>
  </div>
</div>
<div class="sub-section terminal-card">
  <header>Faction Details</header>
  <div>
    {#if selectedFaction}
      <h3>
        {selectedFaction.name}
      </h3>
      <p>
        Faction Symbol: {selectedFaction.symbol} <br />
        Headquarters: {selectedFaction.headquarters}
      </p>
      <h4>Description</h4>
      <p>
        {selectedFaction.description}
      </p>
      <h4>Traits</h4>
      <dl>
        {#each selectedFaction.traits as trait}
          <dt>{trait.name}</dt>
          <dd>{trait.description}</dd>
        {/each}
      </dl>
    {:else}
      loading faction info...
    {/if}
  </div>
</div>
