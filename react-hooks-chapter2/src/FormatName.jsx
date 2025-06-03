import React from "react";

function FormatName({user}){
    return user.firstName + " " + user.lastName
}

export default FormatName