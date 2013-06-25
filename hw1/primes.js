#!/usr/bin/env node

function isPrime(num, prevPrimes) {
  // base cases
  if (num === 1) return false; 
  if (num === 2) return true;
  // use the previous prime numbers for efficiency - find if any primes <= sqrt(num) are integer divisors
  return prevPrimes.filter(function(p) { return p <= Math.floor(Math.sqrt(num)); }).every(function(p) { return (num % p !== 0); }); // if there is no remainder from a division operation this isn't prime
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

