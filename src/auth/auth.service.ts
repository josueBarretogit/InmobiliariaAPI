import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(correo: string, contrasena: string): Promise<any> {
    const usuario: Usuario = await this.usuarioService.findOne(correo);
    if (usuario?.contrasena !== contrasena) {
      throw new UnauthorizedException();
    }
    const usuarioPayload = { id: usuario.id, correo: usuario.correo };
    return { access_token: await this.jwtService.signAsync(usuarioPayload) };
  }

  async signUp(correo: string, contrasena: string): Promise<any> {
    const usuario: Usuario = await this.usuarioService.findOne(correo);
    if (usuario?.contrasena !== contrasena) {
      throw new UnauthorizedException();
    }
    const usuarioPayload = { id: usuario.id, correo: usuario.correo };
    return { access_token: await this.jwtService.signAsync(usuarioPayload) };
  }

  async getProfile(correo: string): Promise<any> {
    const usuario: Usuario = await this.usuarioService.findOne(correo);

    return { usuario };
  }
}
