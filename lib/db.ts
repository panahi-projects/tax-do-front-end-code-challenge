import Dexie, { Table } from "dexie";
import { User } from "@/types";

class MyAppDB extends Dexie {
  favorites!: Table<User>;

  constructor() {
    super("MyAppDB");
    this.version(1).stores({
      favorites: "email", // use email as a unique identifier
    });
  }
}

export const db = new MyAppDB();
