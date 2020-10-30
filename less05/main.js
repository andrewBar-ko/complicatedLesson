'use strict';
// 1
let arr = ['7896','122', '2144', '456', '2567', '64532', '7678'];

arr.forEach((item) => {
    if (item.startsWith('2') || item.startsWith('4')) {
      console.log(item);
    }
});

// 2

let n = 100;

for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j === 0) {
       i++;
    } 
     
  }

  console.log(i, 'Делители этого числа:' + ' ' + '1' + ' ' + 'и' + ' ' + i); 
}