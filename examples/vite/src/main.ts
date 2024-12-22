import * as meowji from 'meowji';

const app = document.getElementById('app');

const content = `
<div>
  <h1 style="text-align: center;">Meowji</h1>
  <p style="text-align: center;">Non-standard cat emojis.</p>

  <h3 style="text-align: center;">🐱‍👤 🐱‍🚀 🐱‍👓 🐱‍🐉 🐱‍💻 🐱‍🏍</h3>
</div>
`;

if (app) {
  app.innerHTML = content;
  meowji.convertNode(app);
}