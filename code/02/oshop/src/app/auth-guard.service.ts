import { Observable} from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, RouterStateSnapshot,ActivatedRouteSnapshot} from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// @Injectable()
export class AuthGuard implements CanActivate{

  path:ActivatedRouteSnapshot[];
  route:ActivatedRouteSnapshot;
  
  constructor(private auth:AuthService,private router:Router) { }

    canActive(
      next: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot
      ):Observable<boolean>
    {
      return this.auth.user$.pipe(
        map(user =>{
          if (user){
            return true;
          } 
          this.router.navigate(["/"]);
          return false;
        })
      );
      
    }

}
 