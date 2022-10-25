function dividir(num) {
    console.log(num)
    if (num % 2 === 0) {
        dividir(num / 2)
    } else {
        return num
    }
}

dividir()


function dobrar(num) {
    console.log(num)
    dobrar(num * 2)
}

//dobrar(1)


function fatorial(num) {
    ocnsole.log("Número: " + num)
    if (num === 0 ) {
        
    } else {
        
    }
}

function fatorial(num) {
    console.log("Número: " + num)
    if (num === 0){
        return 1
    } else if (num === 1)  {
        return 1
    }else {
        console.log(num + " * !" + (num - 1))
        return num * fatorial(num -1)
    }
}

console.log(fatorial(5))
