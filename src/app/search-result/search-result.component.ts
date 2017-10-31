import { Component, OnInit, OnDestroy }    from '@angular/core';
import { ActivatedRoute }                  from '@angular/router';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  private routeSub: any;
  query: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe( params => {
      this.query = params['q'];
      console.log(this.query);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
