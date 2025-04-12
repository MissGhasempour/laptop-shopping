import React from "react";
export default function Input ({id, name, onBlur, onChange}: {
    id : string;
    name : string;
    onBlur : Function;
    onChange : Function;
}) {

    return <div>
        <input type="text" />
    </div>
}