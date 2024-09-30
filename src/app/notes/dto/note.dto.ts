import {
  IsString,
  Length,
  IsUUID,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
} from "class-validator";

export class NoteType {
  @Length(5, 20, { message: "Title must be between 10 and 20 characters." })
  @IsString({ message: "Title must be a string." })
  @IsNotEmpty({ message: "Title cannot be empty." })
  title: string;

  @Length(5, 50, {
    message: "Description must be between 10 and 30 characters.",
  })
  @IsString({ message: "Description must be a string." })
  @IsNotEmpty({ message: "Description cannot be empty." })
  description: string;

  @Length(5, 200, { message: "Content must be between 5 and 200 characters." })
  @IsString({ message: "Content must be a string." })
  @IsNotEmpty({ message: "Content cannot be empty." })
  content: string;
}

export class UpdateNoteType {
  @Length(5, 20, { message: "Title must be between 10 and 20 characters." })
  @IsString({ message: "Title must be a string." })
  @IsOptional({ message: "Title cannot be empty." })
  title?: string;

  @Length(10, 30, {
    message: "Description must be between 10 and 30 characters.",
  })
  @IsString({ message: "Description must be a string." })
  @IsOptional({ message: "Description cannot be empty." })
  description?: string;

  @Length(10, 200, { message: "Content must be between 5 and 200 characters." })
  @IsString({ message: "Content must be a string." })
  @IsOptional({ message: "Content cannot be empty." })
  content?: string;

  @IsBoolean({ message: "Available must be a boolean." })
  @IsOptional({ message: "Available cannot be empty." })
  available?: boolean;
}

export class NoteId {
  constructor(id: string) {
    this.id = id;
  }
  @IsUUID(undefined, { message: "ID must be a valid UUID." })
  @IsString({ message: "ID must be a string." })
  @IsNotEmpty({ message: "ID cannot be empty." })
  id: string;
}
