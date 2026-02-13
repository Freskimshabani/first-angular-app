import { Component } from '@angular/core';
import { LucideAngularModule, ClipboardCheck } from 'lucide-angular';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports: [LucideAngularModule],
    styleUrl: './header.component.css'
})

export class HeaderComponent {
    readonly ClipboardCheck = ClipboardCheck;
}
