export const localsMiddleWare = (req,res,next)=>{
   
   // res.locals.loggedIn = Boolean(req.seesion.loggedIn)
   
    
    res.locals.loggedIn  =Boolean(req.session.loggedIn) 
    res.locals.sexy = "you"
    res.locals.siteName = "WeTube"
    res.locals.loggedInUser = req.session.user || {}
    console.log(req.session.user)
    
    next()
}

export const protectorMiddleWare=(req,res,next)=>{
    if(req.session.loggedIn){
        next()
    } else{
        return res.redirect("/login")
    }
} 

export const publicOnlyMiddleWare=(req,res,next)=>{
    if(!req.session.loggedIn){
       return next()
    } else{
        return res.redirect("/")
    }
} 