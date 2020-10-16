<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">NUSMods BETA</router-link>
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/module" exact class="item">
            <i class="list ul icon"></i> Modules
          </router-link>
          <router-link to="/module/new" class="item">
            <i class="plus circle icon"></i> New
          </router-link>
        </div>
    </nav>

    <div class="ui text container">
      <flash-message class="myFlash"></flash-message>

      <div class="ui one column grid">
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
#app > div.navbar {
  margin-bottom: 1.5em;
}
.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50;
  right: 0;
}
input {
  width: 300px;
}
div.label {
  width: 120px;
}
div.input {
  margin-bottom: 10px;
}
button.ui.button {
  margin-top: 15px;
  display: block;
}
</style>
