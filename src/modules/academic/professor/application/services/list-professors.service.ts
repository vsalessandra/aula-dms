import { ProfessorDto } from "@academic/professor/application/dto/professor.dto";
import {
  PROFESSOR_REPOSITORY,
  type ProfessorRepository,
} from "@academic/professor/domain/repositories/professor-repository.interface";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class ListProfessorsService {
  constructor(
    @Inject(PROFESSOR_REPOSITORY)
    private readonly professorRepository: ProfessorRepository,
  ) {}

  async execute(): Promise<ProfessorDto[]> {
    const response = await this.professorRepository.findAll();
    return response.map((row) => ProfessorDto.fromProfessor(row)!);
  }
}
