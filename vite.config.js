import { defineConfig , loadEnv} from 'vite'
import react from '@vitejs/plugin-react';
// import dotenv from "dotenv";

//dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// export default defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = loadEnv(mode, process.cwd(), '')
//   return {
//     // vite config
//     plugins: [react()],
//     define: {
//       __APP_ENV__: JSON.stringify(env.VITE_CORS_PROXY),
//     },
//   }
// })