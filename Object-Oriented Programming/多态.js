/**
 * Created by Dylanwoo on 2017/9/16.
 */
function Add() {
    function zero() {
        return 10;
    }
    function one(num) {
        return 10+num;
    }
    function two(num1,num2) {
        return num1+num2;
    }
    this.add = function () {
        let arg = arguments,
            len = arg.length;
        switch (len){
            case 0:
                return zero();
            case 1:
                return one(arg[0]);
            case 2:
                return two(arg[0],arg[1]);
        }
    }
}
//test
let A = new Add();
console.log(A.add(1,4));
console.log(A.add());
console.log(A.add(5));