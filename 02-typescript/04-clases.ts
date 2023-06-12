// 04-clases.ts
class Persona {
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido = ''; // Duck Typing -> string
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + ' ' + apellidoParametro;
    }

    private mostrarNombreApellidos(): string {
        return this.nombreYApellido;
    }
}

class Usuario extends Persona {
    constructor(
        nombreParametro: string, // Parámetros del constructor
        apellidoParametro: string, // Parámetros del constructor
        public cedula: string, // Modificador acceso -> Propiedad de la clase
        public estadoCivil: string, // Modificador acceso -> Propiedad de la clase
    ) {
        super(nombreParametro, apellidoParametro);
        this.cedula;
        this.estadoCivil;
    }
}

const jonathan = new Usuario(
    'Jonathan',
    'Puglla',
    '1721679130',
    'soltero'
)

jonathan.nombre;
jonathan.apellido;
jonathan.cedula; // '1721679130'
jonathan.estadoCivil; // 'casado'

