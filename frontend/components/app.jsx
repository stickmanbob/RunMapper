////////////////////////////////////////////////////////
/////////////// APP MAIN FILE //////////////////////////
////////////////////////////////////////////////////////

// Exports component that renders every top level component and handles routing
// App component externally wrapped in provider and hash router

/////////////Imports/////////////////////
  /// Utilites 
    import React from 'react';

  /// Components
    import SignUpFormContainer from './session/signup_container'
/////////////////////////////////////////


export default function App (){
    return(
        <>
            <SignUpFormContainer />
        </>
    )
}