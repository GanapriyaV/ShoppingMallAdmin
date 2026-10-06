import React from "react";

function MallAdminList({
    mallAdmins,
    fetchMallAdmins,
    setEditingMallAdmin
}) {

    const handleDelete = async (id) => {

        try {

            const response = await fetch(
                `http://localhost:8080/deletemalladmin/${id}`,
                {
                    method: "DELETE"
                }
            );

            if (!response.ok) {
                alert("Delete failed");
                return;
            }

            fetchMallAdmins();

        } catch (error) {

            console.error("Delete error:", error);

        }
    };


    return (

        <div className="malladmin-list">

            <h2>MALL ADMIN LIST</h2>

            {mallAdmins.map((mallAdmin) => (

                <div key={mallAdmin.id}>

                    <p>
                        <strong>Name:</strong> {mallAdmin.name}
                    </p>

                    <p>
                        <strong>Email:</strong> {mallAdmin.email}
                    </p>

                    <p>
                        <strong>Phone:</strong> {mallAdmin.phone_no}
                    </p>

                    <p>
                        <strong>Role:</strong> {mallAdmin.role}
                    </p>

                    <button
                        onClick={() =>
                            setEditingMallAdmin(mallAdmin)
                        }
                    >
                        EDIT
                    </button>

                    <button
                        onClick={() =>
                            handleDelete(mallAdmin.id)
                        }
                    >
                        DELETE
                    </button>

                    <hr />

                </div>

            ))}

        </div>

    );
}

export default MallAdminList;