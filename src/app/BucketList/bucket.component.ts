import { Component } from "@angular/core";
import { ProjectServices } from "./ProjectService";
import { Project } from "../Shared/Project";
import { RowArgs } from "@progress/kendo-angular-grid";
import { SelectableSettings } from "@progress/kendo-angular-grid/dist/es2015/selection/selectable-settings";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    selector: 'app-bucketlist',
    templateUrl: './bucket.component.html'
})



export class BucketListComponent {


    private AddPopup: boolean = true;
    public projectLists: Project[];
    private selectedKeys: number[] = [];

    public selectableSettings: SelectableSettings;
    public mySelectionKey(context: RowArgs): number {

        return context.dataItem.projectId;
    }
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _projectService: ProjectServices) {
    }
    ngOnInit() {
        this._projectService.getProjectList()
            .subscribe(
            result => {
                this.projectLists = result;
            });

        this.selectableSettings = {
            mode: 'single'
        }
    }


    onAddButtonClick() {
        this.router.navigateByUrl("project/New")
    }

    onEditButtonClick() {
        const selected = this.selectedKeys[0];
        this.router.navigateByUrl('project/'+selected);

    }

    onDeleteButtonClick() {
        const selected = this.selectedKeys[0];

        this._projectService.deleteProject(selected)
            .subscribe(
            result => {
                alert(result);

            });
    }
}



