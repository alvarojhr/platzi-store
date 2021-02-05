import { Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    OnInit,
    DoCheck,
    OnDestroy,
    SimpleChanges} from '@angular/core';

import { Product } from '../../../product.model';

import {CartService} from '../../../core/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy{
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(
        private cartService: CartService,
    ){
        console.log('constructor');
    }

    // ngOnChanges(changes: SimpleChanges){
    //     console.log('ngOnChanges');
    //     console.log(changes);
    // }

    ngOnInit(){
        console.log('ngOnInit');
    }

    ngDoCheck(){
        //console.log('ngDoCheck');
    }

    ngOnDestroy(){
        console.log('ngDestroy');
    }

    addCart(){
        console.log('Añadir al carrito');
        this.cartService.addCart(this.product);
    }
}
