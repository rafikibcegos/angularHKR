import { Adresse } from "./adresse";

export class Conseiller {
    id:number;
    nom : string;
    prenom: string;
    telephone : string;
    
    // login: string;
    // password: string;
    adresse: Adresse={numero:'', rue:'', ville:''};
    
}
