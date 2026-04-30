/* eslint-disable @next/next/no-img-element */
'use client'
/* Library Imports */
import { useRef, useEffect, useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import GlobalStyles from '@mui/material/GlobalStyles'
/* Data & Types Imports */
import { ClientLogoData } from '../_types/dataFiles'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            width: '100%',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        },
        row: {
            display: 'flex',
            overflow: 'hidden',
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
        track: {
            display: 'flex',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            '&:hover': {
                animationPlayState: 'paused',
            },
        },
        logo: {
            flexShrink: 0,
            marginLeft: theme.spacing(4),
            marginRight: theme.spacing(4),
            maxHeight: '80px',
            maxWidth: '170px',
            userSelect: 'none',
        },
    }
})

interface LogoCarouselProps {
    logos: ClientLogoData[]
    scrollSpeed: number
    rowsAmount: number
    alternateDirection?: boolean
}

function splitIntoRows(logos: ClientLogoData[], rowsAmount: number): ClientLogoData[][] {
    const rows: ClientLogoData[][] = Array.from({ length: rowsAmount }, () => [])
    logos.forEach((logo, index) => {
        rows[index % rowsAmount].push(logo)
    })
    return rows
}



export default function LogoCarousel({ logos, scrollSpeed, rowsAmount, alternateDirection }: LogoCarouselProps) {
    const { classes } = useStyles()
    const rows = splitIntoRows(logos, rowsAmount)
    const trackRefs = useRef<(HTMLDivElement | null)[]>([])
    const [durations, setDurations] = useState<number[]>([])

    useEffect(() => {
        setDurations(
            trackRefs.current.map((ref) => {
                if (!ref) return 10
                // scrollWidth is the full duplicated track; half is one set of logos
                return (ref.scrollWidth / 2) / scrollSpeed
            })
        )
    }, [scrollSpeed, logos, rowsAmount])

    return (
        <>
            <GlobalStyles styles={{
                '@keyframes carouselScrollLeft': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                '@keyframes carouselScrollRight': {
                    from: { transform: 'translateX(-50%)' },
                    to: { transform: 'translateX(0)' },
                },
            }} />

            <div className={ classes.root }>
                { rows.map((rowLogos, rowIndex) => {
                    const isReverse = alternateDirection && rowIndex % 2 !== 0
                    const animationName = isReverse ? 'carouselScrollRight' : 'carouselScrollLeft'
                    const animationDuration = durations[rowIndex] ? `${ durations[rowIndex] }s` : undefined

                    return (
                        <div key={ rowIndex } className={ classes.row }>
                            <div
                                ref={ (el) => { trackRefs.current[rowIndex] = el } }
                                className={ classes.track }
                                style={{ animationName, animationDuration }}
                            >
                                { [...rowLogos, ...rowLogos].map((logo, logoIndex) => (
                                    <img
                                        key={ logoIndex }
                                        src={ `clients/${ logo.src }` }
                                        alt={ logo.alt }
                                        className={ classes.logo }
                                        draggable={ false }
                                    />
                                )) }
                            </div>
                        </div>
                    )
                }) }
            </div>
        </>
    )
}
