const regex = {
    name: /^[A-Za-z\s'-À-ÖØ-öø-ÿ]+$/,
    email: /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
    message: /^.{1,360}$/,
}

export { regex }