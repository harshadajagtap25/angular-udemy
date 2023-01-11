import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  constructor() {}
  getEmployeeData() {
    return [
      { id: 1, name: 'ram' },
      { id: 2, name: 'barat' },
      { id: 3, name: 'lakshuman' },
    ];
  }
  getTitle(title: string) {
    alert('Title of that particular Component i.e. ' + title);
  }
}
