import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import AutocompletLocation from "./AutocompletLocation";

const PostForm = () => {
    const [credentials, setCredentials] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", credentials.title)
        formData.append("content", credentials.content)
        
        credentials.uploadFiles.forEach(file => {
            formData.append("photos", file)
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value })
    }

    return ( 
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                ".MuiInputBase-root, .MuiButton-root": {
                    mb: 2
                }
            }}
        >
            <TextField 
                label="Title" 
                variant="outlined"
                name="title"
                onChange={handleChange}
            />
            <TextField 
                label="Content" 
                variant="outlined" 
                multiline
                rows={4}
                name="content"
                onChange={handleChange}
            />
            <AutocompletLocation />
            <Button
                variant="contained"
                type="submit"
            >
                Submit
            </Button>
        </Box>
     );
}
 
export default PostForm;