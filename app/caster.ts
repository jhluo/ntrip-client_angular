export class Caster {
    constructor (
        public host: string,
        public port: number,
        public mountPt: string,
        public user?: string,
        public password?: string
    ) {}
}