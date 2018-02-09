const user = {
    id:1,
    name:"Eddie",
    password: "1234"
}
export default {
    read:(id,cb)=>{
        if(id===1){
            cb(null,user)
        } else {
            cb(new Error("User not found"))
        }
    },
    where:({username},cb)=>{
        if(username==="Eddie"){
            cb(null,user)
        } else {
            cb(new Error("User not found"))
        }
    },
    verifyPassword:(user,password)=>{
        return new Promise((resolve,reject)=>{
            if(user.password === password){
                resolve(true)
            } else {
                resolve(false)
            }
        })
    }
}