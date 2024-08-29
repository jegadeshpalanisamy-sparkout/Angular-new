import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  constructor(private route:ActivatedRoute){

  }
  postNo:any;
  ngOnInit(): void {
    this.postNo=this.route.snapshot.paramMap.get('id')
  
}
}

