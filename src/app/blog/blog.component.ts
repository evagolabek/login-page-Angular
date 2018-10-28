import { Component, OnInit } from '@angular/core';
import { BLOGPOSTS } from '../../mockdata'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
   
  blogposts = BLOGPOSTS; 
  
  constructor() { }

  ngOnInit() {
  }

}
