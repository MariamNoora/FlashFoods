var customerModel = require('./customerModel');
var key = '123456789trytryrtyr';       ///////////////------------------///////////
var encryptor = require('simple-encryptor')(key);

module.exports.createCustomerDBService = (customerDetails)=>{

    return new Promise(function myFn(resolve,reject) {

        var customerModelData = new customerModel();

        customerModelData.firstname = customerDetails.firstname;
        customerModelData.lastname = customerDetails.lastname;
        customerModelData.email = customerDetails.email;
        customerModelData.password = customerDetails.password;
        var encrypted = encryptor.encrypt(customerDetails.password);
        customerModelData.password = encrypted;

        customerModelData.save(function resultHandle(error,result) {

            if(error)
            {
                reject(false);
            }
            else
            {
                resolve(true);
            }
        });
    });
}

module.exports.loginCustomerDBService = (customerDetails)=>
{
    return new Promise(function myFn(resolve,reject)
    {
        customerModel.findOne({email:customerDetails.email},function getresult(errorvalue,result)
        {
            if(errorvalue)
            {
                reject({status:false, msg: "Invalid Data"})
            }
            else
            {
                if(result != undefined&& result!=null)
                {
                    var decrypted = encryptor.decrypt(result.password);

                    if(decrypted==customerDetails.password)
                    {
                        resolve({status:true, msg:"Customer validated successfully"});
                    }
                    else
                    {
                        reject({status:false,msg:"Customer validation failed"});
                    }
                }
                else
                {
                    reject({status:false, msg:"Invalid customer details"});
                }
            }
        });
    });
}