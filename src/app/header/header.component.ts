import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/categoty.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userDetails;
  public category = [];
  public id = '';
  constructor(private router: Router, private catservice: CategoryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
    this.category = res as Category[];
    });
  }
  onFood(catname) {
    this.router.navigate ( [ 'food', {id: catname} ] );
  }

}
