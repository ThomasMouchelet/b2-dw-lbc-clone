import { Box, Button, TextField } from "@mui/material";

const PostForm = () => {
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
            />
            <TextField 
                label="Content" 
                variant="outlined" 
                multiline
                rows={4}
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