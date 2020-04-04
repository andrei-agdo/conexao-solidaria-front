import { AlertsService } from './../../shared/services/alerts.service';
import { UsuariosService } from './../shared/usuarios.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.scss']
})
export class CadastrarUsuariosComponent {

  constructor(private usuariosService: UsuariosService, private alertsService: AlertsService) { }

  usuario: any = {};

  onSubmit() {
    this.usuariosService.getOneByFilter({ cpf: this.usuario.cpf })
      .subscribe((res) => {
        if (!res)
          this.usuariosService.post(this.usuario)
            .subscribe(() => {
              this.alertsService.show("Usuário cadastrado")
            });
        else
          this.alertsService.show("Já existe um usuário cadastrado nesse CPF")

      });
  }
}
