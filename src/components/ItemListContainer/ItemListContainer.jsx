import ItemList from '../ItemList/ItemList.jsx'
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    return (<>
        <div className='divitem'>
            <ItemList greeting={greeting}>
                <p>{greeting}</p>
            </ItemList>
        </div>
    </>)
}

export default ItemListContainer