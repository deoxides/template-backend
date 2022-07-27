import jwt from 'jsonwebtoken';

export const createToken = (args:string[] | object):Promise<string | undefined> => {
    return new Promise((resolve,reject) =>{
        const payload = {...args};
        jwt.sign(payload,process.env.SECRET_KEY!,{
            expiresIn:'6h',
            notBefore:0
        },(err,token) =>{
            if(err){
                console.log(err)
                reject('The token was not created')
            }else{
                resolve(token)
            }
        })
    })
}