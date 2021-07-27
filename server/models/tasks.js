
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

    Tasks.associate = (models) =>{
        Tasks.hasMany(models.Comments, {
            onDelete:"cascade"
        })
    }
    return Tasks;
};