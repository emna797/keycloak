import { Injectable } from '@angular/core';
import { Plante } from '../model/plante.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PlanteService {
  apiURL: string = 'http://localhost:8082/plantes/api/all';

  plantes!: Plante[]; //un tableau de produits
  //familles : Famille[];

  constructor(private http: HttpClient) {}

  listePlante(): Observable<Plante[]> {
    return this.http.get<Plante[]>(this.apiURL);
  }
}
