import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { NSProgressHud } from 'nativescript-NSProgressHud';

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
        spinner.showSuccess("Success");
        setTimeout(() => {
            spinner.showError("Error");
        }, 5000);

        setTimeout(() => {
        spinner.showLoading();
        }, 10000);
    }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    }
}
