import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../shared/services/repositories.service';
import { Repository } from '../shared/models/repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repositoryList: Repository[];

  constructor(private repositoryService: RepositoriesService) { }

  ngOnInit() {
    this.showRepositories().subscribe((response) => {
      this.repositoryList = response;
      console.log(this.repositoryList);
    });
  }

  showRepositories() {
   return this.repositoryService.getUsers();
  }

}
