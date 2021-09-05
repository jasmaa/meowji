import ninjaCat from './assets/ninjaCat.svg';
import astroCat from './assets/astroCat.svg';
import attorneyCat from './assets/attorneyCat.svg';

export const emojis = [
  {
    codepoints: [0x1F431, 0x200D, 0x1F464],
    url: ninjaCat,
  },
  {
    codepoints: [0x1F431, 0x200D, 0x1F680],
    url: astroCat,
  },
  {
    codepoints: [0x1F431, 0x200D, 0x2696],
    url: attorneyCat,
  },
].map(data => {
  const { codepoints } = data;
  return {
    ...data,
    re: new RegExp(String.fromCodePoint(...codepoints), 'g'),
  }
});