import React, { useEffect, useState } from "react";

import "./App.css";

import MallAdminForm from "./components/MallAdminForm";
import MallAdminList from "./components/MallAdminList";


function App() {

    const [mallAdmins, setMallAdmins] = useState([]);

    const [editingMallAdmin, setEditingMallAdmin] = useState(null);


    const fetchMallAdmins = async () => {

        try {

            const response = await fetch(
                "http://localhost:8080/addmalladmin"
            );

            const data = await response.json();

            console.log("Mall admins:", data);

            setMallAdmins(data);

        } catch (error) {

            console.error("Error fetching mall admins:", error);

        }
    };


    useEffect(() => {

        fetchMallAdmins();

    }, []);


    return (

        <div className="App">

            <h1>Shopping Mall Management System</h1>

            <MallAdminForm
                fetchMallAdmins={fetchMallAdmins}
                editingMallAdmin={editingMallAdmin}
                setEditingMallAdmin={setEditingMallAdmin}
            />

            <MallAdminList
                mallAdmins={mallAdmins}
                fetchMallAdmins={fetchMallAdmins}
                setEditingMallAdmin={setEditingMallAdmin}
            />

        </div>

    );
}

export default App;