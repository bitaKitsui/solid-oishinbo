import { Component, createSignal } from "solid-js";
import styles from "./Counter.module.css";
import { SwitchYuzan } from "./SwitchYuzan";

export const Counter: Component = () => {
    const [counter, setCounter] = createSignal(0)

    const increment = () => {
        setCounter((prev) => prev + 1)
    }

    const decrement = () => {
        setCounter((prev) => prev - 1)
    }
    return (
        <div>
            <div class={styles.buttons}>
                <button class={styles.button} onClick={increment}>π</button>
                <button class={styles.button} onClick={decrement}>π</button>
            </div>
            <p>ζ΅·ειε±±γγγΈγ€γγγ€γ€γ­: {counter}</p>
            <SwitchYuzan counter={counter()} />
        </div>
    )
}