"use server"

import { addTask } from "@/database/tasks";

export default async function createTaskAction(columnId: string, content: string) {
    return await addTask(columnId, content);
}