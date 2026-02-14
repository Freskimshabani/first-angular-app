import { NgModule } from "@angular/core";
import { Plus, ClipboardCheck, LucideAngularModule, CircleCheckBig } from "lucide-angular";

@NgModule({
    imports: [
        LucideAngularModule.pick({Plus, ClipboardCheck, CircleCheckBig})
    ]
})

export class IconsModule { }