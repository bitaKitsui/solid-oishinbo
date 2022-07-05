import { Component, splitProps, Match, Switch } from "solid-js";
import styles from "./SwitchYuzan.module.css";
import yuzanNice from "../assets/yuzan_nice.jpg";
import yuzanNormal from "../assets/yuzan_normal.jpg";
import yuzanBad from "../assets/yuzan_bad.webp";

type Props = {
    counter: number
}

export const SwitchYuzan: Component<Props> = (props) => {
    const [local, other] = splitProps(props, ['counter'])
    return (
        <Switch>
            <Match when={local.counter > 0}>
                <img class={styles.img} src={yuzanNice} alt={'yuzan_nice'} />
            </Match>
            <Match when={local.counter === 0}>
                <img class={styles.img} src={yuzanNormal} alt={'yuzan_normal'} />
            </Match>
            <Match when={local.counter < 0}>
                <img class={styles.img} src={yuzanBad} alt={'yuzan_bad'} />
            </Match>
        </Switch>
    )
}