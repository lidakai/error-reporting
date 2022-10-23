import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import libConfig from './vite.config-lib'

const isDve = (process.env.NODE_ENV === 'development')

export default isDve ? defineConfig({
  plugins: [react()]
}):libConfig;
