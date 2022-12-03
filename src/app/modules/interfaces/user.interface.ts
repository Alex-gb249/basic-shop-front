export interface User{
  id:number;
  name:string;
  username:string;
  password:string;
  role:Role[];
}

export enum Role {
  ROLE_ADMIN = "ROLE_ADMIN",
  ROLE_USER = "ROLE_USER"
}
