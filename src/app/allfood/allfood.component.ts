import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute} from '@angular/router';
import { FoodService } from '../shared/food.service';
import { Food } from '../shared/food.model';
import { Category } from 'src/app/shared/categoty.model';
declare var  require: any;
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-allfood',
  templateUrl: './allfood.component.html',
  styleUrls: ['./allfood.component.css']
})
export class AllfoodComponent implements OnInit {
  message:string;

  public apiurl = environment.BaseUrl;
  public id = '';
  trustedUrl;
  count= 0;
  public foods = [];
  item= this.foods[0];
  constructor(private fservice: FoodService , public fs: FoodService,
    private sanitizer: DomSanitizer,private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.apiurl);
   }

newMessage(){
this.fservice.changeMessage('Hello the message is changed');
}
  getFOoddetails(id) {
    this.fservice.getfoodcatid(id).subscribe((res) => {
    this.foods = res as Food[];
    });
  }
  getFood(){
    this.fservice.getFood().subscribe((res) => {
      this.foods = res as Food[];
      });
  }
  getSafeUrl(fpic) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiurl + '/' + fpic);
}
  ngOnInit() {
    //this.fservice.currentMessage.subscribe(message=>this.message=message);
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);
    this.getFood();
   // this.getFOoddetails(this.id);

  }
  onBook(id) {
    this.router.navigate([ '/-/bookfood', {id: id} ]);
  }

  refresh() {
    this.fservice.getFood().subscribe((res) => {
      this.foods = res as Food[] ;
    });
  }
}
