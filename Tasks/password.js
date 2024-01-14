// Generate random password

// Step 7: Used the += operator to concatenate characters to the password variable.

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







