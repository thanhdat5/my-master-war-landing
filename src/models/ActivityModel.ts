import { UserModel } from "./UserModel";

export interface ActivityModel {
    id: string;
    event: string;
    price: number;
    from: UserModel;
    to?: UserModel;
    date: string
}