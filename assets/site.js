// Keyboard navigation for the game menu: arrow keys move, Enter opens.
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll('.menu a'));
  if (!items.length) return;
  document.addEventListener('keydown', function (e) {
    var i = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      items[(i + 1) % items.length].focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      items[(i <= 0 ? items.length : i) - 1].focus();
    }
  });
})();
