import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Header() {
	const { user, logout } = useAuth();
	const { totalItems } = useCart();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			navigate(`/catalog?search=${encodeURIComponent(searchQuery.trim())}`);
			setSearchQuery("");
		}
	};

	return (
		<header className="header">
			<div className="header-inner container">
				<Link to="/" className="logo">
					<div className="logo-icon">CM</div>
					<span>ChinaHub</span>
				</Link>

				<nav className="nav-desktop">
					<Link to="/catalog" className="nav-link">
						Каталог
					</Link>
					<Link to="/catalog?category=electronics" className="nav-link">
						Электроника
					</Link>
					<Link to="/catalog?category=clothing" className="nav-link">
						Одежда
					</Link>
					{user?.role === "seller" && (
						<Link to="/seller" className="nav-link">
							Кабинет продавца
						</Link>
					)}
				</nav>

				<form className="search-form" onSubmit={handleSearch}>
					<Search size={18} className="search-icon" />
					<input
						type="text"
						placeholder="Поиск товаров..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="search-input"
					/>
				</form>

				<div className="header-actions">
					<Link to="/catalog" className="action-btn" title="Избранное">
						<Heart size={22} />
					</Link>
					<Link to="/cart" className="action-btn cart-btn">
						<ShoppingCart size={22} />
						{totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
					</Link>

					{user ? (
						<div className="user-menu">
							<button className="user-btn">
								<User size={20} />
								<span>{user.name}</span>
							</button>
							<div className="user-dropdown">
								<Link to="/profile" className="dropdown-item">
									Профиль
								</Link>
								<Link to="/orders" className="dropdown-item">
									Мои заказы
								</Link>
								{user.role === "seller" && (
									<Link to="/seller" className="dropdown-item">
										Кабинет продавца
									</Link>
								)}
								<button onClick={logout} className="dropdown-item logout">
									Выйти
								</button>
							</div>
						</div>
					) : (
						<div className="auth-btns">
							<Link to="/login" className="btn btn-ghost">
								Войти
							</Link>
							<Link to="/register" className="btn btn-primary">
								Регистрация
							</Link>
						</div>
					)}

					<button
						className="burger-btn"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label="Меню"
					>
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
				<div className="mobile-menu-panel">
					<div className="mobile-menu-header">
						<Link
							to="/"
							className="logo"
							onClick={() => setMobileMenuOpen(false)}
						>
							<div className="logo-icon">CM</div>
							<span>ChinaHub</span>
						</Link>
						<button
							className="close-btn"
							onClick={() => setMobileMenuOpen(false)}
						>
							<X size={24} />
						</button>
					</div>

					<nav className="mobile-nav">
						<Link to="/catalog" onClick={() => setMobileMenuOpen(false)}>
							Каталог
						</Link>
						<Link
							to="/catalog?category=electronics"
							onClick={() => setMobileMenuOpen(false)}
						>
							Электроника
						</Link>
						<Link
							to="/catalog?category=clothing"
							onClick={() => setMobileMenuOpen(false)}
						>
							Одежда
						</Link>
						<Link
							to="/catalog?category=cosmetics"
							onClick={() => setMobileMenuOpen(false)}
						>
							Косметика
						</Link>
						<Link
							to="/catalog?category=home"
							onClick={() => setMobileMenuOpen(false)}
						>
							Для дома
						</Link>
						{user?.role === "seller" && (
							<Link to="/seller" onClick={() => setMobileMenuOpen(false)}>
								Кабинет продавца
							</Link>
						)}
					</nav>

					<div className="mobile-divider" />

					<div className="mobile-actions">
						{user ? (
							<>
								<Link
									to="/profile"
									className="mobile-nav-link"
									onClick={() => setMobileMenuOpen(false)}
								>
									<User size={20} /> Профиль
								</Link>
								<Link
									to="/orders"
									className="mobile-nav-link"
									onClick={() => setMobileMenuOpen(false)}
								>
									<ShoppingCart size={20} /> Мои заказы
								</Link>
								<button
									onClick={() => {
										logout();
										setMobileMenuOpen(false);
									}}
									className="mobile-nav-link logout"
								>
									Выйти
								</button>
							</>
						) : (
							<>
								<Link
									to="/login"
									className="btn btn-secondary"
									onClick={() => setMobileMenuOpen(false)}
								>
									Войти
								</Link>
								<Link
									to="/register"
									className="btn btn-primary"
									onClick={() => setMobileMenuOpen(false)}
								>
									Регистрация
								</Link>
							</>
						)}
					</div>
				</div>
				<div
					className="mobile-menu-backdrop"
					onClick={() => setMobileMenuOpen(false)}
				/>
			</div>

			<style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--bg-white);
          border-bottom: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
        }
        .header-inner {
          height: 72px;
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 22px;
          font-weight: 700;
          color: var(--primary);
          flex-shrink: 0;
        }
        .logo-icon {
          width: 40px;
          height: 40px;
          background: var(--primary);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
        }
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-link {
          font-weight: 500;
          color: var(--text-medium);
          transition: color 0.2s;
          position: relative;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        .search-form {
          flex: 1;
          max-width: 400px;
          position: relative;
          margin: 0 auto;
        }
        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-light);
        }
        .search-input {
          width: 100%;
          padding: 10px 16px 10px 44px;
          border: 2px solid var(--border);
          border-radius: 100px;
          font-size: 14px;
          transition: all 0.2s;
          background: var(--bg-light);
        }
        .search-input:focus {
          outline: none;
          border-color: var(--primary);
          background: white;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .action-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-medium);
          transition: all 0.2s;
          position: relative;
        }
        .action-btn:hover {
          background: var(--bg-light);
          color: var(--primary);
        }
        .cart-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          min-width: 18px;
          height: 18px;
          background: var(--primary);
          color: white;
          font-size: 11px;
          font-weight: 600;
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 5px;
        }
        .user-menu {
          position: relative;
        }
        .user-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: var(--bg-light);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dark);
          transition: all 0.2s;
        }
        .user-btn:hover {
          background: var(--border);
        }
        .user-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: white;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          min-width: 180px;
          padding: 8px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          transition: all 0.2s;
        }
        .user-menu:hover .user-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown-item {
          display: block;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 14px;
          color: var(--text-medium);
          transition: all 0.2s;
          width: 100%;
          text-align: left;
        }
        .dropdown-item:hover {
          background: var(--bg-light);
          color: var(--text-dark);
        }
        .dropdown-item.logout {
          color: var(--primary);
        }
        .auth-btns {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .btn {
          padding: 10px 20px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 14px;
          transition: all 0.25s;
          white-space: nowrap;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
        }
        .btn-primary:hover {
          background: var(--primary-dark);
        }
        .btn-ghost {
          background: transparent;
          color: var(--text-medium);
        }
        .btn-ghost:hover {
          color: var(--primary);
          background: rgba(230, 57, 70, 0.05);
        }
        .btn-secondary {
          background: transparent;
          color: var(--secondary);
          border: 2px solid var(--secondary);
        }
        .btn-secondary:hover {
          background: var(--secondary);
          color: white;
        }
        .burger-btn {
          display: none;
          padding: 8px;
          background: none;
          color: var(--text-dark);
        }
        .mobile-menu {
          display: none;
        }
        @media (max-width: 992px) {
          .nav-desktop {
            display: none;
          }
          .search-form {
            display: none;
          }
          .auth-btns {
            display: none;
          }
          .burger-btn {
            display: flex;
          }
          .mobile-menu {
            display: block;
          }
          .mobile-menu:not(.active) {
            opacity: 0;
            visibility: hidden;
          }
          .mobile-menu.active {
            opacity: 1;
            visibility: visible;
          }
          .mobile-menu-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 200;
          }
          .mobile-menu-panel {
            position: fixed;
            top: 0;
            right: 0;
            width: 320px;
            max-width: 85vw;
            height: 100%;
            background: var(--bg-white);
            padding: 20px;
            z-index: 201;
            overflow-y: auto;
            transform: translateX(100%);
            transition: transform 0.3s;
          }
          .mobile-menu.active .mobile-menu-panel {
            transform: translateX(0);
          }
          .mobile-menu-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
          }
          .close-btn {
            padding: 8px;
            background: var(--bg-light);
            border-radius: 50%;
            color: var(--text-medium);
          }
          .mobile-nav {
            display: flex;
            flex-direction: column;
          }
          .mobile-nav a {
            padding: 14px 0;
            font-size: 16px;
            font-weight: 500;
            color: var(--text-dark);
            border-bottom: 1px solid var(--border);
          }
          .mobile-divider {
            height: 1px;
            background: var(--border);
            margin: 24px 0;
          }
          .mobile-actions {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .mobile-actions .btn {
            width: 100%;
            text-align: center;
          }
          .mobile-nav-link {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 0;
            font-size: 15px;
            color: var(--text-medium);
            border-bottom: 1px solid var(--border);
            background: none;
            width: 100%;
            text-align: left;
          }
          .mobile-nav-link.logout {
            color: var(--primary);
            border: none;
          }
        }
      `}</style>
		</header>
	);
}
