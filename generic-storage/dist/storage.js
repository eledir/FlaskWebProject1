"use strict";
class GenericStorage {
    constructor() {
        this.data = null; // Prevenire errori di accesso a dati non inizializzati
    }
    setItem(item) {
        this.data = item;
    }
    getItem() {
        return this.data;
    }
}
// Esempio con numeri
const numberStorage = new GenericStorage();
numberStorage.setItem(123);
const numberItem = numberStorage.getItem();
console.log(numberItem); // Output: 123
// Esempio con stringhe
const stringStorage = new GenericStorage();
stringStorage.setItem("Hello, TypeScript!");
const stringItem = stringStorage.getItem();
console.log(stringItem); // Output: Hello, TypeScript!
const userStorage = new GenericStorage();
userStorage.setItem({ id: 1, name: "Alice" });
const userItem = userStorage.getItem();
console;
