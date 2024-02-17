const express=require('express')
const routerUpload=express.Router()
const multer=require('multer')
const path =require('path')


// Configuration de multer pour spécifier où enregistrer les fichiers téléchargés

const storage =multer.diskStorage({
    destination:function (req,file,cb){ //destination fct appelé pour stocker les images envoyer par user en accédant par path
        cb(null,path.join(__dirname,"../images"))//path utilisé pour construire chemin vers  folder des images téléchargées
        //__dirname est utilisé pour spécifier le répertoire de destination des fichiers téléchargés.
        
    },
    filename: function(req,file,cb){ //nom de fichier télécharger depuis partie user pour le stocker dans le serveur
        cb(null, new Date().toISOString().replace(/:/g,"-") + file.originalname)//file.originalname est utilisé pour conserver le nom original du fichier téléchargé.
    }
})

// Initialiser l'upload avec la configuration multer

const upload=multer({storage :storage})//storage:storage key et value mm nom



//Définir la route pour le formulaire d'upload

routerUpload.post("/apiupload",upload.single("image"),(req,res)=>{

    res.status(200).json({message:"image uploaded"})
    
})

module.exports=routerUpload 