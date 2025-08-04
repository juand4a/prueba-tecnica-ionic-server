// src/service/TaskService.js

const TaskModel = require("../model/TaskModel");

/**
 * Crea una nueva tarea.
 * @param {{ task: string, completed?: number, synced?: number }} data
 * @returns {Promise<import("../model/TaskModel")>} instancia creada
 */
async function createTask(data) {
  const { task, completed = 0, synced = 0 } = data;
  // create() devuelve la instancia creada, con .id, .task, .completed, .synced
  const newTask = await TaskModel.create({ task, completed, synced });
  return newTask;
}

/**
 * Obtiene todas las tareas.
 * @returns {Promise<import("../model/TaskModel")[]>}
 */
async function getTasks() {
  // findAll() devuelve un array de instancias
  return await TaskModel.findAll();
}

/**
 * Obtiene una tarea por su ID.
 * @param {number|string} id
 * @returns {Promise<import("../model/TaskModel") | null>}
 */
async function getTaskById(id) {
  return await TaskModel.findByPk(id);
}

/**
 * Actualiza una tarea existente.
 * @param {number|string} id
 * @param {{ task?: string, completed?: number, synced?: number }} data
 * @returns {Promise<boolean>} true si se actualizó al menos una fila
 */
async function updateTask(id, data) {
  // update devuelve [nFilasAfectadas]
  const [affectedRows] = await TaskModel.update(data, {
    where: { id },
  });
  return affectedRows > 0;
}

/**
 * Elimina una tarea por su ID.
 * @param {number|string} id
 * @returns {Promise<boolean>} true si se eliminó al menos una fila
 */
async function deleteTask(id) {
  // destroy devuelve el número de filas eliminadas
  const deletedCount = await TaskModel.destroy({
    where: { id },
  });
  return deletedCount > 0;
}

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
