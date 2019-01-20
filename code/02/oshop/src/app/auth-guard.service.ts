import { Observable} from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot,ActivatedRouteSnapshot,CanActivate} from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// @Injectable()
export class AuthGuard implements CanActivate{

  
  constructor(private auth:AuthService,private router:Router) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean
    {
      return this.auth.user$.pipe(
        map(user =>{
          if (user){
            return true;
          } 
          this.router.navigate(["/login"]);
          return false;
        })
      );
    }
}