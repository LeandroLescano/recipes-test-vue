<template>
  <h1>Recipes</h1>
  <el-row :gutter="10">
    <el-col
      :xs="8"
      :sm="6"
      :md="4"
      :lg="4"
      :xl="1"
      v-for="recipe in recipes"
      :key="recipe.idMeal"
    >
      <el-card
        :body-style="{ padding: '0px' }"
        shadow="hover"
        class="ingredient-container"
        @click="handleClick(recipe.idMeal)"
      >
        <div class="ingredient-item">
          <img :src="recipe.strMealThumb" class="image" />
          <div class="recipe-title">
            {{ recipe.strMeal }}
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { getRecipesByIngredient } from "@/api/api";

export default {
  components: {},
  data() {
    return {
      recipes: [],
      loading: false,
    };
  },
  methods: {
    handleClick(id) {
      this.$router.push({
        name: "Recipe",
        params: {
          id: id,
        },
      });
    },
  },
  mounted() {
    if (!this.$route.params.id) {
      this.$router.push({ path: "/" });
    }
    getRecipesByIngredient(this.$route.params.id).then((response) => {
      this.recipes = response;
    });
  },
};
</script>

<style lang="css" scoped>
.recipe-title {
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  padding: 0.5em;
}
.ingredient-container {
  margin-bottom: 1em;
  background-color: #801854;
}
.image {
  width: 100%;
  display: block;
}
</style>
