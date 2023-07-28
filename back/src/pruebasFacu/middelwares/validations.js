const {request,response} = require("express")


function projectDataValidation(req=request,res = response ,next){
  const { postulants } = req.body
  
  if (postulants){
    if(!Array.isArray(postulants)){
      res.status(200).send({status:"Error", Error: "postulants must be an Array of objects"})
      return
    }
    for(element of postulants){
      if(!Object.keys(element).includes("postulantId") || !Object.keys(element).includes("rol") || !Object.keys(element).includes("senority")){
        res.status(200).send({status:"Error", Error: "postulants items keys must be -->postulantId, rol, senority"})
        return
      }
      if( typeof(element['postulantId'])!== "string" || typeof(element['rol'])!== "string" ||typeof(element['senority'])!== "string" ){
        res.status(200).send({status:"Error", Error: "postulantId, rol, and senority must be strings"})
        return
      }
    }
    
    
  }
  next()
} 

module.exports = {
  projectDataValidation
}