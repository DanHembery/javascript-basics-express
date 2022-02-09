const createPerson = (name, age) => {
  return {name, age};
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]) return true;
  return false;
};

const isOver65 = person => {
  if (person.age > 65) return true;
  return false;
};

const getAges = people => {
  return people.map(newArray => newArray.age);
};

const findByName = (name, people) => {
  return people.find(thePerson => thePerson.name === name);
};

const findHondas = cars => {
  return cars.filter(theCars => theCars.manufacturer === "Honda");
};

const averageAge = people => {
  return people.reduce((a, b) => a + b.age, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: hiya => {
      return `Hi ${hiya}, my name is ${name} and I am ${age}!`;
    }
  }
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
