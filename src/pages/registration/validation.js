const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,10})$/
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?).{6,20}$/
const userNameRegex = /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+$/


function validateForm(email, username, password) {
    let status = true;
    const messages = [];

    if (!emailRegex.test(email)) {
        status = false
        messages.push("Invalid email-adres.It must include @ and .com, .nl or other domain.")
    }
    if (!passwordRegex.test(password)) {
        status = false
        messages.push("Invalid password. The password must include at least 6 characters, one special sign and a number.")
    }
    if (!userNameRegex.test(username)) {
        status = false
        messages.push("Invalid username. The username must include at least 4 characters. ")
    }

    return {
        status,
        messages
    }
}

export default validateForm;