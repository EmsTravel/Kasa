import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

// Router creation and paths
const router = createBrowserRouter([{

	path: "/",
	element: <App />,

},
{
	path:"/hi",
	element:<div>damn yeah</div>
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
	  <RouterProvider router={router} />
	</React.StrictMode>
  );
