import { Component,EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    @Output('featureType') featureType = new EventEmitter<string>();

   
    onSelected(features:string){
        this.featureType.emit(features);
    }
}