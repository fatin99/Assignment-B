<template>
  <div>
    <h1>Create Module</h1>
    <module-form @createOrUpdate="createOrUpdate"></module-form>
  </div>
</template>

<script>
import ModuleForm from '../components/ModuleForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'create',
  components: {
    'module-form': ModuleForm
  },
  methods: {
    createOrUpdate: async function(mod) {
      await api.createModule(mod);
      this.flash('Module created', 'success');
    }
  }
};
</script>
