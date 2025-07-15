import { create } from 'zustand';

export interface themeStateInterface {
	theme: 'light' | 'dark' | 'system';
}

export interface themeActionInterface {
	setTheme: (theme: 'light' | 'dark' | 'system') => void;
	toggle: () => void;
}

const getSystemTheme = () => {
	const root = window.document.documentElement;
	root.classList.remove('light', 'dark');
	const theme =  window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
	root.classList.add(theme);
	return theme;
};

export interface themeInterface
	extends themeActionInterface,
		themeStateInterface {}

export const useThemeStore = create<themeInterface>((set) => {
	return {
		theme: getSystemTheme(),
		setTheme: (theme) =>
			set((state) => {
				window.document.documentElement.classList.remove(state.theme);
				state.theme = theme;
				window.document.documentElement.classList.add(state.theme);
				return state;
			}),
		toggle: () =>
			set((state) => {
				const newState = { ...state };
				window.document.documentElement.classList.remove(newState.theme);
				newState.theme = newState.theme === 'light' ? 'dark' : 'light';
				window.document.documentElement.classList.add(newState.theme);
				return newState;
			}),
	};
});
