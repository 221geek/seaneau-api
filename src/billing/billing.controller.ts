import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { BillingService } from './billing.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@ApiTags('Billing')
@ApiBearerAuth()
@Controller('billing')
@Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.TECHNICIAN)
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post()
  @ApiOperation({ summary: 'Créer une facture' })
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  create(@Body() dto: CreateInvoiceDto) {
    return this.billingService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister toutes les factures' })
  findAll() {
    return this.billingService.findAll();
  }

  @Get('search')
  @ApiOperation({ summary: 'Rechercher des factures' })
  @ApiQuery({ name: 'q', description: 'Recherche par période ou statut' })
  search(@Query('q') query: string) {
    return this.billingService.search(query);
  }

  @Get('client/:clientId')
  @ApiOperation({ summary: 'Factures d\'un client' })
  findByClient(@Param('clientId') clientId: string) {
    return this.billingService.findByClient(clientId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une facture' })
  findOne(@Param('id') id: string) {
    return this.billingService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modifier une facture' })
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  update(@Param('id') id: string, @Body() dto: UpdateInvoiceDto) {
    return this.billingService.update(id, dto);
  }

  @Patch(':id/pay')
  @ApiOperation({ summary: 'Marquer une facture comme payée' })
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  markAsPaid(@Param('id') id: string) {
    return this.billingService.markAsPaid(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une facture' })
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.billingService.remove(id);
  }
}
