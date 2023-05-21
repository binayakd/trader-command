<script>
  import "terminal.css";
  import "../app.css";
</script>


<div class="container">
  <div class="terminal-nav">
    <header class="terminal-logo">
      <div class="topnav">
        <div class="logo terminal-prompt">
          <a class="no-style" href="/">Trader Command</a>
        </div>
      </div>
    </header>
        
    <nav class="terminal-menu">
      <ul vocab="https://schema.org/" typeof="BreadcrumbList">
        <li property="itemListElement" typeof="ListItem">
          <a href="https://github.com/binayakd" property="item" typeof="WebPage" class="menu-item" target="_blank" rel="noreferrer">
            <span property="name">Github</span></a><meta property="position" content="1">
          </li>
      </ul>
    </nav>
  
  </div>
</div>

<div class="container">
  <main>
    <slot />
  </main>


</div>