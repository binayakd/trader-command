<script>
  import { getFactions } from "$lib/client";
  import { onMount } from "svelte";

  let factionInfo;
  // export let form;

  onMount(async () => {
    const resp = await getFactions();
    factionInfo = resp.content.data;
    console.log(factionInfo);
  });

  // async function handleSubmit(event) {
  //   const formEl = event.target
  //   const data = new FormData(formEl)
  //   console.dir(form)
  //   formEl.reset()
  // }
</script>

<div class="sub-section">
  <!-- <form method="POST" on:submit|preventDefault={handleSubmit}> -->
  <form method="POST" action="#">
    <fieldset>
      <legend> Register </legend>

      <div class="form-group">
        <label for="symbol">Symbol</label>
        <input id="symbol" name="symbol" type="text" required />
      </div>

      <div class="form-group">
        <label for="faction">Faction:</label>
        {#if factionInfo}
          <select id="faction" name="faction">
            {#each factionInfo as faction}
              <option>{faction.name}</option>
            {/each}
          </select>
        {:else}
          loading options...
        {/if}
      </div>

      <div class="form-group">
        <label for="email">Email (optional)</label>
        <input id="email" name="email" type="email" />
      </div>

      <div class="form-group">
        <button id="submit" class="btn btn-default" type="submit" name="submit"
          >Register</button
        >
      </div>
    </fieldset>
  </form>
</div>
<div class="sub-section">Agent details</div>

<style>
  .sub-section {
    height: calc(100vh - 250px);
    flex: 1;
    padding: 20px;
    margin: 5px;
    margin-top: 20px;
    border: 1px solid rgb(163, 171, 186, 0.5);
  }

  .sub-section:first-child {
    margin-left: 0;
  }

  .sub-section:last-child {
    margin-right: 0;
  }
</style>
