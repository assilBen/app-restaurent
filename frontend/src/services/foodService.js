import { sample_foods, sample_tags } from "../data.js";
import axios from "axios";

export const getAll = async () => sample_foods;

export const search = async (searchTerm) =>
  sample_foods.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

export const getAllTags = async () => sample_tags;
export const getAllByTag = async (tag) => {
  if (tag === "All") return getAll();
  const { data } = await axios.get("/api/foods/tag/" + tag);
  return data;
};

export const getById = async (foodId) => {
  const { data } = await axios.get("/api/foods/" + foodId);
  return data;
};
