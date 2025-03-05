const home = async ( req, res) =>{
 try{
    res.send('Welcom to')
 } catch(error){
    console.log(error);
 }
}
const register = async ( req, res) =>{
    try{
       res.status(200).json({msg: req.body});
    } catch(error){
       console.log(error);
       res.send(400).send({msg: "page  not found"});
    }
   }
   
module.exports = {home , register};