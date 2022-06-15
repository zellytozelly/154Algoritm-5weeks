## Node.js로 BOJ 문제 풀 때 입력방법들. 
https://tesseractjh.tistory.com/39

'''
// 1. 하나의 값을 입력받을 때
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

// 3. 여러 줄의 값들을 입력받을 때
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
// 이 방법은 속도가 느릴 수 있음. 수행시간 단축희망시, split('/n')으로 한줄 씩 나눈 후, 줄을 한번 더 나누는 방식 추천.
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
// ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
// 이 방법은 속도가 느릴 수 있음.
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);

// 2~6에서 입력받는 값들을 모두 String에서 Number로 바꾸려면 split()뒤에 .map(Number)를 추가.
// 혹은 parseInt()로 감싸주도록 하자.
'''


## 문자열 합치기 성능 비교
'''
문자열 합치기
concat / + / join
https://web.archive.org/web/20170404182053/https://jsperf.com/concat-vs-plus-vs-join

그러나 문자열의 길이 등 상황에 따라 성능 순위가 변동될 수 있다.

'''

## 문자열 반복
'''
다른 언어는 'a' * 5 // aaaaa 가 된다.
javascript는 안된다.

두가지 방법이 있다.
1) text1.repeat(n) // 문자열을 n번 반복 연결한 문자열 반환
2) Array(n+1).join("aaa") // aaa를 n번 반복 연결한 문자열 반환

'''

## 문자열 대치
https://codechacha.com/ko/javascript-replace-in-string/
str = str.replace('Java', 'JavaScript'); // 가장 먼저 찾은 문자열 1개만 반환.
str = str.replace(/java/g, 'JavaScript'); // 정규식.