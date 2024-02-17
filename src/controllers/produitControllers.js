

const pool =require("../middelware/db_connexion")
const Produit = require("../models/produitsModels")

    const allproduit= async(req, res) => {
        const query = 'SELECT * FROM produit';
        pool.query(query, (error, results) => {
            if (error) {
                console.error('Error retrieving products: ', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }
            const produit = results.map(row => new Produit(row.id_produit, row.nom, row.image,row.description,row.categories,row.marque,row.prix,row.quantite,row.id_entreprise,row.id_panier));
            res.json(produit);
        });
    }

   

    const ajoutProduit= async (req, res) => {
        try {
           
            
            // Récupérez les données du corps de la requête
            const { nom, image, description, categories, marque,prix,quantite,id_entreprise,id_panier } = req.body;
    
            // Construisez la requête SQL pour ajouter un nouvel produit
            const query = `
                INSERT INTO produit (nom, image, description, categories, marque,prix,quantite,id_entreprise,id_panier )
                VALUES (?, ?, ?, ?, ?,?,?,?,?)
            `;
    
            // Exécutez la requête SQL INSERT avec les données de produit
            pool.query(query, [nom, image, description, categories, marque,prix,quantite,id_entreprise,id_panier], (error, results) => {
                if (error) {
                    console.error('Error adding student: ', error);
                    res.status(500).json({ error: 'Internal server error' });
                    return;
                }
    
                // Vérifiez si l'étudiant a été ajouté avec succès
                if (results.affectedRows === 1) {
                    res.status(201).json({ message: 'produit ajouté avec succés' });
                } else {
                    res.status(500).json({ error: 'produit non ajouté' });
                }
            });
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    };


    const getProduitById =async(req,res)=>{
        try{
            const query=`select * from produit where id_produit = ?`
           const idProduit=req.params.id
            pool.query(query,idProduit,(error,result) =>{
                if (error) {
                    console.error('Error retrieving products: ', error);
                    res.status(500).json({ error: 'Internal server error' });
                    return;
                }

                const produit= result.map(row =>new Produit(row.id_produit, row.nom, row.image,row.description,row.categories,row.marque,row.prix,row.quantite,row.id_entreprise,row.id_panier))
                    res.json(produit)
           
            })
        
        
        
    
        }catch(e){
            res.json({message:e})

        }
        

    }


    const DeleteProduit=async(req,res)=>{

       
            
            const query= `delete from produit where id_produit=?`
            const idProduit=req.params.id;
            pool.query(query,idProduit,(error,result)=>{

                if(error){
                    console.error('Error retrieving products: ', error);
                    res.status(500).json({ error: 'Internal server error' });
                    return;
                }
                if (result.affectedRows === 0) {
                    res.status(404).json({ error: 'produit not found' });
                    return;
                }
        
                res.json({ message: 'produit deleted successfully' });
            });

    }

    const updateProduit =async (req, res) => {
       
        // Récupérez les données mises à jour à partir du corps de la requête
    
        // Construisez la requête SQL pour mettre à jour l'étudiant avec l'ID spécifié
        const query = `UPDATE produit SET nom = "${req.body.nom}",image= "${req.body.image}",description = "${req.body.description}",categories = "${req.body.categories}", marque= "${req.body.marque}",prix= "${req.body.prix}",quantite= "${req.body.quantite}",id_entreprise= "${req.body.id_entreprise}",id_panier= "${req.body.id_panier}" WHERE id_produit = "${req.params.id}"`;
    
    
        // Exécutez la requête SQL UPDATE
        pool.query(query, (error, results) => {
            if (error) {
                console.error('Error updating produit: ', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }
    console.log(results)
            // Vérifiez si l'étudiant a été mis à jour avec succès
            if (results.affectedRows === 0) {
                res.status(404).json({ error: 'produit not found' });
                return;
            }
    
            res.json({ message: 'produit updated successfully' });
        });
    };


module.exports={allproduit,ajoutProduit,getProduitById,DeleteProduit,updateProduit}