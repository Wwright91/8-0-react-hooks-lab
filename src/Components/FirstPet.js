import React, { useState } from "react";
import "./FirstPet.css";

// class FirstPet extends React.Component {
//   render() {
//     return (
//       <section className="first-pet">
//         <h4>Is this your first pet?</h4>
//         <br />
//         <form>
//           <input type="checkbox" />
//         </form>
//         <h5></h5>
//       </section>
//     );
//   }
// }

const FirstPet = () => {
  const [checked, setChecked] = useState(false)

  return (
          <section className="first-pet">
            <h4>Is this your first pet?</h4>
            <br />
            <form>
              <input type="checkbox" onChange={() => setChecked(!checked)} />
            </form>
      <h5>{ checked ? `Yes` : `No`}</h5>
          </section>
        );
}

export default FirstPet;
