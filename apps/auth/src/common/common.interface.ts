import { Observable } from 'rxjs';

interface CommonGrpcServicesInterface {
  find(req: IUser): Observable<any>;
}

interface IUser {
  user: string;
}

// interface Response {

// }
// interface Account {

// }
export { CommonGrpcServicesInterface };
