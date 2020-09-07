// Adapted from https://codepen.io/wilbo/pen/xRVLOj by Wilbert Schepenaar.

const handleCodeCopying = () => {
  const preTags = document.getElementsByTagName('pre');

  const isPrismClass = (preTag) =>
    preTag.className.substring(0, 8) === 'language';

  if (preTags !== null) {
    for (let i = 0; i < preTags.length; i++) {
      if (!isPrismClass(preTags[i])) continue;
      preTags[
        i
      ].innerHTML = `<div class="copy">copy</div><code class="${preTags[i].className}">${preTags[i].innerHTML}</code>`;
    }
  }

  const clipboard = new ClipboardJS('.copy', {
    target: (trigger) => trigger.nextElementSibling,
  });

  clipboard.on('success', (event) => {
    event.trigger.textContent = 'copied!';
    setTimeout(() => {
      event.clearSelection();
      event.trigger.textContent = 'copy';
    }, 2000);
  });
};

export { handleCodeCopying };
