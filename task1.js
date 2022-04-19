const checkAge = (age) => {
  const age_2 = 18;
  const age_3 = 60;

  if (age < age_2) {
    return (
      "You don't have access cause your age is " + `${age}` + " it's less then"
    );
  }

  if (age >= age_2 && age < age_3) {
    return 'Welcome';
  }

  if (age >= age_3) {
    return 'Keep calm and look Culture channel';
  }

  return 'Technical work';
};

console.log(checkAge(17));
console.log(checkAge(18));
console.log(checkAge(61));

