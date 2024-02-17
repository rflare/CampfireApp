# Routing

As of writing, Campfire has two important routes
- `/api/userpost/get`
  - This is used to get 100 random user posts.
  - The GET request returns this JSON:
```json
[
    {
        text: String
        name: String
        timeMillis: number
    }
]
```
- `/api/userpost/post`
  - This api route is used to insert a user post to the database
  - It would follow this structure in JSON
```json
{
    text: String
    name: String
    timeMillis: number
}
```