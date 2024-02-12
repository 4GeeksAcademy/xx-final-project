import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "../../../styles/user-profile/profileBio.css";
import { Button, Modal } from "react-bootstrap";
import { Context } from "../../store/appContext";

export const ProfileBio = () => {
  const { store, actions } = useContext(Context)
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    actions.setInfo(
      form.name,
      form.bio);
  };

  const handleEditClick = () => {
    console.log("test")
    setShowModal(true)
    setForm({
      name: store.user_info.name || "",
      bio: store.user_info.bio || ""
    });
  };

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined) {
      actions.getInfo();
    }
  }, [store.token]);

  return (
    <div>
      {!store.user_info || !store.user_info.name || !store.user_info.bio ? (
        <div>
          <h2>
            About You:
          </h2>
          <Button className="biobtn" onClick={handleShow}>Add Name and Bio</Button>
        </div>
      ) : (
        <div>
          <div className="top-userinfo">
          <h2>
            About You:
          </h2>
          <Button className="editBtn" onClick={handleEditClick}>Edit</Button>
          </div>
          <p>{store.user_info.name}</p>
          <p>{store.user_info.bio}</p>
        </div>
      )}
      <Modal show={showModal} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Edit your info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="frame">
                <Form>
                  <Form.Group
                    className="name-input mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>First & Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setField("name", e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Get to know me:</Form.Label>
                    <Form.Control
                      className="bio-input"
                      as="textarea"
                      placeholder="Type something about yourself here!"
                      value={form.bio}
                      onChange={(e) => setField("bio", e.target.value)}
                    />
                    <Button style={{ marginTop: "5px" }} onClick={handleSubmit}>
                      Submit
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </Modal.Body>
          </Modal>
    </div>
  );
};
