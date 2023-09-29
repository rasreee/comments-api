# comments-api

**Goal**:

Design and implement a simple web server for a commenting system that allows users to:

1. Add comments.
2. View all comments.
3. Edit their own comments.
4. Delete their own comments.

**Specifications**:

1. Each comment should contain:

   - A unique ID.
   - User's name.
   - The comment content.
   - Timestamp of when it was created.
   - Timestamp of the last edit (if any).

2. The server should support basic CRUD operations:

   - Create a new comment.
   - Read all comments.
   - Update a specific comment by ID.
   - Delete a specific comment by ID.

3. For the sake of simplicity, we'll assume all users can be trusted, so there's no need to implement authentication. However, you should be able to explain where and how you'd add this feature in a real-world scenario.

4. Data Storage: You can choose to either store data in-memory (e.g., a list or dictionary) or use a simple database system of your choice. Explain the pros and cons of your chosen storage method.

**Bonus**:

- Implement pagination to view comments.
- Add a simple rate-limiting mechanism to prevent abuse.
