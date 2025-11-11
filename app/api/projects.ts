// pages/api/projects.ts (Updated for your data structure)
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/app/lib/mongodb';
import { Collection } from 'mongodb';
import { Project } from '@/app/types/project';

// Utility function to get the collection
const getCollection = async (): Promise<Collection<Project>> => {
  try {
    const client = await clientPromise;
    const db = client.db('ekron_frontend'); 
    return db.collection<Project>('Projects');
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Could not connect to database.');
  }
};

// Main Next.js API Handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let collection: Collection<Project>;
  
  try {
    collection = await getCollection();
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error.' });
  }

  // Route requests by method
  switch (req.method) {
    case 'POST':
      return await createProject(req, res, collection);
    case 'GET':
      return await readProjects(req, res, collection);
    case 'PUT':
      return await updateProject(req, res, collection);
    case 'DELETE':
      return await deleteProject(req, res, collection);
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}

// --- CRUD Functions (Typed) ---

// 1. CREATE (POST)
async function createProject(req: NextApiRequest, res: NextApiResponse, collection: Collection<Project>) {
  try {
    // The request body should match the Project structure (excluding _id)
    const projectData: Omit<Project, '_id'> = req.body; 

    // Optional: Add validation here to ensure all required fields are present

    const result = await collection.insertOne(projectData as Project);

    return res.status(201).json({ 
      message: 'Project created successfully.', 
      insertedId: result.insertedId 
    });
  } catch (error) {
    console.error('Create Error:', error);
    return res.status(500).json({ message: 'Failed to create project.' });
  }
}

// 2. READ (GET)
async function readProjects(req: NextApiRequest, res: NextApiResponse, collection: Collection<Project>) {
  try {
    // Check for the custom string 'id' in the query string (e.g., /api/projects?id=project-slug-1)
    const { id } = req.query;

    if (id && typeof id === 'string') {
      // Find one document using the custom string 'id' field
      const project = await collection.findOne({ id: id });
      
      if (!project) {
        return res.status(404).json({ message: `Project with ID '${id}' not found.` });
      }

      return res.status(200).json({ status: 'success', data: project });

    } else {
      // Find all documents
      const projects = await collection.find({}).toArray();
      return res.status(200).json({ status: 'success', data: projects });
    }
  } catch (error) {
    console.error('Read Error:', error);
    return res.status(500).json({ message: 'Failed to fetch projects.' });
  }
}

// 3. UPDATE (PUT)
async function updateProject(req: NextApiRequest, res: NextApiResponse, collection: Collection<Project>) {
  try {
    // Expect the custom string 'id' for matching and the fields to update
    const { id, ...updateFields } = req.body as { id: string } & Partial<Omit<Project, '_id'>>;

    if (!id) {
        return res.status(400).json({ message: 'Missing project ID for update.' });
    }

    // Use the custom string 'id' field to locate the document
    const result = await collection.updateOne(
      { id: id },
      { $set: updateFields },
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: `Project with ID '${id}' not found for update.` });
    }

    return res.status(200).json({ 
      message: 'Project updated successfully.', 
      modifiedCount: result.modifiedCount 
    });
  } catch (error) {
    console.error('Update Error:', error);
    return res.status(500).json({ message: 'Failed to update project.' });
  }
}

// 4. DELETE (DELETE)
async function deleteProject(req: NextApiRequest, res: NextApiResponse, collection: Collection<Project>) {
  try {
    // Expect the custom string 'id' in the body or query
    const id = req.body.id || req.query.id; 

    if (!id || Array.isArray(id)) {
        return res.status(400).json({ message: 'Missing or invalid project ID for deletion.' });
    }

    // Use the custom string 'id' field to locate and delete the document
    const result = await collection.deleteOne({ id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: `Project with ID '${id}' not found for deletion.` });
    }

    return res.status(200).json({ message: 'Project deleted successfully.' });
  } catch (error) {
    console.error('Delete Error:', error);
    return res.status(500).json({ message: 'Failed to delete project.' });
  }
}