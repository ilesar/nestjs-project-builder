import { RefreshTokenModel } from '@application/auth/models/refresh-token.model';

export class AccessTokenModel {
  token: string;
  expiresIn: number;
  refreshToken: RefreshTokenModel;

  setRefreshToken(refreshToken: RefreshTokenModel) {
    this.refreshToken = refreshToken;
  }
}
