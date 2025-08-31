import  "./ExploreMenu.css" 
import { menu_list } from '../../../assets/assets'

const ExploreMenu = ({category,setCotegary}) => {



  return (
    <div className='menu'>
        <h2>Explore Your Menu</h2>
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores mollitia voluptates, ique sequi quod impedit illum libero molestias ab enim.</p>
          <div className='Explore-menu-list'>
            {
             menu_list.map((item,index)=>{
                return(
                <div key={index} onClick={()=>setCotegary((prev)=>prev===item.menu_name?"All":item.menu_name)}>
                <img  className={category===item.menu_name?"Active":""} src={item.menu_image} alt='logo'/>
                 <p> {item.menu_name}</p>
                    </div>
              
                )  
             })
            }
          </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
