<template>
  <div class="container">
    <h1>{{ recipe.strMeal }}</h1>
    <div class="recipe-image">
      <el-image
        style="width: 200px; height: 200px"
        :src="recipe.strMealThumb"
      />
    </div>
    <div class="recipe-info">
      <div class="recipe-info-item">
        <span class="recipe-info-label">Category:</span>
        <span class="recipe-info-value">{{ recipe.strCategory }}</span>
      </div>
      <div class="recipe-info-item">
        <span class="recipe-info-label">Area:</span>
        <span class="recipe-info-value">{{ recipe.strArea }}</span>
      </div>
      <div class="recipe-info-item">
        <span class="recipe-info-label">Instructions:</span>
        <span class="recipe-info-value">{{ recipe.strInstructions }}</span>
      </div>
      <div class="recipe-info-item">
        <span class="recipe-info-label">Ingredients:</span>
        <span class="recipe-info-value">
          <ul>
            <li v-for="ingredient in ingredients" :key="ingredient.ingredient">
              {{ ingredient.ingredient }}
              <span
                v-if="
                  ingredient.measure && ingredient.measure.trim().length > 0
                "
              >
                - {{ ingredient.measure }}</span
              >
            </li>
          </ul>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecipeById } from "@/api/api";
export default {
  components: {},
  data() {
    return {
      recipe: {},
      ingredients: [],
      loading: false,
    };
  },
  mounted() {
    if (!this.$route.params.id) {
      this.$router.push({ path: "/" });
    }
    getRecipeById(this.$route.params.id).then((response) => {
      this.recipe = response;
      const array = [];
      Object.keys(this.recipe).forEach((key) => {
        if (key.includes("strIngredient") && this.recipe[key] !== "") {
          const index = key.replace("strIngredient", "");
          array.push({
            ingredient: this.recipe[key],
            measure: this.recipe["strMeasure" + index],
          });
        }
      });
      this.ingredients = array;
      this.loading = false;
    });
  },
};
</script>

<style lang="css" scoped>
.recipe-info-item {
  margin-top: 0.5em;
}
.recipe-info-label {
  font-weight: bold;
}
.container {
  font-family: "Roboto", sans-serif;
}
</style>
