import Character from '../character';

test('should throw error "Слишком близко. Невозможно атаковать соперника!"', () => {
  const newChatacter = new Character('Кронос', 100);
  newChatacter.distance = -1;
  // eslint-disable-next-line no-unused-vars
  expect(() => { const { attack } = newChatacter.attack; }).toThrow('Слишком близко. Невозможно атаковать соперника!');
});

test('should throw error "Слишком далеко. Невозможно атаковать соперника!"', () => {
  const newChatacter = new Character('Кронос', 100);
  newChatacter.distance = 6;
  // eslint-disable-next-line no-unused-vars
  expect(() => { const { attack } = newChatacter.attack; }).toThrow('Слишком далеко. Невозможно атаковать соперника!');
});

test('Атака на 1 клетку без дурмана. Значение должно быть 100', () => {
  const newChatacter = new Character('Кронос', 100);
  newChatacter.distance = 1;
  expect(newChatacter.attack).toBe(100);
});

test('Атака на 2 клетки без дурмана. Значение должно быть 90', () => {
  const newChatacter = new Character('Кронос', 100);
  newChatacter.distance = 2;
  expect(newChatacter.attack).toBe(90);
});

test('Атака на 5 клеток без дурмана. Значение должно быть 60', () => {
  const newChatacter = new Character('Кронос', 100);
  newChatacter.distance = 5;
  expect(newChatacter.attack).toBe(60);
});

test('Атака на 1 клетку c дурманом. Значение должно быть 100', () => {
  const newChatacter = new Character('Кронос', 100);
  newChatacter.distance = 1;
  newChatacter.stoned = true;
  expect(newChatacter.attack).toBe(100);
});

test('Атака на 2 клетки c дурманом. Значение должно быть 85', () => {
  const newChatacter = new Character('Кронос', 100);
  newChatacter.distance = 2;
  newChatacter.stoned = true;
  expect(newChatacter.attack).toBe(85);
});

test('Атака на 2 клетки c дурманом. Значение должно быть 48', () => {
  const newChatacter = new Character('Кронос', 100);
  newChatacter.distance = 5;
  newChatacter.stoned = true;
  expect(newChatacter.attack).toBe(48);
});