import React from 'react'; // we need this to make JSX compile

const ReactSampleFCComponent: React.FC<{title:string}> = ({children, title}) => {

    //Primitive Data types
    const alpha:string = "I am a string!";

    //Arrays
    const beta : string[] = ["I", "AM", "AN", "ARRAY"];

    //Functions
    const increment = (counter:number):number => {
        return counter + 1;
    }
    const counter:number = increment(10)

    //Objects
    interface Iperson {
        name: string,
        age?: number
    }
    const gamma :Iperson = {
        name: "typescript"
    }

    interface IUser {
        userId: number,
        id: number,
        title: string,
        completed: boolean
      }


    //Enums

    enum Name {
        Tom = "Tom",
        Rob = "Rob",
        Smith = "Smith",
        Will = "Will"
    }

    const displayFullName = (firstName:Name , lastName:string):void => {
        console.log(`Yor Name is ${firstName} ${lastName}`)
    }

    displayFullName(Name.Tom, "hanks");

    return <div title={title}>
        {children }
        <div> String : {alpha}</div>
        <div> Array : {beta.join("-")}</div>
        <div>Object : {gamma.name}</div>
        <div>Functon : {counter}</div>
    </div>
}

export default ReactSampleFCComponent;