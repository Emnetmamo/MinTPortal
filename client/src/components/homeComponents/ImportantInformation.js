import React from 'react'
import LatestNews from './LatestNews'
import LatestAnnouncement from './LatestAnnoucement'
import LatestData from './LatestData'

const ImportantInformation = () => {
  return (
    <div className='row mt-5'>
        <div className='col-md-4'><LatestNews/></div>
        <div className='col-md-4'><LatestAnnouncement/></div>
        <div className='col-md-4'><LatestData/></div>
    </div>
  )
}

export default ImportantInformation