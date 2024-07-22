import express from "express";
import { CR } from "../models/crModels.js"; // Import the CR model

const router = express.Router();

// Route to save a new CR
router.post('/cr', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear ||
            !request.body.genre
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const newCR = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
            genre: request.body.genre,
        };

        const cr = await CR.create(newCR);

        return response.status(201).send(cr);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get all CRs from database
router.get('/cr', async (request, response) => {
    try {
        const crs = await CR.find({});

        return response.status(200).json({
            count: crs.length,
            data: crs
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get a CR from database by id
router.get('/cr/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const cr = await CR.findById(id);

        return response.status(200).json(cr);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to update a CR
router.put('/cr/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear ||
            !request.body.genre
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const { id } = request.params;

        const result = await CR.findByIdAndUpdate(id, request.body, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'CR not found' });
        }

        return response.status(200).send({ message: 'CR updated successfully', data: result });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to delete a CR
router.delete('/cr/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await CR.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'CR not found' });
        }

        return response.status(200).send({ message: 'CR deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
