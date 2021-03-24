# taskserver

This programm provides an API to work with tasks. A task looks like this:
```
{
    id: int
    name: string,
    tags: [string],
    text: string,
    due: date
}
```

## API Endpoints

```
GET    /task/
DELETE /task/
POST   /task/
GET    /task/id:<int>
DELETE /task/id:<int>
GET    /tag/tag:<string>
GET    /due/year:<int>/month:<int>/day:<int>
```

* Get all tasks:
```
curl --request GET 'http://localhost:8000/task/'
```

* Delete all tasks:
```
curl --request DELETE 'http://localhost:8000/task/'
```

* Create a new task:
```
curl --request POST 'http://localhost:8000/task/' \
--header 'Content-Type: application/json' \
--data-raw '{"name":"task one", "tags": ["tag1", "tag2"], "text": "mytext", "due": {"year": 2021, "month":4, "day": 6}}'
```

* Get task by id:
```
curl --location --request GET 'http://localhost:8000/task/2'
```

* Delete a task by id:
```
curl --request DELETE 'http://localhost:8000/task/3'
```

* Get tasks by tag:
```
curl --request GET 'http://localhost:8000/tag/tag2/'
```

* Get tasks due date:
```
curl --request GET 'http://localhost:8000/due/2021/4/5'
```
