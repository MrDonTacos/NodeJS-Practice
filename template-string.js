let Persona = {
    nombre: "Saul",
    apMaterno : "Castillo",
    apPaterno : "Cañedo",
    edad : 21,
    ciudad : "Mexicali",
    getInformation : function(){
        return `Nombre: ${this.nombre} Apellido Materno; ${this.apMaterno} Apellido Paterno; ${this.apPaterno} Edad: ${this.edad} Ciudad: ${this.ciudad}`
    }
}

    console.log(Persona.getInformation());

    let {nombre: nombrePila} = Persona

    console.log(nombrePila);



