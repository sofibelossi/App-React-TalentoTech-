
import { Item } from '../Item/Item';
import styles from './ItemList.module.css';

export function ItemList({ productos }) {
    return (
        <div className={`${styles.lista} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {productos.map((producto) => (
                <Item
                    key={producto.id}
                    {...producto}
                />
            ))}
        </div>
    );
}