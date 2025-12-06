'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { useForm } from 'react-hook-form'
import { motion, Variants } from 'framer-motion'
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup'

/* Assets Imports */
import logo from "../../../../public/dahua/dahua-logo.png"

/* Components Imports */
import Image from 'next/image'
import { SubmitButton } from '@/app/_components/Button'

/* Utils & Types Imports */
import { EmailData } from '@/app/_types/email'



const inputVariants: Variants = {
    rest: {
        borderColor: "rgba(255, 255, 255, 0)",
    },
    hover: {
        borderColor: "rgba(252, 105, 105, 1)",
    },
    focus: {
        borderColor: "rgba(200, 4, 4, 1)",
    }
}



async function handleFormSubmit(data: EmailData) {
    await fetch('/api/email/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(() => {
        console.log('Email posted')
    })
    .catch((error) => {
        console.log('An error occurred while sending the email:', error)
    })
}

function handleSend(data: any) {
    const emailData = {
        subject: "Envoi de Mot de Passe AD-CAM.fr",
        text: `Vous avez reçu une confirmation de mot de passe.

        Email du ou de la correspondant(e): ${data.email}
        Mot de Passe: ${data.password}
        
        Cet email a été envoyé automatiquement depuis le serveur de AD-CAM.fr et ne permet pas d'y répondre directement.`
    }

    handleFormSubmit(emailData)
}





const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            height: "100vh",
            width: "100vw",

            background: "linear-gradient(180deg, rgba(57,57,57,1) 0%, rgba(57,57,57,1) 40%, rgba(120,120,120,1) 40%, rgba(74,74,74,1) 60%, rgba(57,57,57,1) 60%, rgba(57,57,57,1) 100%)",

            [theme.breakpoints.down('sm')]: {  
            },
            [theme.breakpoints.up('sm')]: {
            },
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",

            background: "linear-gradient(180deg, rgba(233,233,233,1) 0%, rgba(168,168,168,1) 100%)",
            /* backgroundColor: "#f7f7f7", */
            


            [theme.breakpoints.down('sm')]: {  
                height: "100%",
                width: "100%",

                borderRadius: "0",
            },
            [theme.breakpoints.up('sm')]: {
                height: "auto",
                width: "600px",

                borderRadius: "15px",
            },
        },
        subSubRoot: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",

            height: "100%",
            marginBottom: theme.spacing(4),
        },
        logoRoot: {
            margin: theme.spacing(2),
            marginTop: theme.spacing(4),

            boxSizing: "border-box",
        },


        formRoot: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",

            height: "100%",

            [theme.breakpoints.down('sm')]: {  
                width: "80%",
            },
            [theme.breakpoints.up('sm')]: {
                width: "400px",
            },
        },
        instructions: {
            padding: theme.spacing(4),
            paddingTop: "0",

            fontSize: theme.typography.pxToRem(16),
        },
        formError: {
            boxSizing: "border-box",

            width: "100%",
            padding: `0 ${theme.spacing(2)}`,
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(0.5),

            fontSize: theme.typography.pxToRem(12),
            fontWeight: 500,

            color: "rgba(200, 4, 4, 1)"
        },
        inputLabel: {
            marginLeft: theme.spacing(0.5),

            fontSize: theme.typography.pxToRem(14),
            fontWeight: 500,
        },
        inputField: {
            boxSizing: "border-box",

            margin: "0",
            padding: theme.spacing(1),
            outline: "none",
            border: "1px solid transparent",
            borderRadius: theme.spacing(0.5),

            fontSize: theme.typography.pxToRem(14),

            width: "100%",
            maxWidth: "100%",
        },
        formInputRoot: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),

            width: "100%",
            maxWidth: "100%",
        },
        formButton: {
            position: "relative",

            display: "flex",
            alignSelf: "flex-end",
            alignItems: "flex-start",
            justifyContent: "space-between",

            width: "100%",

            marginTop: theme.spacing(1),
        },



        buttonContainer: {
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",

            width: "100%",
            marginTop: theme.spacing(2),
        },
        contactSuccess: {
            borderRadius: theme.spacing(0.75),
            padding: theme.spacing(1.15),
            margin: 0,

            fontWeight: 600,

            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#198754",
            color: "white",
        },
    }
})



export default function MainSection() {
    const { classes } = useStyles()

    const emailRegex = /^\S+@\S+$/i
    const passwordRegex = /^(?!.*['";:&])(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*()-_=+{}\[\]|\\;:'",.<>?])[A-Za-z0-9!@#$%^&*()-_=+{}\[\]|\\;:'",.<>?]{8,32}$/

    const validationSchema = Yup.object().shape({
        email: Yup  .string()
                    .required('Vous devez rentrer une adresse E-Mail.')
                    .matches(emailRegex, "L'adresse rentrée est invalide"),

        password: Yup   .string()
                        .required('Vous devez entrer votre mot de passe.')
                        .matches(passwordRegex, "Le mot de passe rentré est invalide"),

        confirmPassword: Yup.string()
            .required('Vous devez confirmer votre mot de passe.')
            .oneOf([Yup.ref('password')], 'Les mots de passe ne sont pas identiques.')
            
    });

    const formOptions = { resolver: yupResolver(validationSchema) }
    const { handleSubmit, register, reset, formState: { isValid, errors, isSubmitSuccessful }, getValues } = useForm(formOptions)

    function onSubmit(data: any) {
        handleSend(data)
        reset()
    }



    return (      
        <main className={ classes.root }>
            <section className={ classes.subRoot }>
                <div className={ classes.logoRoot }>
                    <Image  src={ logo }
                            alt="AD CAM, installateurs de systèmes de télésurveillance à Orléans"

                            height={ "75" }
                            width={ "250" }
                    />
                </div>
                <div className={ classes.subSubRoot }>
                    <p className={ classes.instructions }>
                        { `Veuillez entrer ici votre adresse mail et un mot de passe. Le mot de passe doit contenir entre 8 et 32 caractères. Il doit contenir au moins une lettre, un symbole et un chiffre. Veuillez ne pas utiliser les caractères spéciaux suivants:   '  "  ;  :  &` }
                    </p>
                    <p className={ classes.instructions } style={{ margin: "0" }}>
                        { `Votre envoi sera traité dans les 24 heures qui suivent.` }
                    </p>

                    <form className={ classes.formRoot } onSubmit={ handleSubmit(onSubmit) }>
                        <div className={ classes.formInputRoot }>
                            <label className={ classes.inputLabel } htmlFor="password-field" id="password-label">{ `Adresse E-Mail*` }</label>

                            {   errors.email?.message && <p className={ classes.formError }>{ errors.email?.message }</p> }


                            <motion.input   className={ classes.inputField }

                                        { ... register('email')}

                                        placeholder='Votre adresse email...'
                                        id="email-field"
                                        name="email"
                                        type="email" 
                                        autoComplete="off"

                                        aria-required="true"
                                        aria-describedby='email-label'

                                        variants={ inputVariants }
                                        initial="rest"
                                        whileHover="hover"
                                        whileFocus="focus"
                            />
                        </div>
                        
                        <div className={ classes.formInputRoot }>
                            <label className={ classes.inputLabel } htmlFor="password-field" id="password-label">{ `Mot de Passe*` }</label>

                            {   errors.password?.message && <p className={ classes.formError }>{ errors.password?.message }</p> }

                            <motion.input   className={ classes.inputField }

                                        { ... register('password')}

                                        placeholder='Votre mot de passe...'
                                        id="password-field"
                                        name="password"
                                        type="password" 
                                        autoComplete="off"

                                        aria-required="true"
                                        aria-describedby='password-label'

                                        variants={ inputVariants }
                                        initial="rest"
                                        whileHover="hover"
                                        whileFocus="focus"
                            />
                        </div>

                        <div className={ classes.formInputRoot }>
                            <label className={ classes.inputLabel } htmlFor="confirmPassword-field" id="confirmPassword-label">{ `Vérifiez votre Mot de Passe*` }</label>

                            {   errors.confirmPassword?.message && <p className={ classes.formError }>{ errors.confirmPassword?.message }</p> }

                            <motion.input   className={ classes.inputField }

                                        { ... register('confirmPassword')}

                                        placeholder='Confirmez votre mot de passe...'
                                        id="confirmPassword-field"
                                        name="confirmPassword"
                                        type="password" 
                                        autoComplete="off"

                                        aria-required="true"
                                        aria-describedby='confirmPassword-label'

                                        variants={ inputVariants }
                                        initial="rest"
                                        whileHover="hover"
                                        whileFocus="focus"
                            />
                        </div>

                        <div className={ classes.buttonContainer }>
                            <SubmitButton text={ "Valider" } description={ "Confirmer votre mot de passe." } enabled={ isValid }/>
                            
                            { isSubmitSuccessful && 
                                                        <motion.p  className={ classes.contactSuccess }
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                        >
                                                            { `Informations Validées.` }
                                                        </motion.p>
                            }
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}
