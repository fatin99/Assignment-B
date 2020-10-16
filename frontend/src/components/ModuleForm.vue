<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out all fields!</p>

    <div class="ui labeled input fluid">
      <div class="ui label">Code</div>
      <input type="text" placeholder="Enter module code..." v-model="mod.code" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">Title</div>
      <input type="text" placeholder="Enter title..." v-model="mod.title" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">Department</div>
      <input type="text" placeholder="Enter department..." v-model="mod.department" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">Credits</div>
      <input type="number" placeholder="Enter credits..." v-model="mod.credits" />
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'module-form',
  props: {
    mod: {
      type: Object,
      required: true,
      default: () => {
        return {
          code: '',
          title: '',
          department: '',
          credits: 0
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {
      if (this.mod.code === '' || this.mod.title === '' || this.mod.department === '' || this.mod.credits === 0) {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.mod);
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
