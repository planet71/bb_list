import { User } from '../../domain/User';

export interface RawBookedByCouple {
    id: string;
    createdAt: number;
    users: Contacts[];
    partners: string[];
    profilePhoto: string;
    weddingDate: number;
    collaborating: boolean;
    tasksDone?: number;
    tasksTotal?: number;
    guestsInitialTarget?: number;
    shortlistSizeVenues?: number;
}

export interface BookedByCouples {
    get(page: number): Promise<{ data: RawBookedByCouple[]; total: number }>;
}

interface Contacts {
    contacts: User;
}
