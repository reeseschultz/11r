// Adapted from https://codepen.io/wilbo/pen/xRVLOj by Wilbert Schepenaar.

const CLEAR_SELECTION_DELAY = 2000;

const isPrismClass = preTag =>
  preTag.className.substring(0, 8) === 'language';

const handleCodeCopying = () => {
  const preTags = document.getElementsByTagName('pre');

  if (!preTags) return;

  for (const preTag of preTags)
    if (isPrismClass(preTag))
      preTag.innerHTML = `<div class="copy">copy</div>${preTag.innerHTML}`;

  const clipboard = new ClipboardJS('.copy', {
    target: trigger => trigger.nextElementSibling,
  });

  clipboard.on('success', event => {
    event.trigger.textContent = 'copied!';

    setTimeout(() => {
      event.clearSelection();
      event.trigger.textContent = 'copy';
    }, CLEAR_SELECTION_DELAY);
  });
};

export { handleCodeCopying };
