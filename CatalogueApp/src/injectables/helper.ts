import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetConstant } from './common';

@Injectable()
export class Helper {
    constructor(public constObj:GetConstant) {
        
    }

    public redirectToPage = function (page){
    }
}