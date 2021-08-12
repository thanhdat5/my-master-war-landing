import { UserModel } from "./UserModel";

export interface NFTModel {
    id: string;
    name: string;
    image: string;
    priceBSC?: number;
    priceUSD?: number;
    likedCount?: number | 0;
    viewedCount?: number | 0;
    createdDate?: string;
    description?: string;
    creator?: UserModel
}