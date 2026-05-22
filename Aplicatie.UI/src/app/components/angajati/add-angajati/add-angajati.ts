import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AddAngajatRequest } from '../../../models/add-angajat-request.model';
import { Angajati } from '../../../services/angajati';

@Component({
  selector: 'app-add-angajati',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-angajati.html',
  styleUrl: './add-angajati.css'
})
export class AddAngajati {
  addAngajatRequest: AddAngajatRequest = {
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

  constructor(
    private angajatiService: Angajati,
    private router: Router
  ) { }

  addAngajat(): void {
    this.angajatiService.addAngajat(this.addAngajatRequest)
      .subscribe({
        next: () => {
          this.router.navigate(['angajati']);
        },
        error: (response) => {
          console.log(response);
        }
      });
  }
}