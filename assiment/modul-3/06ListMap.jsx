import React,{Component} from 'react';
import ListMaps from './06.1ListMapS';
import "./Person.module.css"

                                                            

class ListMap extends Component {
    constructor(){
        super();
        this.state = {
            persons:[
            {
              name:"rahul chavda",
              age:"24",   
            },
            {
              name:"vishal tank ",
              age:"3"  
            },
            {
                name:"darshit tank ",
                age:"18"  
              },
            
        ]
        };
    }

    buttonClickHandler = () => {
        console.log(this.state);
    }
    render() {
    let persons;
    persons = this.state.persons.map((p)  => {
        return(
            <ListMaps name={p.name} age={p.age}/>
        )
    });
    
        return (
            <>
              <div className='app'>
                {persons}
              </div>
            </>
        );
    }
}

export default ListMap;