import { Request, Response } from "express";
import NotesServices from "./notes.service";
import { NoteType, UpdateNoteType } from "./dto/note.dto";

const ns = new NotesServices();

export default class NotesController {
  public async readOneNote(req: Request, res: Response): Promise<void> {
    try {
      const noteId = req.params.id;
      const { status, message, data, error } = await ns.getOneNote(noteId);
      res.status(status).json({ status, message, data, error });
    } catch (error: any) {
      res.status(500).json({
        error: "Server Error",
        message: error.message,
      });
      return;
    }
  }

  public async readAllNotes(_req: Request, res: Response): Promise<void> {
    try {
      const { status, message, data, error } = await ns.getAllNotes();
      res.status(status).json({ status, message, data, error });
    } catch (error: any) {
      res.status(500).json({
        error: "Server Error",
        message: error.message,
      });
      return;
    }
  }

  public async createOneNote(req: Request, res: Response): Promise<void> {
    try {
      const newNote: NoteType = req.body;
      const { status, message, data, error } = await ns.postOneNote(newNote);
      res.status(status).json({ status, message, data, error });
    } catch (error: any) {
      res.status(500).json({
        error: "Server Error",
        message: error.message,
      });
      return;
    }
  }

  public async updateOneNote(req: Request, res: Response): Promise<void> {
    try {
      const noteId = req.params.id;
      const updatedNote: UpdateNoteType = req.body;
      const data = await ns.patchOneNote(noteId, updatedNote);
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({
        error: "Server Error",
        message: error.message,
      });
    }
  }

  public async deleteOneNote(req: Request, res: Response): Promise<void> {
    try {
      const noteId = req.params.id;
      const data = await ns.excludeOneNote(noteId);
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({
        error: "Server Error",
        message: error.message,
      });
    }
  }
}
