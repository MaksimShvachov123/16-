/* const name = "Максим"

function greating(name){
return ("Вітаю " + name + "!")}

console.log(greating(name)) */


/* const a = 23
const b = 23

function mate(a, b){
    if (a < b) 
    {return ("Число b більше ніж число a")}

    else if (a > b)
    {return ("Число a більше ніж число b")}

    else {
        return ("числа рівні")
    }
}

console.log(mate(a, b)) */

const array1 = []
const array = ["dhfd", 23, "asfdsf", 23745, "hello"]

function myfunction(array){
    // if(array1.length == 0){
    //     console.log("довжина array1 = 0")
    // }
    // console.log("Довжина масиву є " + array.length);
    // array.forEach((value, index) =>{
    //     console.log("Під індексом " + index + "знаходиться " + value)
    // });

    const result = array.length == 0 ? "цей масив є порожнім" : "цей масив не є порожнім"
    console.log(result)
}

myfunction(array1)
myfunction(array)






