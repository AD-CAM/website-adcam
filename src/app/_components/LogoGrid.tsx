/* eslint-disable @next/next/no-img-element */
'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Data & Types Imports */
import { ClientLogoData } from '../_types/dataFiles'



const useStyles = makeStyles<{ logoMaxHeight: number, logoMaxWidth: number, gap: number }>()((theme, { logoMaxHeight, logoMaxWidth, gap }) => {
    return {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',

            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden',

            gap: theme.spacing(gap),
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
        logo: {
            flexShrink: 0,
            maxHeight: `${ logoMaxHeight }px`,
            maxWidth: `${ logoMaxWidth }px`,
            width: 'auto',
            height: 'auto',
            userSelect: 'none',
        },
    }
})

interface LogoGridProps {
    logos: ClientLogoData[]
    logoMaxHeight?: number
    logoMaxWidth?: number
    gap?: number
}



export default function LogoGrid({ logos, logoMaxHeight = 80, logoMaxWidth = 170, gap = 4 }: LogoGridProps) {
    const { classes } = useStyles({ logoMaxHeight, logoMaxWidth, gap })

    return (
        <div className={ classes.root }>
            { logos.map((logo, logoIndex) => (
                <img
                    key={ logoIndex }
                    src={ `clients/${ logo.src }` }
                    alt={ logo.alt }
                    className={ classes.logo }
                    draggable={ false }
                />
            )) }
        </div>
    )
}
