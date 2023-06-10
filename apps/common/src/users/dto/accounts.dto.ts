export class AccountDto {
  user_id: number;
  username: string;
  password: string;
  email: string;
}

export class ResponseDto {
  accounts: AccountDto[];
}

export class UserDto {
  name: string;
}
