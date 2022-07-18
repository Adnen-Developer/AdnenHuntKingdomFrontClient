
import { Admin } from './admin';
import { Localisation } from './localisation';
import { TypeEvenement } from './typeEvenement';

export class Evenement {
 
    _id: String;
    description: String;		
    dateDeb: Date;
    dateFin: Date;		
    lieu: String;		
    image: String;		
    instanceOrg: String;	
    isActive: Boolean;
    
    typeEvenement: TypeEvenement;
    localisation: Localisation;
    admin: Admin;

}