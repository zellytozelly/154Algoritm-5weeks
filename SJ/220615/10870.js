// 재귀 10870 피보나치 수 5
// n이 주어졌을 때, n번째 피보나치 수를 구하는 프로그램을 작성하시오.

// (n = 17) 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597
//---------------------------------------------------------------
// 메모리 9664KB 시간 176ms 코드길이 226B

// const input = 17
const input = parseInt(require('fs').readFileSync('/dev/stdin').toString())

const fibonacci = (n) => {
  if (n === 1) return 1
  if (n === 0) return 0
  return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(input))