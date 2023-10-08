import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.css'],
})
export class MainboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Schedule = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  Do = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  Delete = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  Delegate = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  ScratchPad = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
