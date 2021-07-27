module.exports = (sequielize, DataTypes) =>{

    const Tasks = sequielize.define("Comments", {
        commentbody:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Tasks;

};