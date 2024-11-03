import { Controller, Get, Post, Body, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Post('login') // Endpoint para login
  async login(@Body() body: { email: string; password: string }): Promise<any> {
    const { email, password } = body;

    // Encontre o usuário pelo email
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    // Aqui não estamos usando bcrypt, então vamos comparar as senhas em texto simples
    if (user.password_hash !== password) {
      throw new UnauthorizedException('Senha incorreta');
    }

    // Se tudo estiver correto, você pode retornar o usuário ou um token
    return { message: 'Login bem-sucedido', user };
  }
}
