// Step 10: Export the getMonthNumber function using module.exports.

const Months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const getMonthNumber = (abbreviation) => {
  const lowercaseAbbreviation = abbreviation.toLowerCase();
  const numberOfMonths = Months.length;

  for (let i = 0; i < numberOfMonths; i++) {
    if (lowercaseAbb
