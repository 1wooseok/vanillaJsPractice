import { ANIMAL_TYPES } from "../utils/constant.js";

const getAnimalList = () => {
  const animalList = {};
  ANIMAL_TYPES.forEach(type => animalList[type] = 0);

  return animalList;
}

const getAnimalMapTable = (answers) => {
  const animalList = getAnimalList();

  Object
    .keys(answers)
    .forEach(step => {
      answers[step]
        .forEach(animal => animalList[animal]++)
    })

  return animalList;
}

export const getMaxAnimal = (answers) => {
  const animalList = getAnimalMapTable(answers);

  let max = -1
  let max_animal = null;

  Object.keys(animalList).forEach(animal => {
    if (animalList[animal] > max) {
      max = animalList[animal];
      max_animal = animal
    }
  })

  return max_animal
}