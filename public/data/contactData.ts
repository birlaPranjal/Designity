export const contactData = {
    BasicInfo: [
        {
            id: 'fullName',
            type: "text",
            required: true,
            label: "Full Name",
            placeholder:"John Doe",
        },
        
        {
            id: 'email',
            type: "email",
            required: true,
            label: "Work Email",
            placeholder:"johndoe@example.com",

        }
    ],
    Company: [
        {
            id: 'name',
            type: "text",
            required: false,
            label: "Company Name",
            placeholder:"Teamify",

        },
        {
            id: 'location',
            type: "text",
            required: false,
            label: "Company Location",
            placeholder:"Indore(MP), India",

        },
        {
            id: 'work',
            type: "text",
            required: false,
            label: "Company Work",
            placeholder:"Your Task, Our Teams",

        }
    ],
    JobDesc: [
        {
            id: 'domain',
            type: "text",
            required: false,
            label: "Domain",
            placeholder:"Domain of work",

        },
        
        

    ]
};
