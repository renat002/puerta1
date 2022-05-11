var Persona = /** @class */ (function () {
    function Persona(anioNacimiento, nombre) {
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }
    ;
    Persona.prototype.cualEsTuNombre = function () {
        return "Mi nombre es " + this.nombre.split(" ");
    };
    ;
    Persona.prototype.cualEsTuEdad = function () {
        return "Mi edad es ";
    };
    Persona.prototype.edadActual = function () {
        var edad = 2022 - (this.nacimiento);
        return "Tu edad actual es " + edad + " años.";
    };
    Persona.prototype.cualEsTuGeneracion = function () {
        if (this.nacimiento < 1975) {
            return "Soy un Baby Boomer";
        }
        if (this.nacimiento > 1975 && this.nacimiento < 1999) {
            return "Soy un Milenial";
        }
        if (this.nacimiento >= 1999 && this.nacimiento < 2010) {
            return "Soy un Centenial";
        }
        if (this.nacimiento >= 2010) {
            return "Soy generacion Alfa";
        }
    };
    return Persona;
}());
//termina la def de la clase Persona 
var Miko = new Persona(2018, "Miko Almazan");
console.log(Miko.cualEsTuGeneracion());
console.log(Miko.edadActual());
var fede = new Persona(1984, "Federico Fernandez");
console.log(fede.cualEsTuNombre());
console.log(fede.cualEsTuGeneracion());
var cadena = "Cadena de texto";
cadena.split;
"Otra cadena".split(" ");
//Variables de nacimiento 
var nacimiento = 2001;
//Variable de tipo string con mi nombre 
var nombre = "Irina";
//Salida 
console.log("Hola" + nombre + "desde TypeScript");
