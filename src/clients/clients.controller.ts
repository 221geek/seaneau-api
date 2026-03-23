import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@ApiTags('Clients')
@ApiBearerAuth()
@Controller('clients')
@Roles(Role.SUPER_ADMIN, Role.TECHNICIAN)
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un client' })
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister tous les clients' })
  findAll() {
    return this.clientsService.findAll();
  }

  @Get('search')
  @ApiOperation({ summary: 'Rechercher des clients' })
  @ApiQuery({ name: 'q', description: 'Recherche par numéro abonné, nom ou téléphone' })
  search(@Query('q') query: string) {
    return this.clientsService.search(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un client par ID' })
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modifier un client' })
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(id, updateClientDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un client' })
  remove(@Param('id') id: string) {
    return this.clientsService.remove(id);
  }
}
