import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  users = [
    { id: 1, username: "Test1", email: "test1@test.com" },
    { id: 2, username: "Test2", email: "test2@test.com" },
    { id: 3, username: "Test3", email: "test3@test.com" },
  ]
  bannedUsers = [];
  selectionModel = new Set();
  constructor() { }

  ngOnInit(): void {
  }

  handleSelection(selectedItem: any) {
    if (selectedItem.selected) {
      this.selectionModel.add(selectedItem.value);
    } else {
      this.selectionModel.delete(selectedItem.value);
    }
  }

  bulkDelete() {
    this.users = this.users.filter(x => !this.selectionModel.has(x));
    this.selectionModel.clear();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
