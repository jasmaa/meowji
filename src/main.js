import { emojis } from './emojis';

/**
 * Converts emojis in a non-text DOM node.
 * 
 * @param {Node} node 
 */
function convertNode(node) {
  const { childNodes } = node;
  for (let i = 0; i < childNodes.length; i++) {
    if (childNodes[i].nodeType === Node.TEXT_NODE) {
      convertString(childNodes[i]);
    } else {
      convertNode(childNodes[i]);
    }
  }
}

/**
 * Converts emojis in a text DOM node.
 * 
 * @param {Node} node 
 * @returns 
 */
function convertString(node) {
  let text = node.nodeValue;

  // Ignore if text is empty
  if (text.trim().length === 0) {
    return text;
  }

  for (const { re, url } of emojis) {
    text = text.replaceAll(re, `<img src="${url}" style="height: 1em; user-select: none; pointer-events: none; vertical-align: middle;" />`);
  }

  const newNode = document.createElement('span');
  newNode.innerHTML = text;
  node.replaceWith(newNode);
}

// Start conversion from body on load.
window.onload = () => {
  if (document.body) {
    convertNode(document.body);
  }
}