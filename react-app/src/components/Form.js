import React, {useContext, useState, useEffect   } from 'react'
import { Redirect, useHistory } from "react-router-dom";
import { Row, Col, Button, Form, FormLabel, FormControl } from 'react-bootstrap';
import { AuthContext } from '../contexts/AuthContext';
import { AppContext } from '../contexts/AppContext';
import axios from 'axios';
import AuthLayout from '../containers/layout/AuthLayout';
import _, { multiply } from 'lodash';
import { handleResponse } from '../utils/axios';
import User from "../apis/User";
import Message from '../components/Message';
import { validateForm } from '../utils/validation';

function AjaxForm({ handleFormSubmit }) {

    return (
        <Form noValidate>
        </Form>
    );
}

export default AjaxForm;