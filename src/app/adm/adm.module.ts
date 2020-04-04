import { MaterialModule } from './../core/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmRoutingModule } from './adm-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CadastrarUsuariosComponent } from './cadastrar-usuarios/cadastrar-usuarios.component';


@NgModule({
  declarations: [ CadastrarUsuariosComponent],
  imports: [
    CommonModule,
    AdmRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ]
})
export class AdmModule { }
