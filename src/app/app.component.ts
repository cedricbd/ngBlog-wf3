import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: Array<Object> = [
    {
    title: 'Mon premier post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet posuere enim ut accumsan. Cras aliquam rutrum dui, a malesuada diam finibus quis. Donec vel massa pellentesque, facilisis urna cursus, suscipit orci. Sed non mattis lorem, eget efficitur nunc. Proin mattis non enim sed sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In vel lectus vel lorem suscipit auctor eget ac turpis.',
    loveIts: 0,
    created_at: new Date()      
    },
    {
    title: 'Mon deuxième post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet posuere enim ut accumsan. Cras aliquam rutrum dui, a malesuada diam finibus quis. Donec vel massa pellentesque, facilisis urna cursus, suscipit orci. Sed non mattis lorem, eget efficitur nunc. Proin mattis non enim sed sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In vel lectus vel lorem suscipit auctor eget ac turpis.',
    loveIts: 0,
    created_at: new Date() 
  
    },
    {
    title: 'Enfin, un dernier article',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet posuere enim ut accumsan. Cras aliquam rutrum dui, a malesuada diam finibus quis. Donec vel massa pellentesque, facilisis urna cursus, suscipit orci. Sed non mattis lorem, eget efficitur nunc. Proin mattis non enim sed sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In vel lectus vel lorem suscipit auctor eget ac turpis.',
    loveIts: 0,
    created_at: new Date()
    },
  
  ];
  

  title = 'blog';
}
