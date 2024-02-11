const mysql = require('mysql');
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'e-commerce'
})

db.getConnection((error,connection) => {
if(error){
    console.log(error)
}else{
    console.log("mysql connected")

}
connection.release()//libéréer la connection aprés réusite pour eviter les fuites de cpnnexion
})

module.exports=db