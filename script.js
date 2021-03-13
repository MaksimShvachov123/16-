const car = {
    name:"tesla",
    weight:124,
    maxspeed:300
}

function toString(obj){
    let string = "";
    const keys = Object.keys(obj)


    keys.forEach(
        (key) => {
        string = string + key + " = " + obj[key] + ", "
    }
    )
    return string 
}

console.log(toString(car))
console.log(typeof toString(car))

const object1 = {
    key1:"fd",
    key2:"fs",
    key3:"df"
}

const object2 = {
    key1:"fd",
    key2:"fs",
    key3:"df"
}

const object3 ={
    key1:"dd",
    key2:"ffs",
    key3:"df"
}

function compareToObjects(object1, object2){
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
if (keys1.length == keys2.length){
let equals = true
keys1.forEach(
    (keys1) => {
    string = string + key + " = " + obj[key] + ", "
}
)
return string
return false
}