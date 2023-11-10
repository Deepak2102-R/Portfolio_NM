export default{
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'projecttitle',
            title: 'Project Title',
            type: 'string'
        },
        {
            name: 'projectdescription',
            title: 'Project Description',
            type: 'string'
        },
        {
            name: 'projectimageurl',
            title: 'Project ImageURL',
            type: 'image',
            // options: {
            //     hotspot: true,
            // }
        },
        {
            name: 'projecttime',
            title: 'Project Date',
            type: 'date'
        },

    ],

}