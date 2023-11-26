document.addEventListener('DOMContentLoaded', function () {
  const text = 'hover  me';

  const createLetterArray = (string) => {
    return string.split('');
  }

  const createLetterLayers = (array) => {
    return array.map((letter) => {
      let layer = document.createElement('span');
      for (let i = 1; i <= 2; i++) {
        if (letter == ' ') {
          layer.appendChild(document.createElement('span')).classList.add('space');
        } else {
          let letterSpan = document.createElement('span');
          letterSpan.classList.add('letter-' + i);
          letterSpan.textContent = letter;
          layer.appendChild(letterSpan);
        }
      }
      return layer;
    });
  }

  const createLetterContainers = (array) => {
    return array.map((item) => {
      let container = document.createElement('div');
      container.classList.add('wrapper');
      container.appendChild(item);
      return container;
    });
  }

  const outputLayers = new Promise(function (resolve, reject) {
    let textElement = document.getElementById('text');
    textElement.innerHTML = '';
    let letterContainers = createLetterContainers(createLetterLayers(createLetterArray(text)));
    letterContainers.forEach(container => textElement.appendChild(container));
    resolve();
  });

  const spans = Array.from(document.querySelectorAll('#text .wrapper span'));
  outputLayers.then(() => {
    spans.forEach((span, index) => {
      span.parentElement.style.transitionDelay = `${index * 75}ms`;
    });
    document.getElementById('text').classList.add('show');
  });
});
  