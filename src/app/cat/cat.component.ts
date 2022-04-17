import { Component, OnInit } from '@angular/core';
import { CatService } from './cat.service';
import { Cat } from '../models/cat';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  //yeah no
  //public catFact : any;

  //I have no idea if this is good or not. Refer here.
  //https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#:~:text=The%20definite%20assignment,cannot%20detect%20so.
  public catFact!: Cat;

  constructor(
    private catService: CatService
  ) { }

  ngOnInit(): void {
    this.getFact();
  }
  getFact(): void {
    this.catService.getFact().subscribe(catFact => this.catFact = catFact);
  }
}
