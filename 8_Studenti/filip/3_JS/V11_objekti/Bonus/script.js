//1.

var datum = new Date();

console.log(datum.toString());
console.log(datum.toLocaleString());

//2.

const Osoba = {
  ime: "Perica",
  age: 55,
  toJSON: function () {
    return this.ime + " " + this.age + " godina ";
  },
};

console.log(Osoba.valueOf());
console.log(Osoba.ime.valueOf());

// 3.
console.log(Osoba);
console.log(JSON.stringify(Osoba));

const jsonAdresa = '{"ulica":"ilica","broj":21,"grad":"Zagreb"}';
const objAdresa = JSON.parse(jsonAdresa);
console.log(objAdresa.grad);

//4.

console.log(JSON.stringify(Osoba));
