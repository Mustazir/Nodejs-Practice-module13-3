

export interface IMango {
    name: string;
    variety: string;
    unit: "kg" | "pcs";
    price: number;
    stock: number;
    origin: string;
    season: string; 
}