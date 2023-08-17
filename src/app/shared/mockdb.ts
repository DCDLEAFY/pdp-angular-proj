export interface Game {
    id: number;
    Title: string;
    Description: string;
    Genre: string;
    RRP: number;
    ImagePath: string;
    isDeleted: boolean;
}

export const listOfGames : Game[] = [
    {
        id: 1,
        Title: "Game Number 1",
        Description: "Description 1",
        Genre: "Genre 1",
        RRP: 11,
        ImagePath: "1",
        isDeleted: false
    },
    {
        id: 2,
        Title: "Game Number 2",
        Description: "Description 2",
        Genre: "Genre 2",
        RRP: 22,
        ImagePath: "2",
        isDeleted: false
    },
    {
        id: 3,
        Title: "Game Number 3",
        Description: "Description 3",
        Genre: "Genre 3",
        RRP: 30,
        ImagePath: "3",
        isDeleted: true
    },
]

