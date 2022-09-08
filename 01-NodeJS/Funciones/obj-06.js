let n = require (pushNumber())

function factorial(n) {
   for (let i = 1; i <= n; i++) {
      n = n * i 
   }
   return n
}

module.exports = factorial()
