import express from "express";
import { BookRead } from "../models/readModels.js";

const router = express.Router();

// Route to save a new bookRead
router.post('/read', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear ||
            !request.body.genre
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear, genre',
            });
        }

        const newBookRead = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
            genre: request.body.genre,
        };

        const bookRead = await BookRead.create(newBookRead);

        return response.status(201).send(bookRead);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get all bookReads from database
router.get('/read', async (request, response) => {
    try {
        const bookReads = await BookRead.find({});

        return response.status(200).json({
            count: bookReads.length,
            data: bookReads,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get a bookRead from database by id
router.get('/read/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const bookRead = await BookRead.findById(id);

        return response.status(200).json(bookRead);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to update a bookRead
router.put('/read/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear ||
            !request.body.genre
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear, genre',
            });
        }

        const { id } = request.params;

        const result = await BookRead.findByIdAndUpdate(id, request.body, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).send({ message: 'Book updated successfully', data: result });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to delete a bookRead
router.delete('/read/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await BookRead.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
