import { Container, Button,Grid, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import CourseCard from '../../components/CourseCard/CourseCard'
import apiLogic from '../../apiLogic/apiLogic'
const PurchasedCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const result = await apiLogic.getPurchasedCourses()
      console.log(result)
      setCourses(result || []);
    })();

  }, [])
  return (
    <div style={{display:'flex',alignItems:'center', flexDirection: 'column', marginTop: '2%'}}>
      <Typography variant='h4' color= {'#646cff'}>Purchased Courses</Typography>
      <Grid container 
      rowSpacing={4} 
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      padding={'2% 4%'}
      alignItems={'center'}
      >
        {courses.map((course) => {
          return (
            <Grid key={course._id} item xs={12} lg={4} md={6} xl={3}>
              <CourseCard key={course._id} course={course} purchased={true}/>              
            </Grid>
            )
        })}
      </Grid>
      
    </div>

  )
}

export default PurchasedCoursesPage;
