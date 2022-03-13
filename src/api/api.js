import {
  API_ALL_AREAS,
  API_ALL_INGREDIENTS,
  API_RECIPES_BY_ID,
  API_RECIPES_BY_INGREDIENT,
} from "@/utils/constants";

import axios from "axios";

const getIngredients = async () => {
  try {
    const response = await axios.get(API_ALL_INGREDIENTS, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.meals;
  } catch (error) {
    console.warn(error.message);
  }
};

const getAreas = async () => {
  try {
    const response = await fetch(API_ALL_AREAS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    const areas = result.meals;
    return areas;
  } catch (error) {
    console.warn(error.message);
  }
};

const getRecipeById = async (id) => {
  try {
    const response = await axios.get(API_RECIPES_BY_ID + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.meals[0];
  } catch (error) {
    console.warn(error.message);
  }
};

const getRecipesByIngredient = async (ingredient) => {
  try {
    const response = await axios.get(API_RECIPES_BY_INGREDIENT + ingredient, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.meals;
  } catch (error) {
    console.warn(error.message);
  }
};

export { getIngredients, getAreas, getRecipeById, getRecipesByIngredient };
