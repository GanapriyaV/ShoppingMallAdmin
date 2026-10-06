import React, { useEffect, useState } from "react";

function MallAdminForm({
    fetchMallAdmins,
    editingMallAdmin,
    setEditingMallAdmin
}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_no, setPhoneNo] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    // When Edit is clicked, fill the form
    useEffect(() => {

        if (editingMallAdmin) {
            setName(editingMallAdmin.name);
            setEmail(editingMallAdmin.email);
            setPhoneNo(editingMallAdmin.phone_no);
            setPassword(editingMallAdmin.password);
            setRole(editingMallAdmin.role);
        }

    }, [editingMallAdmin]);


    const handleSubmit = async (e) => {

        e.preventDefault();

        const mallAdmin = {
            name: name,
            email: email,
            phone_no: phone_no,
            password: password,
            role: role
        };

        console.log("Sending data:", mallAdmin);

        try {

            let response;

            // UPDATE
            if (editingMallAdmin) {

                response = await fetch(
                    `http://localhost:8080/updatemalladmin/${editingMallAdmin.id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(mallAdmin)
                    }
                );

            }

            // ADD
            else {

                response = await fetch(
                    "http://localhost:8080/malladmin",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(mallAdmin)
                    }
                );

            }

            console.log("Status:", response.status);

            if (!response.ok) {

                const errorText = await response.text();

                console.log("Backend error:", errorText);

                alert("Operation failed. Status: " + response.status);

                return;
            }

            alert(
                editingMallAdmin
                    ? "Mall Admin updated successfully!"
                    : "Mall Admin added successfully!"
            );

            // Refresh list
            fetchMallAdmins();

            // Clear editing mode
            setEditingMallAdmin(null);

            // Clear form
            setName("");
            setEmail("");
            setPhoneNo("");
            setPassword("");
            setRole("");

        } catch (error) {

            console.error("Error:", error);

            alert("Cannot connect to Spring Boot");

        }
    };


    return (
        <div className="form-container">

            <h2>
                {editingMallAdmin
                    ? "UPDATE MALL-ADMIN"
                    : "ADD MALL-ADMIN"}
            </h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone_no}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                />

                <button type="submit">
                    {editingMallAdmin
                        ? "Update Mall Admin"
                        : "Add Mall Admin"}
                </button>

                {editingMallAdmin && (
                    <button
                        type="button"
                        onClick={() => {
                            setEditingMallAdmin(null);
                            setName("");
                            setEmail("");
                            setPhoneNo("");
                            setPassword("");
                            setRole("");
                        }}
                    >
                        Cancel
                    </button>
                )}

            </form>

        </div>
    );
}

export default MallAdminForm;