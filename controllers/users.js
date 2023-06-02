import  {v4 as uuidv4 } from 'uuid';



let users = [
    {
        firstname: "John",
        lastname: "Doe",
        age: 25
    },
    {
        firstname: "Jane",
        lastname: "Doe",
        age: 24
    }
]


//-------------------------------------------------------------------------


export const getUsers = (req, res) => {
    // console.log(users);
     res.send(users);
 }

//-----------------------------------------------------------------------------

export const createUser = (req, res) => {

    const user = req.body;
    //console.log('Post route reached');

   // console.log(req.body);

   const userId = uuidv4();

   const userWithId = { ...user, id: userId}
   
    users.push(userWithId);

    res.send(`user eith name  ${user.firstname} added to database`)
};


//-----------------------------------------------------------------------------


export const getUser = (req, res) => {
    //console.log(req.params);
    const {id} = req.params;

    const foundUser= users.find((user) => user.id === id);

    res.send(foundUser)
}


//-----------------------------------------------------------------------------


export const deleteUser = (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id) //filter function works for function returning false

    res.send(`user with id: ${id} deleted from db`)
 }


 //-----------------------------------------------------------------------------



 export const updateUser = (req, res) => {
    const {id} = req.params;
    const { firstname, lastname, age} = req.body;

    const user = users.find((user) => user.id === id);

    if(firstname) {
        user.firstname = firstname;
    }
   if(lastname) {
        user.lastname = lastname;
    }
    if(age) {
        user.age = age;
    }

    res.send(`user with id ${id} is updated`)


 }

 //-----------------------------------------------------------------------------
