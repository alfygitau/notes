import "./postCard.css";
import { RiDeleteBin2Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Modal, Button, ButtonToolbar } from "rsuite";
import { useState } from "react";
import axios from "axios";

const PostCard = ({ id, author, title, description, handleDelete }) => {
  const [editAuthor, setEditAuthor] = useState(author);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);

  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("about to update");
    console.log(id);
    await axios
      .put(`http://localhost:8000/posts/${id}`, {
        author: editAuthor,
        title: editTitle,
        description: editDescription,
      })
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      });
  };

  return (
    <div className="card-container">
      <Link to={`/posts/${id}`}>
        <h4 className="title">{title}</h4>
      </Link>

      <h5 className="author">{author}</h5>
      <p className="description">
        {description.length <= 100
          ? description.substring(0, 100)
          : `${description.substring(0, 100)}...`}
      </p>
      <div className="card-buttons">
        <button
          type="submit"
          className="btn btn-outline-danger"
          onClick={() => handleDelete(id)}
        >
          delete | <RiDeleteBin2Line />
        </button>
        <div className="modal-container">
          <ButtonToolbar>
            <Button size="md" onClick={() => handleOpen("md")}>
              update | <GrUpdate />
            </Button>
          </ButtonToolbar>
          <Modal size={size} open={open} onClose={handleClose}>
            <Modal.Header>
              <Modal.Title>Edit the post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleUpdate}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Author
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={editAuthor}
                    onChange={(e) => setEditAuthor(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    Author is required
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    Title is required
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Description
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    description is required
                  </div>
                </div>
                <button type="submit" className="btn btn-outline-primary">
                  Save Changes
                </button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} appearance="primary">
                Ok
              </Button>
              <Button onClick={handleClose} appearance="subtle">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
