const pool =require("../middelware/db_connexion")
const jwt=require("jsonwebtoken")
const secretkey="rahal"

const loginEntreprise=async(req,res)=>{
try{
    const {email,password}=req.body
    const query=`select * from entreprise where email = "${email}" AND password= "${password}"`

    pool.query(query,(error,result)=>{

        if (error) {
            console.error('Erreur lors de la recherche de l\'entreprise :', err);
            return res.status(500).json({ message: 'Erreur interne du serveur' });
          }

          console.log(result)
          // Vérifiez si l'email existe
          if (result.length === 0) {
              res.status(404).json({ error: 'email or paasword invalid ' });
              return;
          }

          const entreprise = result[0];
          
          
        
          // Génération du token JWT si l'entreprise est authentifiée
          const token = jwt.sign({ id: entreprise.id, email: entreprise.email}, secretkey, { expiresIn: '1h' });
          res.json({ token });
         
        })
    
}catch(e){

    console.log({message:e})
}


}
module.exports= {loginEntreprise}