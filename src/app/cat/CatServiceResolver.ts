import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Cat } from "../models/cat";
import { CatService } from "./cat.service";

@Injectable({ providedIn: "root" })
export class CatServiceResolver implements Resolve<Cat> {

    constructor(
        private catService: CatService,
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Cat | Observable<Cat> | Promise<Cat> {
        return this.catService.getFact();
    }
}
