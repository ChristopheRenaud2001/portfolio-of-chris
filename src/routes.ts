//For this project, I decided to go with the "Framework" mode of react-router, since
// I'm already experienced with the "Declarative" mode with my past work experience
// and the documentation shows that the framework mode is touching almost every
// functionality of react-router.

import { type RouteConfig, index } from "@react-router/dev/routes";

export default [index("./pages/Home/Home.tsx")] satisfies RouteConfig;
