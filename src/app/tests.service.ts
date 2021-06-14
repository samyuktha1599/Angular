import { TestDetails } from './test-details';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor() { }

  getAllTests():TestDetails[]
  {
    let laserTest:TestDetails={
      testName:'LaserTest-1',
      testCost:5000,
      rating:4,
      description:'test for laser treatment of eye',
      image:"/assets/laser1.jpg"
    }

    let BVTest:TestDetails={
      testName:'Basic Vision Test',
      testCost:2500,
      rating:3,
      description:'test for  visual acuity test',
      image:"/assets/vision.jpg"
    }

    let LTest:TestDetails={
      testName:'LaserTest-2',
      testCost:10000,
      rating:4,
      description:'test for laser treatment of eye',
      image:"/assets/laser1.jpg"
    }

    return [laserTest,BVTest,LTest];
  }
}
