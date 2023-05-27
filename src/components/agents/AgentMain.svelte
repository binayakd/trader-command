<script>
</script>

<div class="main">
  <div class="section">
    <!-- agent nav -->
    <div>
      <button class="btn btn-default btn-ghost">Register New Agent</button>
      <button class="btn btn-default btn-ghost">Add Existing Agent</button>
      <button class="btn btn-default btn-ghost">Delete Agent</button>
      <button class="btn btn-default btn-ghost">Download Agent Details</button>
    </div>

    <div class="main">
      <div class="sub-section">
        Agent Table
      </div>
      <div class="sub-section">
        Agent details
      </div>
    </div>

    
  </div>
  <!-- <div class="section">Agent Screen</div> -->
</div>

<style>
  .main {
    display: flex;
  }
  .section {
    height: calc(100vh - 150px);
    flex: 1;
    padding: 20px;
    /* margin: 5px; */
    margin-top: 20px;
    border: 1px solid rgb(163, 171, 186, 0.5);
  }

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

  .section:last-child {
    margin-right: 0;
  }
</style>
