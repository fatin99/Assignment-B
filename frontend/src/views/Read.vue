<template>
  <div>
    <h1>Show Module</h1>

    <div class="ui labeled input fluid">
      <div class="ui label">
        Code
      </div>
      <input type="text" readonly  :value="mod.code"/>
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label">
        Title
      </div>
      <input type="text" readonly  :value="mod.title"/>
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label">
        Department
      </div>
      <input type="text" readonly  :value="mod.department"/>
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label">
        Credits
      </div>
      <input type="number" readonly  :value="mod.credits"/>
    </div>
    <div class="actions">
      <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
        Edit Module
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
  name: 'show',
  data() {
    return {
      mod: ''
    };
  },
  async mounted() {
    this.mod = await api.getAModule(this.$route.params.id);
  }
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>
