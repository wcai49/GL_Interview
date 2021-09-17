const stringToArray = function(str){
    str = str.split(',');
    for(let i = 0; i < str.length; i++){
        str[i] = parseInt(str[i]);
    }
    return str;
}

// to check whether a "string" type of Array is a valid array or not;
const checkValid = function(array_str){
    let queue = new Array();
    for(let i = 0; i < array_str.length; i++){
        let curr = array_str[i];
        if(curr == '['){
            queue.push(curr);
        }
        else if(curr == ']'){
            if(queue.length == 0)
                return false;
            else{
                queue.shift();  
            }
        }
    };
    return queue.length == 0 ? true : false;
}

export { stringToArray, checkValid }