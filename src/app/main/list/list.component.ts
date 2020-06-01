import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  taskData = [{
    checked: false,
    task: 'This task is assigned!',
    updated: new Date(),
    assignee: 'AN',
    attachment: false,
    refresh: false,
    count: 0,
  }, {
    checked: false,
    task: 'Recurring task: this task will restart when closed',
    updated: new Date(),
    assignee: 'AN',
    attachment: false,
    refresh: true,
    count: 0,
  }, {
    checked: false,
    task: 'Hello, assigned comments!',
    updated: new Date(),
    assignee: null,
    attachment: false,
    refresh: false,
    count: 0,
  }, {
    checked: false,
    task: 'Task linking and mentioning',
    updated: new Date(),
    assignee: null,
    attachment: true,
    refresh: false,
    count: 0,
  }, {
    checked: false,
    task: 'Multitask Toolbar: Magically manage multiple task',
    updated: new Date(),
    assignee: null,
    attachment: false,
    refresh: false,
    count: 0,
  }, {
    checked: false,
    task: 'View All tasks, in one view',
    updated: new Date(),
    assignee: null,
    attachment: false,
    refresh: false,
    count: 0,
  }, {
    checked: false,
    task: 'Sort and Filter your tasks',
    updated: new Date(),
    assignee: null,
    attachment: false,
    refresh: false,
    count: 1,
  }, {
    checked: false,
    task: 'Add awesome integrations!',
    updated: new Date(),
    assignee: null,
    attachment: false,
    refresh: false,
    count: 7,
  }, {
    checked: false,
    task: 'check out these Checklists!',
    updated: new Date(),
    assignee: null,
    attachment: false,
    refresh: false,
    count: 0,
  }, {
    checked: false,
    task: 'Look at the bottom of your screen! This task is in your Tray',
    updated: new Date(),
    assignee: null,
    attachment: false,
    refresh: false,
    count: 0,
  }];

  newTask = '';

  constructor() { }

  ngOnInit(): void {
  }

  submit(e) {
    console.log(this.newTask);
    if (!(e.keyCode === 13)) return false;

    this.taskData.push({
      checked: false,
      task: this.newTask,
      updated: new Date(),
      assignee: null,
      attachment: false,
      refresh: false,
      count: 0,
    });

    this.newTask = '';
  }

}
