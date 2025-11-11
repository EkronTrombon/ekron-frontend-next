import { MongoClient, MongoClientOptions } from 'mongodb'

// 1. Declare a global type augmentation for the cached connection promise
// This tells TypeScript that the global object may contain this specific property
declare global {
  var _mongoClientPromise: Promise<MongoClient>
}

// 2. Check for the URI
const uri = process.env.MONGODB_URI
const options: MongoClientOptions = {}

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

// 3. Caching logic for Development
if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve the connection
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, do not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise
export default clientPromise