// Generate random password

// Step 1: Renamed the function GeneratePassword to generatePassword to follow camel case naming convention.

const generatePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  key = '';
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * MAX);
    key = key + alphabet[Index];
  }
  return key;
};

module.exports = generatePassword;

