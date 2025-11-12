export interface Concert{
    id: number;
    title: string;
    date: string;
    venue: string;
    artistId: string;
    reservations: number;
    capacity: number;
}
export const CONCERTS: Concert[]=[
    {id:1,title:'night1', date:'2025/02/12',venue:'rabat',artistId:'a1',reservations:12,capacity:100},
    {id:2,title:'night2', date:'2025/02/12',venue:'casablanca',artistId:'a2',reservations:11,capacity:100},
    {id:3,title:'night3', date:'2025/02/12',venue:'tanger',artistId:'a3',reservations:5,capacity:100},
    {id:4,title:'night4', date:'2025/02/12',venue:'marrakech',artistId:'a4',reservations:2,capacity:100},

];

export interface Artist{
    id:string;
    name:string;
    genre:string;
    bio:string
}

export const ARTISTS: Artist[]=[
    {id:'a1',name:'wild',genre:'clasic',bio:'groupe'},
    {id:'a2',name:'wild2',genre:'clasic',bio:'groupe2'},
    {id:'a3',name:'wild3',genre:'clasic',bio:'groupe3'},
    {id:'a4',name:'wild4',genre:'clasic',bio:'groupe4'},
] ;

