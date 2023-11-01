import publicationModel from '../models/publication.js'
const publication=(req,res)=>{
    const{title,author,category}=req.body
    console.log(req.body)
}
export default publication