import * as api from "../services";

export function getAllStudents() {
  return api.get("/");
}

export function getStudentById(id) {
  return api.get(`/${id}`);
}

export function saveStudent(data) {
  return api.post(`/${data}`);
}

export function updateStudent(id, data) {
  return api.patch(`/${id}`, data);
}

export function deleteStudent(id) {
  return api.delete(`/${id}`);
}
