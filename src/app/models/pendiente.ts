export class Pendiente{
    constructor(
        public cliente: any,
        public asesor: string,
        public unidad: any,
        public fechaVisita: Date,
        public tipoCita: string,
        public tipoServicio: string,
        public mesEstablecido: number,
    )
    {}
}