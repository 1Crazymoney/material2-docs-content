/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/common";
function TableStickyFooterExample_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Item ");
    i0.ɵɵelementEnd();
} }
function TableStickyFooterExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r301 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", transaction_r301.item, " ");
} }
function TableStickyFooterExample_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1, " Total ");
    i0.ɵɵelementEnd();
} }
function TableStickyFooterExample_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Cost ");
    i0.ɵɵelementEnd();
} }
function TableStickyFooterExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r302 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, transaction_r302.cost), " ");
} }
function TableStickyFooterExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r297 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r297.getTotalCost()), " ");
} }
function TableStickyFooterExample_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 13);
} }
function TableStickyFooterExample_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function TableStickyFooterExample_tr_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 15);
} }
/**
 * @record
 */
export function Transaction() { }
if (false) {
    /** @type {?} */
    Transaction.prototype.item;
    /** @type {?} */
    Transaction.prototype.cost;
}
/**
 * \@title Table with a sticky footer
 */
export class TableStickyFooterExample {
    constructor() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    getTotalCost() {
        return this.transactions.map((/**
         * @param {?} t
         * @return {?}
         */
        t => t.cost)).reduce((/**
         * @param {?} acc
         * @param {?} value
         * @return {?}
         */
        (acc, value) => acc + value), 0);
    }
}
TableStickyFooterExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-footer-example',
                styleUrls: ['table-sticky-footer-example.css'],
                templateUrl: 'table-sticky-footer-example.html',
            },] },
];
/** @nocollapse */ TableStickyFooterExample.ngFactoryDef = function TableStickyFooterExample_Factory(t) { return new (t || TableStickyFooterExample)(); };
/** @nocollapse */ TableStickyFooterExample.ngComponentDef = i0.ɵɵdefineComponent({ type: TableStickyFooterExample, selectors: [["table-sticky-footer-example"]], decls: 13, vars: 5, consts: [[1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function TableStickyFooterExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "table", 1);
        i0.ɵɵelementContainerStart(2, 2);
        i0.ɵɵtemplate(3, TableStickyFooterExample_th_3_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(4, TableStickyFooterExample_td_4_Template, 2, 1, "td", 4);
        i0.ɵɵtemplate(5, TableStickyFooterExample_td_5_Template, 2, 0, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(6, 6);
        i0.ɵɵtemplate(7, TableStickyFooterExample_th_7_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(8, TableStickyFooterExample_td_8_Template, 3, 3, "td", 4);
        i0.ɵɵtemplate(9, TableStickyFooterExample_td_9_Template, 3, 3, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(10, TableStickyFooterExample_tr_10_Template, 1, 0, "tr", 7);
        i0.ɵɵtemplate(11, TableStickyFooterExample_tr_11_Template, 1, 0, "tr", 8);
        i0.ɵɵtemplate(12, TableStickyFooterExample_tr_12_Template, 1, 0, "tr", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx.transactions);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matFooterRowDef", ctx.displayedColumns)("matFooterRowDefSticky", true);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatFooterCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatFooterRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatFooterCell, i1.MatHeaderRow, i1.MatRow, i1.MatFooterRow], pipes: [i2.CurrencyPipe], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 270px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.mat-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%] {\n  border-top: 1px solid #e0e0e0;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(TableStickyFooterExample, [{
        type: Component,
        args: [{
                selector: 'table-sticky-footer-example',
                styleUrls: ['table-sticky-footer-example.css'],
                templateUrl: 'table-sticky-footer-example.html',
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    TableStickyFooterExample.prototype.displayedColumns;
    /** @type {?} */
    TableStickyFooterExample.prototype.transactions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc3RpY2t5LWZvb3Rlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLXN0aWNreS1mb290ZXIvdGFibGUtc3RpY2t5LWZvb3Rlci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLXN0aWNreS1mb290ZXIvdGFibGUtc3RpY2t5LWZvb3Rlci1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDSWxDLDhCQUF1QztJQUFBLHNCQUFLO0lBQUEsaUJBQUs7OztJQUNqRCw4QkFBNEM7SUFBQSxZQUFxQjtJQUFBLGlCQUFLOzs7SUFBMUIsZUFBcUI7SUFBckIsc0RBQXFCOzs7SUFDakUsOEJBQXVDO0lBQUEsdUJBQU07SUFBQSxpQkFBSzs7O0lBS2xELDhCQUF1QztJQUFBLHNCQUFLO0lBQUEsaUJBQUs7OztJQUNqRCw4QkFBNEM7SUFBQSxZQUFnQzs7SUFBQSxpQkFBSzs7O0lBQXJDLGVBQWdDO0lBQWhDLDRFQUFnQzs7O0lBQzVFLDhCQUF1QztJQUFBLFlBQThCOztJQUFBLGlCQUFLOzs7SUFBbkMsZUFBOEI7SUFBOUIsOEVBQThCOzs7SUFHdkUseUJBQTREOzs7SUFDNUQseUJBQWtFOzs7SUFDbEUseUJBQTBFOzs7OztBRGhCOUUsaUNBR0M7OztJQUZDLDJCQUFhOztJQUNiLDJCQUFhOzs7OztBQVdmLE1BQU0sT0FBTyx3QkFBd0I7SUFMckM7UUFNRSxxQkFBZ0IsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwQyxpQkFBWSxHQUFrQjtZQUM1QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUN4QixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUMxQixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztZQUMxQixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztTQUM5QixDQUFDO0tBTUg7Ozs7O0lBSEMsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztnQkFDOUMsV0FBVyxFQUFFLGtDQUFrQzthQUNoRDs7d0dBQ1ksd0JBQXdCO3VFQUF4Qix3QkFBd0I7UUNmckMsOEJBQ0U7UUFBQSxnQ0FDRTtRQUNBLGdDQUNFO1FBQUEsdUVBQXVDO1FBQ3ZDLHVFQUE0QztRQUM1Qyx1RUFBdUM7UUFDekMsMEJBQWU7UUFHZixnQ0FDRTtRQUFBLHVFQUF1QztRQUN2Qyx1RUFBNEM7UUFDNUMsdUVBQXVDO1FBQ3pDLDBCQUFlO1FBRWYseUVBQXVEO1FBQ3ZELHlFQUE2RDtRQUM3RCx5RUFBcUU7UUFDdkUsaUJBQVE7UUFDVixpQkFBTTs7UUFuQmEsZUFBMkI7UUFBM0IsNkNBQTJCO1FBZXZCLGVBQW1DO1FBQW5DLHNEQUFtQztRQUMxQyxlQUFnRDtRQUFoRCx1REFBZ0Q7UUFDekMsZUFBaUQ7UUFBakQsc0RBQWlELCtCQUFBOzttQ0RIM0Qsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztnQkFDOUMsV0FBVyxFQUFFLGtDQUFrQzthQUNoRDs7OztJQUVDLG9EQUFvQzs7SUFDcEMsZ0RBT0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb24ge1xuICBpdGVtOiBzdHJpbmc7XG4gIGNvc3Q6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgd2l0aCBhIHN0aWNreSBmb290ZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtc3RpY2t5LWZvb3Rlci1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLXN0aWNreS1mb290ZXItZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1zdGlja3ktZm9vdGVyLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlU3RpY2t5Rm9vdGVyRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnMgPSBbJ2l0ZW0nLCAnY29zdCddO1xuICB0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW10gPSBbXG4gICAge2l0ZW06ICdCZWFjaCBiYWxsJywgY29zdDogNH0sXG4gICAge2l0ZW06ICdUb3dlbCcsIGNvc3Q6IDV9LFxuICAgIHtpdGVtOiAnRnJpc2JlZScsIGNvc3Q6IDJ9LFxuICAgIHtpdGVtOiAnU3Vuc2NyZWVuJywgY29zdDogNH0sXG4gICAge2l0ZW06ICdDb29sZXInLCBjb3N0OiAyNX0sXG4gICAge2l0ZW06ICdTd2ltIHN1aXQnLCBjb3N0OiAxNX0sXG4gIF07XG5cbiAgLyoqIEdldHMgdGhlIHRvdGFsIGNvc3Qgb2YgYWxsIHRyYW5zYWN0aW9ucy4gKi9cbiAgZ2V0VG90YWxDb3N0KCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zYWN0aW9ucy5tYXAodCA9PiB0LmNvc3QpLnJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4gYWNjICsgdmFsdWUsIDApO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXIgbWF0LWVsZXZhdGlvbi16OFwiPlxuICA8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cInRyYW5zYWN0aW9uc1wiPlxuICAgIDwhLS0gSXRlbSBDb2x1bW4gLS0+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJpdGVtXCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBJdGVtIDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgdHJhbnNhY3Rpb25cIj4ge3t0cmFuc2FjdGlvbi5pdGVtfX0gPC90ZD5cbiAgICAgIDx0ZCBtYXQtZm9vdGVyLWNlbGwgKm1hdEZvb3RlckNlbGxEZWY+IFRvdGFsIDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tIENvc3QgQ29sdW1uIC0tPlxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiY29zdFwiPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gQ29zdCA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHRyYW5zYWN0aW9uXCI+IHt7dHJhbnNhY3Rpb24uY29zdCB8IGN1cnJlbmN5fX0gPC90ZD5cbiAgICAgIDx0ZCBtYXQtZm9vdGVyLWNlbGwgKm1hdEZvb3RlckNlbGxEZWY+IHt7Z2V0VG90YWxDb3N0KCkgfCBjdXJyZW5jeX19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG4gICAgPHRyIG1hdC1mb290ZXItcm93ICptYXRGb290ZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zOyBzdGlja3k6IHRydWVcIj48L3RyPlxuICA8L3RhYmxlPlxuPC9kaXY+XG4iXX0=