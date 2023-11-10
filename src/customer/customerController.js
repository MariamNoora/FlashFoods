var customerService = require('./customerService')

var createCustomerControllerFn = async(req, res)=>
{
    try
    {
        console.log(req.body);
        var status = await customerService.createCustomerDBService(req.body);
        console.log(status);

        if(status)
        {
            res.send({ "status":true, "message":"Customer created successfully" })
        }
        else
        {
            res.send({ "status":false, "message":"Error creating customer" })
        }
    }
    catch(err)
    {
        console.log(err);
    }
}

var loginCustomerControllerFn = async(req, res) =>{
    var result = null;
    try
    {
        result = await customerService.loginCustomerDBService(req.body);
        if(result.status)
        {
            res.send({ "status":true, "message":result.msg })
        }
        else
        {
            res.send({ "status":false, "message":result.msg  })
        }
    }
    catch(error)
    {
        console.log(error);
        res.send({"status":false, "message":error.msg});
    }
}


module.exports = { createCustomerControllerFn, loginCustomerControllerFn };