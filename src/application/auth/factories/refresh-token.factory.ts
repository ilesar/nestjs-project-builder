import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { RefreshTokenModel } from '@application/auth/models/refresh-token.model';
import { UserAccountModel } from '@domain/models/user-account.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RefreshTokenFactory {
  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  createTokenForUser(userAccount: UserAccountModel): RefreshTokenModel {
    const refreshToken = new RefreshTokenModel();
    refreshToken.token = 'refreshTokenForUser' + userAccount.username;
    refreshToken.expiresIn = this.calculateRefreshTokenExpirationTime();
    refreshToken.isRevoked = false;

    return refreshToken;
  }

  private calculateRefreshTokenExpirationTime(): number {
    return this.config.get('REFRESH_TOKEN_EXPIRATION_TIME');
  }
}