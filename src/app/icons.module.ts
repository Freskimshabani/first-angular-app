import { NgModule } from "@angular/core";
import { ClipboardCheck, LucideAngularModule } from "lucide-angular";

@NgModule({
    imports: [
        LucideAngularModule.pick({ ClipboardCheck })
    ]
})

export class IconsModule { }