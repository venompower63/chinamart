import {
	createContext,
	useContext,
	useState,
	type ReactNode,
	useCallback,
} from "react";

interface Toast {
	id: string;
	type: "success" | "error" | "info";
	message: string;
}

interface ToastContextType {
	toasts: Toast[];
	showToast: (type: Toast["type"], message: string) => void;
	removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
	const [toasts, setToasts] = useState<Toast[]>([]);

	const showToast = useCallback((type: Toast["type"], message: string) => {
		const id = `toast_${Date.now()}`;
		setToasts((prev) => [...prev, { id, type, message }]);

		setTimeout(() => {
			setToasts((prev) => prev.filter((t) => t.id !== id));
		}, 3000);
	}, []);

	const removeToast = useCallback((id: string) => {
		setToasts((prev) => prev.filter((t) => t.id !== id));
	}, []);

	return (
		<ToastContext.Provider value={{ toasts, showToast, removeToast }}>
			{children}
			<div className="toast-container">
				{toasts.map((toast) => (
					<div key={toast.id} className={`toast toast-${toast.type}`}>
						<span className="toast-icon">
							{toast.type === "success" && "✓"}
							{toast.type === "error" && "✕"}
							{toast.type === "info" && "ℹ"}
						</span>
						<span className="toast-message">{toast.message}</span>
						<button
							className="toast-close"
							onClick={() => removeToast(toast.id)}
						>
							×
						</button>
					</div>
				))}
			</div>
			<style>{`
        .toast-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .toast {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          border-radius: 8px;
          background: white;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          animation: slideIn 0.3s ease;
          min-width: 300px;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .toast-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }
        .toast-success .toast-icon { background: #2a9d8f; }
        .toast-error .toast-icon { background: #e63946; }
        .toast-info .toast-icon { background: #1d3557; }
        .toast-message {
          flex: 1;
          font-size: 14px;
          color: #1a1a2e;
        }
        .toast-close {
          background: none;
          border: none;
          font-size: 20px;
          color: #8b8ba7;
          cursor: pointer;
          padding: 0;
          line-height: 1;
        }
        .toast-close:hover {
          color: #1a1a2e;
        }
        @media (max-width: 480px) {
          .toast-container {
            left: 16px;
            right: 16px;
            bottom: 16px;
          }
          .toast {
            min-width: auto;
          }
        }
      `}</style>
		</ToastContext.Provider>
	);
}

export function useToast() {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error("useToast must be used within ToastProvider");
	}
	return context;
}
