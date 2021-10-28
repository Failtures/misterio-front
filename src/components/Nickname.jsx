import React, { useState } from "react";
import { TextField } from "@mui/material";


const NickName = (props) => {

    const [nickName, setNickName] = useState(props.nickName)

    const updateNick = (e) => {
        setNickName(e.target.value)
    }

    return (
        <div>
            <TextField id="outlined-basic" label="Nickname" variant="outlined" onChange={(e) => {updateNick(e)}} />
            <p>{nickName}</p>
        </div>
    )
};

export default NickName;