import "./postCard.css";
import { RiDeleteBin2Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Modal, Button, ButtonToolbar, Paragrah } from "rsuite";
import { useState } from "react";

const PostCard = ({ id, author, title, description, handleDelete }) => {

    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();
    const handleOpen = value => {
      setSize(value);
      setOpen(true);
    };
    const handleClose = () => setOpen(false);

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
        <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={author}
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
            value={title}
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
            value={description}
          />
          <div id="emailHelp" className="form-text">
            description is required
          </div>
        </div>
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Edit
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
