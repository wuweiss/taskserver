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
    task.id = len(taskStore)
    taskStore[task.id] = task
    return {"id": task.id}


@app.get("/task")
async def get_tasks():
    return {"task": taskStore}


@app.get("/task/{taskid}")
async def get_task(taskid: int):
    task = taskStore.get(taskid)
    if task == None:
        return {}
    else:
        return task
