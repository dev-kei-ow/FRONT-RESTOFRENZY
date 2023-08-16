import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact,
} from "@mdi/js";

//** esto el array de objetos que se listan en el componente (AsideMenuItem)
export default [
  {
    idAdmin: 2,
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },

  {
    idAdmin: 2,
    to: "/tables",
    label: "Empleados",
    icon: mdiTable,
  },
  {
    idAdmin: 1,
    to: "/forms",
    label: "Forms",
    icon: mdiSquareEditOutline,
  },
  {
    idAdmin: 1,
    to: "/ui",
    label: "UI",
    icon: mdiTelevisionGuide,
  },
  {
    idAdmin: 1,
    to: "/responsive",
    label: "Responsive",
    icon: mdiResponsive,
  },
  {
    idAdmin: 1,
    to: "/",
    label: "Styles",
    icon: mdiPalette,
  },
  {
    idAdmin: 1,
    to: "/profile",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    idAdmin: 1,
    to: "/login",
    label: "Login",
    icon: mdiLock,
  },
  {
    idAdmin: 1,
    to: "/error",
    label: "Error",
    icon: mdiAlertCircle,
  },
  {
    idAdmin: 1,
    label: "Dropdown",
    icon: mdiViewList,
    menu: [
      {
        label: "Item One",
      },
      {
        label: "Item Two",
      },
    ],
  },
  {
    idAdmin: 1,
    href: "https://github.com/justboil/admin-one-vue-tailwind",
    label: "GitHub",
    icon: mdiGithub,
    target: "_blank",
  },
  {
    idAdmin: 1,
    href: "https://github.com/justboil/admin-one-react-tailwind",
    label: "React version",
    icon: mdiReact,
    target: "_blank",
  },
];
