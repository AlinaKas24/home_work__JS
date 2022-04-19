const checkAge = (age) => {
  if (isNaN(age)) {
    throw new Error('Technical work!');
  }

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
};

const age = prompt('Введите ваш возраст', 18);
alert(checkAge(age));

