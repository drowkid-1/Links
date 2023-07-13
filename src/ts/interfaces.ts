export interface IIcon{
    color?: string;
}
export interface ICard{
    children: React.ReactElement[];
    i: number;
    title: string;
    subtitle: string;
    link: string;
    cover: string;
}

export interface LCard{
    children: React.ReactElement[];
    i: number;
    link: string;
    cover: string;
}
