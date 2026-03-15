import type { Professor } from "@academic/students/domain/models/professor.entity";

export class ProfessorDto {
    private constructor(
        public name: string,
        public email: string,
        public document: string,
        public registration: string,
    ) {}    