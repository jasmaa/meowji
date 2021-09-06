import { emojis } from './emojis';

/**
 * Converts emojis in a non-text DOM node.
 * 
 * @param {Node} node 
 */
export function convertNode(node) {
  if (node.childNodes.length === 0 && node.nodeType === Node.TEXT_NODE) {
    convertString(node);
  }

  node.childNodes.forEach(childNode => {
    if (childNode.nodeType === Node.TEXT_NODE) {
      convertString(childNode);
    } else {
      convertNode(childNode);
    }
  });
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
    return;
  }

  for (const { re, url } of emojis) {
    text = text.replaceAll(re, `<img src="${url}" style="height: 1em; user-select: none; pointer-events: none; vertical-align: middle;" />`);
  }

  const newNode = document.createElement('span');
  newNode.innerHTML = text;
  node.replaceWith(newNode);
}