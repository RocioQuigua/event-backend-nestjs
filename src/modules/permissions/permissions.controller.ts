import { Controller, Get, Query } from '@nestjs/common';
import { PermissionsService } from './permissions.service';

@Controller('permisos')
export class PermissionsController {
  constructor(private readonly _permissionsService: PermissionsService) {}

  @Get("/all")
  getAll() {
    return this._permissionsService.getAll();
  }

  @Get("/all/role")
  getAllRole(@Query() query) {
    const { role } = query;
    return this._permissionsService.getAllRole(role);
  }
}
