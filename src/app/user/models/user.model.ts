export class UserModel {
  constructor(
    public _id?: string,
    public name?: string,
    public email?: string,
    public street?: string,
    public city?: string,
    public zipcode?: number,
    public tasks?: [],
    public posts?: []
  ) {}
}
