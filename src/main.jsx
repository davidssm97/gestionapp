import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { Menu } from './components/common/Menu/Menu'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu></Menu>
  </StrictMode>,
)
