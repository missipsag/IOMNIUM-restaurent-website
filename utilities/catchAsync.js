//this is a function that takes as parameter an async func 
module.exports = function (fn) {
    //return a  function that passes the errors of fn to then next error middleware
    return (req, res , next) => {
        fn(req, res, next).catch(next);
    }
}