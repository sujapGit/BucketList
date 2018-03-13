export class Project {

    constructor(


        public ProjectId: number,
        public Name: string,
        public Description: string,

        public StartDate: Date,
        public EndDate: Date,

        public CreatedDate: Date,
        public StatusId: number,


    ) { }

}