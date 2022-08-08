export class UserModel {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public city: string,
    public zipCode: number
  ) {}
}
