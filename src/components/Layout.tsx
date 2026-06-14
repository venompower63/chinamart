import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundMusic from "./BackgroundMusic";

export default function Layout() {
	return (
		<div className="layout">
			<Header />
			<main className="main">
				<Outlet />
			</main>
			<Footer />
			<BackgroundMusic />
			<style>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        .main {
          flex: 1;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
      `}</style>
		</div>
	);
}
