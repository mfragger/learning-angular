import { Component, OnInit } from '@angular/core';
import { CatService } from './cat.service';
import { Cat } from '../models/cat';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  //yeah no
  // public catFact: any;

  //I have no idea if this is good or not. Refer here.
  //https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#:~:text=The%20definite%20assignment,cannot%20detect%20so.
  // public catFact!: Cat;

  //are you kidding me?
  // public data: any;

  //nani?
  public catFact!: Cat;

  constructor(
    private catService: CatService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.catFact = (<Cat>(data.catResolver));
    });

    // this.route.data.subscribe((data: {}) => {
    //   // this.catFact.fact = (<Cat>data).fact;
    //   console.log(data);
    // });

    // this.catService.getFact().subscribe((data: {}) => {
    //   this.catFact = <Cat>data;
    // });
  }
  // getFact(): void {
  //   this.catService.getFact().subscribe(catFact => this.catFact = catFact);
  // }
}