// Dependencies
import { Avatar } from "@mui/material";
import React from "react";
import profilePicture from "../defaults/profilePicture";

// CSS
import "./style/EditProfileComponent.scss";

const EditProfileComponent = () => {
  return (
    <section className="editProfileContainer">
      <div className="editProfileContainer--firstArea subArea">
        <form className="editProfileContainer--firstArea__form">
          <div className="editProfileContainer--firstArea__form__inputArea">
            <label htmlFor="username">USERNAME</label>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="user000"
              readOnly
            />
          </div>

          <div className="editProfileContainer--firstArea__form__inputArea">
            <label htmlFor="password">PASSWORD</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
            />
          </div>

          <div className="editProfileContainer--firstArea__form__inputArea">
            <label htmlFor="email">E-MAIL</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@email.com"
            />
          </div>

          <div className="editProfileContainer--firstArea__form__inputArea">
            <label htmlFor="about_me">ABOUT ME</label>
            <br />
            <input type="text" name="about_me" id="about_me" />
          </div>

          <div className="editProfileContainer--firstArea__form__inputArea">
            <label htmlFor="experties_areas">MY AREAS OF EXPERTIES</label>
            <br />
            <input
              type="text"
              name="experties_areas"
              id="experties_areas"
              placeholder="*****"
            />
          </div>
        </form>
      </div>
      <div className="editProfileContainer--secondArea subArea">
        <div className="editProfileContainer--secondArea__avatarInfos">
          <Avatar
            className="editProfileContainer--secondArea__avatarInfos__avatar"
            alt="profile_picture"
            src={profilePicture}
          />
          <div className="editProfileContainer--secondArea__avatarInfos__selectAvartarAreaButton">
            <button>
              <strong>Select Avatar</strong>
            </button>
          </div>
        </div>
        <div className="editProfileContainer--secondArea__confirm_CancelButtonsArea">
          <button className="editProfileContainer--secondArea__confirm_CancelButtonsArea--confirm">
            <strong>CONFIRM</strong>
          </button>
          <button className="editProfileContainer--secondArea__confirm_CancelButtonsArea--cancel">
            <strong>CANCEL</strong>
          </button>
        </div>
      </div>
    </section>
  );
};

export { EditProfileComponent };
