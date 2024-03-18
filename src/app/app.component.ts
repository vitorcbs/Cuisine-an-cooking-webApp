import { Component } from '@angular/core';
import { TestServiceService } from './test-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Cuisine';

  receitas: any[] = []
  termoBusca = ''

  constructor(private receitasService: TestServiceService){}

  ngOnInit(){

  }

  pesquisar(){
    if(this.termoBusca.trim().length > 0){
      this.receitasService.pesquisarReceitas(this.termoBusca).subscribe((res) => {
        this.receitas = res.results;
      }, (err) => {
        console.error(err)
      })
    }
  }

  verDetalhes(receitaId: number) {
    // Implement logic to navigate to details page or display details within the component
    alert(`Viewing recipe details for ID: ${receitaId}`); // Example for now
  }
}
