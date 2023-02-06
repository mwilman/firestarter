import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {BoardService} from "../board.service";
import {Board} from "../board-list/board.model";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
@Input() board!: Board;
  constructor(private boardService: BoardService) { }

  taskDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.board.tasks!, event.previousIndex, event.currentIndex);
    // @ts-ignore
    this.boardService.updateTasks(this.board.id!, this.board.tasks);
  }

}
