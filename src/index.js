module.exports = function reverse (n) {
    if (n <= 0) {
        n *= -1;
      }
      n = String(n);
      let k = n.toString('').split('').reverse().join('');
      return k;
}
