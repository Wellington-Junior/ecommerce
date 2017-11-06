import {Injectable} from '@angular/core'
import {Headers} from '@angular/http'
@Injectable()
export class TokenService {
    
    constructor(){}

    getJsonHeaders(token?:string){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      if (token)
      headers.append('token',token)
      return {headers: headers};
    }
    
}