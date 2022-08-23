import Character from './character';

export default class Magician extends Character {
  constructor(name, attack) {
    super(name, attack);
    this.attack = 100;
  }
}