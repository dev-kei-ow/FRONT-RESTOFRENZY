import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore("main", {
  state: () => ({
    /* User */
    userName: null,
    password: null,

    userEmail: null,
    userAvatar: null,

    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,

    /* Sample data (commonly used) */
    clients: [],
    history: [],
  }),
  actions: {
    setUser(payload) {
      if (payload.name) {
        this.userName = payload.name;
      }
      if (payload.email) {
        this.userEmail = payload.email;
      }
      if (payload.avatar) {
        this.userAvatar = payload.avatar;
      }
    },

    async login(username, password) {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/empleado/login",
          {
            usuario: username,
            contraseña: password,
          }
        );

        if (res.data.accessToken) {
          console.log("Access Token:", res.data.accessToken); // Muestra el token en la consola
          return true;
        } else {
          return false;
        }
      } catch (err) {
        console.error("Error en la solicitud de inicio de sesión", err);
        return false;
      }
    },

    fetch(sampleDataKey) {
      axios
        .get(`data-sources/${sampleDataKey}.json`)
        .then((r) => {
          if (r.data && r.data.data) {
            this[sampleDataKey] = r.data.data;
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
});
