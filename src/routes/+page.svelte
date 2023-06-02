<script>
  import AgentMain from "../components/agents/AgentMain.svelte";
  import FleetMain from "../components/fleet/FleetMain.svelte";
  import ContractsMain from "../components/contracts/ContractsMain.svelte";
  import StarmapMain from "../components/starmap/StarmapMain.svelte";

  import { onMount, onDestroy } from "svelte";
  import { tick } from "svelte/internal";

  const screenList = [
    { name: "Agents", component: AgentMain },
    { name: "Fleet", component: FleetMain },
    { name: "Contracts", component: ContractsMain },
    { name: "Starmap", component: StarmapMain },
  ];

  let selected = AgentMain;
  let utcTime = "";
  let interval;

  function updateUTCTime() {
    const now = new Date();
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "UTC",
    };
    const utcTimeArray = now.toLocaleString("en-US", options).split(", ");
    const [date, time] = utcTimeArray;
    const [month, day, year] = date.split("/");
    utcTime = `${year}-${month}-${day} ${time}`;
  }

  updateUTCTime()

  function startTimeDisplay() {
    interval = setInterval(() => {
      tick();
      updateUTCTime();
    }, 1000);
  }

  onMount(() => {
    startTimeDisplay();
  });

  onDestroy(() => {
    clearInterval(interval);
  });

</script>

<div class="screen">
  <div class="screen-nav">
    <div class="left-div">
      {#each screenList as screen}
        <div class="screen-nav-item">
          <button
            class={selected === screen.component
              ? "btn btn-primary"
              : "btn btn-default btn-ghost"}
            on:click={() => (selected = screen.component)}
          >
            {screen.name}
          </button>
        </div>
      {/each}
    </div>
    <div class="right-nav">
      <div class="btn btn-primary btn-ghost">ACTIVEAGENT</div>
      <div class="btn btn-primary btn-ghost">{utcTime} UTC</div>
    </div>
  </div>
  <div class="main">
    <svelte:component this={selected} />
  </div>
</div>

<style>
  .main {
    height: calc(100vh - 150px);
    flex: 1;
    padding: 20px;
    margin-top: 20px;
    border: 1px solid rgb(163, 171, 186, 0.5);
  }
  .screen {
    width: 95vw;
    margin: 0 auto;
  }

  .left-div {
    align-self: flex-start;
    display: flex;
  }

  .right-nav {
    align-self: flex-end;
  }

  .screen-nav {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
  }

  .screen-nav-item {
    margin-right: 10px;
  }
</style>
