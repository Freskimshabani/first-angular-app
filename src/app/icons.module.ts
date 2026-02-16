import { NgModule } from "@angular/core";
import { Plus, ClipboardCheck, LucideAngularModule, CircleCheckBig, XIcon } from "lucide-angular";

@NgModule({
    imports: [
        LucideAngularModule.pick({XIcon, Plus, ClipboardCheck, CircleCheckBig})
    ]
})

export class IconsModule { }