


export class LOGIN_TYPE{
  constructor(
    public token:string,
    public Message: string,
    public IsAuthenticated : string,
    public Username: string,
    public Email:string,
    public ExpiresOn:Date
  ){}

}
