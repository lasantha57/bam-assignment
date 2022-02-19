import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bam Web';

  categoryOptions = [{ id: 0, name: 'All Categories' }];
  selectedCategoryOption = this.categoryOptions[0];

  filterByCategory(option: any) {

  }
}
