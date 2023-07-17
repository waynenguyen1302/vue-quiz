<template>
    <footer>
      <div class="footer">
        <span>By: TeamVue. 2023. Wayne Nguyen, Sam Jackson, Alex Gullen, Abimbola Fasawe.</span>
      </div>
    </footer>
  </template>
  
<style>
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--darkgray);
    width: 100%;
    height: 80px;
}

.footer span {
    color: white;
    font-size: 14px;
}
</style>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>