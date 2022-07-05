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
                <button class={styles.button} onClick={increment}>👍</button>
                <button class={styles.button} onClick={decrement}>👎</button>
            </div>
            <p>海原雄山さんへついたイイね: {counter}</p>
            <SwitchYuzan counter={counter()} />
        </div>
    )
}