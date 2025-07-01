// La fonction duplique un tableau en appliquant un 'filtre'.
// Fileter ne modifie pas le tableau d'origine

const users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 35 },
];

// je veux garder que les utilisateurs qui ont plus de 29ans
const userFiltered = users.filter((user) => user.age > 29); // "user.age > 29" est la condition pour garder les utilisteurs

console.log(userFiltered);

// Les opérateurs logique
// && -> Et logique
// || -> Ou logique

const userFiltered2 = users.filter(
  (user) => user.age > 29 || user.name === "Jane"
); // "user.age > 29" est la condition pour garder les utilisteurs

console.log(userFiltered2);
