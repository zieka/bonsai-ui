const mangle = (text) => {
  let i;
  let result = '';
  const length = text.length;

  for (i = 0; i < length; i++) {
    result += text.charCodeAt(i);
  }

  return Number(result)
    .toString(36)
    .slice(0, 9);
};

export default mangle;
