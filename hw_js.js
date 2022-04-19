const item_1 = 5;
const item_2 = 3;
console.log(item_1);
console.log(item_2);

const item_3 = item_1 + item_2;
console.log(item_3);

const item_4 = 'yolochka';
const result = `${item_3} ${item_4}`;
const result_2 = item_3 * item_4;
console.log(result);
console.log(result_2);

const item_5 = item_3;

const item_6 = 15;
const item_6_type = typeof item_6;
console.log(`item_6==${item_6},item_6_type==${item_6_type}`);

const item_7 = String(item_6);
const item_7_type = typeof item_7;
console.log(`item_7==${item_7}, item_7_type==${item_7_type}`);

const age_1 = 10;
const age_2 = 18;
const age_3 = 60;

if (age_1 < age_2) {
  console.log(
    "You don't have access cause your age_1 is " + age_1 + " it's less then",
  );
} else if (age_1 >= age_2 && age_1 < age_3) {
  console.log('Welcome!');
} else if (age_1 >= age_3) {
  console.log('Keep calm and look Culture channel');
} else {
  console.log('Technical work');
}

