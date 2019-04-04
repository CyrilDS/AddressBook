export class Address {
    constructor(
        private type: string,
        private identity: string,
        private identification: string,
        private localisationComplement: string,
        private label: string,
        private distributionServices: string,
        private zipCode: string,
        private locality: string
    ) { }
}