(() => {
  const modal = document.querySelector('.pdf-modal');
  if (!modal || typeof modal.showModal !== 'function') return;
  const frame = modal.querySelector('iframe');
  const title = modal.querySelector('h2');
  let trigger;
  document.querySelectorAll('[data-pdf-modal]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      title.textContent = link.closest('article').querySelector('.eyebrow').textContent;
      frame.title = title.textContent + ' — PDF';
      frame.src = link.href;
      modal.showModal();
      document.body.classList.add('pdf-modal-open');
      modal.querySelector('button').focus();
    });
  });
  modal.querySelector('button').addEventListener('click', () => modal.close());
  modal.addEventListener('click', event => {
    if (event.target !== modal) return;
    const box = modal.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) modal.close();
  });
  modal.addEventListener('close', () => {
    frame.removeAttribute('src');
    document.body.classList.remove('pdf-modal-open');
    trigger?.focus();
  });
})();
