import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello!</h1>
    <div id="boxes">
      <div id="smallerboxes"></div>
      <div id="smallboxes"></div>
      <div id="smallestboxes"></div>
    </div>
  </div>
`;

for (let i = 0; i <= 100; i++) {
  const smallBox = document.createElement('div');
  smallBox.className = 'smallbox';
  smallBox.innerHTML = `${i}`;
  const bgColour = [0, 25, 50, 75, 100].includes(i) ? 'black' : 'red';
  const line = i;
  smallBox.style.background = `linear-gradient(
    ${bgColour},
    ${line < 50 ? `${bgColour} ${line}%,
    yellow ${line}%,
    yellow calc(${line}% + 1px),
    ${bgColour} calc(${line}% + 1px),` : ''}
    ${bgColour} 50%,
    pink 50%,
    pink calc(50% + 1px),
    ${bgColour} calc(50% + 1px),
    ${bgColour} ${line}%,
    yellow ${line}%,
    yellow calc(${line}% + 1px),
    ${bgColour} calc(${line}% + 1px),
    ${bgColour}
  )`;
  document.querySelector<HTMLDivElement>('#smallboxes')!.appendChild(smallBox);
}

for (let i = 0; i <= 255; i++) {
  const smallerBox = document.createElement('div');
  smallerBox.className = 'smallerbox';
  smallerBox.innerHTML = `${i}`;
  const bgColour = [0, 64, 128, 192, 255].includes(i) ? 'black' : 'blue';
  smallerBox.style.backgroundColor = bgColour;
  document.querySelector<HTMLDivElement>('#smallerboxes')!.appendChild(smallerBox);
}

for (let i = 0; i <= 360; i++) {
  const smallestBox = document.createElement('div');
  smallestBox.className = 'smallestbox';
  smallestBox.innerHTML = `${i}`;
  const bgColour = [0, 90, 180, 270, 360].includes(i) ? 'black' : 'green';
  smallestBox.style.backgroundColor = bgColour;
  document.querySelector<HTMLDivElement>('#smallestboxes')!.appendChild(smallestBox);
}