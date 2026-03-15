import { CreateProfessorService } from "@academic/professor/application/services/create-professor.service";
import { EditProfessorService } from "@academic/professor/application/services/edit-professor.service";
import { ListProfessorsService } from "@academic/professor/application/services/list-professors.service";
import { RemoveProfessorService } from "@academic/professor/application/services/remove-professor.service";
import { ReturnProfessorService } from "@academic/professor/application/services/return-professor.service";
import { PROFESSOR_REPOSITORY } from "@academic/professor/domain/repositories/professor-repository.interface";
import { ProfessorsController } from "@academic/professor/infra/controllers/professors.controller";
import { DrizzleProfessorRepository } from "@academic/professor/infra/repositories/drizzle-professor.repository";
import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [DatabaseModule],
  controllers: [ProfessorsController],
  providers: [
    CreateProfessorService,
    EditProfessorService,
    ListProfessorsService,
    ReturnProfessorService,
    RemoveProfessorService,
    DrizzleProfessorRepository,
    {
      provide: PROFESSOR_REPOSITORY,
      useExisting: DrizzleProfessorRepository,
    },
  ],
})
export class ProfessorModule {}
