import { CrudService } from './../../shared/services/crud.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends CrudService {

  public endpoint = '/setores/';

}
