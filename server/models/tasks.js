
module.exports = (sequielize, DataTypes) =>{

    const Tasks = sequielize.define("Tasks", {
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        taskText:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Tasks;

};