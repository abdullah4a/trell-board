// Basic Needed Column Interface

export interface IColumn {
    id: string;
    name: string;
    group:{
        name:string;
        pull:boolean|Array<string>;
        push:boolean|Array<string>;
    }
    noTaskText: string; 
}