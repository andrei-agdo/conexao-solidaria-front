import { AlertsService } from './../shared/services/alerts.service';
import { Router } from '@angular/router';
import { LoginService } from './../shared/services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  usuario: any = {};

  constructor(private loginService: LoginService, private router: Router, private alertsService: AlertsService) { }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  logar() {
    this.loginService.logar(this.usuario)
      .subscribe((res) => {

        if (!res) {
          this.alertsService.show("CPF ou senha incorreto(s)")
          return;
        }

        this.router.navigateByUrl("/setor");
      })
  }
}
