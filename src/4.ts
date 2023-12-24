class Key {
  private signature: number = Math.random();
  getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  constructor(
    protected door: boolean = false,
    protected tenants: Person[] = [],
    protected key: Key
  ) {}

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Person entered the house.');
    } else {
      console.log('The door is closed. Person cannot enter.');
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('The door is open.');
    } else {
      console.log('The key does not match. The door remains closed.');
    }
  }
}

const key = new Key();

const house = new MyHouse(false, [], key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
