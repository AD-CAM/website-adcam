const regex = {
    name: /^[A-Za-z\s'-À-ÖØ-öø-ÿ]+$/,
    email: /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
    message: /^.{1,360}$/,
    phone: /^(?:\d{2}\s?){4}\d{2}$/,
}

export { regex }