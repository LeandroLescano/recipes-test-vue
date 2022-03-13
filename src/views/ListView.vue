<template>
  <div>
    <h1>{{ $route.params.title }}</h1>
    <el-row :gutter="10">
      <el-col
        :xs="8"
        :sm="6"
        :md="4"
        :lg="4"
        :xl="1"
        v-for="ingredient in items"
        :key="ingredient.idIngredient"
      >
        <el-card
          shadow="hover"
          class="ingredient-container"
          v-bind:color="801854"
          @click="handleClick(ingredient.strIngredient)"
        >
          <div class="ingredient-item">
            {{ ingredient.strIngredient }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getIngredients } from "../api/api";
export default {
  components: {},
  data() {
    return {
      items: [],
      loading: true,
      error: null,
      titleProperty: "strIngredient",
    };
  },
  methods: {
    handleClick(id) {
      this.$router.push({
        name: "Recipes",
        params: {
          id: id,
        },
      });
    },
  },
  mounted() {
    if (!this.$route.params.title) {
      this.$router.push({ path: "/" });
    }
    if (this.$route.params.title === "Areas") {
      this.$store.dispatch("getAreas");
    } else if (this.$route.params.title === "Ingredients") {
      getIngredients().then((response) => {
        this.items = response;
        this.loading = false;
      });
    }
  },
};
</script>

<style lang="css" scoped>
.ingredient-item {
  color: white;
  font-family: "Roboto", sans-serif;
}
.ingredient-container {
  margin-bottom: 1em;
  background-color: #801854;
}
</style>
