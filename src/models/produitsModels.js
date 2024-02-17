 
 class Produit {
constructor(id_produit,nom,image,description,categories,marque,prix,quantite,id_entreprise,id_panier)
{
this.id_produit=id_produit;
this.nom=nom;
this.image=image;
this.discription=description;
this.categories=categories;
this.marque=marque;
this.prix=prix;
this.quantite=quantite;
this.id_entreprise=id_entreprise;
this.id_panier=id_panier;
}
 }

 module.exports= Produit;