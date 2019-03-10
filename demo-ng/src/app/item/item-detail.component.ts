import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { NSProgressHud } from 'NSProgressHud';

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) {
        let spinner = new NSProgressHud();

        spinner.showProgress("Success", {spinnerColor: '#FFFFFF', hudColor: '#808080', tintColor: '#FFF543', progressType: 'indeterminate',  labelColor: '#FFFFFF'});

        setTimeout(() => {
            spinner.showProgress("Loading", {progressTick: .01, progressType: 'annular',  labelColor: '#FFFFFF'})
        }, 10000);

        setTimeout(() => {
            spinner.showProgress("Loading", {progressTick: .01, progressType: 'bar', labelColor: '#FFFFFF'})
        }, 15000);
    }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    }
}
