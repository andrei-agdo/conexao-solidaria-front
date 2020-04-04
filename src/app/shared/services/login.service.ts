import { CrudService } from './crud.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends CrudService {


  public endpoint = '/users/';

  logar(usuario) {
    let _auth = {
      cpf: usuario.cpf,
      senha: usuario.senha
    };

    return this.getOneByFilter(_auth);
  }
}
