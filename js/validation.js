//this code was adapted from https://stackoverflow.com/questions/40804518/validate-email-password-in-html
function ValidateEmail()   
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(registerForm.email.value))  
    {
        return (true);
    }
    alert("Invalid Email");  
    return (false);
}