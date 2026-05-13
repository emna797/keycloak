import { Component, OnInit } from '@angular/core';
import { Plante } from '../model/plante.model';
import { PlanteService } from '../services/plante.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plantes',
  imports: [CommonModule],
  templateUrl: './plantes.component.html',
  styleUrl: './plantes.component.css',
})
export class PlantesComponent implements OnInit {
  plantes!: Plante[]; //un tableau de Produit

  constructor(private planteService: PlanteService) {}

  ngOnInit(): void {
    this.chargerPlantes();
  }

  chargerPlantes() {
    this.planteService.listePlante().subscribe((prods) => {
      console.log(prods);
      this.plantes = prods;
    });
  }
}
