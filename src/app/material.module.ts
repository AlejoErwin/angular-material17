import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';





@NgModule({
    imports: [
        MatButtonModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatTableModule
    ],

})

export class MaterialModule {}