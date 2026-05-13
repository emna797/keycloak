import { Routes } from '@angular/router';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { canActivateAuthRole } from './guards/auth-role.guard';
import { PlantesComponent } from './plantes/plantes.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
  {
    path: 'plantes',
    component: PlantesComponent,
    canActivate: [canActivateAuthRole],
    data: { role: 'ADMIN' },
  },
  {
    path: 'profile',
    component: UserProfileComponent,
  },
  { path: 'forbidden', component: ForbiddenComponent },
];
