function ceasarCipher(string, shift) {
  if (shift === 0) return string;

  return string.replace(/[a-z]/g, (char) =>
  String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97)
  );
};

module.exports = ceasarCipher