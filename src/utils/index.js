export const toTitleCase = (chsq) => {
  return chsq.slice(0, 1).toUpperCase() + chsq.substring(1);
};

export const removeSlash = (chsq) => {
  return chsq.slice(1);
}