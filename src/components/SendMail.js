import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import "../css/sendmail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase";
import firebase from "firebase";

const SendMail = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmitForm = (formdata) => {
    db.collection("emails").add({
      to: formdata.to,
      subject: formdata.subject,
      message: formdata.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendmail">
      <div className="sendmail__header">
        <h3>New Message</h3>
        <Close
          onClick={() => dispatch(closeSendMessage())}
          className="sendmail__close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmitForm)} className="sendmail__form">
        <input
          name="to"
          placeholder="To"
          type="email"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendmail__error">To is Required!</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className="sendmail__error">Subject is Required!</p>
        )}
        <input
          name="message"
          placeholder="Message..."
          className="sendmail__message"
          ref={register({ required: true })}
          type="text"
        />
        {errors.message && (
          <p className="sendmail__error">Message is Required!</p>
        )}
        <div className="sendmail__options">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="sendmail__send"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
