export enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

export interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamaged?: (reason: string) => void;
}

export interface Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer: (custName: string) => void;
}