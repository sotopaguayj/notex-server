import { NoteResponse } from "../../types/app.types";
import { prisma } from "../../config/prismaClient";
import { NoteType, UpdateNoteType } from "./dto/note.dto";

export default class NotesServices {
  constructor() {}

  private async existNote(noteId: string) {
    const note = await prisma.note.findUnique({ where: { id: noteId } });
    if (!note)
      return {
        status: 404,
        message: "This note doesnt exist",
        data: noteId,
      };
    return {
      status: 200,
      message: "Note found",
      data: note,
    };
  }

  private errorResponse = (err: any) => {
    return {
      status: 500,
      message: "Prisma Error",
      error: err.message,
    };
  };

  public async getOneNote(noteId: string): Promise<NoteResponse> {
    try {
      return await this.existNote(noteId);
    } catch (error: any) {
      return this.errorResponse(error);
    }
  }

  public async getAllNotes(): Promise<NoteResponse> {
    try {
      const notes = await prisma.note.findMany();
      return {
        status: 200,
        message: "All notes",
        data: notes,
      };
    } catch (error: any) {
      return this.errorResponse(error);
    }
  }

  public async postOneNote(newNote: NoteType): Promise<NoteResponse> {
    try {
      const note = await prisma.note.create({ data: newNote });
      return {
        status: 201,
        message: "Note created",
        data: note,
      };
    } catch (error) {
      return this.errorResponse(error);
    }
  }

  public async patchOneNote(
    noteId: string,
    updatedNote: UpdateNoteType
  ): Promise<NoteResponse> {
    try {
      const exist = await this.existNote(noteId);
      if (exist.status !== 200) {
        return exist;
      }
      const updated = await prisma.note.update({
        where: { id: noteId },
        data: updatedNote,
      });
      return {
        status: 200,
        message: "Note updated",
        data: updated,
      };
    } catch (error) {
      return this.errorResponse(error);
    }
  }

  public async excludeOneNote(noteId: string): Promise<NoteResponse> {
    try {
      const exist = await this.existNote(noteId);
      if (exist.status !== 200) {
        return exist;
      }
      const excluded = await prisma.note.update({
        where: { id: noteId },
        data: { available: false },
      });
      return {
        status: 200,
        message: "Note deleted",
        data: excluded.id,
      };
    } catch (error) {
      return this.errorResponse(error);
    }
  }
}
