let test1 = [4,2,2,4,2];
let test2 = [1,2,3,2];
let test3 = [0,5,4,4,5,12];
let test4 = [4,4];

function solution(a) {
   let count = 0;
   let max = 0;
   let temp = [];

   a.forEach(function (a) {
        var last = temp[temp.length - 1];

        if (temp.length < 2 || temp[0].value === a || temp[1].value === a) {
            ++count;
        } else {
            count = last.count + 1;
        }
        if (last && last.value === a) {
            last.count++;
        } else {
            temp.push({ value: a, count: 1 });
            temp = temp.slice(-2);
        }
        if (count > max) {
            max = count;
        }
    });
    return max;
}

console.log(solution(test1));
console.log(solution(test2));
console.log(solution(test3));
console.log(solution(test4));
