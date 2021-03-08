"""task server"""
from typing import Optional

from fastapi import Body, FastAPI
from pydantic import BaseModel

app = FastAPI()


class Task(BaseModel):
    id: Optional[int] = None
    tag: list = []
    name: str
    text: str


taskStore = [Task]


@app.get("/")
async def root():
    """This is the main route which does magic"""
    return {"message": "Hello World"}


# request:
# curlie --location --request POST 'http://localhost:8000/task' \
# --header 'Content-Type: application/json' \
# --data-raw '{"name":"task one", "tag": ["tag1", "tag2"], "text": "mytext"}'
#
# response:
# {"id": 1}
@app.post("/task", status_code=201)
async def creat_task(task: Task):
    """
    This function receives a task and adds the task to the task list
    """
    task.id = len(taskStore) + 1
    taskStore.append(task)
    return {"id": task.id}
