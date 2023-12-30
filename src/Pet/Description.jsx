import TextField from "@mui/material/TextField";
import * as React from "react";

export const Description = ({description, setDescription}) => {

    // const [viewDescription, setViewDescription] = React.useState("");

    return (
        <TextField
            id="fullWidth"
            type={"number"}
            label="Description"
            placeholder="description"
            multiline
            required={false}
            sx={{width: 600}}
            helperText="please enter the Pet Description"
            value={description}
            onChange={(event) => {
                setDescription(event.target.value)
                description = event.target.value
            }}
        />
    )
}