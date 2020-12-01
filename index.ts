import reverseArray from './reverse.array';
import checkSymmetric from './check.symmetric';
import IntegerSet from './integer.set';

console.log('reversed array length should be same', reverseArray([1,2,3,4,5]).length == 5)
console.log('reversed array first should be last',reverseArray([1,2,3,4,5])[0] == 5)
console.log('reversed array should be reversed',reverseArray([1,2,3,4,5])[3] == 2)
console.log(reverseArray([1,2]).length == 2)
console.log(reverseArray([1,2])[0] == 2)
console.log(reverseArray([1,2])[1] == 1)

console.log('start is not a pelindrom',checkSymmetric('start') == false);
console.log('opo is a pelindrom',checkSymmetric('opo') == true);
console.log('aa is a pelindrom',checkSymmetric('aa')== true);
console.log('statt is not a pelindrom', checkSymmetric('statt')== false);

const integerSet = new IntegerSet();
integerSet.add(5);
integerSet.add(4);
integerSet.add(3);
integerSet.add(2);
console.log(integerSet.get());
integerSet.add(2);
console.log(integerSet.get());
integerSet.remove(4);
console.log(integerSet.get());
console.log(!integerSet.is_exist(4));
console.log(integerSet.is_exist(3));