

module.exports = {
    index(req,res){
        res.json({message:'Fala cambada de desgraça'});
    },
    create(req,res){

        let msg = ''
        res.json({msg:msg});
    }
}