<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/Menu">Menu</router-link>
    <router-link to="/CreateTodo">Create Todo</router-link>
  </div>
  <router-view/>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --navy: rgb(3, 25, 86);
    --blue: rgb(52, 79, 161);
    --neon-blue: rgb(46, 110, 216);
    --neon-pink: rgb(235, 5, 255);
  }
</style>