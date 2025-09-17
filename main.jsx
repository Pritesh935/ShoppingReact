import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './components/login/login'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { DataBinding } from './components/login/data-binding/data-binding';
import { Flipkart } from './components/flipkart';
createRoot(document.getElementById('root')).render(
<StrictMode>
<Flipkart />
</StrictMode>
,

)