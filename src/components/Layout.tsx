import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
	return (
		<div className="layout">
			<Header />
			<main className="main">
				<Outlet />
			</main>
			<Footer />
			<style>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .main {
          flex: 1;
        }
      `}</style>
		</div>
	);
}
