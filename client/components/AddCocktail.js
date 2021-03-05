// import React, { useState } from 'react';
// import CocktailServices from '../services/CocktailServices';

// const AddCocktail = () => {
//   const initialCocktailState = {
//     name: '',
//     description: '',
//     ingredients: '',
//     preparation: '',
//     method: '',
//   };
//   const [cocktail, setCocktail] = useState(initialCocktailState);
//   const [submitted, setSubmitted] = useState(false);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setCocktail({ ...cocktail, [name]: value });
//   };

//   const saveCocktail = () => {
//     const data = {
//       name: cocktail.name,
//       description: cocktail.description,
//       ingredients: cocktail.ingredients,
//       preparation: cocktail.preparation,
//       method: cocktail.method,
//     };

//     //making post request to api
//     CocktailServices.create(data)
//       .then((response) => {
//         setCocktail({
//           name: response.data.name,
//           description: response.data.description,
//           ingredients: response.data.ingredients,
//           method: response.data.method,
//         });
//         setSubmitted(true);
//         console.log(response.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };

//   const newCocktail = () => {
//     setCocktail(initialCocktailState);
//     setSubmitted(false);
//   };

//   return (
//     <div className="submit-form">
//       {submitted ? (
//         <div>
//           <h4>Cocktail added!</h4>
//           <button className="btn btn-success" onClick={newCocktail}>
//             Add
//           </button>
//         </div>
//       ) : (
//         <div>
//           <div className="form-group">
//             <label htmlFor="name">Cocktail Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               required
//               value={cocktail.name}
//               onChange={handleInputChange}
//               name="name"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="description">Drunk History</label>
//             <input
//               type="text"
//               className="form-control"
//               id="description"
//               required
//               value={cocktail.description}
//               onChange={handleInputChange}
//               name="description"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="ingredients">Ingredients</label>
//             <input
//               type="text"
//               className="form-control"
//               id="ingredients"
//               required
//               value={cocktail.ingredients}
//               onChange={handleInputChange}
//               name="ingredients"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="preparation">Preparation</label>
//             <input
//               type="text"
//               className="form-control"
//               id="preparation"
//               required
//               value={cocktail.preparation}
//               onChange={handleInputChange}
//               name="preparation"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="method">Method</label>
//             <input
//               type="text"
//               className="form-control"
//               id="method"
//               required
//               value={cocktail.method}
//               onChange={handleInputChange}
//               name="method"
//             />
//           </div>

//           <button onClick={saveCocktail} className="btn btn-success">
//             Submit Cocktail
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddCocktail;
