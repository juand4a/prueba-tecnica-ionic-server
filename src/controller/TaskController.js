const taskService = require("./../service/TaskService");

exports.createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json({ success: true, TaskID: task.id });
  } catch (error) {
    console.error("Error al crear la tarea:", error);
    res
      .status(500)
      .json({ success: false, error: "Ocurrió un error al guardar los datos en la base de datos" });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getTasks();
    res.json({ success: true, tasks });
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
    res
      .status(500)
      .json({ success: false, error: "Ocurrió un error al leer las tareas de la base de datos" });
  }
};

exports.getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await taskService.getTaskById(id);
    if (!task) {
      return res.status(404).json({ success: false, error: "Tarea no encontrada" });
    }
    res.json({ success: true, task });
  } catch (error) {
    console.error(`Error al obtener la tarea con id=${id}:`, error);
    res
      .status(500)
      .json({ success: false, error: "Ocurrió un error al leer la tarea de la base de datos" });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await taskService.updateTask(id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, error: "Tarea no encontrada" });
    }
    res.json({ success: true, message: "Tarea actualizada correctamente" });
  } catch (error) {
    console.error(`Error al actualizar la tarea con id=${id}:`, error);
    res
      .status(500)
      .json({ success: false, error: "Ocurrió un error al actualizar la tarea en la base de datos" });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await taskService.deleteTask(id);
    if (!deleted) {
      return res.status(404).json({ success: false, error: "Tarea no encontrada" });
    }
    res.json({ success: true, message: "Tarea eliminada correctamente" });
  } catch (error) {
    console.error(`Error al eliminar la tarea con id=${id}:`, error);
    res
      .status(500)
      .json({ success: false, error: "Ocurrió un error al eliminar la tarea de la base de datos" });
  }
};
