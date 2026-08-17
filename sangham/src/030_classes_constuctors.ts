class UserN5 {
  id: string;
  name: string;
  email?: string;
  createdAt: Date = new Date(); // initialization at declaration

  constructor(id: string, name: string, email?: string) {
    //assign all required fields here
    this.id = id;
    this.name = name;
    if (email) this.email = email;
  }
}

const result4 = new UserN5("1", "Muizz");
const result5 = new UserN5("2", "Rafid", "mr123");
