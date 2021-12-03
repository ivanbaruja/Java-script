

let saldo = 5000
let acceso = ""
let retiro = 0
let deposito= 0
let opcion= ""
let continuar = "si"

let usuario = prompt ('Ingrese usuario')
let contraseña = prompt ('Ingrese su contraseña')

if (usuario == "ivan" && contraseña =="1234") {
   acceso = true
    console.log ('esta ok')
}

alert ('bienvenido')
while (acceso == true && continuar == 'si'){
    opcion = prompt ('Que desea hacer: 1) |Depositar| 2) |Extraer| 3)|Salir|')
    alert ('Su saldo actual es $' + saldo )
    switch (opcion) {
        case "1":
            deposito = +prompt ('Ingrese el monto a depositar')
            if (deposito > 1000){
            alert ('Si es mayor a $1000, debe ingresar por caja')
        }
        else{
            saldo = saldo + deposito
            alert('El deposito se realizo, su saldo actual es $' + saldo)
        }
        
            break
        case "2":
            if (saldo < 50){
                alert ('Usted no posee saldo')
            }
            else {
            let retiro = +prompt ('ingrese el monto a retirar')
            if ( retiro > saldo)
            alert ('No posee saldo suficiente')
            else{
                saldo = saldo - retiro
                alert ('Usted retiro $' + retiro, 'Su saldo actual es' + saldo)
            }
            
        } 
        break 
        case "3":
            continuar = prompt ('¿Desea continuar? si/no') 
            break
    }   
    alert('Gracias por operar con nosotros')
    
}



