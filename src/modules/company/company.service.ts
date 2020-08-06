import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Company } from 'entities/company.entity';
import { UpdateCompanyDTO } from './dto/updateCompanyDTO';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly _companyRepository: Repository<Company>) {}

  getCompany() {
    const company = this._companyRepository.findOne({ where: { id: 1 } });
    return company;
  }

  updateCompany(body: UpdateCompanyDTO) {
    const result = this._companyRepository.update(1, body);
    return {result, status: true};
  }
}
