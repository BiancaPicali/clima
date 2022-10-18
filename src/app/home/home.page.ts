import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  page;
  perPage;
  total;
  totalPages;
  data;

<<<<<<< HEAD
  constructor(private api: ApiService) {
    this.buscarTodos()
=======
  page;
  pagesTotal;
  perPage;
  total;
  data;

  constructor(private api: ApiService) {
    this.buscarTodos();
>>>>>>> 79e2ce16f8437795acf9bc32dadee6189a3b7710
  }

  buscarTodos(page = 1){
    this.api.buscarUsuario(page).subscribe(usuarios => {
<<<<<<< HEAD
      console.log(usuarios);
      this.page = usuarios['page'];
      this.perPage = usuarios['per_page'];
      this.total = usuarios['total'];
      this.totalPages = usuarios['total_pages'];
      this.data = usuarios['data'];
=======
      console.log(usuarios)
      this.page = usuarios['page'];
      this.perPage = usuarios['per_page']
      this.total = usuarios['total']
      this.pagesTotal = usuarios['total_pages']
      this.data = usuarios['data']
>>>>>>> 79e2ce16f8437795acf9bc32dadee6189a3b7710
    });
  }

}
