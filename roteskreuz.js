window.addEventListener("keydown", function (event) {
  console.log(event.key)
  const answers = document.querySelector('.answer').children
  switch (event.key) {
    case '1':
    case 'z':
    case 'y':
      answers[0].children[1].click();
      break;
    case '2':
    case 'x':
      answers[1].children[1].click();
      break;
    case '3':
    case 'c':
      answers[2].children[1].click();
      break;
    case '4':
    case 'v':
      answers[3].children[1].click();
      break;
    case 'Enter':
      const button = document.querySelector('.btn-default') ?? document.querySelector('.btn-primary');
      button.click();
      break;
  }
  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);