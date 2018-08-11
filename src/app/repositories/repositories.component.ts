import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../shared/services/repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  userList = [];

  constructor(private repositoryService: RepositoriesService) { }

  ngOnInit() {
    this.showRepositories().subscribe((response) => {
      this.userList = response;
      console.log(this.userList);
    });
  }

  showRepositories() {
   return this.repositoryService.getUsers();
  }

}
