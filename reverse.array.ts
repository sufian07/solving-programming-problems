const recursive = (array: Array<any>, start: number, end: number): Array<any> => {
    let temp;
    if((end - start) <= array.length % 2){
        return array;
    }
    temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    return recursive(array, start+1, end-1)
}

export default (array: Array<any>) => {
    recursive(array, 0, array.length - 1)
    return array;
}