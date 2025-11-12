import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./service/auth.service";

export class authGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean  {
    if (!this.auth.isLoggedIn()) {
       this.router.navigate(['/auth/login']);
    }
    return true;
  }
};
