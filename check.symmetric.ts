const checkSymmetric = (string: string): boolean => {
    if(string[0] !== string[string.length -1]){
        return false;
    }

    if(string.length <= 1){
        return true;
    }
    
    return checkSymmetric(string.slice(1,-1))

}

export default checkSymmetric;