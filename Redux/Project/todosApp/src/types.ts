export interface Itasks {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "ALL" | "HIGH" | "MEDIUM" | "LOW";
  assignedTo: string;
}

export interface IUsers{
  id: string;
  name: string;

}