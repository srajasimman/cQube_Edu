import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-infrastructure',
  templateUrl: './school-infrastructure.component.html',
  styleUrls: ['./school-infrastructure.component.scss']
})
export class SchoolInfrastructureComponent implements OnInit {
  loadTabs = false;
  tabIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onTabChanged($event: any): void {
    console.log($event.index)
    this.tabIndex = $event.index;
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      console.log('resize');
    }, 100);
  }
  
  selected() {
    if (this.loadTabs) {
      let tempIndex = this.tabIndex;
      this.tabIndex = undefined;
      setTimeout(() => {
        this.tabIndex = tempIndex
      }, 500);
    } else {
      this.loadTabs = true;
    }
  }
}
