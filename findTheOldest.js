let findTheOldest = function (people) {

  let age = 0;
  let date = new Date();

  let oldest = people.reduce(function (accumulator, current_value, index, people) {
    let key = "yearOfDeath";

    if ((key in accumulator) && (key in current_value)) {

      age = current_value.yearOfDeath - current_value.yearOfBirth;
      accumulator_age = accumulator.yearOfDeath - accumulator.yearOfBirth;

      if (age >= accumulator_age) {
        accumulator = current_value;
      }

    } else {
       if (!(key in accumulator)) {
        age = current_value.yearOfDeath - current_value.yearOfBirth;
        accumulator_age = date.getFullYear() - accumulator.yearOfBirth
      } else if (!(key in current_value)) {
        age = date.getFullYear() - current_value.yearOfBirth;
        accumulator_age = accumulator.yearOfDeath - accumulator.yearOfBirth;
      }

      if (age >= accumulator_age) {
        accumulator = current_value;
      }
    }

    return accumulator;
  });

  return oldest;

}

module.exports = findTheOldest