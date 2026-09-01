import { StaticImageData } from "next/image";

interface PageInfo {
    name: string;
    link: string;
    text: string;
    onHeader: boolean;
}

interface PledgeInfo {
    icon: string;
    title: string;
    text: string;
}

interface SiteStatusInfo {
    site: string;
    type: string;
    armed: boolean;
}

interface ReviewInfo {
    author_name: string;
    author_url: string;
    language: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
}

interface TextContent {
    type: string;
    text: string;
}

interface TechSheetData {
    image: any;
    isVideo?: boolean;
    alt: string;
    isLeft: boolean;
    boldTitle: string;
    regularTitle: string;
    subTitle: string;
    techSheet: TechSheetDetails[];
}

interface TechSheetTextData {
    image: StaticImageData;
    alt: string;
    isLeft: boolean;
    boldTitle: string;
    regularTitle: string;
    text: TextContent[];
}

interface TechSheetBannerData {
    image: any;
    isVideo?: boolean;
    backgroundColor?: string;
    height?: number;
    alt?: string;
    isTop: boolean;
    tag: string;
    boldTitle: string;
    regularTitle: string;
    text: TextContent[];
    transparent: boolean;
    ctaText?: string;
    ctaLink?: string;
    ctaDescription?: string;
}

interface TechSheetSubBannerData {
    section: string;
    subSection: string;
}

interface TechSheetDetails {
    icon: string;
    text: string;
}

interface ClientLogoData {
    src: string;
    alt: string;
}

interface CertificationData {
    name: string;
    file: string;
    organism: string;
}

export type { PageInfo, PledgeInfo, SiteStatusInfo, ReviewInfo, TechSheetData, TechSheetTextData, TechSheetBannerData, TechSheetSubBannerData, TechSheetDetails, ClientLogoData, CertificationData }