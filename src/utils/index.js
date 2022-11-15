// Convert a string to camel case format
export const toCamelCase = (str) => {
  return (" " + str).replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
    return chr.toUpperCase();
  });
};
