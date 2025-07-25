import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/router.tsx'
import { ThemeProvider } from './Provider/theme-provider.tsx'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>

    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>

    <RouterProvider router={router}/>
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
