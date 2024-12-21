import * as meowji from 'meowji';

const app = document.getElementById('app');

const content = `
<h1>Meowji</h1>
<p>Non-standard cat emojis.</p>


<h3>🐱‍👤 🐱‍🚀 🐱‍👓 🐱‍🐉 🐱‍💻 🐱‍🏍</h3>
`;

if (app) {
  app.innerHTML = content;
  meowji.convertNode(app);
}