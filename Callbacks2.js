
let usuario = [{

        id:1,
        Nombre: "Saul",
        Apellidos: "Cañedo Castillo",
        Edad : 21
    },{
        id:2,
        Nombre: "Osvaldo",
        Apellido: "Cañedo Castillo",
        Edad: 21
    
}
]

let salario = [{
    id:1,
    salario:2000
},{
    id:2,
    salario:3000
}]

let getUsuarioById = (id, callback) =>{
    let persona= usuario.find(w=>w.id ===id)
    if(!persona){
        callback(`No existe un empleado con el ID ${id}`);
    }else{
            callback(null, persona)
        }
    }

getUsuarioById(5, (err,usuario)=>{
    if(err)
    return console.log(err);
    
    console.log("Usuario encontrado", usuario);
});