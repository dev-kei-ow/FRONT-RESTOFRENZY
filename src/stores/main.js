import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore("main", {
  state: () => ({
    /* User */
    userName: null,
    password: null,
    isAdmin: false, // Agregar prop para rastrear si el usuario es administrador (2==true)

    userEmail: null,
    userAvatar: null,

    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,

    /* Sample data (commonly used) */
    getListadoEmpleados: [],
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

    async setListadoEmpleados() {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/empleado/listar"
        );
        if (res.status === 200) {
          return res.data.data; // Retorna los datos de los empleados
        } else {
          console.error("Error al obtener la lista de empleados");
          return [];
        }
      } catch (err) {
        console.error("Error en la solicitud para listar empleados", err);
        return [];
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

          this.isAdmin = res.data.idAdmin === 2; // Actualizar el valor isAdmin según el idAdmin recibido

          return { success: true, idAdmin: res.data.idAdmin }; // Retorna el idAdmin
        } else {
          return { success: false, idAdmin: null };
        }
      } catch (err) {
        console.error("Error en la solicitud de inicio de sesión", err);
        return { success: false, idAdmin: null };
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
