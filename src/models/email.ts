class Email {
  public email: string;
  constructor(email: string) {
    if (this.validateEmail(email)) {
      this.email = email;
    } else {
      throw new Error("Invalid email!");
    }
  }
  public validateEmail(email: string) {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }
}
