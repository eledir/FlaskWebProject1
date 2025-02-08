"use strict";
var GenericStorage = /** @class */ (function () {
    function GenericStorage() {
        this.data = null; // Prevenire errori di accesso a dati non inizializzati
    }
    GenericStorage.prototype.setItem = function (item) {
        this.data = item;
    };
    GenericStorage.prototype.getItem = function () {
        return this.data;
    };
    return GenericStorage;
}());
// Esempio con numeri
var numberStorage = new GenericStorage();
numberStorage.setItem(123);
var numberItem = numberStorage.getItem();
console.log(numberItem); // Output: 123
// Esempio con stringhe
var stringStorage = new GenericStorage();
stringStorage.setItem("Hello, TypeScript!");
var stringItem = stringStorage.getItem();
console.log(stringItem); // Output: Hello, TypeScript!
var userStorage = new GenericStorage();
userStorage.setItem({ id: 1, name: "Alice" });
var userItem = userStorage.getItem();
console;
