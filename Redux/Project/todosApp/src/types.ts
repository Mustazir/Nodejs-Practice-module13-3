export interface Itasks {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority:"ALL"| "HIGH" | "MEDIUM" | "LOW";
}

export interface IUsers{
  id: string;
  name: string;

}