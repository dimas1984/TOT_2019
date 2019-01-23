import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable, of  } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { switchMap} from 'rxjs/operators';
import { UserService } from './user.service';
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$:Observable<firebase.User>;
 
  
  //tambahkan parameter ActivedRoute
  constructor(
    private db:AngularFireDatabase,
    private userService:UserService,
    private afAuth:AngularFireAuth, 
    private route :ActivatedRoute) {

    this.user$= afAuth.authState;
   }

   // tambahakan property snapshot pada route dan property queryParamMap
  login(){
    let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl')||'/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }
 
get appUser$() : Observable<AppUser> {
  
    return this.user$.pipe(
    switchMap(user =>
      {
        if (user){
          return this.db.object('/users/'+ user.uid).valueChanges();
        } else{
          return of(null);
        }
      }
     ))
  }
}
