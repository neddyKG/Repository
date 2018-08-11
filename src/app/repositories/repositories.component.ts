import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../shared/services/repositories.service';
import { Repository } from '../shared/models/repository';
import { map } from 'rxjs/operators';

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
      this.repositoryList = response.users;
    });
  }

  showRepositories() {
   return this.repositoryService.getUsers();
  }

}
