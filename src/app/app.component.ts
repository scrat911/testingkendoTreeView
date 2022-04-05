import { Component } from '@angular/core';
import { filesystem, Entry } from './filesystem';

@Component({
    selector: 'my-app',
    template: `<kendo-treelist
        kendoTreeListExpandable
        [kendoTreeListHierarchyBinding]="data"
        childrenField="contents"
        [pageable]="true"
        [pageSize]="9"
        [sortable]="true"
        [height]="600"
    >
        <kendo-treelist-column [expandable]="true" field="name" title="" [width]="400">
            <ng-template kendoTreeListCellTemplate let-dataItem>
                <span class="k-icon k-i-{{ dataItem.type === 'directory' ? 'folder' : 'file' }}"></span>
                {{ dataItem.name }}
            </ng-template>
        </kendo-treelist-column>
        <kendo-treelist-column-group [title]="column.name" *ngFor="let column of columns">
            <kendo-treelist-column-group [title]="subCol.name" *ngFor="let subCol of column.columns">
                <kendo-treelist-column [title]="col.name" *ngFor="let col of subCol.columns"> </kendo-treelist-column>
            </kendo-treelist-column-group>
        </kendo-treelist-column-group>
    </kendo-treelist> `,
})
export class AppComponent {
    public data: Entry[] = filesystem;
    public columns = [
        {
            name: 'Big 1',
            columns: [
                {
                    name: 'small 1',
                    columns: [
                        {
                            name: '1',
                        },
                        {
                            name: '2',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Big 2',
            columns: [
                {
                    name: 'small 2',
                    columns: [
                        {
                            name: '3',
                        },
                        {
                            name: '4',
                        },
                    ],
                },
            ],
        },
    ];
}
