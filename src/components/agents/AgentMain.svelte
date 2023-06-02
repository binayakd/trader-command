<script>
  import Dashboard from "./Dashboard.svelte"
  import RegisterAgent from "./RegisterAgent.svelte";

  $: currentScreen = Dashboard;
</script>

<div>
  {#if currentScreen === Dashboard}
    <button class="btn btn-default btn-ghost" on:click={() => (currentScreen = RegisterAgent)}>Register New Agent</button>
    <!-- <button class="btn btn-default btn-ghost">Register New Agent</button> -->
    <button class="btn btn-default btn-ghost">Add Existing Agent</button>
    <button class="btn btn-default btn-ghost">Download Agent Details</button>
  {:else}
    <button class="btn btn-default btn-ghost" on:click={() => (currentScreen = Dashboard)}>Back</button>
  {/if}

</div>

<div class="section">
  <svelte:component this={currentScreen} />
</div>


<style>
  .section {
    display: flex;
  }
</style>
