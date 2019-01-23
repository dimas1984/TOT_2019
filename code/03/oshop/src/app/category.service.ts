import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  categories: Observable<any[]>;
 
  constructor(private db: AngularFireDatabase) { }
 
getCategories () {
    return this.db.list('/Categories', ref => ref.orderByChild('name')).snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a => ({ key: a.key, ...a.payload.val() }))
      )
    );
  }
}