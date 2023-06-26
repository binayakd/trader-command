<script>
  import { agentList, selectedAgent, deleteAgent } from "$lib/store";
  import { get } from 'svelte/store'

  export let agentInFocus = get(selectedAgent)

</script>

<div class="sub-section terminal-card">
  <header>Agent List</header>
  <div class="section-internal">
    <table>
      <tbody>
        <tr>
          <th>Agent Symbol</th>
          <th>Action</th>
        </tr>
        {#each $agentList as agent}
          <tr class={agent === $selectedAgent? "selected-agent-row": ""}>
            <td class="agent-symbol-column">{agent.symbol}</td>
            <td class="action-column">
              <button class="btn btn-default btn-ghost btn-block" on:click={() => (agentInFocus = agent)}>
                details
              </button>
              <button class="btn btn-default btn-ghost btn-block">
                select
              </button>
              <button class="btn btn-default btn-ghost btn-block" on:click={() => (deleteAgent(agent.symbol))}>
                delete
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  th,
  td {
    /* border: none; */
    /* border-bottom: 1px var(--progress-bar-background); */
    text-align: center;
    vertical-align: middle;
  }

  /* tr:nth-child(odd) {
    background-color: var(--progress-bar-background);
  } */

  /* tr:nth-child(even) {
    background-color: white;
  } */

  .selected-agent-row{
    background-color: var(--progress-bar-background);
  }

  .agent-symbol-column {
    width: 100%;
  }
  .action-column {
    width: auto;
  }
</style>
