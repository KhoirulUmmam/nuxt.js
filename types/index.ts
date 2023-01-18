export interface ISteak {
    _id?:string;
    name: string;
    quality: string;
    imported: IImport;
    shipment: string;
    pageCount: number;
}

export interface IImport {
    name: string;
    _id?: string;
}