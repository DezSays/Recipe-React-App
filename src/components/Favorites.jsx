// import React from 'react'
// import { connect } from 'react-redux'

// function Favorites(props) {
//     const handleAddToFavs = () =>{

//         props.addToFavs
//     }


//   return (
//     <div>
//         <h4>{props.fav}</h4>
//         <button onClick={handleAddToFavs}>Add to Favorites</button>
//         </div>
//   )
// }

// const mapStateToProps = (state) => {
//     return {
//         fav: state.favorites
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToFavs: () => dispatch({type: 'FAVORITES'})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Favorites)