import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useUsers } from "../context/UserContext";

export default function Users() {
  const { users, addUser, deleteUser, updateUser } = useUsers();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const handleAddUser = () => {
    if (name && email) {
      addUser({ name, email });
      setName("");
      setEmail("");
      setShowForm(false);
    }
  };

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(id);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  const handleUpdateUser = () => {
    if (editName && editEmail) {
      updateUser(editingUser, { name: editName, email: editEmail });
      setEditingUser(null);
      setEditName("");
      setEditEmail("");
    }
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
    setEditName("");
    setEditEmail("");
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-5 centered-container">
        <div className="d-flex justify-content-between align-items-center mb-4 w-100">
          <h2 className="fw-bold">Users</h2>
          <button className="btn btn-add" onClick={() => setShowForm(!showForm)}>
            + Add User
          </button>
        </div>

        {showForm && (
          <div className="card p-4 mb-4 w-100">
            <div className="mb-3">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control form-control-lg"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="btn btn-primary btn-lg" onClick={handleAddUser}>
              Save User
            </button>
          </div>
        )}

        <table className="table table-custom table-striped w-100">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  {editingUser === user.id ? (
                    <input
                      className="form-control"
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {editingUser === user.id ? (
                    <input
                      className="form-control"
                      type="email"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editingUser === user.id ? (
                    <div className="btn-group">
                      <button 
                        className="btn btn-success btn-sm" 
                        onClick={handleUpdateUser}
                      >
                        Save
                      </button>
                      <button 
                        className="btn btn-secondary btn-sm" 
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <button 
                        className="btn btn-primary btn-sm" 
                        onClick={() => handleEditUser(user)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-danger btn-sm" 
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}