// Dependencies
import React, { Dispatch, useState } from "react";

// Components
import { MyProfile__ProjectsComponent } from "./MyProfile--ProjectsComponent";
import { EditProfileComponent } from "./EditProfileComponent";

// Others
type TSubPages = "projects" | "editProfile";

const MyProfileComponent = () => {
  const [subPageState, setSubPageState] = useState("projects") as unknown as [
    TSubPages,
    Dispatch<TSubPages>,
  ];

  const subPages = {
    projects: (
      <MyProfile__ProjectsComponent
        subPageStateParam={[subPageState, setSubPageState]}
      />
    ),

    editProfile: <EditProfileComponent />,
  };

  return subPages[subPageState];
};

export { MyProfileComponent };
