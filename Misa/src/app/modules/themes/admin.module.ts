import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
    imports:[
        AdminRoutingModule,
        LayoutModule
    ],
    exports:[]
})

export class AdminModule{

}