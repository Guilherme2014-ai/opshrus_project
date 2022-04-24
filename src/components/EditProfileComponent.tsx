/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Dependencies
import React, { useState } from "react";
import { idUniqueV2 } from "id-unique-protocol";

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
import iconsPath from "../defaults/iconsPath";

// CSS
import "./style/EditProfileComponent.scss";

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

  const allInputsState = {} as any;

  inputs.forEach((input) => {
    allInputsState[input.slug] = {
      readOnly: true,
    };
  });

  const [inputsState, setInputsState] = useState(allInputsState);

  function changeInputState(slug: string) {
    if (inputsState) {
      inputsState[slug] = { readOnly: !inputsState[slug].readOnly };
      const newInputsState = { ...inputsState };

      setInputsState(newInputsState);
    }
  }

  // Cado de Responsividade...

  return (
    <section className="mainSectionEditProfilePicture">
      <h2 className="editProfileContainer__title">
        <strong>EDIT PROFILE</strong>
      </h2>
      <div className="editProfileContainer">
        <div className="editProfileContainer--firstArea subArea">
          <form className="editProfileContainer--firstArea__form">
            {inputs.map((input: input) => {
              const inputState = inputsState[input.slug].readOnly;

              return (
                <div
                  className="editProfileContainer--firstArea__form__inputArea"
                  key={idUniqueV2()}
                >
                  <label htmlFor={input.slug}>{input.label}</label>
                  <br />
                  <div className="editProfileContainer--firstArea__form__inputArea__input_svg">
                    <input
                      type={input.type}
                      name={input.slug}
                      id={input.slug}
                      placeholder={inputState ? input.placeholder : ""}
                      readOnly={inputState}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      className="bi bi-pencil"
                      viewBox="0 0 16 16"
                      onClick={() => changeInputState(input.slug)}
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
