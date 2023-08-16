interface PageInfo {
    name: string;
    link: string;
    text: string;
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

export type { PageInfo, PledgeInfo, ReviewInfo }