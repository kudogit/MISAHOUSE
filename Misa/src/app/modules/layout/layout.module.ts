import { NgModule } from '@angular/core';
import { TopHeaderComponent } from './top-header/top-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { UnderFooterComponent } from './under-footer/under-footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    exports:[
        TopHeaderComponent,
        SidebarComponent,
        FooterComponent,
        UnderFooterComponent
    ],
    declarations:[
        TopHeaderComponent,
        SidebarComponent,
        FooterComponent,
        UnderFooterComponent
    ],
    imports:[
        CommonModule,
        RouterModule
    ]
})

export class LayoutModule{

}