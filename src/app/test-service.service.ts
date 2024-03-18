import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http: HttpClient) { }

  route = "recipes/complexSearch"
  pesquisarReceitas(termoBusca: string): Observable<any>{
    const params = new URLSearchParams({
      query: termoBusca,
      apiKey: environment.apiKey
    });

    return this.http.get(`${environment.baseUrl}/${this.route}?${params.toString()}`)
  }

  obterDetalhesReceita(idReceita: number): Observable<any> {
    const params = new URLSearchParams({
      id: idReceita.toString(),
      apiKey: environment.apiKey,
    });

    return this.http.get<any>(`${environment.baseUrl}/${this.route}?${params.toString()}`);
  }
}
