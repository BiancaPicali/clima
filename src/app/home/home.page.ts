import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  page;
  pagesTotal;
  perPage;
  total;
  data;

  constructor(private api: ApiService) {
    this.buscarTodos();
  }

  buscarTodos(page = 1){
    this.api.buscarUsuario(page).subscribe(usuarios => {
      console.log(usuarios)
      this.page = usuarios['page'];
      this.perPage = usuarios['per_page']
      this.total = usuarios['total']
      this.pagesTotal = usuarios['total_pages']
      this.data = usuarios['data']
    });
  }

}
