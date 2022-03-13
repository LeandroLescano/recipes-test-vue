<template>
  <div>
    <el-button @click="handleRedirect('Areas')">Search by Areas</el-button>
    <el-button @click="handleRedirect('Ingredients')"
      >Search by Ingredients</el-button
    >
  </div>
</template>

<script>
export default {
  methods: {
    handleRedirect(title) {
      this.$router.push({
        name: "List",
        params: {
          title,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
