import { Types } from "mongoose";

export interface INote {
    title: string;
    content?: string; // optional field
    category?: "work" | "personal" | "other"; // fixed values only
    pinned?: boolean; // default is false
    tags?: {
        label: string;
        color?: string; // optional field, default is blue
    };
    user : Types.ObjectId;
}