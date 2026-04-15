import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { InterventionsService } from './interventions.service';
import { CreateInterventionDto } from './dto/create-intervention.dto';
import { UpdateInterventionDto } from './dto/update-intervention.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@ApiTags('Interventions')
@ApiBearerAuth()
@Controller('interventions')
@Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.TECHNICIAN)
export class InterventionsController {
  constructor(private readonly interventionsService: InterventionsService) {}

  @Post()
  @ApiOperation({ summary: 'Créer une intervention' })
  create(@Body() dto: CreateInterventionDto) {
    return this.interventionsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister toutes les interventions' })
  findAll() {
    return this.interventionsService.findAll();
  }

  @Get('search')
  @ApiOperation({ summary: 'Rechercher des interventions' })
  @ApiQuery({ name: 'q', description: 'Recherche par type, statut ou description' })
  search(@Query('q') query: string) {
    return this.interventionsService.search(query);
  }

  @Get('meter/:meterId')
  @ApiOperation({ summary: 'Interventions d\'un compteur' })
  findByMeter(@Param('meterId') meterId: string) {
    return this.interventionsService.findByMeter(meterId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une intervention' })
  findOne(@Param('id') id: string) {
    return this.interventionsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modifier une intervention' })
  update(@Param('id') id: string, @Body() dto: UpdateInterventionDto) {
    return this.interventionsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une intervention' })
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.interventionsService.remove(id);
  }
}
