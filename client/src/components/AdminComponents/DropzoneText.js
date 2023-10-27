
import React, {useCallback, useState, useEffect } from 'react'
import {useDropzone} from 'react-dropzone'
import {HiArrowUpTray, HiXMark } from 'react-icons/hi2'

const Dropzone = ({className}) => {
  const [files, setFiles] = useState([])
  const [rejected, setRejected] = useState([])
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
   if (acceptedFiles?.length){
    setFiles(previousFiles => [
      ...previousFiles,
      ...acceptedFiles.map(file =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
    ])
   }
   if (rejectedFiles?.length){
    setRejected(previousFiles => [
      ...previousFiles,
      ...rejectedFiles
    ])
   }
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: {
      
      'text/*': ['.pdf'],
    },
    onDrop,
    maxSize: 1024*1000
  })
    useEffect(() => {
      // Revoke the data uris to avoid memory leaks
      return () => files.forEach(file => URL.revokeObjectURL(file.preview))
    }, [files])
  
    const removeFile = name => {
      setFiles(files => files.filter(file => file.name !== name))
    }
  
    const removeAll = () => setFiles([])
    const removeRejected = name => {
      setRejected(files => files.filter(({file}) => file.name !== name))
    }

  return (
    <form>
      <div {...getRootProps({className: className})} >
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <div className='d-flex flex-column  align-items-center'>
              <p> <HiArrowUpTray/> </p>
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>            
        }
      </div>
      <section className='mt-5'>
        <div className='mb-3 d-flex   '>
          <h2 className='me-3   fw-bold text-secondary'>
            Preview
          </h2>
          <button
          onClick={removeAll}
            className='ms-4 btn btn-white border border-secondary fw-bold text-secondary'
          >
            Remove all files
          </button>
          
        </div>
        <h2 class=" fw-bold text-secondary my- text-center">Accepted Files</h2>
        <ul className='mt-4 d-flex'>
          {files.map(file => (
            <li key={file.name} className=' p-2  d-flex   rounded-md shadow'>
             
              <p className='m-2 text-neutral-500 fs-6 fw-medium'>
                {file.name}
              </p>
              
              <button
                className='btn btn-secondary     border border-secondary transition '
                onClick={() => removeFile(file.name)}
              >
                Remve
              </button>
            </li>
          ))}
        </ul>
        <h2 class=" fw-bold text-secondary  my-3 text-center">Rejected Files</h2>
        <ul className='mt-4 '>
          {rejected.map(({file, errors}) => (
            <li key={file.name} className='mb-2 d-flex align-items-center 
            justify-content-between rounded-md shadow'>
              <div className='rejected-list cdd-flex flex-column align-items-center'>
                <p className='text-wrap-1'>
                {file.name}
                </p>
                <ul className='fs-5 '>
                  {errors.map(error => (
                    <li className=' d-flex '>{error.message}</li>
                  ))}
                </ul>
              </div>
              <button
                className='btn btn-white border border-secondary mx-3 fw-bold text-secondary'
                onClick={() => removeRejected(file.name)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>
    </form>
  )
}

export default Dropzone