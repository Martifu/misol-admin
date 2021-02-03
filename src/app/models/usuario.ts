export class Usuario {
    constructor(
        public id: string,
        public celular: number,
        public correo: string,
        public estado: string,
        public nombre: string,
        public telefono: number,
        public tipoUsuario: string,
    ) {
        
    }
}