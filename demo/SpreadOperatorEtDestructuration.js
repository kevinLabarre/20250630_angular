const myTable = [1, 2, 3, 4, 5];
const myTable2 = [6, 7, 8, 9, 10];

console.log(...myTable);

// Copie "propre" de tableau
const copie = [...myTable];

const tableCopie = myTable; // On ne copie pas de type complexe (objet ou tableau) avec un simple '='
tableCopie.push(6);
console.log(myTable);

copie.push(100);
console.log(copie);
console.log(myTable);

const tablecombined = [...myTable, ...myTable2, 11, 12, 13];
console.log(tablecombined);

const user = {
  id: 1,
  name: "John",
  age: 30,
};

console.log(user);

// copie "propre"
const userCopie = { ...user };

// Copie + rajouter un attribut
const user2 = { ...user, city: "New York" };
console.log(user2);

// copie + modification de la valeur d'un des attributs
const user3 = { ...user, age: 35 };
console.log(user3);

// Avec les fonctions
function sum(defaultValue = 0, ...numbers) {
  let total = 0;
  numbers.forEach((number, index) => {
    total += number;
    console.log(index + " : " + number);
  });
  return total;
}

const total = sum(...myTable2);
const total2 = sum(1, 2, 3, 4, 5);
console.log(total);
console.log(total2);

// destructuration

const destructureTable = ["Riri", "Fifi", "Loulou"];

const [name1, name2, name3] = destructureTable;
// const name1 = destructureTable[0];
// const name2 = destructureTable[1];
// const name3 = destructureTable[2];

console.log(name1);
console.log(name2);
console.log(name3);

const [name4, ...rest] = destructureTable;
console.log(name4);
console.log(rest);

const destructureUser = {
  id: 1,
  name: "John",
  age: 30,
};

let { age, name: myName } = destructureUser; // on destrucutré en renommant "myName"
console.log(age);
console.log(myName);

console.log(typeof age);
age = "Toto";
console.log(typeof age);
