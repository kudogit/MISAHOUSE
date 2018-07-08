import { NgModule } from '@angular/core';
import { Routes , RouterModule, Router } from '@angular/router';

const appRoutes: Routes = [
    { path: 'index', loadChildren:'./modules/themes/admin.module#AdminModule'},
    { path: '',
      redirectTo: '/index',
      pathMatch: 'full'
    },
  ];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}