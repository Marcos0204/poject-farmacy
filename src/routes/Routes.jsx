import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Layout from '../components/Layout/Layout';
import Beauty from '../pages/beauty/Beauty';
import  Medicines from '../pages/medicines/Medicines'
import Search from '../pages/search/Search';
import Login from '../pages/admin/login/Login';
import HomeAdmin from '../pages/admin/HomeAdmin/HomeAdmin';
import NewProductoAdmin from '../pages/admin/NewProductAdmin/NewProductoAdmin';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoutes';




const routes = () => {
  return (
      <Routes>
        
          <Route path="/" element={
            <PublicRoute>
              <Home />
            </PublicRoute>  
          } />
          <Route path="/medicamentos" element={
            <PublicRoute>
              <Medicines />
            </PublicRoute>  
          } />
          
          <Route path="/belleza" element={
            <PublicRoute>
               <Beauty />
            </PublicRoute>  
          } />
          <Route path="/buscar" element={
            <PublicRoute>
                <Search />        
            </PublicRoute> 
          } />
          <Route path="/login" element={
            <PublicRoute>
                <Login />        
            </PublicRoute> 
          } />
          <Route path="/admin" element={
            <PrivateRoute>
                <HomeAdmin />        
            </PrivateRoute> 
          } />
          <Route path="/admin/nuevo-Producto" element={
            <PrivateRoute>
                <NewProductoAdmin />        
            </PrivateRoute> 
          } />
          
    </Routes>

  )
}

export default routes
