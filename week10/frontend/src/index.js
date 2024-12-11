import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FuncDisplayBooks from './DsplyBk_fncCompt';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayData from './DisplayData';
import FncDisplayBooks from './DsplyBk_fncCompt';
import Book_UpDateForm from './BookUpdate';
import DeleteBook from './Delete_Book';
import Book_Form from './AddBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FncDisplayBooks />} />
        <Route path="/edit/:id" element={<Book_UpDateForm />} />
        <Route path="/Delete/:id" element={<DeleteBook />} />
        <Route path="/addbook" element={<Book_Form />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

