import React from "react";
import { Route, Routes } from 'react-router-dom';
import { 
	Home, 
	Details, 
	Cart, 
	NavBar, 
	CreateProduct, 
	Catalogo, 
	Login, 
	Register, 
	Profile, 
	Favorites, 
	Ordens,
	Admin
} from "./components";






function App() {
	return (

		<React.Fragment>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path='/cart' element={<Cart />} />
				<Route path="/detail/:id" element={<Details />} />
				<Route path="/catalogo" element={<Catalogo />} />

				{/* ADMIN */}
				<Route path="/admin" element={<Admin />} />
				<Route path="/admin/crud" element={<CreateProduct />} />

				{/* PROFILE */}
				<Route path="/profile" element={<Profile />} />
				<Route path="/profile/favoritos" element={< Favorites />} />
				<Route path="/profile/misordenes" element={< Ordens />} />

			</Routes>
		</React.Fragment>
	)
}



export default App;