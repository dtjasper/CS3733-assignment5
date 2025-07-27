export type DataEntry = {
    Name: string;
    NumYears: string;
    FavMakeCat: string;
    FavMakeItem: string;
    Comments: string;
}

export interface statsArray {
    ClothingVotes: number;
    StuffedAnimalVotes: number;
    HouseItemVotes: number;
    OtherVotes: number;
    NoVotes: number;
}