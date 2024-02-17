function generateKey(firstParameter) {
  const key = firstParameter.join('-');
  return `${key}`;
}

export default generateKey;
