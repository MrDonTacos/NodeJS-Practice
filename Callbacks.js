// setTimeout(()=> {
//     console.log("Hola Mundo");
// },3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: "Saul",
        id
    }
    if(id===20){
        callback("El usuario no existe en la DB")
    }else{
        callback(usuario);
    }
}

getUsuarioById(20, (usuario)=>{
    console.log("Usuario de base de datos: ", usuario);
})