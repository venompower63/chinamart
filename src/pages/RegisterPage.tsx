import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { Mail, Lock, User, Phone, Store, Check } from "lucide-react";
import { categories } from "../data/mockData";

export default function RegisterPage() {
	const { register } = useAuth();
	const { showToast } = useToast();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		name: "",
		phone: "",
		role: "buyer" as "buyer" | "seller",
		storeName: "",
		storeCategory: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		if (formData.password !== formData.confirmPassword) {
			setError("Пароли не совпадают");
			return;
		}

		if (formData.password.length < 6) {
			setError("Пароль должен быть не менее 6 символов");
			return;
		}

		setIsLoading(true);

		try {
			await register({
				email: formData.email,
				password: formData.password,
				name: formData.name,
				phone: formData.phone,
				role: formData.role,
				storeName: formData.storeName,
				storeCategory: formData.storeCategory,
			});
			showToast("success", "Регистрация успешна!");
			navigate(formData.role === "seller" ? "/seller" : "/");
		} catch (err) {
			setError((err as Error).message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="auth-page">
			<div className="auth-container">
				<div className="auth-header">
					<h1>Регистрация</h1>
					<p>Создайте аккаунт для покупок или продажи товаров</p>
				</div>

				<form onSubmit={handleSubmit} className="auth-form">
					{error && <div className="error-message">{error}</div>}

					{/* Role Selection */}
					<div className="role-selection">
						<button
							type="button"
							className={`role-btn ${formData.role === "buyer" ? "active" : ""}`}
							onClick={() => setFormData({ ...formData, role: "buyer" })}
						>
							<Check size={20} />🛒 Покупатель
						</button>
						<button
							type="button"
							className={`role-btn ${formData.role === "seller" ? "active" : ""}`}
							onClick={() => setFormData({ ...formData, role: "seller" })}
						>
							<Check size={20} />🏪 Продавец
						</button>
					</div>

					<div className="form-group">
						<label>Email</label>
						<div className="input-wrapper">
							<Mail size={20} />
							<input
								type="email"
								required
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								placeholder="mail@example.com"
							/>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group">
							<label>Имя</label>
							<div className="input-wrapper">
								<User size={20} />
								<input
									type="text"
									required
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
									placeholder="Иван Иванов"
								/>
							</div>
						</div>
						<div className="form-group">
							<label>Телефон</label>
							<div className="input-wrapper">
								<Phone size={20} />
								<input
									type="tel"
									required
									value={formData.phone}
									onChange={(e) =>
										setFormData({ ...formData, phone: e.target.value })
									}
									placeholder="+7 (999) 123-45-67"
								/>
							</div>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group">
							<label>Пароль</label>
							<div className="input-wrapper">
								<Lock size={20} />
								<input
									type="password"
									required
									value={formData.password}
									onChange={(e) =>
										setFormData({ ...formData, password: e.target.value })
									}
									placeholder="Минимум 6 символов"
								/>
							</div>
						</div>
						<div className="form-group">
							<label>Подтвердите пароль</label>
							<div className="input-wrapper">
								<Lock size={20} />
								<input
									type="password"
									required
									value={formData.confirmPassword}
									onChange={(e) =>
										setFormData({
											...formData,
											confirmPassword: e.target.value,
										})
									}
									placeholder="Повторите пароль"
								/>
							</div>
						</div>
					</div>

					{/* Seller Fields */}
					{formData.role === "seller" && (
						<div className="seller-fields">
							<div className="form-group">
								<label>Название магазина *</label>
								<div className="input-wrapper">
									<Store size={20} />
									<input
										type="text"
										required={formData.role === "seller"}
										value={formData.storeName}
										onChange={(e) =>
											setFormData({ ...formData, storeName: e.target.value })
										}
										placeholder="Например: TechGadgets Shop"
									/>
								</div>
							</div>

							<div className="form-group">
								<label>Категория товаров *</label>
								<select
									required={formData.role === "seller"}
									value={formData.storeCategory}
									onChange={(e) =>
										setFormData({ ...formData, storeCategory: e.target.value })
									}
								>
									<option value="">Выберите категорию</option>
									{categories.map((cat) => (
										<option key={cat.id} value={cat.id}>
											{cat.name}
										</option>
									))}
								</select>
							</div>
						</div>
					)}

					<button
						type="submit"
						className="btn btn-primary"
						disabled={isLoading}
					>
						{isLoading ? "Регистрация..." : "Зарегистрироваться"}
					</button>

					<p className="terms">
						Нажимая кнопку, вы соглашаетесь с <a href="#">условиями оферты</a> и{" "}
						<a href="#">политикой конфиденциальности</a>
					</p>
				</form>

				<div className="auth-footer">
					<p>
						Уже есть аккаунт? <Link to="/login">Войти</Link>
					</p>
				</div>
			</div>

			<style>{`
        .auth-page {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }
        .auth-container {
          width: 100%;
          max-width: 520px;
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 40px;
        }
        .auth-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .auth-header h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .auth-header p {
          color: var(--text-light);
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .error-message {
          padding: 12px 16px;
          background: rgba(230, 57, 70, 0.1);
          border: 1px solid var(--primary);
          border-radius: var(--radius-sm);
          color: var(--primary);
          font-size: 14px;
        }
        .role-selection {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .role-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px;
          border: 2px solid var(--border);
          border-radius: var(--radius-md);
          background: var(--bg-white);
          font-size: 15px;
          font-weight: 500;
          color: var(--text-medium);
          transition: all 0.2s;
        }
        .role-btn:hover {
          border-color: var(--primary);
        }
        .role-btn.active {
          border-color: var(--primary);
          background: rgba(230, 57, 70, 0.05);
          color: var(--primary);
        }
        .role-btn svg {
          display: none;
        }
        .role-btn.active svg {
          display: block;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dark);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-wrapper svg:first-child {
          position: absolute;
          left: 14px;
          color: var(--text-light);
        }
        .input-wrapper input,
        .form-group select {
          width: 100%;
          padding: 14px 16px 14px 48px;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 15px;
          transition: all 0.2s;
        }
        .form-group select {
          padding-left: 16px;
        }
        .input-wrapper input:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--primary);
        }
        .seller-fields {
          padding: 20px;
          background: var(--bg-light);
          border-radius: var(--radius-md);
        }
        .btn {
          width: 100%;
          padding: 16px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 16px;
          transition: all 0.2s;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
        }
        .btn-primary:hover:not(:disabled) {
          background: var(--primary-dark);
        }
        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .terms {
          font-size: 12px;
          color: var(--text-light);
          text-align: center;
        }
        .terms a {
          color: var(--primary);
        }
        .auth-footer {
          text-align: center;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }
        .auth-footer p {
          color: var(--text-medium);
        }
        .auth-footer a {
          color: var(--primary);
          font-weight: 500;
        }
        @media (max-width: 576px) {
          .auth-container {
            padding: 24px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
		</div>
	);
}
