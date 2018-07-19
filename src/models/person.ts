class Person {
  public name: string;
  public surname: string;
  public email: Email;
  constructor(name: string, surname: string, email: Email) {
    this.email = email;
    this.name = name;
    this.surname = surname;
  }
  public greet() {
    alert('Hi!');
  }
}
