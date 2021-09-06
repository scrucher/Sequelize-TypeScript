import { Model, Table, Column, PrimaryKey, UpdatedAt } from "sequelize-typescript";

@Table

export class User extends Model {

    @PrimaryKey
    @Column
    id : string;


    @Column
    name: string;

    @Column 

    password: string;

    @Column

    date: Date;

    @UpdatedAt

    up_date: Date;

    


}