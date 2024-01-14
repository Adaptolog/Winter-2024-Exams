// Generate random password

// Step 2: Changed the variable name key to password to better represent its purpose.

const generatePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  let password = '';
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * MAX);
    password = password + alphabet[Index];
  }
  return password;
};

module.exports = generatePassword;


