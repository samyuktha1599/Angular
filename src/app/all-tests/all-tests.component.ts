import { TestDetails } from './../test-details';
import { TestsService } from './../tests.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-tests',
  templateUrl: './all-tests.component.html',
  styleUrls: ['./all-tests.component.css']
})
export class AllTestsComponent implements OnInit {


  __testService:TestsService;
  tests:number = 0;
  constructor(t:TestsService) {
    this.__testService=t;
   }

  ngOnInit(): void {
  }

getAllTests():TestDetails[]
{

  return this.__testService.getAllTests();
}

addTest(){
  this.tests++;
  console.log(this.tests);
}

img="assets/star.JPG";

ratingStar(rating:number):string{
  for(let i=0;i<rating-1;i++)
  {
    return this.img;
  }
  return this.img;
}

share(){
  console.log("shared");
}

}
