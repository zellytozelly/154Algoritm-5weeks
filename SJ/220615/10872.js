// 재귀 10872 팩토리얼
// 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

// 0! = 1
// 1! = 1
// 2! = 2
// 3! = 6
// 4! = 24
//---------------------------------------------------------------
// 메모리 9596KB 시간 120ms 코드길이 199B

// const input = 10; // local test
const input = parseInt(require('fs').readFileSync('/dev/stdin').toString());

const factorial = (num) => {
  if (num <= 1) return 1;
  return num * factorial(num-1);
} 

console.log(factorial(input))
