const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const { usersMongo } = require("../../dbModels/user.model");

let user = [];

passport.serializeUser((user, done) => {
    return done(null, user.id)
});

passport.deserializeUser((id, done) => {
    usersMongo.findById(id, (err, userDB) => {
        console.log("primer error?");
        return done(err, userDB)
    })
})

passport.use("signUpStrategy", new LocalStrategy(
    {
        passReqToCallback: true,
        usernameField: "email"
    },
    (req, username, password, done) => {
        console.log("username", username);
        this.model.findOne({ username: username }, (err, userDB) => {
            if (err) return done(err, false, { message: `Hubo un error al buscar el usuario ${err} ` });
            if (userDB) return done(null, false, { message: `El usuario ya existe` });
            const newUser = {
                username: username,
                password: bcrypt.hashSync(password, 8),
                name: req.body.name,
                addres: req.body.addres,
                age: req.body.age,
                telphone: req.body.telphone,
                avatar: req.body.avatar,
            };
            this.model.create(newUser, (err, userCreated) => {
                if (err) return done(err, false, { message: `Hubo un error al crear el usuario ${err}` });
                return done(null, userCreated, { message: "Usuario creado exitosamente" })
            })
        })
    }

));

class UserManagerMongo {
    constructor(model) {
        this.model = model;
    };
    async signup(users, req, res){
        try {
            const user=this.model(users);
            console.log("userSignup", users);
            passport.authenticate("signUpStrategy", (error, user1=user, info) => {

                console.log("aca?", error, user1, info);
                return("era esto?")
                // if (error) return res.json({ message: info.message });

                // if (!user) return res.json({ message: info.message });

                // res.json({ users, message: info.message });

            })(req, res)
        } catch (error) {
            throw new Error(`hubo un error previo al crear el usuario ${error.message}`)
        }
    };
    // async login(users, res){
    //     try {
    //         console.log("users", users);
    //         const {email, password}=users;
    //         const login= this.model.findOne({ username: email });
    //         if (login){
    //             console.log(login);
    //             return({ message: `El usuario no existe ` })
    //         }
    //         else{
    //             return({succes: "usuario encontrado"})
    //         }
        //     this.model.findOne({ username: email }, (err, userDB) => {
        //         console.log("userdb", userDB);
        //         if (err) return({ message: `Hubo un error al buscar el usuario ` });
        //         if (!userDB || userDB===null) return({ message: `El usuario no existe` });
        //         const compare = bcrypt.compareSync(password, userDB.password);
        //         if (compare) {
        //             user.push(userDB);
        //             return(user);
        //         }
        //         else {
        //             user.push({ error: "La contraseña no es correcta" });
        //             return(user)
        //         }
        // })
    //  }
    //     catch (error) {
    //         return res.status(400).send({
    //             error: `An error occurred ${error.message}`,
    //         });
    //     }
    // }
}

module.exports = {UserManagerMongo}