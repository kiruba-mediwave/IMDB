    const users = [
        {
        id :  "1673333490034",
        username : "Abi" ,
        password: "",
        createdAt : "2023-01-10T06:52:57.812Z" ,
        updatedAt : "2023-01-10T06:52:57.812Z"
        },

        {
            id :  "1673333490025",
            username : "Siva" ,
            password: "",
            createdAt : "2023-01-11T06:52:57.812Z" ,
            updatedAt : "2023-01-11T06:52:57.812Z"
        },

        {
            id :  "1673333490077",
            username : "Vishnu" ,
            password: "",
            createdAt : "2023-01-12T06:52:57.812Z" ,
            updatedAt : "2023-01-12T06:52:57.812Z"
        }
    ]

    const movies = [
        {
            id : "1",
            name : "Avatar",
            genre : "Action",
            language : "English",
            yearOfRelease : "2022",
            createdByUser : "1673333490077",
            createdAt : "2023-01-13T06:52:57.812Z" ,
            updatedAt : "2023-01-13T06:52:57.812Z"

        },

        {
            id : "2",
            name : "Matrix",
            genre : "Action",
            language : "English",
            yearOfRelease : "2002",
            createdByUser : "1673333490034",
            createdAt : "2023-01-13T06:52:57.812Z" ,
            updatedAt : "2023-01-13T06:52:57.812Z"

        },

        {
            id : "3",
            name : "Avatar",
            genre : "Action",
            language : "English",
            yearOfRelease : "2022",
            createdByUser : "1673333490025",
            createdAt : "2023-01-13T06:52:57.812Z" ,
            updatedAt : "2023-01-13T06:52:57.812Z"

        }
    ]

    const ratings = [
        {
            id: "1673327091125",
            user: "1673333490034",
            movie: "1673333490067",
            rating: 4,
            createdAt: "2023-01-12T06:52:57.812Z",
            updatedAt: "2023-01-12T05:02:01.938Z",
          },
          {
            id: "1673327091126",
            user: "1673333490025",
            movie: "1673333490067",
            rating: 3,
            createdAt: "2023-01-12T06:52:57.812Z",
            updatedAt: "2023-01-12T05:02:01.938Z",
          },
          {
            id: "1673327091127",
            user: "1673333490077",
            movie: "1673333490067",
            rating: 4,
            createdAt: "2023-01-12T06:52:57.812Z",
            updatedAt: "2023-01-12T05:02:01.938Z",
          },
          {
            id: "1673327157819",
            user: "1673333490025",
            movie: "1673333490054",
            rating: 3,
            createdAt: "2023-01-01T05:02:01.938Z",
            updatedAt: "2023-01-01T05:02:01.938Z",
          },
    ]

module.exports = {
    users,
    movies,
    ratings
}
