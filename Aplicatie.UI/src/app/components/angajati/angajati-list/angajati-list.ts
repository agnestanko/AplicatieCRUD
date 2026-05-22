import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Angajat } from '../../../models/angajat.model';
import { Angajati } from '../../../services/angajati';

@Component({
  selector: 'app-angajati-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './angajati-list.html',
  styleUrl: './angajati-list.css'
})
export class AngajatiList implements OnInit {
  angajati: Angajat[] = [];

  constructor(private angajatiService: Angajati) { }

  ngOnInit(): void {
    this.angajatiService.getAllAngajati()
      .subscribe({
        next: (angajati) => {
          this.angajati = angajati;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }
}