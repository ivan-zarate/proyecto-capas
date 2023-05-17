const ParsedArgs= require("minimist");

const arguments= process.argv.slice(2);
const args=ParsedArgs(arguments, {
    alias:{
        p:"port",
        m:"mode",
        b:"persistance",
        a:"app"
    },
    default:{
        p:8080,
        m:"FORK",
        b:"mongo",
        a:"dev"
    }
});
const {port, mode, persistance, app}= args;
const newArgs= {port, mode, persistance, app};
module.exports=newArgs