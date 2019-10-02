import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string
  dateCreation = new Date();
  loveCount = 0;
  
  constructor() { }

  ngOnInit() {
  }

  getTitle(){
  	return this.postTitle;
  }

  getColor(){
  	if(this.loveCount > 0){
  		return 'green';
  	}else if(this.loveCount < 0) {
  		return 'red';
  	}
  }

  getDate() {
  	return this.dateCreation;
  }

  getLove(){
  	return this.loveCount;
  }

  addLove(){
  	this.loveCount += 1
  	console.log(this.loveCount)
  }
  removeLove(){
  	this.loveCount -= 1
  	console.log(this.loveCount)
  }
}
