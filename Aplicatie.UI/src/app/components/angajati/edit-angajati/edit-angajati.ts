import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Angajat } from '../../../models/angajat.model';
import { Angajati } from '../../../services/angajati';

@Component({
  selector: 'app-edit-angajati',
  imports: [FormsModule, RouterLink],
  templateUrl: './edit-angajati.html',
  styleUrl: './edit-angajati.css'
})
export class EditAngajati implements OnInit {
  detaliiAngajat: Angajat = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

  constructor(
    private route: ActivatedRoute,
    private angajatiService: Angajati,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.angajatiService.getAngajat(id)
            .subscribe({
              next: (response) => {
                this.detaliiAngajat = response;
              },
              error: (response) => {
                console.log(response);
              }
            });
        }
      }
    });
  }

  updateAngajat(): void {
    this.angajatiService.updateAngajat(this.detaliiAngajat.id, this.detaliiAngajat)
      .subscribe({
        next: () => {
          this.router.navigate(['angajati']);
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

  deleteAngajat(id: string): void {
    this.angajatiService.deleteAngajat(id)
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