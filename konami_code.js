const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

index = 0;

function init() {
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert('Solid Snake would be proud!');
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
