import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { map} from 'rxjs/operators';
import {UserService} from './user.service';
import {Observable} from 'rxjs';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private auth:AuthService,private userService:UserService,private db:AngularFireDatabase,) {}
  
  canActivate(): Observable<boolean> {
    return this.auth.appUser$
    .pipe(map(AppUser => AppUser.isAdmin));
    }
}