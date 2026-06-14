import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SellerDashboard from "./pages/SellerDashboard";
import AddProductPage from "./pages/AddProductPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import OrdersPage from "./pages/OrdersPage";

export default function App() {
	return (
		<BrowserRouter>
			<ToastProvider>
				<AuthProvider>
					<CartProvider>
						<Routes>
							<Route path="/" element={<Layout />}>
								<Route index element={<HomePage />} />
								<Route path="catalog" element={<CatalogPage />} />
								<Route path="product/:id" element={<ProductPage />} />
								<Route path="cart" element={<CartPage />} />
								<Route path="checkout" element={<CheckoutPage />} />
								<Route path="seller" element={<SellerDashboard />} />
								<Route path="seller/add-product" element={<AddProductPage />} />
								<Route
									path="seller/edit-product/:id"
									element={<AddProductPage />}
								/>
								<Route path="login" element={<LoginPage />} />
								<Route path="register" element={<RegisterPage />} />
								<Route path="profile" element={<ProfilePage />} />
								<Route path="orders" element={<OrdersPage />} />
							</Route>
						</Routes>
					</CartProvider>
				</AuthProvider>
			</ToastProvider>
		</BrowserRouter>
	);
}
