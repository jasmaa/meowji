import { describe, expect, it } from 'vitest';
import * as meowji from './main';

describe('convertNode tests', () => {

  it('should convert node with single cat', () => {
    document.body.innerHTML = `<p>🐱‍💻</p>`;

    meowji.convertNode(document.body);

    const imgNodes = document.getElementsByTagName('img');

    expect(imgNodes.length).toBe(1);
    expect(imgNodes[0].src).toContain('hackerCat.svg');
  });

  it('should convert nested nodes with multiple cats', () => {
    document.body.innerHTML = `<h1>Meowji</h1>
<p>Non-standard cat emojis.</p>

<h3>A Story About 🐱‍👤 and 🐱‍🏍</h3>

<p>🐱‍🚀 met 🐱‍🏍 at the <strong>cat cafe</strong> and proceeded to talk crap about 🐱‍👤.<p>
`;

    meowji.convertNode(document.body);

    const imgNodes = document.getElementsByTagName('img');

    expect(imgNodes.length).toBe(5);
    expect(imgNodes[0].src).toContain('ninjaCat.svg');
  });

  it('should not convert nodes with no cats', () => {
    document.body.innerHTML = `<h1>Doggo</h1>

<h3>A Story About 🐶</h3>

<p>I love my 🐶. Sometimes I take 🐶 for a walk and he barks.</p>
`;

    meowji.convertNode(document.body);

    const imgNodes = document.getElementsByTagName('img');

    expect(imgNodes.length).toBe(0);
  });
});