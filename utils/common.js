const randomName = (length) => {
    let result = "";
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (let i = 0; i < length; i++){
        result = characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function random(length) {
    let result = "";
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (let i = 0; i < length; i++){
        result = characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
