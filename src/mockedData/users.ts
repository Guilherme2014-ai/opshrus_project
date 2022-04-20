const data = [
  {
    id: 1,
    name: "Thiago",
    email: "thiago@gmail.com",
    age: 18,
    profile_picture:
      "data:image/jpeg;base64,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",
    projects: [
      {
        name: "Vibroujuati Kulka",
        imageLink:
          "https://images.tcdn.com.br/img/img_prod/867778/caderno_universitario_d_1_materia_96_folhas_tilibra_1985_1_260be62de20da9a9fc2d8d56fefbadfe.jpg",
        status: "done",
      },
      {
        name: "Vibroujuati Kulka",
        imageLink:
          "https://uploads-ssl.webflow.com/58cfe9ec5988108921858f54/5b05858e858010db563c2b45_08---13.10---a-noite-escura-da-alma_v2.jpg",
        status: "ongoing",
      },
      {
        name: "Vibroujuati Kulka",
        imageLink:
          "https://uploads-ssl.webflow.com/58cfe9ec5988108921858f54/5b05858e858010db563c2b45_08---13.10---a-noite-escura-da-alma_v2.jpg",
        status: "done",
      },
      {
        name: "Vibroujuati Kulka",
        imageLink:
          "https://uploads-ssl.webflow.com/58cfe9ec5988108921858f54/5b05858e858010db563c2b45_08---13.10---a-noite-escura-da-alma_v2.jpg",
        status: "ongoing",
      },
      {
        name: "Vibroujuati Kulka",
        imageLink:
          "https://uploads-ssl.webflow.com/58cfe9ec5988108921858f54/5b05858e858010db563c2b45_08---13.10---a-noite-escura-da-alma_v2.jpg",
        status: "done",
      },
      {
        name: "Vibroujuati Kulka",
        imageLink:
          "https://uploads-ssl.webflow.com/58cfe9ec5988108921858f54/5b05858e858010db563c2b45_08---13.10---a-noite-escura-da-alma_v2.jpg",
        status: "done",
      },
    ],
  },
];

export default {
  getAllUsers() {
    // retorna users[]
    return data;
  },
  getUserByName(name: string) {
    return data.find((user) => user.name == name);
  },
};
