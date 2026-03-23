import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsersService } from './users/users.service';
import { Role } from './common/enums/role.enum';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Seed');
  const app = await NestFactory.createApplicationContext(AppModule);

  const usersService = app.get(UsersService);

  const adminEmail = 'admin@seneau.sn';
  const existingAdmin = await usersService.findByEmail(adminEmail);

  if (!existingAdmin) {
    await usersService.create({
      email: adminEmail,
      password: 'Admin@2024',
      firstName: 'Super',
      lastName: 'Admin',
      role: Role.SUPER_ADMIN,
    });
    logger.log('Super Admin créé avec succès (admin@seneau.sn / Admin@2024)');
  } else {
    logger.log('Super Admin existe déjà');
  }

  await app.close();
}

bootstrap();
