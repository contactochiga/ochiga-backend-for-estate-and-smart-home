import { UserRole } from '../../user/entities/user.entity';

export class AuthResponseDto {
  token: string;
  user: {
    id: string;
    email: string;
    role: UserRole;
  };
}
