import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor() {  }

  getUsers(file) {
    const reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      const loadFile: string = reader.result;
      console.log(JSON.stringify(loadFile));
    };
  }
}
