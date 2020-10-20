<template>
  <div>
    <h1>Edit Module</h1>
    <module-form @createOrUpdate="createOrUpdate" :mod=this.mod></module-form>
  </div>
</template>

<script>
import ModuleForm from '../components/ModuleForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'update',
  components: {
    'module-form': ModuleForm
  },
  data: function() {
    return {
      mod: {}
    };
  },
  methods: {
    createOrUpdate: async function(mod) {
      await api.updateModule(mod);
      this.flash('Module updated sucessfully!', 'success');
      this.$router.push(`/module/${mod._id}`);
    }
  },
  async mounted() {
    this.mod = await api.getAModule(this.$route.params.id);
  }
};
</script>
