export interface Itasks {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "HIGH" | "MEDIUM" | "LOW";
}
