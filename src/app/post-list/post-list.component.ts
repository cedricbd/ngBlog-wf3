import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Array<Object> = [
  {
  title: 'Mon premier post',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet posuere enim ut accumsan. Cras aliquam rutrum dui, a malesuada diam finibus quis. Donec vel massa pellentesque, facilisis urna cursus, suscipit orci. Sed non mattis lorem, eget efficitur nunc. Proin mattis non enim sed sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In vel lectus vel lorem suscipit auctor eget ac turpis.',
  love: 0,
  created_at: new Date()      
  },
  {
  title: 'Mon deuxième post',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet posuere enim ut accumsan. Cras aliquam rutrum dui, a malesuada diam finibus quis. Donec vel massa pellentesque, facilisis urna cursus, suscipit orci. Sed non mattis lorem, eget efficitur nunc. Proin mattis non enim sed sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In vel lectus vel lorem suscipit auctor eget ac turpis.',
  love: 0,
  created_at: new Date() 

  },
  {
  title: 'Enfin, un dernier article',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet posuere enim ut accumsan. Cras aliquam rutrum dui, a malesuada diam finibus quis. Donec vel massa pellentesque, facilisis urna cursus, suscipit orci. Sed non mattis lorem, eget efficitur nunc. Proin mattis non enim sed sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In vel lectus vel lorem suscipit auctor eget ac turpis.',
  love: 0,
  created_at: new Date()
  },

];

  constructor() { }

  ngOnInit() {
  }

}
