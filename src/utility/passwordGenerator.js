export default function generatePassword(length, upperEnabled, lowerEnabled, specialEnabled, numEnabled){
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let num = "1234567890";
    let special = "{}|!@#$%^&*()_+";
    
    // At least one option should be selected
    if(!upperEnabled && !lowerEnabled && !specialEnabled && !numEnabled){
        return "GUH??";
    }

    let selected = [];
    if(upperEnabled)
        selected.push(upper)
    if(lowerEnabled)
        selected.push(lower)
    if(specialEnabled)
        selected.push(special)
    if(numEnabled)
        selected.push(num)

    let pw = "";
    for(let i = 0; i != length; i++){
        let select = selected[Math.floor(Math.random() * selected.length)];
        console.log(select)
        let selectedChar = select.charAt(Math.floor(Math.random() * select.length - 1))
        console.log(selectedChar)
        pw += selectedChar
    }

    return pw
}