// Generate random password

// Step 9: Used const instead of let for the index variable inside the for loop.

const generatePassword = (alphabet, length) => {
  const max = alphabet.length;
  let password = '';

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * max);
    password += alphabet[index];
  }

  return password;
};

module.exports = generatePassword;









