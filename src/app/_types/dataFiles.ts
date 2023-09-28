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

interface TechSheetInfo {
    icon: string;
    text: string;
}

export type { PageInfo, PledgeInfo, ReviewInfo, TechSheetInfo }