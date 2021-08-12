export interface RankingModel {
    userId: string;
    userName: string;
    userAvatar: string;
    avgPrice: number;
    volume7Days: number;
    totalNFTs: number;
    totalVolume: number;
    totalAssets: number;
    tag?: string;
}