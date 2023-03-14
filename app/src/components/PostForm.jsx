import { Box, Button, TextField } from "@mui/material";

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


        
        // headers: { 'Content-Type': 'multipart/form-data' } 
        


        // formData.append("categorie[name]", credentials.category.name)
        // formData.append("categorie[description]", credentials.category.description)

        // {
        //     name: "",
        //     content: "",
        //     categorie: {
        //         name: "",
        //         description: ""
        //     }
        // }
        
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value })
    }

    return ( 
        <Box
            component="form"
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