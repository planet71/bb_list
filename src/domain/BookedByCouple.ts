export interface BookedByCouple {
    id: string;
    createdAt: number;
    emails: string[];
    partners: string[];
    profilePhoto: string;
    weddingDate: number;
    tasksDone?: number;
    tasksTotal?: number;
    guestsInitialTarget?: number;
    shortlistSizeVenues?: number;
}
