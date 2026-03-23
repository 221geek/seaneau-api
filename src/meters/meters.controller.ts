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
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { MetersService } from './meters.service';
import { CreateMeterDto } from './dto/create-meter.dto';
import { UpdateMeterDto } from './dto/update-meter.dto';
import { AttachClientDto } from './dto/attach-client.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@ApiTags('Meters')
@ApiBearerAuth()
@Controller('meters')
@Roles(Role.SUPER_ADMIN, Role.TECHNICIAN)
export class MetersController {
  constructor(private readonly metersService: MetersService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un compteur' })
  create(@Body() createMeterDto: CreateMeterDto) {
    return this.metersService.create(createMeterDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister tous les compteurs' })
  findAll() {
    return this.metersService.findAll();
  }

  @Get('search')
  @ApiOperation({ summary: 'Rechercher des compteurs' })
  @ApiQuery({ name: 'q', description: 'Recherche par numéro de série ou statut' })
  search(@Query('q') query: string) {
    return this.metersService.search(query);
  }

  @Get('client/:clientId')
  @ApiOperation({ summary: 'Récupérer les compteurs d\'un client' })
  findByClient(@Param('clientId') clientId: string) {
    return this.metersService.findByClient(clientId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un compteur par ID' })
  findOne(@Param('id') id: string) {
    return this.metersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modifier un compteur' })
  update(@Param('id') id: string, @Body() updateMeterDto: UpdateMeterDto) {
    return this.metersService.update(id, updateMeterDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un compteur' })
  remove(@Param('id') id: string) {
    return this.metersService.remove(id);
  }

  @Patch(':id/attach')
  @ApiOperation({ summary: 'Rattacher un compteur à un client' })
  attachClient(
    @Param('id') id: string,
    @Body() attachClientDto: AttachClientDto,
  ) {
    return this.metersService.attachClient(id, attachClientDto.clientId);
  }

  @Patch(':id/detach')
  @ApiOperation({ summary: 'Détacher un compteur d\'un client' })
  detachClient(@Param('id') id: string) {
    return this.metersService.detachClient(id);
  }
}
