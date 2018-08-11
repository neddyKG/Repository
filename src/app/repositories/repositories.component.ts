import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../shared/services/repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  jsonFiles: File;
  constructor(private repositoryService: RepositoriesService) { }

  ngOnInit() {
  }

  showRepositories() {
    this.repositoryService.getUsers(this.jsonFiles);
  }

  getJSON(event) {
    this.jsonFiles = event.target.files[0];
  }

}
