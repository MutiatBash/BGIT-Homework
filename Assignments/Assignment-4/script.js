class Task {
	constructor(description) {
		this.id;
		this.description = description;
		this.completed = false;
	}
}
class TaskManager {
	constructor() {
		this.tasks = [];
	}

	addTask(description) {
		const task = new Task(description);
		this.tasks.push(task);
		return task;
	}

	completeTask(id) {
		const task = this.tasks.find((complete) => complete.id === id);
		if (task) {
			task.completed = true;
			return task;
		} else {
			console.log("Task not found");
		}
	}
}

const taskManager1 = new TaskManager();
const task1 = taskManager1.addTask("Submit Assignments");
const task2 = taskManager1.addTask("Eat Breakfast");

console.log(task1);
console.log("Tasks:", taskManager1.tasks);
const completedTask = taskManager1.completeTask(task1.id)
console.log(completedTask)
console.log("Updated :", taskManager1.tasks)
