import { Adresse } from './adresse';
import { Compte } from './compte';
export class Client {
  id: number=0;
  nom: string='';
  prenom: string='';
  // login: string='';
  // motDePasse: string='';
adresse: Adresse={numero:'', rue:'', ville:''};
listeCompte:Compte[];
telephone: string=''


}
