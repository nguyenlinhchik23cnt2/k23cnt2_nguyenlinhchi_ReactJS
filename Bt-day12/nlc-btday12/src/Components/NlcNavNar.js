import React from 'react'
import {Link} from 'react-router-dom'
export default function NlcNavNar() {
  return (
    <div class="btn-group" role="group" aria-label="Basic mixed styles example" >
        <ul>
        <button type="button" class="btn btn-light"><Link to={"/"}>Home</Link></button>
        <button type="button" class="btn btn-light"><Link to={"/gioithieu"}>gioithieu</Link> </button>
        <button type="button" class="btn btn-light"><Link to={"/lienhe"}>lienhe</Link>   </button>
        <button type="button" class="btn btn-light"><Link to={"/sanpham"}>sanpham</Link>     </button>
        <button type="button" class="btn btn-light"><Link to={"/tintu"}>tintu</Link>       </button>
        <button type="button" class="btn btn-light"><Link to={"/list-user"}>List User</Link>         </button>
        <button type="button" class="btn btn-light"><Link to={"/create-user"}>Create User</Link>          </button>
            
            
        </ul>
    </div>
  )
}
<div >
  
  
 
</div>