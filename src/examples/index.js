import React from 'react';
import ReactDom from 'react-dom';

import Hello from './components/Hello';
import Fragments from './components/Fragments';
import ModalExample from "./components/modal/Modal";
import ErrorBoundary from "./components/ErrorBoundary";

ReactDom.render(
    <div>
        <Hello/>
        <Fragments/>
        <ModalExample/>
        <ErrorBoundary/>
    </div>
    , document.querySelector('#root'))