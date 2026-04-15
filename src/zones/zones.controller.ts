import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { ZonesService } from './zones.service';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@ApiTags('Zones')
@ApiBearerAuth()
@Controller('zones')
@Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.TECHNICIAN)
export class ZonesController {
  constructor(private readonly zonesService: ZonesService) {}

  @Post()
  @ApiOperation({ summary: 'Créer une zone de distribution' })
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  create(@Body() dto: CreateZoneDto) {
    return this.zonesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister toutes les zones' })
  findAll() {
    return this.zonesService.findAll();
  }

  @Get('search')
  @ApiOperation({ summary: 'Rechercher des zones' })
  @ApiQuery({ name: 'q', description: 'Recherche par nom ou région' })
  search(@Query('q') query: string) {
    return this.zonesService.search(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une zone' })
  findOne(@Param('id') id: string) {
    return this.zonesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modifier une zone' })
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  update(@Param('id') id: string, @Body() dto: UpdateZoneDto) {
    return this.zonesService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une zone' })
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.zonesService.remove(id);
  }
}
