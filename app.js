const words = document.getElementById('words');

const colorNames = [
  'чёрный',
  'красный',
  'синий',
  'желтый',
  'зеленый',
  'оранжевый',
  'фиолетовый',
  'белый',
];

const colors = [
  'black',
  'blue',
  'red',
  'yellow',
  'green',
];

const colorsDict = {
  'black': 'чёрный',
  'red': 'красный',
  'blue': 'синий',
  'yellow': 'желтый',
  'green': 'зеленый',
}

const getColors = (skip) => {
  return colors.filter((color) => {
    if (!skip) return true;
    return skip !== color;
  })
}

const getNames = (skip, currentColor) => {
  return colorNames.filter((name) => {
    return skip !== name && name !== colorsDict[currentColor];
  })
}

const randomElement = (elements) => {
  return elements[Math.floor(Math.random() * elements.length)]
}

let currentColor = colors[0];
let currentName = colorNames[0];

for (let i = 0; i < 50; i++) {
  const span = document.createElement('span');
  currentColor = randomElement(getColors(currentColor));
  span.classList.add(currentColor);
  currentName = randomElement(getNames(currentName, currentColor));
  span.innerText = currentName;
  words.append(span)
}
