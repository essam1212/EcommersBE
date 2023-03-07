import joi from 'joi'



export const signup = {

    body: joi.object().required().keys({
        userName: joi.string().min(2).max(20).required().messages({
            'any.required': "userName field is required",
            'any.empty': "empty userName is not acceptable"
        }),

        email: joi.string().email().required(),


        password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/)).required().messages({
            'any.required': "password field is required",
            'string.pattern.base': " pleass enter password greater than 8 characters"
        }),

        cPassword: joi.string().valid(joi.ref('password')).required().messages({
            'any.required': "confirm password field is required",
        }),

    })
}
export const login = {

    body: joi.object().required().keys({
    
        email: joi.string().email().required().messages({
        }),


        password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/)).required().messages({
        }),

    })
}


export const token = {

    params: joi.object().required().keys({
        token: joi.string().min(10).required().messages({
        }),

    })
}