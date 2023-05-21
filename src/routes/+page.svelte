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
        height: calc(100vh - 91px);
        /* width: 95vw;  */
        border: 1px solid rgb(163, 171, 186, 0.5);
        margin: 0 auto;
        padding: calc(var(--global-space) * 2);
        /* background-image: linear-gradient(to right, transparent 1px, #000 1px), linear-gradient(to bottom, transparent 1px, #000 1px); */
        background-size: 20px 20px;
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
