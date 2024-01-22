const KEY = "sample";
let johnProfile = {
  name: "John",
  sayHi: function () {
    console.log(this.name, ": 친구야 반갑다!");
  },
  [KEY]: "sampleValue",
};

johnProfile.sayHi();
console.log(johnProfile["sayHi"]);
console.log(johnProfile.sample);
