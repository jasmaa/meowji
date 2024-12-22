import { emojis } from './emojis';

/**
 * Converts emojis in a non-text DOM node.
 * 
 * @param {Node} node 
 */
export function convertNode(node) {
  if (node.childNodes.length === 0 && node.nodeType === Node.TEXT_NODE) {
    convertTextNode(node);
  }

  node.childNodes.forEach(childNode => {
    if (childNode.nodeType === Node.TEXT_NODE) {
      convertTextNode(childNode);
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
function convertTextNode(node) {
  let text = node.nodeValue;

  // Ignore if text is empty
  if (text.trim().length === 0) {
    return;
  }

  let isReplaced = false;
  for (const { re, url } of emojis) {
    if (re.test(text)) {
      text = text.replaceAll(re, `<img src="${url}" style="height: 1em; user-select: none; pointer-events: none; vertical-align: middle;" />`);
      isReplaced = true;
    }
  }

  if (isReplaced) {
    const newNode = document.createElement('span');
    newNode.innerHTML = text;
    node.replaceWith(newNode);
  }
}