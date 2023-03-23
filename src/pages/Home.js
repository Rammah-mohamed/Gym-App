import React, {useState} from 'react'
import { Box } from '@mui/system'

import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exersices from '../components/Exersices'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
      <Exersices 
      exercises={exercises}
      setExercises={setExercises}
      bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home