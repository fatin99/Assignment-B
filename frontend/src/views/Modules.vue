<template>
  <div>
    <h1>Modules</h1>
    <table id="modules" class="ui celled compact table">
      <thead>
        <tr>
          <th>Code</th>
          <th>Title</th>
          <th>Department</th>
          <th>Credits</th>
          <th colspan="3"></th>
        </tr>
      </thead>
      <tr v-for="(mod, i) in mods" :key="i">
        <td>
          <router-link :to="{ name: 'read', params: { id: mod._id }}">{{ mod.code }}</router-link>
        </td>
        <td>{{ mod.title }}</td>
        <td>{{ mod.department }}</td>
        <td>{{ mod.credits }}</td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(mod._id)">
          <a :href="`/module/${mod._id}`"><i class="red x icon"></i></a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
  name: 'modules',
  data() {
    return {
      mods: []
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;

      await api.deleteModule(id);
      this.flash('Module deleted sucessfully!', 'success');
      const newMods = this.mods.filter(mod => mod._id !== id);
      this.mods = newMods;
    }
  },
  async mounted() {
    this.mods = await api.getModules();
  }
};
</script>
