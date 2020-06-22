///////////////////////////// Session Error Message ///////////////////////////
// functional component that renders an error message
// expects props "errors" (hash of fieldname:[errors]) and field (name of field, string)

import React from 'react'


export default function ErrorMessage ({errors, field}) {
    if (errors[field]){
        return (
            errors[field].map((error,idx)=>{
                return <span key={idx} className="error-message">
                    {error}
                </span>
            })
        )
    } else {
        return (<></>)
    }
}
