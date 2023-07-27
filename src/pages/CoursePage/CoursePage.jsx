import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import apiLogic from '../../apiLogic/apiLogic';
import CourseCard from '../../components/CourseCard/CourseCard';
import  {Card, TextField, Typography, Button, Select, MenuItem, InputLabel, FormControl} from '@mui/material';
import styles from './styles.module.css'

const CoursePage = () => {
    const {courseId} = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState({description: "",
    imageLink: "",
    price: "",
    published: false,
    title: ""});
    const updateCourse = async  () => {
        const {title, description, price, imageLink, published} = course;
        console.log(courseId, title, description, price, imageLink, published)
        const result = await apiLogic.updateCourse(courseId, title, description, price, imageLink, published);
        console.log(result)
        navigate('/courses')
    }
    useEffect(() => {
        (async () => {
            const result = await apiLogic.getCourseById(courseId);
            setCourse(result)
        })();
    }, []);
    const handleChange = (event) => {
        setCourse({...course, publish: event.target.value});
    };

    return (
        <div style={{maxWidth: '20vw', 
        display:'flex',
        justifyContent:'center',
        flexDirection: 'column',
        padding: 20}}>
            <CourseCard course={course}/>
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
                    value={course.title}
                    // defaultValue={course.title}
                    onChange={(e) => {setCourse({...course, title: e.target.value})}}
                />
                <TextField
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={course.description}
                    // defaultValue={course.description}
                    onChange={(e) => {setCourse({...course, description: e.target.value})}}
                />
                <TextField
                    id="outlined-basic"
                    label="Price"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={course.price}
                    // defaultValue={course.price}
                    onChange={(e) => {setCourse({...course, price: e.target.value})}}
                />
                
                <TextField
                    id="outlined-basic"
                    label="Image Link"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    // defaultValue={course.imageLink}
                    value={course.imageLink}
                    onChange={(e) => {setCourse({...course, imageLink: e.target.value})}}
                />
                <FormControl sx={{ m: 1, width: '100%' }}>
                    <InputLabel id="publish-select"
                    >Publish Course</InputLabel>
                    <Select
                        labelId="publish-select"
                        id="demo-simple-select-helper"
                        value={course.publish}
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
                    onClick={updateCourse}
                    >Update Course</Button>
            </Card>

        </div>
    )
}

export default CoursePage
