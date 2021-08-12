export interface UserStatModel {
    icon: string;
    value: string;
    title: string
}
export interface UserStatsModel {
    nfts: UserStatModel,
    balance: UserStatModel
}