export const data = [
  {
    id: 1,
    info: 'Look, a dog!',
    image: require('./imgs/dog.jpg')
  },
  {
    id: 2,
    info: 'Thinking cat!',
    image: require('./imgs/cat.jpg')
  },
  {
    id: 3,
    info: 'Hum, a bee',
    image: require('./imgs/bee.jpg')
  },
  {
    id: 4,
    info: 'Girl texting',
    image: require('./imgs/girl.jpg')
  },
  {
    id: 5,
    info: 'Eyes, window of soul',
    image: require('./imgs/eyes.jpg')
  },
  {
    id: 6,
    info: 'Such a nice car',
    image: require('./imgs/lotus.jpg')
  },
  {
    id: 7,
    info: 'Mother nature in morning',
    image: require('./imgs/bokeh.jpg')
  },
  {
    id: 8,
    info: 'Sakura is beautiful',
    image: require('./imgs/sakura.jpg')
  },
  {
    id: 9,
    info: 'My house entrance',
    image: require('./imgs/garden.jpg')
  },
  {
    id: 10,
    info: 'Shiiii, or he will fly!',
    image: require('./imgs/halcyon.jpg')
  },
  {
    id: 11,
    info: 'Sunset',
    image: require('./imgs/clouds.jpg')
  },
  {
    id: 12,
    info: 'Alpaca',
    image: require('./imgs/alpaca.jpg')
  },
  {
    id: 13,
    info: 'Nice Hat',
    image: require('./imgs/old-man.jpg')
  },
  {
    id: 14,
    info: 'Huge castle',
    image: require('./imgs/heritage.jpg')
  },
];

export function generateData(quant: number) {
  let array = [];
  for (let i = 0; i < quant; i++) {
    array.push({
      id: quant,
      info: 'Card ' + quant,
    });
  }
  return array;
}
