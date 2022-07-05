import { Component, createSignal, Show } from "solid-js";
import { DOMElement } from "solid-js/jsx-runtime";
import styles from "./Search.module.css";
import yuzanBad from '../assets/yuzan_bad.webp'

export const Search: Component = () => {
    const [value, setValue] = createSignal("")
    const [isValid, setIsValid] = createSignal(true)

    const onInput = (
        event: InputEvent & {
            currentTarget: HTMLInputElement,
            target: DOMElement
        }) => {
        setValue(event.currentTarget.value)
    }

    const validation = (value: string) => {
        return value === ''
            ? setIsValid(false)
            : setIsValid(true)
    }

    const handleSubmit = (event: Event) => {
        event.preventDefault()

        validation(value())
        console.log(isValid())
    }
    return (
        <>
            <h2>キャラクター情報</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>名前</span><br/>
                    <span>キャラクター名で検索してみよう！</span>
                    <input id='name' type='text' onInput={onInput} />
                </label>
                <button type='submit'>検索</button>
            </form>
            <Show when={!isValid()}>
                <p class={styles.errorMessage}>入力せんか！！</p>
                <img src={yuzanBad} alt='error' class={styles.img} />
            </Show>
        </>
    )
}