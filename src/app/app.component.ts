import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-drag-drog';

  foodList = [
    {nama: 'Oseng oseng ketoprak', harga: 20000},
    {nama: 'Pecel Lele', harga: 20000},
    {nama: 'Nasi campuran', harga: 20000},
    {nama: 'Mendoan', harga: 20000}
  ];

  drinkList = [
    {nama: 'Es Teh', harga: 20000},
    {nama: 'Es Jeruk', harga: 20000},
    {nama: 'Air Putih', harga: 20000}
  ];

  orderList = [];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.item.dropContainer.data[0]);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  enter(event: CdkDragDrop<string[]>) {
    // const a = event;
    // event.container.data.forEach( item => {
    //   console.log(item);
    // });
    // console.log(a.container.data);
  }

  delete(item: any) {
    console.log(item);
    this.orderList = [];
    this.drinkList.push(item);
  }
}
