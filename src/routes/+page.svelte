<script>
    import AgentMain from "../components/agents/AgentMain.svelte";
    import FleetMain from "../components/fleet/FleetMain.svelte";
    import ContractsMain from "../components/contracts/ContractsMain.svelte";
    import StarmapMain from "../components/starmap/StarmapMain.svelte";

    const screenList = [
        { name: "Agents", component: AgentMain },
        { name: "Fleet", component: FleetMain },
        { name: "Contracts", component: ContractsMain },
        { name: "Starmap", component: StarmapMain }
    ]

    let selected = AgentMain;
</script>

<div class="screen">
    <div class="screen-nav">
        {#each screenList as screen }
        <div class="screen-nav-item">
            <button
                class="{selected === screen.component ? "btn btn-primary" : "btn btn-default btn-ghost"}"
                on:click={() => (selected = screen.component)}
            >
                {screen.name}
            </button>
        </div>
        {/each}
    </div>

    <svelte:component this={selected} />
</div>

<style>
    .screen {
        width: 95vw; 
        margin: 0 auto;
    }

    .screen-nav {
        display: flex;
        /* justify-content: space-between; */
        /* align-items: center; */
    }

    .screen-nav-item {
        margin-right: 10px;
    }
</style>
