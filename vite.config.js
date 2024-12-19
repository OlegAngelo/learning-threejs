import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				cubes: resolve(__dirname, "cubes.html"),
				lines: resolve(__dirname, "lines.html"),
			},
		},
	},
});
