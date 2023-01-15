const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,10})$/

function validateForm(email, username, password) {
    let status = true;
    const messages = [];
    // TODO validate the inputs

    if (!emailRegex.test(email)) {
        status = false
        messages.push("EMAIL IS INCORRECT")
    }

    // return an object that includes overal status (boolean) and any messages from validation

    return {
        status,
        messages
    }
}

export default validateForm;