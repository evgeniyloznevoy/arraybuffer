import Daemon from '../daemon';

test('should throw error "Слишком близко. Невозможно атаковать соперника!"', () => {
  const newChatacter = new Daemon('Кронос');
  newChatacter.distance = -1;
  expect(() => { const { attack } = newChatacter.attack; }).toThrow('Слишком близко. Невозможно атаковать соперника!');
});

test('should throw error "Слишком далеко. Невозможно атаковать соперника!"', () => {
  const newChatacter = new Daemon('Кронос');
  newChatacter.distance = 6;
  expect(() => { const { attack } = newChatacter.attack; }).toThrow('Слишком далеко. Невозможно атаковать соперника!');
});

test('атака на 1 клетку без дурмана. Значение должно быть 100', () => {
  const newChatacter = new Daemon('Кронос');
  newChatacter.distance = 1;
  expect(newChatacter.attack).toBe(100);
});

test('атака на 2 клетки без дурмана. Значение должно быть 90', () => {
  const newChatacter = new Daemon('Кронос');
  newChatacter.distance = 2;
  expect(newChatacter.attack).toBe(90);
});

test('атака на 5 клеток без дурмана. Значение должно быть 60', () => {
  const newChatacter = new Daemon('Кронос');
  newChatacter.distance = 5;
  expect(newChatacter.attack).toBe(60);
});

test('атака на 1 клетку c дурманом. Значение должно быть 100', () => {
  const newChatacter = new Daemon('Кронос');
  newChatacter.distance = 1;
  newChatacter.stoned = true;
  expect(newChatacter.attack).toBe(100);
});

test('атака на 2 клетки c дурманом. Значение должно быть 85', () => {
  const newChatacter = new Daemon('Кронос');
  newChatacter.distance = 2;
  newChatacter.stoned = true;
  expect(newChatacter.attack).toBe(85);
});

test('атака на 2 клетки c дурманом. Значение должно быть 48', () => {
  const newChatacter = new Daemon('Кронос');
  newChatacter.distance = 5;
  newChatacter.stoned = true;
  expect(newChatacter.attack).toBe(48);
});