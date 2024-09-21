/**
 * @typedef {Object} Task
 * @property {number} id - The unique ID of the task.
 * @property {string} title - The title of the task.
 * @property {boolean} completed - Indicates if the task is completed.
 * @property {string} dueDate - The due date of the task (e.g., 'YYYY-MM-DD').
 * @property {string} priority - The priority of the task (e.g., 'low', 'medium', 'high').
 * @property {string} description - A detailed description of the task.
 * @property {Date} createdAt - The date and time the task was created.
 * @property {Date} updatedAt - The date and time the task was last updated.
 * @property {string[]} tags - An array of tags related to the task.
 * @property {string} assignedTo - The person assigned to the task.
 */

/**
 * Example:
 * task = {
 * id: 111001,
 * title:'Finish JavaScript project',
 * completed: false,
 * dueDate: '2024-09-30',
 * priority: 'high',
 * description: 'Complete the project and submit it for review.',
 * createdAt: new Date('2024-09-20T10:00:00'),
 * updatedAt: new Date('2024-09-20T10:00:00'),
 * tags: ['JavaScript', 'Project', 'Urgent'],
 * assignedTo: 'John Doe'
 * }
 */

const toDoApp = () => {
  /**
   * Array that stores task objects.
   * Each element is an object of type Task.
   * @type {Task[]}
   */
  let tasks = [];

  /**
   * Stores the current ID for generating incremental unique IDs.
   * This value is used as the starting point for generating new IDs.
   * @type {number}
   * @default 111000
   */
  let currentId = 111000;

  /**
   * Generates a unique incremental ID.
   * Each call to this function increments the ID by 1.
   * @returns {number} A unique incremental ID.
   */
  const generatelId = () => {
    return currentId++;
  };

  /**
   * Creates a new task object.
   * @param {string} title - The title of the task.
   * @param {boolean} [completed=false] - Indicates if the task is completed.
   * @param {string} [dueDate=''] - The due date for the task.
   * @param {string} [priority='low'] - The priority of the task.
   * @param {string} [description=''] - A detailed description of the task.
   * @param {Date} [createdAt=new Date()] - The date the task was created.
   * @param {Date} [updatedAt=''] - The date the task was last updated.
   * @param {string[]} [tags=[]] - An array of tags for the task.
   * @param {string} [assignedTo=''] - The person assigned to the task.
   * @returns {Object} The new task object.
   */
  const createTask = (
    title,
    completed = false,
    dueDate = "",
    priority = "low",
    description = "",
    createdAt = new Date(),
    updatedAt = "",
    tags = [],
    assignedTo = ""
  ) => {
    const id = generatelId();
    return {
      id,
      title,
      completed,
      dueDate,
      priority,
      description,
      createdAt,
      updatedAt,
      tags,
      assignedTo,
    };
  };

  /**
   * Adds a new task object to the tasks array.
   * @param {Object} task - The task object to be added.
   * @returns {void}
   */
  const addTask = (task) => {
    tasks = [...tasks, task];
  };

  /**
   * Lists all tasks in the console.
   * @returns {void}
   */
  const listTasks = () => {};

  /**
   * Marks a task as completed.
   * @param {number} id - The unique ID of the task
   * @throws {Error} If the task is not found
   * @returns {void}
   */
  const markCompleted = () => {};

  /**
   * Removes a task from the list.
   * @param {number} id - The unique ID of the task
   * @throws {Error} If the task is not found
   * @returns {void}
   */
  const removeTask = () => {};

  /**
   * Finds a task by its unique ID.
   * @param {number} id - The unique ID of the task to find.
   * @returns {Task} The task object if found
   */
  const findTaskById = () => {};

  /**
   * Filters tasks by their completion status.
   * @param {boolean} isCompleted - If true, returns completed tasks; otherwise, returns incomplete tasks.
   * @returns {Task[]} An array of tasks that match the completion status.
   */
  const filterByCompleted = () => {};

  /**
   * Filters tasks by their priority.
   * @param {string} priority - The priority level to filter by ('low', 'medium', 'high').
   * @returns {Task[]} An array of tasks that match the specified priority.
   */
  const filterByPriority = () => {};

  /**
   * Searches tasks by a keyword in their title or description.
   * @param {string} keyword - The keyword to search for.
   * @returns {Task[]} An array of tasks that contain the keyword in their title or description.
   */
  const searchTasks = () => {};

  /**
   * Updates the `updatedAt` field of a task when it is modified.
   * @param {number} id - The unique ID of the task to update.
   * @returns {void}
   */
  const updateTaskDate = (id) => {};

  /**
   * Edits an existing task by its ID.
   * @param {number} id - The unique ID of the task to edit.
   * @param {Object} updates - An object containing the properties to update (e.g., title, priority).
   * @param {string} [updates.title] - The new title of the task (optional).
   * @param {string} [updates.priority] - The new priority of the task (optional).
   * @param {string} [updates.dueDate] - The new due date of the task (optional).
   * @param {string} [updates.description] - The new description of the task (optional).
   * @param {string[]} [updates.tags] - The updated list of tags (optional).
   * @param {string} [updates.assignedTo] - The new person assigned to the task (optional).
   * @returns {void}
   */
  const editTask = () => {};

  return {
    editTask,
    updateTaskDate,
    searchTasks,
    filterByPriority,
    filterByCompleted,
    findTaskById,
    removeTask,
    markCompleted,
    listTasks,
    addTask,
    createTask,
  };
};
export default toDoApp;
