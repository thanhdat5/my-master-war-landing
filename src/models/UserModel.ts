export interface UserModel {
    id: string;
    username: string;
    avatar: string;
    coverImage?: string;
    totalNFTs?: number;
    walletAddress?: string;
    bio?: string;
    social?: string;
    verified?: boolean;
}