const emojis = [
  {
    codepoints: [0x1F431, 0x200D, 0x1F464],
    url: '/assets/ninjacat.png',
  }
].map(data => {
  const { codepoints } = data;
  return {
    ...data,
    re: new RegExp(String.fromCodePoint(...codepoints), 'g'),
  }
})

export { emojis };