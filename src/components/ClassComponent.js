import React, { Component } from 'react'
import FunctionComponent from './FunctionComponent'

export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        //MOCK UP DATA
        this.array =  [
            {
              id:1,
              title:"title 1",
              description:"description 1",
              bottom:"description 1"
            },
            {
              id:2,
              title:"title 2",
              description:"description 2",
              bottom:"description 2"
            },
            {
              id:3,
              title:"title 3",
              description:"description 3",
              bottom:"description 3"
            },
            {
              id:4,
              title:"title 4",
              description:"description 4",
              bottom:"description 4"
            }
        ]
        this.state = {
            estado: 'activo'
        }

    }

    render() {

        const mapFunctionComponent = () => {
            let ConjuntoDeComponentesFuncionales = []

            for(let index of this.array) {
                let NuevocomponenteFuncional = <FunctionComponent
                                                titulo={index.title}
                                                descripcion={index.description}
                                          />

               ConjuntoDeComponentesFuncionales = [...ConjuntoDeComponentesFuncionales, NuevocomponenteFuncional]                           

            }

            return ConjuntoDeComponentesFuncionales
        }

        return (
            <div className='classComponent flex flow-c'>
                <h2>
                    Render de componentes
                </h2>
                {mapFunctionComponent()}
               <h1 style={{color:'white'}}>{this.state.estado}</h1>
               <button onClick={() => this.setState({estado: 'desactivo'})}>
                   cambiar estado</button>
                   
                            
            </div>
        )
    }
}
