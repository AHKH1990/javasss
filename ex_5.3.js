// Function using if/else conditional expression
function validatePasswordIfElse(password) {
    if (password.length > 7) {
      return "Strong";
    } else {
      return "Weak";
    }
  }
  
  // Function using ternary conditional expression
  function validatePasswordTernary(password) {
    return password.length > 7 ? "Strong" : "Weak";
  }
  
  // Function using && logical operator
  function validatePasswordLogical(password) {
    return password.length > 7 && "Strong" || "Weak";
  }
  
  // Advanced password validation function using ternary conditional expression
  function validatePasswordAdvanced(password) {
    return password.length > 7 && /[A-Z]/.test(password) ? "Very Strong" : password.length === 7 ? "Strong" : "Weak";
  }
  
  // Testing the functions
  console.log(validatePasswordIfElse("password")); // Weak
  console.log(validatePasswordTernary("pass")); // Weak
  console.log(validatePasswordLogical("password123")); // Strong
  console.log(validatePasswordAdvanced("Password")); // Very Strong
  