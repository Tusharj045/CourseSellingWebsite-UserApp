import { Card, TextField, Typography, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import React, {useState, useRef} from 'react'
import styles from './styles.module.css'
import apiLogic from '../../apiLogic/apiLogic';

const CreateCourse = () => {
    const titleRef = useRef('');
    const descriptionRef = useRef('');
    const imageLinkRef = useRef('');
    const priceRef = useRef('');
    const [publish, setPublish] = useState(false);

    const addCourse = async () => {
        console.log(apiLogic)
        // console.log(titleRef.current.value, descriptionRef.current.value, imageLinkRef.current.value, priceRef.current.value, publish, publishRef.current.value)
        const result = await apiLogic.createCourse(titleRef.current.value, descriptionRef.current.value,  priceRef.current.value, imageLinkRef.current.value, publish);
    }
    const handleChange = (event) => {
        setPublish(event.target.value);
    };
    return (
        <div className={styles.page}>
            <Card className={styles.container}>
                <Typography
                    component="h1"
                    variant="h5"
                    gutterBottom={true}

                > Add Course Details
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    inputRef={titleRef}
                />
                <TextField
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    inputRef={descriptionRef}
                />
                <TextField
                    id="outlined-basic"
                    label="Price"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    inputRef={priceRef}
                />
                
                <TextField
                    id="outlined-basic"
                    label="Image Link"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    inputRef={imageLinkRef}
                />
                <FormControl sx={{ m: 1, width: '100%' }}>
                    <InputLabel id="publish-select"
                    >Publish Course</InputLabel>
                    <Select
                        labelId="publish-select"
                        id="demo-simple-select-helper"
                        value={publish}
                        defaultValue={false}
                        label="Publish Course"
                        onChange={handleChange}
                    >
                        <MenuItem value={true}>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                    </Select>
                </FormControl>
                <br />
                
                <Button
                    variant="contained"
                    fullWidth
                    onClick={addCourse}
                    >Add Course</Button>
            </Card>

        </div>
    )
}

export default CreateCourse
