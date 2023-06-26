<script>
  import { selectedAgent, deleteAgent } from "$lib/store";
  import { get } from 'svelte/store'
  import AgentList from "./AgentList.svelte";

  let agentInFocus = get(selectedAgent)

</script>

<AgentList bind:agentInFocus={agentInFocus}/>
<div class="sub-section terminal-card">
  <header>
    Agent Details
  </header>
  <div>
    {#if agentInFocus}
    {agentInFocus.symbol}
    {/if}
  </div>
</div>
<div class="sub-section">
  <div class="terminal-card half-card">
    <header>Fleet</header>
    <div>
      Fleet Details
    </div>
  </div>
  <div class="terminal-card half-card">
    <header>Contracts</header>
    <div>
      Fleet Details
    </div>
  </div>
</div>

<style>
  .half-card {
    flex: 1;
  }

  .half-card:first-child {
    margin-bottom: 5px;
  }

  .half-card:last-child {
    margin-top: 5px;
  }
</style>