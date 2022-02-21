import axios from "axios";
import React, { useState } from "react";
import { Form, Input } from "rsuite";
import { Button, ButtonToolbar } from "rsuite";
import "./createPost.css";

const CreatePost = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  console.log(author, title, description);

  const handleSubmit = async (author, title, description) => {
    await axios
      .post("http://localhost:8000/posts", {
        author,
        title,
        description,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="create-container">
      <Form fluid onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.ControlLabel>Author</Form.ControlLabel>
          <Form.Control
            name="name"
            value={author}
            onChange={(value) => setAuthor(value)}
          />
          <Form.HelpText>Author is required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="name">
          <Form.ControlLabel>Title</Form.ControlLabel>
          <Form.Control
            name="name"
            value={title}
            onChange={(value) => setTitle(value)}
          />
          <Form.HelpText>Title is required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="textarea">
          <Form.ControlLabel>Description</Form.ControlLabel>
          <Input
            as="textarea"
            rows={3}
            placeholder="description"
            value={description}
            onChange={(value) => setDescription(value)}
          />
          ;<Form.HelpText>Description is required</Form.HelpText>
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <button appearance="primary" type="submit">Submit</button>
            <Button appearance="default">Cancel</Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};

export default CreatePost;
