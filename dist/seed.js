"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const users_service_1 = require("./users/users.service");
const role_enum_1 = require("./common/enums/role.enum");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const logger = new common_1.Logger('Seed');
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const usersService = app.get(users_service_1.UsersService);
    const adminEmail = 'admin@seneau.sn';
    const existingAdmin = await usersService.findByEmail(adminEmail);
    if (!existingAdmin) {
        await usersService.create({
            email: adminEmail,
            password: 'Admin@2024',
            firstName: 'Super',
            lastName: 'Admin',
            role: role_enum_1.Role.SUPER_ADMIN,
        });
        logger.log('Super Admin créé avec succès (admin@seneau.sn / Admin@2024)');
    }
    else {
        logger.log('Super Admin existe déjà');
    }
    await app.close();
}
bootstrap();
//# sourceMappingURL=seed.js.map