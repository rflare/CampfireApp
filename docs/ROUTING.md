# Routing

As of writing, Campfire has two important routes
- `/api/userpost/get`
  - This is used to get 100 random user posts.
  - The GET request returns this JSON:
```json
[
    {
        text: "Lorem Ipsum dit alorem ipsum dolor sit amet, consectetur adip",
        name: "John doe",
        timeMillis: "1704110400000"
    }
]
```
- `/api/userpost/post`
  - This api route is used to insert a user post to the database
  - It would follow this structure in JSON
```json
{
    text: "Lorem Ipsum dit alorem ipsum dolor sit amet, consectetur adip",
    name: "John Doe"
    timeMillis: "1704110400000"
}
```