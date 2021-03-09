"""task server"""
from typing import List, Optional

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Task(BaseModel):
    id: Optional[int] = None
    tag: List[str] = []
    name: str
    text: str


taskStore = {}


@app.post("/task", status_code=201)
async def create_task(task: Task):
    """
    This function receives a task and adds the task to the task list
    """
    task.id = len(taskStore) + 1
    taskStore[task.id] = task
    return {"id": task.id}


@app.get("/task")
async def get_tasks():
    return {"tasks": taskStore}
