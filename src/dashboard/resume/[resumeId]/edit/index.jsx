import React, { useEffect, useState } from 'react'
import FormSection from '../../components/FormSection'
import ResumePreview from '../../components/ResumePreview'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import dummy from '@/data/dummy';

const EditResume = () => {
    const [resumeInfo,setResumeInfo] = useState()
    useEffect(()=>{
        console.log(dummy);
        setResumeInfo(dummy);
    },[])
    
  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
    <div className='grid grid-cols-1 md:grid-cols-2 p-1 gap-10'>
      {/* FormSection */}
      <FormSection/>
      {/* ResumePreview */}
      <ResumePreview/>
    </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume
