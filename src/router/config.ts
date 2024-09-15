const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/contact"],
    exact: true,
    component: "Contact",
  },
  {
    path: ["/tos"],
    exact: true,
    component: "TermsOfService",
  },
  {
    path: ["/privacy"],
    exact: true,
    component: "Privacy",
  },
  {
    path: ["/community-guidelines"],
    exact: true,
    component: "CommunityGuidelines",
  },
  {
    path: ["/about"],
    exact: true,
    component: "About",
  },
];

export default routes;
