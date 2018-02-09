export default {
    Mutation: {
        login:(src,{username,password},ctx)=>{
            return ctx.login(username,password);
        },
        pushByFilter:(src,{content,target},ctx)=>{
            if(!ctx.user){
                return new Error("Access Denied!");
            } else {

            }
        },
        pushBySegment:(src,{content,target},ctx)=>{
            if(!ctx.user){
                return new Error("Access Denied!");
            } else {

            }
        },
        pushToAll:(src,{content,target},ctx)=>{
            if(!ctx.user){
                return new Error("Access Denied!");
            } else {

            }
        },
    }
}