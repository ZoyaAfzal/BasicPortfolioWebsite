interface HeaderItems {
    label:string;
    page:string
}

    
export interface NavItems {
    home: HeaderItems,
    about: HeaderItems,
    contact: HeaderItems

}

export interface Profiles {
    instagram: {
        Link:{}
    } ,
    facebook: {
        Link: {}
    } ,
    linkedln: {
        Link: {}
    },
}

