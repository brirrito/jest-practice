function capitalize(string) {
  if (string.length === 0) {
    return ''
  }
  const aux = string.toLowerCase();
  return aux.charAt(0).toUpperCase() + aux.slice(1);
}

module.exports = capitalize