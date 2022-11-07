
export function set_data_user(arr, user, pass){
    
    var newUser = {
        username: user,
        password: pass
    };
    arr.push(newUser)
    return arr;
    
}



