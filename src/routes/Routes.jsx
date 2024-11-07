// import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../layout/CommonLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <CommonLayout></CommonLayout>,
    },
  ]);

export default router;