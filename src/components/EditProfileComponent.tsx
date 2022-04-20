// Dependencies
import React from "react";

// Components
import { Avatar } from "@mui/material";

// Interfaces
interface input {
  label: string;
  type: string;
  slug: string;
  placeholder?: string;
}

// Contexts
import { getUserSessionState } from "../contexts/userSessionStateContext";
import getSessionUserProvider from "../modules/getSessionUserProvider";

// Defaults
import profilePicture from "../defaults/profilePicture";

// CSS
import "./style/EditProfileComponent.scss";
import iconsPath from "../defaults/iconsPath";

const EditProfileComponent = () => {
  const [stringfiedUser, setStringfiedUser] = getUserSessionState();
  const userSession = getSessionUserProvider(stringfiedUser);

  const inputs: input[] = [
    {
      label: "USERNAME",
      slug: "username",
      type: "text",
      placeholder: userSession?.name,
    },
    {
      label: "PASSWORD",
      slug: "password",
      type: "password",
      placeholder: "*******",
    },
    {
      label: "E - MAIL",
      slug: "email",
      type: "email",
      placeholder: userSession?.email,
    },
    {
      label: "ABOUT ME",
      slug: "about_me",
      type: "text",
      placeholder: "",
    },
    {
      label: "MY AREAS OF EXPERTIES",
      slug: "my_areas_of_experties",
      type: "text",
      placeholder: "*******",
    },
  ];

  return (
    <section className="mainSectionEditProfilePicture">
      <div className="editProfileContainer">
        <div className="editProfileContainer--firstArea subArea">
          <form className="editProfileContainer--firstArea__form">
            {inputs.map((input: input) => {
              return (
                <div className="editProfileContainer--firstArea__form__inputArea">
                  <label htmlFor="username">{input.label}</label>
                  <br />
                  <div className="editProfileContainer--firstArea__form__inputArea__input_svg">
                    <input
                      type={input.type}
                      name={input.slug}
                      id={input.slug}
                      placeholder={input.placeholder}
                      readOnly
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      className="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path d={iconsPath.pencil} />
                    </svg>
                  </div>
                </div>
              );
            })}
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
      </div>
    </section>
  );
};

export { EditProfileComponent };
