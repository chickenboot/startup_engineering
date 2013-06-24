#!/usr/bin/env node

function isPrime(num, prevPrimes) {
  // base cases
  if (num === 1) return false; 
  if (num === 2) return true;
  // use the previous prime numbers for efficiency - find if any primes <= sqrt(num) are integer divisors
  for (var i=0; i<prevPrimes.length && prevPrimes[i] <= Math.floor(Math.sqrt(num)); ++i) {
    if (num % prevPrimes[i] === 0) return false; // if there is no remainder from a division operation this isn't prime
  }
  return true;
}

function generatePrimeList(n) {
  var result = [];
  var n = 1;
  while (result.length < 100) {
    if (isPrime(n, result)) result.push(n);
    n++;
  }
  return result;
}

function consoleMain() {
  var fs = require('fs');
  var outfile = "primes.txt";
  var joinedPrimes = generatePrimeList(100).join(",");
  fs.writeFileSync(outfile, joinedPrimes + "\n");
}

consoleMain();

