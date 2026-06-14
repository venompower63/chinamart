import {
	createContext,
	useContext,
	useReducer,
	useEffect,
	type ReactNode,
} from "react";

export interface User {
	id: string;
	email: string;
	name: string;
	phone: string;
	role: "buyer" | "seller";
	sellerData?: SellerProfile;
}

export interface SellerProfile {
	storeName: string;
	category: string;
	description: string;
	rating: number;
	salesCount: number;
	createdAt: string;
}

interface AuthState {
	user: User | null;
	isLoading: boolean;
}

type AuthAction =
	| { type: "SET_USER"; payload: User | null }
	| { type: "SET_LOADING"; payload: boolean }
	| { type: "LOGOUT" };

const initialState: AuthState = {
	user: null,
	isLoading: true,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
	switch (action.type) {
		case "SET_USER":
			return { ...state, user: action.payload, isLoading: false };
		case "SET_LOADING":
			return { ...state, isLoading: action.payload };
		case "LOGOUT":
			return { ...state, user: null };
		default:
			return state;
	}
}

interface AuthContextType extends AuthState {
	login: (email: string, password: string) => Promise<void>;
	register: (data: RegisterData) => Promise<void>;
	logout: () => void;
	updateUser: (data: Partial<User>) => void;
}

export interface RegisterData {
	email: string;
	password: string;
	name: string;
	phone: string;
	role: "buyer" | "seller";
	storeName?: string;
	storeCategory?: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(authReducer, initialState);

	useEffect(() => {
		const stored = localStorage.getItem("chinamart_user");
		if (stored) {
			try {
				dispatch({ type: "SET_USER", payload: JSON.parse(stored) });
			} catch {
				dispatch({ type: "SET_LOADING", payload: false });
			}
		} else {
			dispatch({ type: "SET_LOADING", payload: false });
		}
	}, []);

	const login = async (email: string, password: string) => {
		const users = JSON.parse(localStorage.getItem("chinamart_users") || "[]");
		const user = users.find((u: User) => u.email === email);
		if (!user) {
			throw new Error("Пользователь не найден");
		}
		const storedPassword = localStorage.getItem(
			`chinamart_password_${user.id}`,
		);
		if (storedPassword !== password) {
			throw new Error("Неверный пароль");
		}
		localStorage.setItem("chinamart_user", JSON.stringify(user));
		dispatch({ type: "SET_USER", payload: user });
	};

	const register = async (data: RegisterData) => {
		const users = JSON.parse(localStorage.getItem("chinamart_users") || "[]");
		if (users.find((u: User) => u.email === data.email)) {
			throw new Error("Email уже зарегистрирован");
		}

		const newUser: User = {
			id: `user_${Date.now()}`,
			email: data.email,
			name: data.name,
			phone: data.phone,
			role: data.role,
			sellerData:
				data.role === "seller"
					? {
							storeName: data.storeName || "",
							category: data.storeCategory || "",
							description: "",
							rating: 0,
							salesCount: 0,
							createdAt: new Date().toISOString(),
						}
					: undefined,
		};

		users.push(newUser);
		localStorage.setItem("chinamart_users", JSON.stringify(users));
		localStorage.setItem(`chinamart_password_${newUser.id}`, data.password);
		localStorage.setItem("chinamart_user", JSON.stringify(newUser));
		dispatch({ type: "SET_USER", payload: newUser });
	};

	const logout = () => {
		localStorage.removeItem("chinamart_user");
		dispatch({ type: "LOGOUT" });
	};

	const updateUser = (data: Partial<User>) => {
		if (state.user) {
			const updated = { ...state.user, ...data };
			localStorage.setItem("chinamart_user", JSON.stringify(updated));

			const users = JSON.parse(localStorage.getItem("chinamart_users") || "[]");
			const idx = users.findIndex((u: User) => u.id === state.user!.id);
			if (idx !== -1) {
				users[idx] = updated;
				localStorage.setItem("chinamart_users", JSON.stringify(users));
			}

			dispatch({ type: "SET_USER", payload: updated });
		}
	};

	return (
		<AuthContext.Provider
			value={{ ...state, login, register, logout, updateUser }}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within AuthProvider");
	}
	return context;
}
