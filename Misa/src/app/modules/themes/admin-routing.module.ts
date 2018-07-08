import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

const adminRouting : Routes = [
    {
        path:'',
        component:IndexComponent, 
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(adminRouting),
    ],
    declarations:[
        IndexComponent
    ],
    exports:[
        IndexComponent
    ]
})

export class AdminRoutingModule{

}