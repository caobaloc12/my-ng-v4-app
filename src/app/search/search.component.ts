import { Component, OnInit, Input }        from '@angular/core';
import { Router }                   from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  passedQuery: string;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.passedQuery);
  }

  submitSearch(event, formData) {
    let query = formData.value;
    if (query) {
        this.router.navigate(['/search', {q: query.q}]);
    }
  }
}
