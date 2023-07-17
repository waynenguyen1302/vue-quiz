<template>
    <nav>
      <div class="navbar">
        <span class="logo"><a href="/">Team Vue</a></span>
        <ul class="navItems">
            <li><a href="/" class="navItem">Home</a></li>
            <li><a href="/about" class="navItem">About</a></li>
        </ul>
      </div>
    </nav>
  </template>

<style>
.navbar {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    background-color: var(--darkgray);
}
.logo,
.navItems {
    display: flex;
    align-items: center;
    gap: 20px;    
    cursor: pointer;
}
.logo a {
    color: white;
}
.navItem {
    padding: 10px 20px;
    border-radius: 10px;
    color: white;
    transition: all 0.3s ease-in-out;
}
.navItem:hover {
    color: var(--orange);
    background: white;
}

</style>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>