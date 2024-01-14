// Generate random password

// Step 5: Added proper indentation and empty lines for better code readability.

const generatePassword = (alphabet, length) => {
  const max = alphabet.length;
  let password = '';

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * max);
    password = password + alphabet[index];
  }

  return password;
};

module.exports = generatePassword;





