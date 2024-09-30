# Notex Server

- Supports simple <abbr title="Create, Read, Update & Delete">CRUD</abbr> operations for notes.
- Soon, our server will have user sessions and authentication.
- And more to come!

## Information

Server application to support the Notex Client.

## Routes

### `/notes` - Available

| METHOD | REQUEST     | PATH         | RESPONSE        |
| ------ | ----------- | ------------ | --------------- |
| GET    | PARAM       | `/notes/:id` | ONE NOTE        |
| GET    | NONE        | `/notes`     | ALL NOTES       |
| POST   | BODY        | `/notes`     | NEW NOTE        |
| PATCH  | PARAM, BODY | `/notes/:id` | UPDATE NOTE     |
| DELETE | PARAM       | `/notes/:id` | NOTE ID DELETED |

### `/user` - Unavailable

### `/auth` - Unavailable

## Implementation

1. Clone the repository:
   ```bash
   git clone (repo)
   ```
2. Enter the repository:
   ```bash
   cd (repo)
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Initialize the database:
   ```bash
   npx prisma migrate dev --name init
   ```
5. Start development mode:
   ```bash
   npm run dev
   ```
6. If you make changes to the schema.prisma file, run:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

### Coming soon...
