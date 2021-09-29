import { useDispatch, useSelector } from "react-redux"
import { add, sub } from "../../store/modules/counter/actions";
import './styles.css'

const Counter = () => {

    const dispatch = useDispatch();
    const output = useSelector(store => store.counter)

    return(
        <>
        <h2>Counter: {output}</h2>
        <button onClick={()=>dispatch(add(1))}>+</button>
        <button onClick={()=>dispatch(sub(1))}>-</button>
        </>
    )
}

export default Counter