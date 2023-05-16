const episodes = [];
const characters = [];
const location = [];

const data = {
  episodes,
  characters,
  location,
};

export function updateData(property, value) {
  data[property] = [...value];
}

export default data;
