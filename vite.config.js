import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { webcrypto } from 'node:crypto';
import tsconfigPaths from 'vite-tsconfig-paths';

if (!globalThis.crypto) {
    globalThis.crypto = webcrypto;
}

export default defineConfig({
    base: '/react-portfolio/', // 👈 this is the fix
    plugins: [react(), tsconfigPaths()],
});
