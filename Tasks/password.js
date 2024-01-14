// Generate random password

// Step 8: Added a space between the for keyword and the opening parenthesis.

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








